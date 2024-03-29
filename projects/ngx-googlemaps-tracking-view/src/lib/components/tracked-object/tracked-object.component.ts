/// <reference types="@types/googlemaps" />
import { Component, OnDestroy, Input, ViewChild, AfterContentInit, OnChanges, TemplateRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { InfowindowComponent } from '../infowindow/infowindow.component';
import { TrackedObject } from '../../models/tracked-object';
import { GoogleMapsWrapper } from '../../services/googlemaps-wrapper';

/** Size in meters to draw each unity speed on map in a dashed line */
const SPEED_UNIT_LENGTH_M = 20;

/**
 * Level of detail.
 * Minimal zoom to start drawing objects
 * */
const LOD = {
  speed: 15,
  scaleTriangle: 15,
  nameLabels: 0
}

/**
 * This class renders a trackable object on the map
 *
 * @example
 * // component.ts
 * const objectsToTrack: TrackedObject[] = [{
 *   id: '1',
 *   color: 'blue',
 *   heading: 45,
 *   label: {text: 'Test object #1' },
 *   position: new google.maps.LatLng(19.53124, -96.91589),
 * }]
 *
 * // component.html
 * <gmtv-map [data]="objectsToTrack"></gmtv-map>
 */
@Component({
  selector: 'gmtv-tracked-object',
  templateUrl: './tracked-object.component.html',
})
export class TrackedObjectComponent implements AfterContentInit, OnChanges, OnDestroy {
  vectorLine: google.maps.Polyline;
  marker = new google.maps.Marker({ position: { lat: NaN, lng: NaN } });
  hoverDotListeners: google.maps.MapsEventListener[] = [];
  hoverPolygonListeners: google.maps.MapsEventListener[] = [];
  zoomListener: google.maps.MapsEventListener;
  subscription = new Subscription();
  defaultColor = 'red';
  polygon = new google.maps.Polygon({
    strokeColor: this.color,
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: this.color,
    fillOpacity: !this.offline ? .55 : 0,
    draggable: false
  });

  @Input() trackedObject: TrackedObject;
  // tslint:disable-next-line: no-any
  @Input() template: TemplateRef<any>;
  drawSpeedVector = false;

  /**
   * Set this to `'hover'` to display the infowindow when hovering on the object.
   * Set this to `'click'` to display the infowindow when clicking on the object.
   */
  @Input() triggerInfowindow: 'hover' | 'click' = 'hover';

  @ViewChild(InfowindowComponent, { static: true }) infowindow: InfowindowComponent;
  constructor(private googleMaps: GoogleMapsWrapper) { }

  async ngAfterContentInit() {
    await this.googleMaps.ready();

    // Add bounds changed event
    this.checkRenderObject();
    this.subscription.add(
      this.googleMaps.boundsChanged
        .subscribe(() => this.checkRenderObject())
    );

    this.drawObject();
  }

  ngOnChanges() {
    if (!this.trackedObject) return;
    this.drawObject();
  }

  ngOnDestroy() {
    this.googleMaps.removePolygon(this.polygon);
    this.googleMaps.removePolyline(this.vectorLine);
    this.googleMaps.removeMarker(this.marker);
    this.subscription.unsubscribe();
    if (this.zoomListener) this.zoomListener.remove();
  }

  /**
   * Current color for the current tracked object
   */
  get color(): string { return this.trackedObject && this.trackedObject.color || this.defaultColor; }

  protected get isMoving(): boolean { return !!this.trackedObject && this.trackedObject.speed > 0; }
  protected get offline(): boolean { return this.trackedObject && this.trackedObject.isOffline; }
  protected get hasValidMeasures(): boolean { return true; }


  /**
   * Adaptive scale according to current zoom
   */
  protected get scale(): number {
    const zoom = this.googleMaps && this.googleMaps.map && this.googleMaps.map.getZoom() || 1;
    const s = Math.ceil(LOD.scaleTriangle - zoom);
    return Math.pow(2, s) * (this.trackedObject.scale && this.trackedObject.scale || 1);
  }

  /**
   * Tip point
   */
  get tipLatLng(): google.maps.LatLng {
    if (this.hasValidMeasures)
      return this.polygon && this.polygon.getPath().getAt(3);
    else
      return this.trackedObject.position;
  }

  /**
   * Rear point
   */
  get rearLatLng(): google.maps.LatLng {
    if (this.hasValidMeasures)
      return this.polygon && this.polygon.getPath().getAt(0);
    else
      return this.trackedObject.position;
  }

  protected get canDrawPolygon(): boolean {
    return this.hasValidMeasures;
  }

  /**
   * Current map's zoom
   */
  protected get zoom(): number {
    return this.googleMaps.map && this.googleMaps.map.getZoom();
  }

  /**
   * Current relation to convert pixels to meters on the map
   */
  getMetersPerPx() {
    if (!this.trackedObject.position || !this.googleMaps.map) return 0;
    return this.googleMaps.getMetersPerPx(this.trackedObject.position.lat());
  }

  /**
   * Checks if object is on screen and renders/unrenders it
   */
  protected checkRenderObject() {
    const path = this.polygon && this.polygon.getPath();

    // If showing a polygon
    if (path && !!path.getLength()) {
      let isPolygonOnScreen = false;
      if (path.getArray().length) {
        const bounds = this.googleMaps.map.getBounds();
        path.forEach(p => isPolygonOnScreen = isPolygonOnScreen || bounds && bounds.contains(p));
      }

      if (isPolygonOnScreen) {
        this.marker.setVisible(true);
        this.polygon.setVisible(true);
        this.vectorLine.setVisible(true);
      } else {
        this.marker.setVisible(false);
        this.polygon.setVisible(false);
        this.vectorLine.setVisible(false);
      }
    }
    // If using the dot marker
    else if (this.marker) {
      const bounds = this.googleMaps.map.getBounds();
      const visible = !!bounds && bounds.contains(this.marker.getPosition());
      this.marker.setVisible(visible);
      this.polygon.setVisible(visible);
      this.vectorLine.setVisible(visible);
    }
  }

  protected clearEventListeners() {
    this.hoverPolygonListeners.forEach(l => l.remove());
    this.hoverPolygonListeners = [];
    this.hoverDotListeners.forEach(l => l.remove());
    this.hoverDotListeners = [];
  }

  protected setupEventListeners() {
    const showPolygon = (this.canDrawPolygon && this.zoom >= LOD.scaleTriangle) || (this.isMoving && this.zoom < LOD.scaleTriangle);

    if (showPolygon && !this.trackedObject.icon) {

      // Add listeners for polygon, not do
      if (this.hoverPolygonListeners.length < 1) {
        this.clearEventListeners();
        if (this.triggerInfowindow === 'click') {
          this.hoverPolygonListeners.push(
            this.polygon.addListener('click', () => this.onMouseOver()),
          );
        } else {
          if (this.triggerInfowindow === 'hover') {
            this.hoverPolygonListeners.push(
              this.polygon.addListener('mouseover', () => this.onMouseOver()),
              this.polygon.addListener('mouseout', () => this.onMouseOut()),
            );
          }
        }
      }
    } else {

      // Add listeners for dot, not polygon
      if (this.hoverDotListeners.length < 1) {
        this.clearEventListeners();
        if (this.triggerInfowindow === 'click') {
          this.hoverDotListeners.push(
            this.marker.addListener('click', () => this.onMouseOver()),
          );
        } else {
          this.hoverDotListeners.push(
            this.marker.addListener('mouseover', () => this.onMouseOver()),
            this.marker.addListener('mouseout', () => this.onMouseOut()),
          );
        }
      }
    }

    // Listen for zoom change
    if (!this.zoomListener)
      this.zoomListener = this.googleMaps.map.addListener('zoom_changed', () => this.onZoomChanged());
  }

  /**
   * Returns the series of icons according to the current zoom level
   */
  protected getSpeedLineIcons() {
    const s = Math.ceil(this.zoom - LOD.scaleTriangle);
    s <= 0 ? 1 : Math.pow(2, s);

    const icons: google.maps.IconSequence[] = [];
    const l = SPEED_UNIT_LENGTH_M * this.scale;
    const dashLength = Math.round(l / this.getMetersPerPx() * .5);
    const skipIconOnFifth = false;

    // Units

    const iconUnits = {
      path: `M 0 0 L 0 ${dashLength}`,
      scale: 1,
      strokeWeight: 2,
      fillOpacity: 1
    };

    const units = Math.round(this.trackedObject.speed);
    for (let i = 1; i <= units; i++) {
      const percent = Math.round(100 / units * i);
      icons.push({
        icon: (i % 5 == 0 && skipIconOnFifth) ? null : iconUnits,
        offset: `${percent}%`
      });
    }

    // Fifths

    const iconFifths = {
      path: `M ${dashLength} ${dashLength / 2} L -${dashLength} ${dashLength / 2}`,
      scale: 1,
      strokeWeight: 2,
    }

    const fifths = Math.floor(units / 5);
    for (let i = 1; i <= fifths; i++) {
      const percent = Math.round(100 / units * 5 * i);
      icons.push({
        icon: iconFifths,
        offset: `${percent}%`
      });
    }

    return icons;
  }

  /**
   * Inits/updates polyline with icons according to current zoom level
   */
  protected initSpeedPolyline() {
    if (this.vectorLine) this.googleMaps.removePolyline(this.vectorLine);

    this.vectorLine = new google.maps.Polyline({
      strokeColor: 'green',
      strokeWeight: 0,
      draggable: false,
      editable: false,
      path: [],
      icons: this.getSpeedLineIcons(),
    });

    this.googleMaps.addPolyline(this.vectorLine);
    this.vectorLine.setVisible(false);
  }

  protected initDotaMarker() {
    if (this.marker) this.googleMaps.removeMarker(this.marker);
    this.googleMaps.addMarker(this.marker);
  }

  protected getTrianglePath() {
    if (!this.polygon) return [];

    const positionDot = this.trackedObject.position;
    const center = positionDot;
    const h = this.trackedObject.heading || 0;
    const w = 50;
    const l = 100;

    const rear = google.maps.geometry.spherical.computeOffset(center, l / 2 * this.scale, h + 180);
    const rearLeft = google.maps.geometry.spherical.computeOffset(rear, w / 2 * this.scale, h - 90);
    const rearRight = google.maps.geometry.spherical.computeOffset(rear, w / 2 * this.scale, h + 90);
    const tip = google.maps.geometry.spherical.computeOffset(rear, l * this.scale, h);

    return [rear, rearLeft, tip, rearRight];
  }

  protected getVectorLinePath(start: google.maps.LatLng) {
    const l = SPEED_UNIT_LENGTH_M * this.trackedObject.speed;
    const end = google.maps.geometry.spherical.computeOffset(start, l, this.trackedObject.speed);
    return [start, end];
  }

  displayInfowindow(show: boolean) {
    if (!this.infowindow) return;

    if (show) {
      const o = this.trackedObject.position;
      this.infowindow.open(o);
    } else {
      this.infowindow.close();
    }
  }

  drawObject() {
    if (!this.marker) this.initDotaMarker();
    this.initSpeedPolyline();

    if (!this.trackedObject.position) return;

    this.setupEventListeners();
    const showDot = !this.isMoving;
    const showTriangle = this.isMoving && !this.trackedObject.icon;
    const showSpeedLine = this.drawSpeedVector && this.isMoving && this.zoom >= LOD.speed;

    // Show triangle
    if (showTriangle) {
      const polygonPath = this.getTrianglePath();
      if (polygonPath.length) {
        this.polygon.setOptions({
          fillOpacity: !this.offline ? .55 : 0,
          fillColor: this.color,
          strokeColor: this.color,
        });
        this.polygon.setPath(polygonPath);
        this.polygon.setVisible(true);
        this.googleMaps.addPolygone(this.polygon);
      }
    }
    else {
      this.polygon.setVisible(false);
      this.googleMaps.removePolygon(this.polygon);
    }

    // Draw speed vector
    if (showSpeedLine) {
      const o = this.trackedObject.position;
      const linePath = this.getVectorLinePath(o);
      this.vectorLine.setPath(linePath);
      this.vectorLine.setVisible(true);
      this.googleMaps.addPolyline(this.vectorLine);
    } else {
      this.vectorLine.setVisible(false);
      this.googleMaps.removePolyline(this.vectorLine);
    }

    // Update dot icon
    this.marker.setIcon(
      this.trackedObject.icon ||
      {
        path: google.maps.SymbolPath.CIRCLE,
        fillColor: this.color,
        fillOpacity: !this.offline && showDot ? 0.6 : 0,
        strokeColor: this.color,
        strokeOpacity: showDot ? 0.9 : 0,
        strokeWeight: 1,
        scale: 10 * (this.trackedObject.scale || 1),
        labelOrigin: new google.maps.Point(0, 3),
        anchor: new google.maps.Point(.5, .5),
      }
    );
    this.marker.setLabel(this.zoom >= LOD.nameLabels ? this.trackedObject.label : '');
    this.marker.setPosition(this.trackedObject.position);
    this.marker.setVisible(true);
    this.googleMaps.addMarker(this.marker);
  }

  protected onMouseOver() {
    this.displayInfowindow(true);
  }

  protected onMouseOut() {
    this.displayInfowindow(false);
  }

  protected onZoomChanged() {
    this.drawObject();
  }
}

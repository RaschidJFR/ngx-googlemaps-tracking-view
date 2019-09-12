//// <reference types="@types/googlemaps" />
import { Subject, Subscription, of, timer } from 'rxjs';
import { TemplateRef, EventEmitter } from '@angular/core';
import { tap, switchMap, debounce } from 'rxjs/operators';
import { GoogleMapsWrapper } from '../../services/googlemaps-wrapper';
import { HttpClient } from '@angular/common/http';

let API_KEY = '';

/**
 * A marker fixed to the center of the map which emits the geo-decoded location
 * as a full address.
 *
 * @see {@link CenterMarker}
 * @emits CenterMarker#locationChanges locationChanges When the pin's location has changed
 * (by zooming or dragging) and the map has become idle again.
 * @emits CenterMarker#addressChanges addressChanges The the geocoded address has resolved.
 *
 * @example
 * <button (click)="map.centerPin.enable(infowindowLocation, <yourGMapsApiKey)">Add center Pin</button>
 * <button (click)="map.centerPin.disable()">Remove Pin</button>
 *
 * <ng-template #infowindowLocation let-address>
 *   <div>
 *     <span *ngIf="!address">Loading...</span>
 *     <span *ngIf="!!address">{{address}}</span>
 *   </div>
 * </ng-template>
 */
export class CenterMarker {
  /**
   * Emitted when the pin's location has changed (by zooming or dragging) and the map has become idle again.
   */
  locationChanges = new EventEmitter<google.maps.LatLngLiteral>();
  /**
   * Emitted when the the geocoded address has resolved.
   */
  addressChanges = new EventEmitter<string>();
  /**
   * The current decoded address obtained from google. It becomes `null` while fetching.
   */
  address: string;

  /** @ignore */
  private _infowindowTemplate: TemplateRef<any>
  /** @ignore */
  private _centerChanged$ = new Subject<google.maps.LatLng>();
  /** @ignore */
  private _centerMarker: HTMLDivElement;
  /** @ignore */
  private _mapEventSubscription = new Subscription();
  /** @ignore */
  private _geocoder = new google.maps.Geocoder();
  /** @ignore */
  private _idleListener: google.maps.MapsEventListener;


  constructor(
    private googlemapsWrapper: GoogleMapsWrapper,
    private viewContainer,
    private http: HttpClient) { }

  /** @ignore */
  private get REVERSE_GEOCODING_URL() { return `https://maps.googleapis.com/maps/api/geocode/json?key=${API_KEY}&latlng=`; }

  /**
   * Activates the pin to show at the map's center
   * @param infowindowTemplate A template for rendering the infowindow on top of the marker.
   * It must have a single root element. The address string will be passed as implicit context.
   * @param apiKey GoogleMaps API key
   */
  enable(infowindowTemplate: TemplateRef<any>, apiKey: string) {
    API_KEY = apiKey;
    this._infowindowTemplate = infowindowTemplate;
    if (this._centerMarker) return;

    const mapDiv = this.googlemapsWrapper.map.getDiv() as HTMLDivElement;
    this._centerMarker = document.createElement('div');
    this._centerMarker.classList.add('centerMarker');
    this._centerMarker.style.cssText =
      `position:absolute;
      background:url(https://maps.gstatic.com/mapfiles/markers/marker.png) no-repeat;
      top:50%;left:50%;
      z-index:1;
      margin-left:-10px;
      margin-top:-34px;
      height:34px;
      width:20px;
      cursor: pointer;`;

    mapDiv.appendChild(this._centerMarker);
    this._centerMarker.onclick = () => this.displayInfowindowOverPin();

    this._mapEventSubscription = new Subscription();
    this._mapEventSubscription.add(
      this._centerChanged$
        .pipe(
          tap(() => {
            this.address = null;
            this.displayInfowindowOverPin();
          }),
          switchMap(latLng => of(latLng)),
          debounce(() => timer(1000)),
          switchMap(latLng => this.http.get(`${this.REVERSE_GEOCODING_URL}${latLng.toUrlValue()}`) as any)
        )
        // .subscribe((latLng) => {
        .subscribe(response => {
          // this._geocoder.geocode({ location: latLng }, (response) => {
          const results = response[0] || (response as any).results;
          const firstResult: google.maps.GeocoderResult = results[0] || results;
          this.address = firstResult && firstResult.formatted_address || 'desconocido';
          this.addressChanges.emit(this.address);
          this.displayInfowindowOverPin();
          // });
        })
    );

    this.onMapIdle();
    this.displayInfowindowOverPin();
    this._idleListener = this.googlemapsWrapper.map.addListener('idle', () => this.onMapIdle());
  }

  /**
   * Removes the pin from the map
   */
  disable() {
    if (this._centerMarker) this._centerMarker.remove();
    this._centerMarker = null;
    this._mapEventSubscription.unsubscribe();
    this.googlemapsWrapper.closeInfowindow();
    google.maps.event.removeListener(this._idleListener);
  }

  /** @ignore */
  displayInfowindowOverPin() {
    this.viewContainer.clear();
    const view = this.viewContainer.createEmbeddedView(this._infowindowTemplate, { $implicit: this.address });
    const content = view.rootNodes[0] as HTMLElement;

    const center = this.googlemapsWrapper.map.getCenter();
    const offset = this.googlemapsWrapper.getMetersPerPx(center.lat()) * 36;
    const pos = google.maps.geometry.spherical.computeOffset(center, offset, 0);

    this.googlemapsWrapper.openInfowindow(pos, content);
  }

  /** @ignore */
  private onMapIdle() {
    const center = this.googlemapsWrapper.map.getCenter();
    this.locationChanges.emit(center.toJSON());
    this._centerChanged$.next(center);
  }
}

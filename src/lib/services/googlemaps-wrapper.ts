//// <reference types="@types/googlemaps" />
import { Injectable, EventEmitter } from '@angular/core';

/**
 * Helper class for handling common GoogleMaps SDK functions
 */
@Injectable()
export class GoogleMapsWrapper {

  protected _infowindows: { [id: string]: google.maps.InfoWindow } = { default: null };
  protected _map: google.maps.Map;
  protected markers: google.maps.Marker[] = [];
  protected polylines: google.maps.Polyline[] = [];
  protected polygons: google.maps.Polygon[] = [];
  private _isReady = false;
  private _ready: Promise<void>;
  // tslint:disable-next-line: no-any
  private resolver: { resolve: () => void, reject: (err: any) => void };

  /** If `true` the infowindows will close on clicking on any point on the map */
  closeInfowindowOnClick = true;

  /** * Emits when the map has been inited by calling `GoogleMapsWrapper.init()` */
  onReady: EventEmitter<void> = new EventEmitter<void>();

  /** * When the user clicks on the map */
  click: EventEmitter<google.maps.LatLng> = new EventEmitter<google.maps.LatLng>();

  /** When visible maps change but zooming or dragging the map */
  boundsChanged: EventEmitter<google.maps.LatLngBounds> = new EventEmitter<google.maps.LatLngBounds>();

  /** The default infowindow object */
  get infowindow(): google.maps.InfoWindow { return this.getInfowindow('default'); }
  set infowindow(val: google.maps.InfoWindow) { this._infowindows['default'] = val; }

  constructor() {
    this._ready = new Promise((resolve, reject) => {
      this.resolver = { resolve: resolve, reject: reject };
    });
  }

  /**
   * `True` if the map has been inited by calling `GoogleMapsWrapper.init()`
   */
  isReady(): boolean { return this._isReady; }

  /**
   * Resolves when the map has been inited by calling `GoogleMapsWrapper.init()`
   */
  ready(): Promise<void> { return this._ready; }

  get map(): google.maps.Map {
    return this._map;
  }

  isInfowindowOpen(tag?: string): boolean {
    return this.getInfowindow(tag)['isOpen'];
  }

  /**
   * Call this before using any other function
   */
  async initMap(element: HTMLElement, options?: google.maps.MapOptions): Promise<google.maps.Map> {
    try {

      this._map = new google.maps.Map(element, {
        center: new google.maps.LatLng(19.53124, -96.91589),
        zoom: 14,
        clickableIcons: false,
        disableDefaultUI: false,
        zoomControl: true,
        streetViewControl: false,
        scaleControl: true,
        rotateControl: true,
        fullscreenControl: true,
        mapTypeControlOptions: {
          mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE]
        },
        ...options
      });

      // Add listeners
      this.map.addListener('click', (e) => {
        if (this.closeInfowindowOnClick) this.closeInfowindow();
        this.click.emit(e.latLng);
      });
      this.map.addListener('bounds_changed', () => {
        const bounds = this.map.getBounds();
        this.boundsChanged.emit(bounds);
      });

      console.debug('map created ');

      // Wait for SDK to load
      setTimeout(() => {
        this._isReady = true;
        this.resolver.resolve();
        this.onReady.emit();
      }, 1000);

      await this._isReady;
      return this.map;
    } catch (e) {
      this.resolver.reject(e);
    }
  }

  /**
	 * Formula taken from:
	 * [What ratio scales do Google Maps zoom levels correspond to?
   * ](https://gis.stackexchange.com/questions/7430/what-ratio-scales-do-google-maps-zoom-levels-correspond-to)
	 */
  getMetersPerPx(latitude: number) {
    if (!latitude || !this.map) return 0;
    const zoom = this.map.getZoom();
    return 156543.03392 * Math.cos(latitude * Math.PI / 180) / Math.pow(2, zoom);
  }

  /**
	 * Subscribe to map event
	 */
  // tslint:disable-next-line: no-any
  subscribe(eventName: string, callback: (event: any) => void) {
    this.map.addListener(eventName, callback);
  }

  /**
	 * Unsubscribe from map event
	 */
  unsubscribe(eventName: string) {
    google.maps.event.clearListeners(this.map, eventName);
  }

  /**
	 * Unsubscribe from all map events
	 */
  unsubcribeAll() {
    google.maps.event.clearInstanceListeners(this.map);
  }

  /**
	 * Add a marker and show it on the map
	 */
  addMarker(params: google.maps.MarkerOptions | google.maps.Marker) {
    let marker: google.maps.Marker;

    if (!(params instanceof google.maps.Marker)) {
      params.map = this.map;
      marker = new google.maps.Marker(params);
    } else {
      marker = params;
      marker.setMap(this.map);
    }
    this.markers.push(marker);
    return marker;
  }

  addPolyline(params: google.maps.PolylineOptions | google.maps.Polyline) {
    let line: google.maps.Polyline;

    if (!(params instanceof google.maps.Polyline)) {
      params.map = this.map;
      line = new google.maps.Polyline(params);
    } else {
      line = params;
      line.setMap(this.map);
    }

    this.polylines.push(line);
    return line;
  }

  addPolygone(params: google.maps.PolygonOptions | google.maps.Polygon) {
    let polygon: google.maps.Polygon;

    if (!(params instanceof google.maps.Polygon)) {
      params.map = this.map;
      polygon = new google.maps.Polygon(params);
    } else {
      polygon = params;
      polygon.setMap(this.map);
    }

    this.polygons.push(polygon);
    return polygon;
  }

  clearMarkers() {
    this.markers.forEach(m => {
      m.setMap(null);
    });
    this.markers = [];
  }

  clearPolylines() {
    this.polylines.forEach(l => {
      l.setMap(null);
    });
    this.polylines = [];
  }

  clearPolygones() {
    this.polygons.forEach(l => {
      l.setMap(null);
    });
    this.polygons = [];
  }

  /**
	 * Removes current markers an copies all the markers of an array into the map
	 */
  setMarkers(array: google.maps.Marker[]) {
    this.clearMarkers();
    array.forEach(m => {
      m.setMap(this.map);
    });
    this.markers = [...array];
  }

  /**
   * @param id In case more than one infowindows are required to be shown. If no parameter is passed,
   * the default infowindow will be opened. If a string is passed, a new infowindow will be created
   * with that specifier.
   */
  openInfowindow(anchor?: google.maps.MVCObject | google.maps.LatLng, content?: string | Node, id?: string) {
    const infowindow = id ? this.getInfowindow(id) : this.infowindow;
    if (content) infowindow.setContent(content)

    if (anchor instanceof google.maps.LatLng) {
      infowindow.setPosition(anchor);
      infowindow.open(this.map);
    } else {
      infowindow.open(this.map, anchor);
    }
    infowindow['isOpen'] = true;
  }

  /**
   * @param id Unique identifier for an infowindow in case more than one exist
   */
  closeInfowindow(id?: string) {
    const infowindow = id ? this.getInfowindow(id) : this.infowindow;
    if (infowindow) {
      infowindow.close();
      infowindow['isOpen'] = false;
    }
  }

  /**
   * Retrieve a reference to a specific infowindow
   * @param id Infowindow uniquer identifier (set by having called `openInfowindow()`). If no
   * string is passed, the defoult infowindow will be returned.
   */
  getInfowindow(id = 'default') {
    let infowindow = this._infowindows[id];

    if (!infowindow) {
      infowindow = new google.maps.InfoWindow({
        content: '[info]',
        position: this.map.getCenter()
      });
      infowindow['closeclick'] = new EventEmitter<void>();
      infowindow.addListener('closeclick', () => infowindow['closeclick'].emit());
      this._infowindows[id] = infowindow;
    }
    return infowindow;
  }

  /**
   * Destroy a reference to a specific infowindow.
   * @param id Infowindow uniquer identifier (set by having called `openInfowindow()`). If no
   * string is passed, the defoult infowindow will be returned.
   */
  destroyInfowindow(id: string) {
    if (!id) return;
    const infowindow = this._infowindows[id]
    if (infowindow) {
      infowindow.close();
      infowindow.set('map', null);
      google.maps.event.clearInstanceListeners(infowindow);
      delete this._infowindows[id];
    }
  }
}

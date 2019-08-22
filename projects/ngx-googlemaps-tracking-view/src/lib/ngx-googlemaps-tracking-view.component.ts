import { Component, OnInit, ViewChild, ElementRef, Input, TemplateRef } from '@angular/core';
import { TrackedObject } from './models/tracked-object';
import { GoogleMapsWrapper } from './services/googlemaps-wrapper';
import geolocationMarkrFn from 'geolocation-marker';
geolocationMarkrFn;

declare class GeolocationMarker {
  constructor(map: google.maps.Map);
  setMap(map: google.maps.Map);
}


/**
 * Creates an embeded google map with polygons representing the tracked objects.
 *
 * @example
 * <gmtv-map [data]="objectArray" [template]="infowindow" [mapOptions]="mapOptions" [showLocationButton]="true">
 *  <ng-template #infowindow let-o>
 *   <div id="root">
 *     <h4>{{o.name}}</h4>
 *   </div>
 *  </ng-template>
 * </gmtv-map>
 */
@Component({
  selector: 'gmtv-map',
  templateUrl: './ngx-googlemaps-tracking-view.component.html',
  styleUrls: ['./ngx-googlemaps-tracking-view.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class NgxGooglemapsTrackingViewComponent implements OnInit {
  @ViewChild('map') mapDiv: ElementRef;
  private _userLocationMarker: GeolocationMarker;
  protected _data: TrackedObject[] = [];

  /**
   * Options to pass on map initialization.
   * See {@link https://developers.google.com/maps/documentation/javascript/reference/map#MapOptions MapOptions}
   */
  @Input() mapOptions: google.maps.MapOptions;

  /**
   * Show location button in controls to retrieve user's location.
   * An https connection is required.
   */
  @Input() showLocationButton = false;

  /**
   * Infowindow's template
   */
  // tslint:disable-next-line: no-any
  @Input() template: TemplateRef<any>;

  /**
   * Array of {@link TrackedObject} to draw on map
   */
  @Input()
  set data(val: TrackedObject[]) { this._data = val || []; }
  get data(): TrackedObject[] { return this._data; }

  /**
   * Currently inited {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map Map} object
   */
  get map(): google.maps.Map { return this.googlemapsWrapper.map; }

  constructor(protected googlemapsWrapper: GoogleMapsWrapper) { }

  ngOnInit() {
    this.googlemapsWrapper.initMap(this.mapDiv.nativeElement, this.mapOptions);
  }

  /**
   * Resolves whem map has been inited
   */
  ready(): Promise<void> {
    return this.googlemapsWrapper.ready();
  }

  trackById(_index: number, item: TrackedObject) {
    return item.id;
  }

  /**
   * Center map on user's location
   */
  centerOnUser() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lng = position.coords.longitude;
        const lat = position.coords.latitude;
        this.googlemapsWrapper.map.setCenter({ lat, lng });

        if (this._userLocationMarker) this._userLocationMarker.setMap(null);
        this._userLocationMarker = new GeolocationMarker(this.googlemapsWrapper.map);
      });
    } else {
      console.error('No support for geolocation');
    }
  }
}

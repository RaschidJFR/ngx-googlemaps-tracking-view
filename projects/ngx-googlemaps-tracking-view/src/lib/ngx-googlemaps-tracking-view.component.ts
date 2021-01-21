import { Component, OnInit, ViewChild, ElementRef, Input, TemplateRef, ViewContainerRef, ChangeDetectorRef } from '@angular/core';
import { TrackedObject } from './models/tracked-object';
import { GoogleMapsWrapper } from './services/googlemaps-wrapper';
import { CenterMarker } from './components/center-marker/center-marker';
import { HttpClient } from '@angular/common/http';

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
  @ViewChild('map', { static: true }) mapDiv: ElementRef;
  /**
   * A marker fixed to the center of the map which emits the geo-decoded location
   * as a full address.
   * @see {@link CenterMarker}
   */
  centerPin: CenterMarker = new CenterMarker(this.googlemapsWrapper, this.vc, this.cdr, this.http);
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
  @Input() showLocationButton = true;

  /**
   * Infowindow's template
   */
  // tslint:disable-next-line: no-any
  @Input() template: TemplateRef<any>;

  /**
   * Set this to `'hover'` to display the infowindow when hovering on the objects.
   * Set this to `'click'` to display the infowindow when clicking on the objects.
   */
  @Input() triggerInfowindow: 'hover' | 'click' = 'hover';

  /**
   * Array of {@link TrackedObject} to draw on map
   */
  @Input()
  set data(val: TrackedObject[]) { this._data = val || []; }
  get data(): TrackedObject[] { return this._data; }

  /**
   * Currently inited GoogleMaps  {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map Map} object
   */
  get map(): google.maps.Map { return this.googlemapsWrapper.map; }

  constructor(
    protected googlemapsWrapper: GoogleMapsWrapper,
    protected vc: ViewContainerRef,
    private http: HttpClient,
    protected cdr: ChangeDetectorRef) { }

  ngOnInit() {
    this.googlemapsWrapper.initMap(this.mapDiv.nativeElement, this.mapOptions);
  }

  /**
   * Resolves when map has been inited
   */
  ready(): Promise<void> {
    return this.googlemapsWrapper.ready();
  }

  /** @ignore */
  trackById(_index: number, item: TrackedObject) {
    return item.id;
  }
}

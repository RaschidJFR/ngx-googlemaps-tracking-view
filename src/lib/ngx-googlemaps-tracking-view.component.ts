import { Component, OnInit, ViewChild, ElementRef, Input, TemplateRef } from '@angular/core';
import { TrackedObject } from './models/tracked-object';
import { GoogleMapsWrapper } from './services/googlemaps-wrapper';

/**
 * Creates an embeded google map with polygons representing the tracked objects.
 *
 * ### Usage
 * @example
 * <gmtv-map [data]="objectArray"></gmtv-map>
 */
@Component({
  selector: 'gmtv-map',
  templateUrl: './ngx-googlemaps-tracking-view.component.html',
  styleUrls: ['./ngx-googlemaps-tracking-view.component.scss'],
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class NgxGooglemapsTrackingViewComponent implements OnInit {
  @ViewChild('map') mapDiv: ElementRef;
  protected _data: TrackedObject[] = [];

  /** Infowindow's template */
  @Input() template: TemplateRef<any>;

  /** * Array of {@link TrackedObject} to draw on map */
  @Input()
  set data(val: TrackedObject[]) { this._data = val; console.log('set data ', this._data) }
  get data(): TrackedObject[] { return this._data; }

  /** Currently inited {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map Map} object */
  get map(): google.maps.Map { return this.googlemapsWrapper.map; }

  constructor(protected googlemapsWrapper: GoogleMapsWrapper) { }

  /**
   * Resolves whem map has been inited
   */
  ready(): Promise<void> {
    return this.googlemapsWrapper.ready();
  }

  ngOnInit() {
    this.googlemapsWrapper.initMap(this.mapDiv.nativeElement);
  }

  trackById(_index: number, item: TrackedObject) {
    return item.id;
  }
}

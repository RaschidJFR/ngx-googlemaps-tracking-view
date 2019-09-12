//// <reference types="@types/googlemaps" />
import { Subject, Subscription, of, Observable } from 'rxjs';
import { TemplateRef, EventEmitter } from '@angular/core';
import { tap, switchMap } from 'rxjs/operators';
import { GoogleMapsWrapper } from '../../services/googlemaps-wrapper';
import { HttpClient } from '@angular/common/http';

const REVERSE_GEOCODING_URL = `https://maps.googleapis.com/maps/api/geocode/json?key=***REMOVED***&latlng=`;

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
 * <button (click)="map.addressPin.enable(infowindowLocation)">Add center Pin</button>
 *  <button (click)="map.addressPin.disable()">Remove Pin</button>
 *
 *  <ng-template #infowindowLocation let-address>
 *    <div class="infowindow-location">
 *      <span *ngIf="!address">Loading...</span>
 *      <span *ngIf="address">
 *        {{map.addressPin.address}}
 *      </span>
 *    </div>
 *  </ng-template>
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
  private infowindowTemplate: TemplateRef<any>
  /** @ignore */
  private _changeCenter$ = new Subject<google.maps.LatLng>();
  /** @ignore */
  private _centerMarker: HTMLDivElement;
  /** @ignore */
  private _mapEventSubscription = new Subscription();

  constructor(
    private googlemapsWrapper: GoogleMapsWrapper,
    private viewContainer,
    private http: HttpClient) { }

  /**
   * Activates the pin to show at the map's center
   * @param infowindowTemplate A template for rendering the infowindow on top of the marker.
   * It must have a single root element.
   */
  enable(infowindowTemplate: TemplateRef<any>) {
    this.infowindowTemplate = infowindowTemplate;
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
      cursor: pointer;`
    this._centerMarker.onclick = () => this.showInfowindowOverCenterMarker(this.address);
    mapDiv.appendChild(this._centerMarker);

    this._mapEventSubscription = new Subscription();
    this._mapEventSubscription.add(
      this._changeCenter$
        .pipe(
          tap(() => this.showInfowindowOverCenterMarker()),
          switchMap(value => of(value)),
          switchMap(value => this.reverseGeocode(value)),
        )
        .subscribe(response => {
          const result = response.results[0];
          const address = result && result.formatted_address || 'desconocido';
          this.showInfowindowOverCenterMarker(address);
          this.addressChanges.emit(address);
        })
    );

    this.onMapIdle();
    this.showInfowindowOverCenterMarker(this.address);
    this.googlemapsWrapper.map.addListener('idle', () => this.onMapIdle());
  }

  /**
   * Removes the pin from the map
   */
  disable() {
    console.log('remove')
    if (this._centerMarker) this._centerMarker.remove();
    this._centerMarker = null;
    this._mapEventSubscription.unsubscribe();
    this.googlemapsWrapper.closeInfowindow();
  }

  /** @ignore */
  showInfowindowOverCenterMarker(address?: string) {
    this.address = address;
    this.viewContainer.clear();
    const view = this.viewContainer.createEmbeddedView(this.infowindowTemplate, { $implicit: address });
    const content = view.rootNodes[0] as HTMLElement;

    const center = this.googlemapsWrapper.map.getCenter();
    const offset = this.googlemapsWrapper.getMetersPerPx(center.lat()) * 36;
    const pos = google.maps.geometry.spherical.computeOffset(center, offset, 0);

    this.googlemapsWrapper.openInfowindow(pos, content);
  }

  /** @ignore */
  private reverseGeocode(latLng: google.maps.LatLng): Observable<{ results: google.maps.GeocoderResult[], status: string }> {
    return this.http.get(`${REVERSE_GEOCODING_URL}${latLng.toUrlValue()}`) as any;
  }

  /** @ignore */
  private onMapIdle() {
    const center = this.googlemapsWrapper.map.getCenter();
    this.locationChanges.emit(center.toJSON());
    this._changeCenter$.next(center);
  }
}

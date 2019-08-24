/// <reference types="@types/googlemaps" />
import { Component, Output, EventEmitter } from '@angular/core';
import geolocationMarkrFn from 'geolocation-marker';
import { GoogleMapsWrapper } from '../../services/googlemaps-wrapper';
geolocationMarkrFn;

/**
 * Extends from {@link google.maps.MVCObject https://developers.google.com/maps/documentation/javascript/reference/event#MVCObject}.
 * It shows the default blue sphere with proximity shade.
 */
declare class GeolocationMarker {
  constructor(map: google.maps.Map);
  setMap(map: google.maps.Map);
  position: google.maps.LatLng;
}

/**
 * Creates the default user location button. Add this component as sibling **after** the
 * {@link NgxGooglemapsTrackingViewComponent} inside a wrapping component.
 *
 * @example
 * <div id="parent" style="height: 100%; width: 100%;">
 *  <div id="map" #map></div>
 *  <gmtv-geolocation-button (beforeLocate)="onLocation()"></gmtv-geolocation-button>
 * </div>
 */
@Component({
  selector: 'gmtv-geolocation-button',
  templateUrl: './geolocation-button.html',
  styleUrls: ['./geolocation-button.scss']
})
export class GeolocationButtonComponent {
  /**
   * Emited after obtaining the user's location
   */
  @Output() locate = new EventEmitter<google.maps.LatLng>();
  private _geoLocationMarker: GeolocationMarker;

  constructor(protected googlemapsWrapper: GoogleMapsWrapper) { }

  /**
   * Center map on user's location
   */
  centerOnUser() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lng = position.coords.longitude;
        const lat = position.coords.latitude;
        this.googlemapsWrapper.map.setCenter({ lat, lng });

        if (this._geoLocationMarker) this._geoLocationMarker.setMap(null);
        this._geoLocationMarker = new GeolocationMarker(this.googlemapsWrapper.map);
        this.locate.emit(this._geoLocationMarker.position);
      }, error => {
        console.error(error);
      },
        { enableHighAccuracy: true });
    } else {
      console.error('No support for geolocation');
    }
  }
}
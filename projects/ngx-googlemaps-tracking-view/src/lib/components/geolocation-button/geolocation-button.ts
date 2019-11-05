/// <reference types="@types/googlemaps" />
import { Component, Output, EventEmitter, Input } from '@angular/core';
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
 * Creates the default user location button.
 *
 * ⚠ Add this component as sibling **AFTER the
 * map element**, so if renders on top of it.
 *
 * @example
 * <div id="parent" style="height: 100%; width: 100%;">
 *   <div id="map" #map></div>
 *   <gmtv-geolocation-button (locate)="onLocation()"></gmtv-geolocation-button>
 * </div>
 */
@Component({
  selector: 'gmtv-geolocation-button',
  templateUrl: './geolocation-button.html',
  styleUrls: ['./geolocation-button.scss']
})
export class GeolocationButtonComponent {
  /**
   * If `true`, the button won't attempt to center the map on the user when clicked,
   * but will emit the event `click` instead.
   */
  @Input() useCustomClickFn = false;
  /**
   * Emited after obtaining the user's location
   */
  @Output() locate = new EventEmitter<google.maps.LatLng>();
  private _geoLocationMarker: GeolocationMarker;

  constructor(protected googlemapsWrapper: GoogleMapsWrapper) { }

  /**
   * Get user's location and center map on it
   */
  centerOnUser() {
    if (this.useCustomClickFn) {
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.onPosition, console.error, { enableHighAccuracy: true });
    } else {
      console.error('No support for geolocation');
    }
  }

  /**
   * Center the map on a specific position and draw the geoLocationMarker
   */
  setUserPosition(lat: number, lng: number) {
    this.googlemapsWrapper.map.setCenter({ lat, lng });
    if (this._geoLocationMarker) this._geoLocationMarker.setMap(null);
    this._geoLocationMarker = new GeolocationMarker(this.googlemapsWrapper.map);
    this.locate.emit(this._geoLocationMarker.position);
  }

  private onPosition(position: Position) {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    // this.googlemapsWrapper.map.setCenter({ lat, lng });

    // if (this._geoLocationMarker) this._geoLocationMarker.setMap(null);
    // this._geoLocationMarker = new GeolocationMarker(this.googlemapsWrapper.map);
    // this.locate.emit(this._geoLocationMarker.position);
    this.setUserPosition(lat, lng);
  }
}

import { Component } from '@angular/core';
import geolocationMarkrFn from 'geolocation-marker';
import { GoogleMapsWrapper } from '../../services/googlemaps-wrapper';
geolocationMarkrFn;

declare class GeolocationMarker {
  constructor(map: google.maps.Map);
  setMap(map: google.maps.Map);
}

/**
 * Creates the default user location button. Add this component as sibling **after** the
 * {@link NgxGooglemapsTrackingViewComponent} inside a wrapping component.
 *
 * @example
 * <div id="parent" style="height: 100%; width: 100%;">
 *  <div id="map" #map></div>
 *  <gmtv-geolocation-button></gmtv-geolocation-button>
 * </div>
 */
@Component({
  selector: 'gmtv-geolocation-button',
  templateUrl: './geolocation-button.html',
  styleUrls: ['./geolocation-button.scss']
})
export class GeolocationButtonComponent {
  private _userLocationMarker: GeolocationMarker;

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

        if (this._userLocationMarker) this._userLocationMarker.setMap(null);
        this._userLocationMarker = new GeolocationMarker(this.googlemapsWrapper.map);
      }, error => {
        console.error(error);
      },
        { enableHighAccuracy: true });
    } else {
      console.error('No support for geolocation');
    }
  }
}
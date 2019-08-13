/// <reference types="@types/googlemaps" />
import { Component, ViewChild, AfterContentInit } from '@angular/core';
import { NgxGooglemapsTrackingViewComponent, TrackedObject } from 'projects/ngx-googlemaps-tracking-view/src';
import { HttpClient } from '@angular/common/http';
import * as i18IsoCountries from 'i18n-iso-countries';
import * as randomColor from 'randomcolor';

i18IsoCountries.registerLocale(require('i18n-iso-countries/langs/en.json'));

interface Aircraft {
  /** icao24 */
  0: string,
  /** origin_country */
  2: string,
  /** longitude */
  5: number,
  /** latitude */
  6: number,
  /** on_ground */
  8: boolean,
  /** true_track */
  10: number,
  /** geo_altitude */
  13: number,
}

interface TrackedAircraft extends TrackedObject {
  altitude: number,
  country: string,
  onGround: boolean,
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterContentInit {
  @ViewChild(NgxGooglemapsTrackingViewComponent) mapView: NgxGooglemapsTrackingViewComponent;

  objectsToTrack: TrackedObject[] = [];
  symbolPath = 'M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z';

  mapOptions: google.maps.MapOptions = {
    center: {
      lat: 45.46427,
      lng: 9.18951
    },
    zoom: 7
  }

  constructor(private http: HttpClient) { }

  async ngAfterContentInit() {
    await this.mapView.ready();
    this.getAircracts();
    setInterval(() => this.getAircracts(), 10000);
  }

  getAircracts() {
    const bounds = this.mapView.map.getBounds();
    const ne = bounds.getNorthEast();
    const sw = bounds.getSouthWest();
    this.http.get(`https://opensky-network.org/api/states/all?lamin=${sw.lat()}&lomin=${sw.lng()}&lamax=${ne.lat()}&lomax=${ne.lng()}`)
      .subscribe((response: { states: Aircraft[] }) => {
        this.objectsToTrack = response.states.map(aircraft => {
          const found = this.objectsToTrack.find(a => a.id == aircraft[0]);
          const trkObj: TrackedAircraft = {
            altitude: aircraft[13],
            id: aircraft[0],
            color: found && found.color || randomColor(),
            country: aircraft[2],
            heading: aircraft[10],
            icon: found && found.icon || this.getIcon(aircraft[10]),
            name: aircraft[0].toLocaleUpperCase(),
            onGround: aircraft[8],
            position: new google.maps.LatLng(aircraft[6], aircraft[5]),
          }
          return trkObj;
        })
          .filter(a => !a.onGround)
          .splice(0, 50);
      });
  }

  getIsoCode(countryName: string) {
    return i18IsoCountries.getAlpha2Code(countryName, 'en');
  }

  getIcon(rotation: number): google.maps.Symbol {
    const color = randomColor();
    return {
      path: this.symbolPath,
      labelOrigin: new google.maps.Point(0, 5),
      fillColor: color,
      fillOpacity: 0.8,
      strokeColor: color,
      strokeOpacity: .9,
      strokeWeight: 1,
      scale: 1,
      rotation: rotation
    }
  }
}

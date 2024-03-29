/// <reference types="@types/googlemaps" />
import { Component, ViewChild, AfterContentInit, ViewContainerRef, TemplateRef } from '@angular/core';
import { NgxGooglemapsTrackingViewComponent, TrackedObject } from 'ngx-googlemaps-tracking-view';
import { HttpClient } from '@angular/common/http';
import * as i18IsoCountries from 'i18n-iso-countries';
import * as randomColor from 'randomcolor';
import * as parseSvg from 'parse-svg-path';
import * as extractSvg from 'extract-svg-path';
import * as loadSvg from 'load-svg';
import { Platform } from '@ionic/angular';

i18IsoCountries.registerLocale(require('i18n-iso-countries/langs/en.json'));

const SAMPLE_OBJECT = (icon: google.maps.Symbol) => ({
  id: randomColor(),
  position: new google.maps.LatLng({
    lat: 42.504154,
    lng: 12.646361
  }),
  color: randomColor(),
  heading: 33,
  icon,
  speed: 1,
  label: {
    text: 'Sample Aircraft',
    color: 'white'
  },
})

interface Aircraft {
  /** icao24 */
  0: string;
  /** origin_country */
  2: string;
  /** longitude */
  5: number;
  /** latitude */
  6: number;
  /** on_ground */
  8: boolean;
  /** true_track */
  10: number;
  /** geo_altitude */
  13: number;
}

interface TrackedAircraft extends TrackedObject {
  altitude: number;
  country: string;
  onGround: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements AfterContentInit {
  @ViewChild(NgxGooglemapsTrackingViewComponent, { static: true }) mapView: NgxGooglemapsTrackingViewComponent;
  @ViewChild('infowindowLocation') infowindowLocation: TemplateRef<any>;

  objectsToTrack: TrackedObject[] = [];
  symbolPath = '';

  mapOptions: google.maps.MapOptions = {
    center: {
      lat: 42.504154,
      lng: 12.646361
    },
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
  };

  get isMobile() { return this.platform.is('mobile'); }

  constructor(private http: HttpClient, public vc: ViewContainerRef, private platform: Platform) {
    // Load svg as symbol path
    loadSvg('assets/baseline-local_airport-24px.svg', (err, svg) => {
      const paths: any[][] = parseSvg(extractSvg.parse(svg));
      const i = paths.findIndex(p => p[0] === 'z');
      this.symbolPath = paths
        .slice(0, i - 1)
        .map(p => p.join(' ')).join(' ');
      this.objectsToTrack = [SAMPLE_OBJECT(this.getIcon(33))];
    });
  }

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
        this.objectsToTrack = response.states &&
          response.states.map(aircraft => {
            const found = this.objectsToTrack.find(a => a.id === aircraft[0]);
            const trkObj: TrackedAircraft = {
              altitude: aircraft[13],
              id: aircraft[0],
              color: found && found.color || randomColor(),
              country: aircraft[2],
              heading: aircraft[10],
              icon: found && found.icon || this.getIcon(aircraft[10]),
              speed: 1,
              label: {
                text: aircraft[0].toLocaleUpperCase(),
                color: 'white'
              },
              // isOffline: true,
              onGround: aircraft[8],
              position: new google.maps.LatLng(aircraft[6], aircraft[5]),
              // scale: 2,
            };
            return trkObj;
          })
            .filter(a => !a.onGround)
            .splice(0, 50)
          || [];
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
      fillOpacity: .6,
      strokeColor: color,
      strokeOpacity: 1,
      strokeWeight: 2,
      scale: 2,
      rotation
    };
  }

  openDocumentation() {
    open('https://raschidjfr.github.io/ngx-googlemaps-tracking-view/reference/', '_blank');
  }
}

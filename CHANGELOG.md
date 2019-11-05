# Changelog

## 1.4.0 (19-11-04)
### Added
* Added prop `useCustomClickFn` to GeolocationButton.

### Fixed
* Geolocation button worked only the first time.

### Changed
* Default object scale increased x2.
* Default object shape is circle if is speed is not provided or greater than 0.

## 1.3.0 (19-09-12)
### Added
* Property `CenterMarker.fix`.

## Changed
* `CenterMarker` creates its own infowindow with option `disableAutoPan` set to `true`.

## 1.2.1 (19-09-12)
### Changed
* Importing `HttpClientModule` in `NgxGooglemapsTrackingViewModule` so it does not need to be imported by the host module.

## 1.2.0 (19-09-12)
### Added
* Center Pin to geo-decode location by dragging the map's center

## 1.1.1 (19-08-24)
### Added
* GeolocationButton component to fetch user's location

### Fixed
* Demo: No more "two-finger scroll" on map... viewport height modified for mobile

## 1.1.1 (19-08-19)
### Added
* [Documentation](https://raschidjfr.github.io/ngx-googlemaps-tracking-view/reference) and [live demo](https://raschidjfr.github.io/ngx-googlemaps-tracking-view/) on Github Pages.

## 1.0.0 (19-08-14)
First release
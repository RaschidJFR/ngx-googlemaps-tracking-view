(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./dist/ngx-googlemaps-tracking-view/fesm5/ngx-googlemaps-tracking-view.js":
/*!*********************************************************************************!*\
  !*** ./dist/ngx-googlemaps-tracking-view/fesm5/ngx-googlemaps-tracking-view.js ***!
  \*********************************************************************************/
/*! exports provided: NgxGooglemapsTrackingViewComponent, NgxGooglemapsTrackingViewModule, ɵd, ɵc, ɵb, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxGooglemapsTrackingViewComponent", function() { return NgxGooglemapsTrackingViewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxGooglemapsTrackingViewModule", function() { return NgxGooglemapsTrackingViewModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return GeolocationButtonComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return InfowindowComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return TrackedObjectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return GoogleMapsWrapper; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./dist/ngx-googlemaps-tracking-view/node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var geolocation_marker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! geolocation-marker */ "./dist/ngx-googlemaps-tracking-view/node_modules/geolocation-marker/geolocation-marker.js");
/* harmony import */ var geolocation_marker__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(geolocation_marker__WEBPACK_IMPORTED_MODULE_6__);








/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Helper class for handling common GoogleMaps SDK functions
 */
var GoogleMapsWrapper = /** @class */ (function () {
    function GoogleMapsWrapper() {
        var _this = this;
        this._infowindows = { default: null };
        this.markers = [];
        this.polylines = [];
        this.polygons = [];
        this._isReady = false;
        /**
         * If `true` the infowindows will close on clicking on any point on the map
         */
        this.closeInfowindowOnClick = true;
        /**
         * Emits when the map has been inited by calling `GoogleMapsWrapper.init()`
         */
        this.onReady = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * When the user clicks on the map
         */
        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * When visible maps change but zooming or dragging the map
         */
        this.boundsChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this._ready = new Promise((/**
         * @param {?} resolve
         * @param {?} reject
         * @return {?}
         */
        function (resolve, reject) {
            _this.resolver = { resolve: resolve, reject: reject };
        }));
    }
    Object.defineProperty(GoogleMapsWrapper.prototype, "infowindow", {
        /** The default infowindow object */
        get: /**
         * The default infowindow object
         * @return {?}
         */
        function () { return this.getInfowindow('default'); },
        set: /**
         * @param {?} val
         * @return {?}
         */
        function (val) { this._infowindows['default'] = val; },
        enumerable: true,
        configurable: true
    });
    /**
     * `True` if the map has been inited by calling `GoogleMapsWrapper.init()`
     */
    /**
     * `True` if the map has been inited by calling `GoogleMapsWrapper.init()`
     * @return {?}
     */
    GoogleMapsWrapper.prototype.isReady = /**
     * `True` if the map has been inited by calling `GoogleMapsWrapper.init()`
     * @return {?}
     */
    function () { return this._isReady; };
    /**
     * Resolves when the map has been inited by calling `GoogleMapsWrapper.init()`
     */
    /**
     * Resolves when the map has been inited by calling `GoogleMapsWrapper.init()`
     * @return {?}
     */
    GoogleMapsWrapper.prototype.ready = /**
     * Resolves when the map has been inited by calling `GoogleMapsWrapper.init()`
     * @return {?}
     */
    function () { return this._ready; };
    Object.defineProperty(GoogleMapsWrapper.prototype, "map", {
        get: /**
         * @return {?}
         */
        function () {
            return this._map;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} tag
     * @return {?}
     */
    GoogleMapsWrapper.prototype.isInfowindowOpen = /**
     * @param {?=} tag
     * @return {?}
     */
    function (tag) {
        return this.getInfowindow(tag)['isOpen'];
    };
    /**
     * Call this before using any other function
     */
    /**
     * Call this before using any other function
     * @param {?} element
     * @param {?=} options
     * @return {?}
     */
    GoogleMapsWrapper.prototype.initMap = /**
     * Call this before using any other function
     * @param {?} element
     * @param {?=} options
     * @return {?}
     */
    function (element, options) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
            var e_1;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        this._map = new google.maps.Map(element, Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__assign"])({ center: new google.maps.LatLng(19.53124, -96.91589), zoom: 14, clickableIcons: false, disableDefaultUI: false, zoomControl: true, streetViewControl: false, scaleControl: true, rotateControl: true, fullscreenControl: true, mapTypeControlOptions: {
                                mapTypeIds: [google.maps.MapTypeId.ROADMAP, google.maps.MapTypeId.SATELLITE]
                            } }, options));
                        // Add listeners
                        this.map.addListener('click', (/**
                         * @param {?} e
                         * @return {?}
                         */
                        function (e) {
                            if (_this.closeInfowindowOnClick)
                                _this.closeInfowindow();
                            _this.click.emit(e.latLng);
                        }));
                        this.map.addListener('bounds_changed', (/**
                         * @return {?}
                         */
                        function () {
                            /** @type {?} */
                            var bounds = _this.map.getBounds();
                            _this.boundsChanged.emit(bounds);
                        }));
                        console.debug('map created ');
                        // Wait for SDK to load
                        setTimeout((/**
                         * @return {?}
                         */
                        function () {
                            _this._isReady = true;
                            _this.resolver.resolve();
                            _this.onReady.emit();
                        }), 1000);
                        return [4 /*yield*/, this._isReady];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.map];
                    case 2:
                        e_1 = _a.sent();
                        this.resolver.reject(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
       * Formula taken from:
       * [What ratio scales do Google Maps zoom levels correspond to?
     * ](https://gis.stackexchange.com/questions/7430/what-ratio-scales-do-google-maps-zoom-levels-correspond-to)
       */
    /**
     * Formula taken from:
     * [What ratio scales do Google Maps zoom levels correspond to?
     * ](https://gis.stackexchange.com/questions/7430/what-ratio-scales-do-google-maps-zoom-levels-correspond-to)
     * @param {?} latitude
     * @return {?}
     */
    GoogleMapsWrapper.prototype.getMetersPerPx = /**
     * Formula taken from:
     * [What ratio scales do Google Maps zoom levels correspond to?
     * ](https://gis.stackexchange.com/questions/7430/what-ratio-scales-do-google-maps-zoom-levels-correspond-to)
     * @param {?} latitude
     * @return {?}
     */
    function (latitude) {
        if (!latitude || !this.map)
            return 0;
        /** @type {?} */
        var zoom = this.map.getZoom();
        return 156543.03392 * Math.cos(latitude * Math.PI / 180) / Math.pow(2, zoom);
    };
    /**
       * Subscribe to map event
       */
    // tslint:disable-next-line: no-any
    /**
     * Subscribe to map event
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    // tslint:disable-next-line: no-any
    GoogleMapsWrapper.prototype.subscribe = /**
     * Subscribe to map event
     * @param {?} eventName
     * @param {?} callback
     * @return {?}
     */
    // tslint:disable-next-line: no-any
    function (eventName, callback) {
        this.map.addListener(eventName, callback);
    };
    /**
       * Unsubscribe from map event
       */
    /**
     * Unsubscribe from map event
     * @param {?} eventName
     * @return {?}
     */
    GoogleMapsWrapper.prototype.unsubscribe = /**
     * Unsubscribe from map event
     * @param {?} eventName
     * @return {?}
     */
    function (eventName) {
        google.maps.event.clearListeners(this.map, eventName);
    };
    /**
       * Unsubscribe from all map events
       */
    /**
     * Unsubscribe from all map events
     * @return {?}
     */
    GoogleMapsWrapper.prototype.unsubcribeAll = /**
     * Unsubscribe from all map events
     * @return {?}
     */
    function () {
        google.maps.event.clearInstanceListeners(this.map);
    };
    /**
       * Add a marker and show it on the map
       */
    /**
     * Add a marker and show it on the map
     * @param {?} params
     * @return {?}
     */
    GoogleMapsWrapper.prototype.addMarker = /**
     * Add a marker and show it on the map
     * @param {?} params
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var marker;
        if (!(params instanceof google.maps.Marker)) {
            params.map = this.map;
            marker = new google.maps.Marker(params);
        }
        else {
            marker = params;
            marker.setMap(this.map);
        }
        this.markers.push(marker);
        return marker;
    };
    /**
     * @param {?} params
     * @return {?}
     */
    GoogleMapsWrapper.prototype.addPolyline = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var line;
        if (!(params instanceof google.maps.Polyline)) {
            params.map = this.map;
            line = new google.maps.Polyline(params);
        }
        else {
            line = params;
            line.setMap(this.map);
        }
        this.polylines.push(line);
        return line;
    };
    /**
     * @param {?} params
     * @return {?}
     */
    GoogleMapsWrapper.prototype.addPolygone = /**
     * @param {?} params
     * @return {?}
     */
    function (params) {
        /** @type {?} */
        var polygon;
        if (!(params instanceof google.maps.Polygon)) {
            params.map = this.map;
            polygon = new google.maps.Polygon(params);
        }
        else {
            polygon = params;
            polygon.setMap(this.map);
        }
        this.polygons.push(polygon);
        return polygon;
    };
    /**
     * @return {?}
     */
    GoogleMapsWrapper.prototype.clearMarkers = /**
     * @return {?}
     */
    function () {
        this.markers.forEach((/**
         * @param {?} m
         * @return {?}
         */
        function (m) {
            m.setMap(null);
        }));
        this.markers = [];
    };
    /**
     * @return {?}
     */
    GoogleMapsWrapper.prototype.clearPolylines = /**
     * @return {?}
     */
    function () {
        this.polylines.forEach((/**
         * @param {?} l
         * @return {?}
         */
        function (l) {
            l.setMap(null);
        }));
        this.polylines = [];
    };
    /**
     * @return {?}
     */
    GoogleMapsWrapper.prototype.clearPolygones = /**
     * @return {?}
     */
    function () {
        this.polygons.forEach((/**
         * @param {?} l
         * @return {?}
         */
        function (l) {
            l.setMap(null);
        }));
        this.polygons = [];
    };
    /**
       * Removes current markers an copies all the markers of an array into the map
       */
    /**
     * Removes current markers an copies all the markers of an array into the map
     * @param {?} array
     * @return {?}
     */
    GoogleMapsWrapper.prototype.setMarkers = /**
     * Removes current markers an copies all the markers of an array into the map
     * @param {?} array
     * @return {?}
     */
    function (array) {
        var _this = this;
        this.clearMarkers();
        array.forEach((/**
         * @param {?} m
         * @return {?}
         */
        function (m) {
            m.setMap(_this.map);
        }));
        this.markers = Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__spread"])(array);
    };
    /**
     * @param id In case more than one infowindows are required to be shown. If no parameter is passed,
     * the default infowindow will be opened. If a string is passed, a new infowindow will be created
     * with that specifier.
     */
    /**
     * @param {?=} anchor
     * @param {?=} content
     * @param {?=} id In case more than one infowindows are required to be shown. If no parameter is passed,
     * the default infowindow will be opened. If a string is passed, a new infowindow will be created
     * with that specifier.
     * @return {?}
     */
    GoogleMapsWrapper.prototype.openInfowindow = /**
     * @param {?=} anchor
     * @param {?=} content
     * @param {?=} id In case more than one infowindows are required to be shown. If no parameter is passed,
     * the default infowindow will be opened. If a string is passed, a new infowindow will be created
     * with that specifier.
     * @return {?}
     */
    function (anchor, content, id) {
        /** @type {?} */
        var infowindow = id ? this.getInfowindow(id) : this.infowindow;
        if (content)
            infowindow.setContent(content);
        if (anchor instanceof google.maps.LatLng) {
            infowindow.setPosition(anchor);
            infowindow.open(this.map);
        }
        else {
            infowindow.open(this.map, anchor);
        }
        infowindow['isOpen'] = true;
    };
    /**
     * @param id Unique identifier for an infowindow in case more than one exist
     */
    /**
     * @param {?=} id Unique identifier for an infowindow in case more than one exist
     * @return {?}
     */
    GoogleMapsWrapper.prototype.closeInfowindow = /**
     * @param {?=} id Unique identifier for an infowindow in case more than one exist
     * @return {?}
     */
    function (id) {
        /** @type {?} */
        var infowindow = id ? this.getInfowindow(id) : this.infowindow;
        if (infowindow) {
            infowindow.close();
            infowindow['isOpen'] = false;
        }
    };
    /**
     * Retrieve a reference to a specific infowindow
     * @param id Infowindow uniquer identifier (set by having called `openInfowindow()`). If no
     * string is passed, the defoult infowindow will be returned.
     */
    /**
     * Retrieve a reference to a specific infowindow
     * @param {?=} id Infowindow uniquer identifier (set by having called `openInfowindow()`). If no
     * string is passed, the defoult infowindow will be returned.
     * @return {?}
     */
    GoogleMapsWrapper.prototype.getInfowindow = /**
     * Retrieve a reference to a specific infowindow
     * @param {?=} id Infowindow uniquer identifier (set by having called `openInfowindow()`). If no
     * string is passed, the defoult infowindow will be returned.
     * @return {?}
     */
    function (id) {
        if (id === void 0) { id = 'default'; }
        /** @type {?} */
        var infowindow = this._infowindows[id];
        if (!infowindow) {
            infowindow = new google.maps.InfoWindow({
                content: '[info]',
                position: this.map.getCenter()
            });
            infowindow['closeclick'] = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
            infowindow.addListener('closeclick', (/**
             * @return {?}
             */
            function () { return infowindow['closeclick'].emit(); }));
            this._infowindows[id] = infowindow;
        }
        return infowindow;
    };
    /**
     * Destroy a reference to a specific infowindow.
     * @param id Infowindow uniquer identifier (set by having called `openInfowindow()`). If no
     * string is passed, the defoult infowindow will be returned.
     */
    /**
     * Destroy a reference to a specific infowindow.
     * @param {?} id Infowindow uniquer identifier (set by having called `openInfowindow()`). If no
     * string is passed, the defoult infowindow will be returned.
     * @return {?}
     */
    GoogleMapsWrapper.prototype.destroyInfowindow = /**
     * Destroy a reference to a specific infowindow.
     * @param {?} id Infowindow uniquer identifier (set by having called `openInfowindow()`). If no
     * string is passed, the defoult infowindow will be returned.
     * @return {?}
     */
    function (id) {
        if (!id)
            return;
        /** @type {?} */
        var infowindow = this._infowindows[id];
        if (infowindow) {
            infowindow.close();
            infowindow.set('map', null);
            google.maps.event.clearInstanceListeners(infowindow);
            delete this._infowindows[id];
        }
    };
    GoogleMapsWrapper.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"] }
    ];
    /** @nocollapse */
    GoogleMapsWrapper.ctorParameters = function () { return []; };
    return GoogleMapsWrapper;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var API_KEY = '';
/**
 * A marker fixed to the center of the map which emits the geo-decoded location
 * as a full address.
 *
 * @see {\@link CenterMarker}
 * \@emits CenterMarker#locationChanges locationChanges When the pin's location has changed
 * (by zooming or dragging) and the map has become idle again.
 * \@emits CenterMarker#addressChanges addressChanges The the geocoded address has resolved.
 *
 * \@example
 * <button (click)="map.centerPin.enable(infowindowLocation, <yourGMapsApiKey)">Add center Pin</button>
 * <button (click)="map.centerPin.disable()">Remove Pin</button>
 *
 * <ng-template #infowindowLocation let-address>
 *   <div>
 *     <span *ngIf="!address">Loading...</span>
 *     <span *ngIf="!!address">{{address}}</span>
 *   </div>
 * </ng-template>
 */
var /**
 * A marker fixed to the center of the map which emits the geo-decoded location
 * as a full address.
 *
 * @see {\@link CenterMarker}
 * \@emits CenterMarker#locationChanges locationChanges When the pin's location has changed
 * (by zooming or dragging) and the map has become idle again.
 * \@emits CenterMarker#addressChanges addressChanges The the geocoded address has resolved.
 *
 * \@example
 * <button (click)="map.centerPin.enable(infowindowLocation, <yourGMapsApiKey)">Add center Pin</button>
 * <button (click)="map.centerPin.disable()">Remove Pin</button>
 *
 * <ng-template #infowindowLocation let-address>
 *   <div>
 *     <span *ngIf="!address">Loading...</span>
 *     <span *ngIf="!!address">{{address}}</span>
 *   </div>
 * </ng-template>
 */
CenterMarker = /** @class */ (function () {
    function CenterMarker(googlemapsWrapper, viewContainer, http) {
        this.googlemapsWrapper = googlemapsWrapper;
        this.viewContainer = viewContainer;
        this.http = http;
        /**
         * Emitted when the pin's location has changed (by zooming or dragging) and the map has become idle again.
         */
        this.locationChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Emitted when the the geocoded address has resolved.
         */
        this.addressChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * @ignore
         */
        this._centerChanged$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        /**
         * @ignore
         */
        this._mapEventSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        /**
         * @ignore
         */
        this._geocoder = new google.maps.Geocoder();
    }
    Object.defineProperty(CenterMarker.prototype, "REVERSE_GEOCODING_URL", {
        /** @ignore */
        get: /**
         * @ignore
         * @private
         * @return {?}
         */
        function () { return "https://maps.googleapis.com/maps/api/geocode/json?key=" + API_KEY + "&latlng="; },
        enumerable: true,
        configurable: true
    });
    /**
     * Activates the pin to show at the map's center
     * @param infowindowTemplate A template for rendering the infowindow on top of the marker.
     * It must have a single root element. The address string will be passed as implicit context.
     * @param apiKey GoogleMaps API key
     */
    /**
     * Activates the pin to show at the map's center
     * @param {?} infowindowTemplate A template for rendering the infowindow on top of the marker.
     * It must have a single root element. The address string will be passed as implicit context.
     * @param {?} apiKey GoogleMaps API key
     * @return {?}
     */
    CenterMarker.prototype.enable = /**
     * Activates the pin to show at the map's center
     * @param {?} infowindowTemplate A template for rendering the infowindow on top of the marker.
     * It must have a single root element. The address string will be passed as implicit context.
     * @param {?} apiKey GoogleMaps API key
     * @return {?}
     */
    function (infowindowTemplate, apiKey) {
        var _this = this;
        API_KEY = apiKey;
        this._infowindowTemplate = infowindowTemplate;
        if (this._centerMarker)
            return;
        /** @type {?} */
        var mapDiv = (/** @type {?} */ (this.googlemapsWrapper.map.getDiv()));
        this._centerMarker = document.createElement('div');
        this._centerMarker.classList.add('centerMarker');
        this._centerMarker.style.cssText =
            "position:absolute;\n      background:url(https://maps.gstatic.com/mapfiles/markers/marker.png) no-repeat;\n      top:50%;left:50%;\n      z-index:1;\n      margin-left:-10px;\n      margin-top:-34px;\n      height:34px;\n      width:20px;\n      cursor: pointer;";
        mapDiv.appendChild(this._centerMarker);
        this._centerMarker.onclick = (/**
         * @return {?}
         */
        function () { return _this.displayInfowindowOverPin(); });
        this._mapEventSubscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this._mapEventSubscription.add(this._centerChanged$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["tap"])((/**
         * @return {?}
         */
        function () {
            _this.address = null;
            _this.displayInfowindowOverPin();
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} latLng
         * @return {?}
         */
        function (latLng) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(latLng); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["debounce"])((/**
         * @return {?}
         */
        function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1000); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((/**
         * @param {?} latLng
         * @return {?}
         */
        function (latLng) { return (/** @type {?} */ (_this.http.get("" + _this.REVERSE_GEOCODING_URL + latLng.toUrlValue()))); })))
            // .subscribe((latLng) => {
            .subscribe((/**
         * @param {?} response
         * @return {?}
         */
        function (response) {
            // this._geocoder.geocode({ location: latLng }, (response) => {
            /** @type {?} */
            var results = response[0] || ((/** @type {?} */ (response))).results;
            /** @type {?} */
            var firstResult = results[0] || results;
            _this.address = firstResult && firstResult.formatted_address || 'desconocido';
            _this.addressChanges.emit(_this.address);
            _this.displayInfowindowOverPin();
            // });
        })));
        this.onMapIdle();
        this.displayInfowindowOverPin();
        this._idleListener = this.googlemapsWrapper.map.addListener('idle', (/**
         * @return {?}
         */
        function () { return _this.onMapIdle(); }));
    };
    /**
     * Removes the pin from the map
     */
    /**
     * Removes the pin from the map
     * @return {?}
     */
    CenterMarker.prototype.disable = /**
     * Removes the pin from the map
     * @return {?}
     */
    function () {
        if (this._centerMarker)
            this._centerMarker.remove();
        this._centerMarker = null;
        this._mapEventSubscription.unsubscribe();
        this.googlemapsWrapper.closeInfowindow();
        google.maps.event.removeListener(this._idleListener);
    };
    /** @ignore */
    /**
     * @ignore
     * @return {?}
     */
    CenterMarker.prototype.displayInfowindowOverPin = /**
     * @ignore
     * @return {?}
     */
    function () {
        this.viewContainer.clear();
        /** @type {?} */
        var view = this.viewContainer.createEmbeddedView(this._infowindowTemplate, { $implicit: this.address });
        /** @type {?} */
        var content = (/** @type {?} */ (view.rootNodes[0]));
        /** @type {?} */
        var center = this.googlemapsWrapper.map.getCenter();
        /** @type {?} */
        var offset = this.googlemapsWrapper.getMetersPerPx(center.lat()) * 36;
        /** @type {?} */
        var pos = google.maps.geometry.spherical.computeOffset(center, offset, 0);
        this.googlemapsWrapper.openInfowindow(pos, content);
    };
    /** @ignore */
    /**
     * @ignore
     * @private
     * @return {?}
     */
    CenterMarker.prototype.onMapIdle = /**
     * @ignore
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var center = this.googlemapsWrapper.map.getCenter();
        this.locationChanges.emit(center.toJSON());
        this._centerChanged$.next(center);
    };
    return CenterMarker;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Creates an embeded google map with polygons representing the tracked objects.
 *
 * \@example
 * <gmtv-map [data]="objectArray" [template]="infowindow" [mapOptions]="mapOptions" [showLocationButton]="true">
 *  <ng-template #infowindow let-o>
 *   <div id="root">
 *     <h4>{{o.name}}</h4>
 *   </div>
 *  </ng-template>
 * </gmtv-map>
 */
var NgxGooglemapsTrackingViewComponent = /** @class */ (function () {
    function NgxGooglemapsTrackingViewComponent(googlemapsWrapper, vc, http) {
        this.googlemapsWrapper = googlemapsWrapper;
        this.vc = vc;
        this.http = http;
        /**
         * A marker fixed to the center of the map which emits the geo-decoded location
         * as a full address.
         * @see {\@link CenterMarker}
         */
        this.centerPin = new CenterMarker(this.googlemapsWrapper, this.vc, this.http);
        this._data = [];
        /**
         * Show location button in controls to retrieve user's location.
         * An https connection is required.
         */
        this.showLocationButton = true;
    }
    Object.defineProperty(NgxGooglemapsTrackingViewComponent.prototype, "data", {
        get: /**
         * @return {?}
         */
        function () { return this._data; },
        /**
         * Array of {@link TrackedObject} to draw on map
         */
        set: /**
         * Array of {\@link TrackedObject} to draw on map
         * @param {?} val
         * @return {?}
         */
        function (val) { this._data = val || []; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NgxGooglemapsTrackingViewComponent.prototype, "map", {
        /**
         * Currently inited GoogleMaps  {@link https://developers.google.com/maps/documentation/javascript/reference/map#Map Map} object
         */
        get: /**
         * Currently inited GoogleMaps  {\@link https://developers.google.com/maps/documentation/javascript/reference/map#Map Map} object
         * @return {?}
         */
        function () { return this.googlemapsWrapper.map; },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NgxGooglemapsTrackingViewComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.googlemapsWrapper.initMap(this.mapDiv.nativeElement, this.mapOptions);
    };
    /**
     * Resolves when map has been inited
     */
    /**
     * Resolves when map has been inited
     * @return {?}
     */
    NgxGooglemapsTrackingViewComponent.prototype.ready = /**
     * Resolves when map has been inited
     * @return {?}
     */
    function () {
        return this.googlemapsWrapper.ready();
    };
    /** @ignore */
    /**
     * @ignore
     * @param {?} _index
     * @param {?} item
     * @return {?}
     */
    NgxGooglemapsTrackingViewComponent.prototype.trackById = /**
     * @ignore
     * @param {?} _index
     * @param {?} item
     * @return {?}
     */
    function (_index, item) {
        return item.id;
    };
    NgxGooglemapsTrackingViewComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"], args: [{
                    selector: 'gmtv-map',
                    template: "<div id=\"map\" #map></div>\r\n\r\n<div id=\"tracked-object-list\">\r\n  <gmtv-tracked-object [trackedObject]=\"trkObj\" [template]=\"template\" *ngFor=\"let trkObj of data; trackBy: trackById\">\r\n  </gmtv-tracked-object>\r\n</div>\r\n",
                    styles: ["#map{width:100%;height:100%}"]
                }] }
    ];
    /** @nocollapse */
    NgxGooglemapsTrackingViewComponent.ctorParameters = function () { return [
        { type: GoogleMapsWrapper },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    NgxGooglemapsTrackingViewComponent.propDecorators = {
        mapDiv: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: ['map',] }],
        mapOptions: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        showLocationButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }]
    };
    return NgxGooglemapsTrackingViewComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var InfowindowComponent = /** @class */ (function () {
    function InfowindowComponent(googleMaps, el) {
        this.googleMaps = googleMaps;
        this.el = el;
        /**
         * When infowindow has closed
         */
        this.closed = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        /**
         * Triggered on clicking on the X button
         */
        this.closeclick = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
        this.noPadding = false;
        this.padding = false;
        this.cssClass = '';
        this.closeOnMapClick = true;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
    }
    Object.defineProperty(InfowindowComponent.prototype, "nativeInfowindow", {
        get: /**
         * @return {?}
         */
        function () {
            return this.googleMaps.getInfowindow(this.id);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InfowindowComponent.prototype, "addPadding", {
        get: /**
         * @return {?}
         */
        function () {
            return (this.isMobile && this.noPadding === false) || this.padding !== false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InfowindowComponent.prototype, "isMobile", {
        get: /**
         * @return {?}
         */
        function () {
            return window.innerWidth < 768;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(InfowindowComponent.prototype, "isOpen", {
        get: /**
         * @return {?}
         */
        function () {
            return this.googleMaps.isInfowindowOpen(this.id);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    InfowindowComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var template = this.contentTemplateRef || this.defaultTemplateRef;
        this.view = template && template.createEmbeddedView(this.ctx);
        this.googleMaps.click.subscribe((/**
         * @return {?}
         */
        function () { return _this.onMapClick(); }));
        this.subscription = this.nativeInfowindow['closeclick'].subscribe((/**
         * @return {?}
         */
        function () { return _this.closeclick.emit(); }));
    };
    /**
     * @return {?}
     */
    InfowindowComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.id)
            this.googleMaps.destroyInfowindow(this.id);
        this.subscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    InfowindowComponent.prototype.getNativeInfowindow = /**
     * @return {?}
     */
    function () {
        return this.googleMaps.getInfowindow(this.id);
    };
    /**
     * @param {?} anchor
     * @return {?}
     */
    InfowindowComponent.prototype.open = /**
     * @param {?} anchor
     * @return {?}
     */
    function (anchor) {
        if (this.vc && this.view && !this.view.destroyed)
            this.vc.insert(this.view);
        this.content = this.view && this.view.rootNodes[0];
        this.googleMaps.openInfowindow(anchor, this.content, this.id);
    };
    /**
     * @return {?}
     */
    InfowindowComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        if (this.googleMaps.isInfowindowOpen(this.id)) {
            this.googleMaps.closeInfowindow(this.id);
            this.onClosed();
        }
    };
    /**
     * @return {?}
     */
    InfowindowComponent.prototype.onMapClick = /**
     * @return {?}
     */
    function () {
        if (this.closeOnMapClick)
            this.close();
    };
    /**
     * @return {?}
     */
    InfowindowComponent.prototype.onClosed = /**
     * @return {?}
     */
    function () {
        try {
            this.vc.remove(0);
            this.view.destroy();
            this.vc.clear();
        }
        catch (ex) {
            console.warn(ex);
        }
        this.closed.emit();
    };
    InfowindowComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"], args: [{
                    selector: 'gmtv-infowindow',
                    template: "\t<div style=\"display: none;\" #root>\n                <ng-template #defaultTemplate let-o>\n                  <div id=\"rootNode\">\n                    <h3>{{o.name}}</h3>\n                    <p>\n                      <strong>ID:</strong> {{o.id}}<br>\n                      <strong>Position:</strong> {{o.position?.toJSON() | json}}<br>\n                      <strong>Heading:</strong> {{o.heading | number:'1.0-1'}}\u00B0<br>\n                    </p>\n                  </div>\n                </ng-template>\n                <ng-container #vc></ng-container>\n              </div>"
                }] }
    ];
    /** @nocollapse */
    InfowindowComponent.ctorParameters = function () { return [
        { type: GoogleMapsWrapper },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"] }
    ]; };
    InfowindowComponent.propDecorators = {
        root: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: ['root',] }],
        defaultTemplateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: ['defaultTemplate',] }],
        vc: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: ['vc', { read: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewContainerRef"] },] }],
        closed: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        closeclick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }],
        noPadding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        padding: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        cssClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        contentTemplateRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"], args: ['template',] }],
        ctx: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"], args: ['context',] }],
        closeOnMapClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }]
    };
    return InfowindowComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Size in meters to draw each unity speed on map in a dashed line
 * @type {?}
 */
var SPEED_UNIT_LENGTH_M = 20;
/**
 * Level of detail.
 * Minimal zoom to start drawing objects
 *
 * @type {?}
 */
var LOD = {
    speed: 15,
    scaleTriangle: 15,
    nameLabels: 0
}
/**
 * This class renders a trackable object on the map
 *
 * @example
 * // component.ts
 * const objectsToTrack: TrackedObject[] = [{
 *   id: '1',
 *   color: 'blue',
 *   heading: 45,
 *   label: {text: 'Test object #1' },
 *   position: new google.maps.LatLng(19.53124, -96.91589),
 * }]
 *
 * // component.html
 * <gmtv-map [data]="objectsToTrack"></gmtv-map>
 */
;
/**
 * This class renders a trackable object on the map
 *
 * \@example
 * // component.ts
 * const objectsToTrack: TrackedObject[] = [{
 *   id: '1',
 *   color: 'blue',
 *   heading: 45,
 *   label: {text: 'Test object #1' },
 *   position: new google.maps.LatLng(19.53124, -96.91589),
 * }]
 *
 * // component.html
 * <gmtv-map [data]="objectsToTrack"></gmtv-map>
 */
var TrackedObjectComponent = /** @class */ (function () {
    function TrackedObjectComponent(googleMaps) {
        this.googleMaps = googleMaps;
        this.dotMarker = new google.maps.Marker({ position: { lat: NaN, lng: NaN } });
        this.hoverDotListeners = [];
        this.hoverPolygonListeners = [];
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subscription"]();
        this.defaultColor = 'red';
        this.polygon = new google.maps.Polygon({
            strokeColor: this.color,
            strokeOpacity: 0.8,
            strokeWeight: 2,
            fillColor: this.color,
            fillOpacity: !this.offline ? .55 : 0,
            draggable: false
        });
        this.drawSpeedVector = false;
    }
    /**
     * @return {?}
     */
    TrackedObjectComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function () {
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.googleMaps.ready()];
                    case 1:
                        _a.sent();
                        // Add bounds changed event
                        this.checkRenderObject();
                        this.subscription.add(this.googleMaps.boundsChanged
                            .subscribe((/**
                         * @return {?}
                         */
                        function () { return _this.checkRenderObject(); })));
                        this.drawObject();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    TrackedObjectComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        if (!this.trackedObject)
            return;
        this.drawObject();
    };
    /**
     * @return {?}
     */
    TrackedObjectComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.polygon.setMap(null);
        this.vectorLine.setMap(null);
        this.dotMarker.setMap(null);
        this.subscription.unsubscribe();
        if (this.zoomListener)
            this.zoomListener.remove();
    };
    Object.defineProperty(TrackedObjectComponent.prototype, "color", {
        /**
         * Current color for the current tracked object
         */
        get: /**
         * Current color for the current tracked object
         * @return {?}
         */
        function () { return this.trackedObject && this.trackedObject.color || this.defaultColor; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrackedObjectComponent.prototype, "isMoving", {
        get: /**
         * @protected
         * @return {?}
         */
        function () { return !!this.trackedObject && this.trackedObject.speed !== 0; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrackedObjectComponent.prototype, "offline", {
        get: /**
         * @protected
         * @return {?}
         */
        function () { return this.trackedObject && this.trackedObject.isOffline; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrackedObjectComponent.prototype, "hasValidMeasures", {
        get: /**
         * @protected
         * @return {?}
         */
        function () { return true; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrackedObjectComponent.prototype, "scale", {
        /**
         * Adaptive scale according to current zoom
         */
        get: /**
         * Adaptive scale according to current zoom
         * @protected
         * @return {?}
         */
        function () {
            /** @type {?} */
            var zoom = this.googleMaps && this.googleMaps.map && this.googleMaps.map.getZoom() || 1;
            /** @type {?} */
            var s = Math.ceil(LOD.scaleTriangle - zoom);
            return Math.pow(2, s) * (this.trackedObject.scale && this.trackedObject.scale || 1);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrackedObjectComponent.prototype, "tipLatLng", {
        /**
         * Tip point
         */
        get: /**
         * Tip point
         * @return {?}
         */
        function () {
            if (this.hasValidMeasures)
                return this.polygon && this.polygon.getPath().getAt(3);
            else
                return this.trackedObject.position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrackedObjectComponent.prototype, "rearLatLng", {
        /**
         * Rear point
         */
        get: /**
         * Rear point
         * @return {?}
         */
        function () {
            if (this.hasValidMeasures)
                return this.polygon && this.polygon.getPath().getAt(0);
            else
                return this.trackedObject.position;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrackedObjectComponent.prototype, "canDrawPolygon", {
        get: /**
         * @protected
         * @return {?}
         */
        function () {
            return this.hasValidMeasures;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TrackedObjectComponent.prototype, "zoom", {
        /**
         * Current map's zoom
         */
        get: /**
         * Current map's zoom
         * @protected
         * @return {?}
         */
        function () {
            return this.googleMaps.map && this.googleMaps.map.getZoom();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Current relation to convert pixels to meters on the map
     */
    /**
     * Current relation to convert pixels to meters on the map
     * @return {?}
     */
    TrackedObjectComponent.prototype.getMetersPerPx = /**
     * Current relation to convert pixels to meters on the map
     * @return {?}
     */
    function () {
        if (!this.trackedObject.position || !this.googleMaps.map)
            return 0;
        return this.googleMaps.getMetersPerPx(this.trackedObject.position.lat());
    };
    /**
     * Checks if object is on screen and renders/unrenders it
     */
    /**
     * Checks if object is on screen and renders/unrenders it
     * @protected
     * @return {?}
     */
    TrackedObjectComponent.prototype.checkRenderObject = /**
     * Checks if object is on screen and renders/unrenders it
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var path = this.polygon && this.polygon.getPath();
        // If showing a polygon
        if (path && !!path.getLength()) {
            /** @type {?} */
            var isPolygonOnScreen_1 = false;
            if (path.getArray().length) {
                /** @type {?} */
                var bounds_1 = this.googleMaps.map.getBounds();
                path.forEach((/**
                 * @param {?} p
                 * @return {?}
                 */
                function (p) { return isPolygonOnScreen_1 = isPolygonOnScreen_1 || bounds_1 && bounds_1.contains(p); }));
            }
            if (isPolygonOnScreen_1) {
                this.dotMarker.setVisible(true);
                this.polygon.setVisible(true);
                this.vectorLine.setVisible(true);
            }
            else {
                this.dotMarker.setVisible(false);
                this.polygon.setVisible(false);
                this.vectorLine.setVisible(false);
            }
        }
        // If using the dot marker
        else if (this.dotMarker) {
            /** @type {?} */
            var bounds = this.googleMaps.map.getBounds();
            /** @type {?} */
            var visible = !!bounds && bounds.contains(this.dotMarker.getPosition());
            this.dotMarker.setVisible(visible);
            this.polygon.setVisible(visible);
            this.vectorLine.setVisible(visible);
        }
    };
    /**
     * @protected
     * @return {?}
     */
    TrackedObjectComponent.prototype.clearEventListeners = /**
     * @protected
     * @return {?}
     */
    function () {
        this.hoverPolygonListeners.forEach((/**
         * @param {?} l
         * @return {?}
         */
        function (l) { return l.remove(); }));
        this.hoverPolygonListeners = [];
        this.hoverDotListeners.forEach((/**
         * @param {?} l
         * @return {?}
         */
        function (l) { return l.remove(); }));
        this.hoverDotListeners = [];
    };
    /**
     * @protected
     * @return {?}
     */
    TrackedObjectComponent.prototype.setupEventListeners = /**
     * @protected
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var showPolygon = (this.canDrawPolygon && this.zoom >= LOD.scaleTriangle) || (this.isMoving && this.zoom < LOD.scaleTriangle);
        if (showPolygon && !this.trackedObject.icon) {
            // Add listeners for polygon, not do
            if (this.hoverPolygonListeners.length < 1) {
                this.clearEventListeners();
                this.hoverPolygonListeners.push(this.polygon.addListener('mouseover', (/**
                 * @return {?}
                 */
                function () { return _this.onMouseOver(); })), this.polygon.addListener('mouseout', (/**
                 * @return {?}
                 */
                function () { return _this.onMouseOut(); })));
            }
        }
        else {
            // Add listeners for dot, not polygon
            if (this.hoverDotListeners.length < 1) {
                this.clearEventListeners();
                this.hoverDotListeners.push(this.dotMarker.addListener('mouseover', (/**
                 * @return {?}
                 */
                function () { return _this.onMouseOver(); })), this.dotMarker.addListener('mouseout', (/**
                 * @return {?}
                 */
                function () { return _this.onMouseOut(); })));
            }
        }
        // Listen for zoom change
        if (!this.zoomListener)
            this.zoomListener = this.googleMaps.map.addListener('zoom_changed', (/**
             * @return {?}
             */
            function () { return _this.onZoomChanged(); }));
    };
    /**
       * Returns the series of icons according to the current zoom level
       */
    /**
     * Returns the series of icons according to the current zoom level
     * @protected
     * @return {?}
     */
    TrackedObjectComponent.prototype.getSpeedLineIcons = /**
     * Returns the series of icons according to the current zoom level
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var s = Math.ceil(this.zoom - LOD.scaleTriangle);
        /** @type {?} */
        var icons = [];
        /** @type {?} */
        var l = SPEED_UNIT_LENGTH_M * this.scale;
        /** @type {?} */
        var dashLength = Math.round(l / this.getMetersPerPx() * .5);
        /** @type {?} */
        var skipIconOnFifth = false;
        // Units
        /** @type {?} */
        var iconUnits = {
            path: "M 0 0 L 0 " + dashLength,
            scale: 1,
            strokeWeight: 2,
            fillOpacity: 1
        };
        /** @type {?} */
        var units = Math.round(this.trackedObject.speed);
        for (var i = 1; i <= units; i++) {
            /** @type {?} */
            var percent = Math.round(100 / units * i);
            icons.push({
                icon: (i % 5 == 0 && skipIconOnFifth) ? null : iconUnits,
                offset: percent + "%"
            });
        }
        // Fifths
        /** @type {?} */
        var iconFifths = {
            path: "M " + dashLength + " " + dashLength / 2 + " L -" + dashLength + " " + dashLength / 2,
            scale: 1,
            strokeWeight: 2,
        };
        /** @type {?} */
        var fifths = Math.floor(units / 5);
        for (var i = 1; i <= fifths; i++) {
            /** @type {?} */
            var percent = Math.round(100 / units * 5 * i);
            icons.push({
                icon: iconFifths,
                offset: percent + "%"
            });
        }
        return icons;
    };
    /**
       * Initis/updates polyline with icons according to current zoom level
       */
    /**
     * Initis/updates polyline with icons according to current zoom level
     * @protected
     * @return {?}
     */
    TrackedObjectComponent.prototype.initSpeedPolyline = /**
     * Initis/updates polyline with icons according to current zoom level
     * @protected
     * @return {?}
     */
    function () {
        if (this.vectorLine)
            this.vectorLine.setMap(null);
        this.vectorLine = new google.maps.Polyline({
            strokeColor: 'green',
            strokeWeight: 0,
            draggable: false,
            editable: false,
            path: [],
            icons: this.getSpeedLineIcons(),
            map: this.googleMaps.map,
        });
        this.vectorLine.setVisible(false);
    };
    /**
     * @protected
     * @return {?}
     */
    TrackedObjectComponent.prototype.initDotaMarker = /**
     * @protected
     * @return {?}
     */
    function () {
        if (this.dotMarker)
            this.dotMarker.setMap(null);
        this.googleMaps.addMarker(this.dotMarker);
    };
    /**
     * @protected
     * @return {?}
     */
    TrackedObjectComponent.prototype.getTrianglePath = /**
     * @protected
     * @return {?}
     */
    function () {
        if (!this.polygon)
            return [];
        /** @type {?} */
        var positionDot = this.trackedObject.position;
        /** @type {?} */
        var center = positionDot;
        /** @type {?} */
        var h = this.trackedObject.heading || 0;
        /** @type {?} */
        var w = 50;
        /** @type {?} */
        var l = 100;
        /** @type {?} */
        var rear = google.maps.geometry.spherical.computeOffset(center, l / 2 * this.scale, h + 180);
        /** @type {?} */
        var rearLeft = google.maps.geometry.spherical.computeOffset(rear, w / 2 * this.scale, h - 90);
        /** @type {?} */
        var rearRight = google.maps.geometry.spherical.computeOffset(rear, w / 2 * this.scale, h + 90);
        /** @type {?} */
        var tip = google.maps.geometry.spherical.computeOffset(rear, l * this.scale, h);
        return [rear, rearLeft, tip, rearRight];
    };
    /**
     * @protected
     * @param {?} start
     * @return {?}
     */
    TrackedObjectComponent.prototype.getVectorLinePath = /**
     * @protected
     * @param {?} start
     * @return {?}
     */
    function (start) {
        /** @type {?} */
        var l = SPEED_UNIT_LENGTH_M * this.trackedObject.speed;
        /** @type {?} */
        var end = google.maps.geometry.spherical.computeOffset(start, l, this.trackedObject.speed);
        return [start, end];
    };
    /**
     * @param {?} show
     * @return {?}
     */
    TrackedObjectComponent.prototype.displayInfowindow = /**
     * @param {?} show
     * @return {?}
     */
    function (show) {
        if (!this.infowindow)
            return;
        if (show) {
            /** @type {?} */
            var o = this.trackedObject.position;
            this.infowindow.open(o);
        }
        else {
            this.infowindow.close();
        }
    };
    /**
     * @return {?}
     */
    TrackedObjectComponent.prototype.drawObject = /**
     * @return {?}
     */
    function () {
        if (!this.dotMarker)
            this.initDotaMarker();
        this.initSpeedPolyline();
        if (!this.trackedObject.position)
            return;
        this.setupEventListeners();
        /** @type {?} */
        var showDot = !this.isMoving;
        /** @type {?} */
        var showTriangle = this.isMoving && !this.trackedObject.icon;
        /** @type {?} */
        var showSpeedLine = this.drawSpeedVector && this.isMoving && this.zoom >= LOD.speed;
        // Show triangle
        if (showTriangle) {
            /** @type {?} */
            var polygonPath = this.getTrianglePath();
            if (polygonPath.length) {
                this.polygon.setOptions({
                    fillOpacity: !this.offline ? .55 : 0,
                    fillColor: this.color,
                    strokeColor: this.color,
                });
                this.polygon.setPath(polygonPath);
                this.polygon.setVisible(true);
                this.polygon.setMap(this.googleMaps.map);
            }
        }
        else {
            this.polygon.setVisible(false);
            this.polygon.setMap(null);
        }
        // Draw speed vector
        if (showSpeedLine) {
            /** @type {?} */
            var o = this.trackedObject.position;
            /** @type {?} */
            var linePath = this.getVectorLinePath(o);
            this.vectorLine.setPath(linePath);
            this.vectorLine.setVisible(true);
            this.vectorLine.setMap(this.googleMaps.map);
        }
        else {
            this.vectorLine.setVisible(false);
            this.vectorLine.setMap(null);
        }
        // Update dot icon
        this.dotMarker.setIcon(this.trackedObject.icon ||
            {
                path: google.maps.SymbolPath.CIRCLE,
                fillColor: this.color,
                fillOpacity: !this.offline && showDot ? 0.6 : 0,
                strokeColor: this.color,
                strokeOpacity: showDot ? 0.9 : 0,
                strokeWeight: 1,
                scale: 5 * (this.trackedObject.scale || 1),
                labelOrigin: new google.maps.Point(0, 5),
                anchor: new google.maps.Point(.5, .5),
            });
        this.dotMarker.setLabel(this.zoom >= LOD.nameLabels ? this.trackedObject.label : '');
        this.dotMarker.setPosition(this.trackedObject.position);
        this.dotMarker.setMap(this.googleMaps.map);
        this.dotMarker.setVisible(true);
    };
    /**
     * @return {?}
     */
    TrackedObjectComponent.prototype.onMouseOver = /**
     * @return {?}
     */
    function () {
        this.displayInfowindow(true);
    };
    /**
     * @return {?}
     */
    TrackedObjectComponent.prototype.onMouseOut = /**
     * @return {?}
     */
    function () {
        this.displayInfowindow(false);
    };
    /**
     * @return {?}
     */
    TrackedObjectComponent.prototype.onZoomChanged = /**
     * @return {?}
     */
    function () {
        this.drawObject();
    };
    TrackedObjectComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"], args: [{
                    selector: 'gmtv-tracked-object',
                    template: "<gmtv-infowindow [template]=\"template\" [context]=\"{$implicit: trackedObject}\"></gmtv-infowindow>"
                }] }
    ];
    /** @nocollapse */
    TrackedObjectComponent.ctorParameters = function () { return [
        { type: GoogleMapsWrapper }
    ]; };
    TrackedObjectComponent.propDecorators = {
        trackedObject: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"] }],
        infowindow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"], args: [InfowindowComponent,] }]
    };
    return TrackedObjectComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Creates the default user location button.
 *
 * ⚠ Add this component as sibling **AFTER the
 * map element**, so if renders on top of it.
 *
 * \@example
 * <div id="parent" style="height: 100%; width: 100%;">
 *   <div id="map" #map></div>
 *   <gmtv-geolocation-button (locate)="onLocation()"></gmtv-geolocation-button>
 * </div>
 */
var GeolocationButtonComponent = /** @class */ (function () {
    function GeolocationButtonComponent(googlemapsWrapper) {
        this.googlemapsWrapper = googlemapsWrapper;
        /**
         * Emited after obtaining the user's location
         */
        this.locate = new _angular_core__WEBPACK_IMPORTED_MODULE_5__["EventEmitter"]();
    }
    /**
     * Center map on user's location
     */
    /**
     * Center map on user's location
     * @return {?}
     */
    GeolocationButtonComponent.prototype.centerOnUser = /**
     * Center map on user's location
     * @return {?}
     */
    function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((/**
             * @param {?} position
             * @return {?}
             */
            function (position) {
                /** @type {?} */
                var lng = position.coords.longitude;
                /** @type {?} */
                var lat = position.coords.latitude;
                _this.googlemapsWrapper.map.setCenter({ lat: lat, lng: lng });
                if (_this._geoLocationMarker)
                    _this._geoLocationMarker.setMap(null);
                _this._geoLocationMarker = new GeolocationMarker(_this.googlemapsWrapper.map);
                _this.locate.emit(_this._geoLocationMarker.position);
            }), (/**
             * @param {?} error
             * @return {?}
             */
            function (error) {
                console.error(error);
            }), { enableHighAccuracy: true });
        }
        else {
            console.error('No support for geolocation');
        }
    };
    GeolocationButtonComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"], args: [{
                    selector: 'gmtv-geolocation-button',
                    template: "<button aria-label=\"Show Your Location\" id=\"widget-mylocation\" class=\"widget-mylocation-button ripple-container\"\r\n  (click)=\"centerOnUser()\">\r\n  <div class=\"widget-mylocation-button-icon-common widget-mylocation-button-normal widget-mylocation-cookie\"></div>\r\n</button>",
                    styles: ["#widget-mylocation{position:absolute;right:10px;bottom:110px;padding:0}.widget-mylocation-button{background-color:#fff;border-radius:3px;box-shadow:0 1px 4px rgba(0,0,0,.3);display:block;width:40px;height:40px;overflow:hidden;cursor:pointer;transition:background-color .16s ease-out}.widget-mylocation-button .widget-mylocation-button-normal{background-position:0 0}.widget-mylocation-button .widget-mylocation-cookie{background-image:url(//maps.gstatic.com/tactile/mylocation/mylocation-sprite-2x.png);background-size:200px 20px;height:100%;width:21px;background-position:2px 2px;background-repeat:no-repeat}.widget-mylocation-button-icon-common{display:block;height:18px;left:6px;margin:0;padding:0;position:absolute;top:6px;width:18px}"]
                }] }
    ];
    /** @nocollapse */
    GeolocationButtonComponent.ctorParameters = function () { return [
        { type: GoogleMapsWrapper }
    ]; };
    GeolocationButtonComponent.propDecorators = {
        locate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["Output"] }]
    };
    return GeolocationButtonComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxGooglemapsTrackingViewModule = /** @class */ (function () {
    function NgxGooglemapsTrackingViewModule() {
    }
    NgxGooglemapsTrackingViewModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__["NgModule"], args: [{
                    declarations: [
                        NgxGooglemapsTrackingViewComponent,
                        TrackedObjectComponent,
                        InfowindowComponent,
                        GeolocationButtonComponent
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]
                    ],
                    providers: [GoogleMapsWrapper],
                    exports: [
                        NgxGooglemapsTrackingViewComponent,
                        InfowindowComponent,
                        GeolocationButtonComponent
                    ]
                },] }
    ];
    return NgxGooglemapsTrackingViewModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-googlemaps-tracking-view.js.map

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Center Pin Example -->\r\n<!-- <button (click)=\"map.centerPin.enable(infowindowLocation, '<yourApuKey>')\">Add center Pin</button>\r\n<button (click)=\"map.centerPin.disable()\">Remove Pin</button>\r\n<ng-template #infowindowLocation let-address>\r\n  <div style=\"min-height: 20px; min-width: 50px;\">\r\n    <span *ngIf=\"!address\">Loading...</span>\r\n    <span *ngIf=\"!!address\">{{address}}</span>\r\n  </div>\r\n</ng-template> -->\r\n\r\n\r\n<div id=\"parent\" style=\"height: 100%; width: 100%;\">\r\n\r\n  <gmtv-map [data]=\"objectsToTrack\" [template]=\"infowindow\" [mapOptions]=\"mapOptions\" [showLocationButton]=\"true\" #map>\r\n    <ng-template #infowindow let-o>\r\n      <div>\r\n        <h3>Flight #{{o.label?.text}} <span class=\"flag-icon flag-icon-{{getIsoCode(o.country)?.toLowerCase()}}\"\r\n            [title]=\"o.country\"></span></h3>\r\n        <span><strong>Altitude: </strong>{{o.altitude | number: '1.0-0'}}m</span>\r\n      </div>\r\n    </ng-template>\r\n  </gmtv-map>\r\n\r\n  <gmtv-geolocation-button></gmtv-geolocation-button>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#parent {\n  padding-top: env(safe-area-inset-top, 40px);\n  padding-bottom: env(safe-area-inset-bottom, 40px); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxSYXNjaGlkXFxHaXRcXGFuZ3VsYXJcXGdvb2dsZW1hcHMtdHJhY2tpbmctdmlldy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkNBQTJDO0VBQzNDLGlEQUFpRCxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3BhcmVudCB7XHJcbiAgcGFkZGluZy10b3A6IGVudihzYWZlLWFyZWEtaW5zZXQtdG9wLCA0MHB4KTtcclxuICBwYWRkaW5nLWJvdHRvbTogZW52KHNhZmUtYXJlYS1pbnNldC1ib3R0b20sIDQwcHgpO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_googlemaps_tracking_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-googlemaps-tracking-view */ "./dist/ngx-googlemaps-tracking-view/fesm5/ngx-googlemaps-tracking-view.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var i18n_iso_countries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! i18n-iso-countries */ "./node_modules/i18n-iso-countries/index.js");
/* harmony import */ var i18n_iso_countries__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(i18n_iso_countries__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! randomcolor */ "./node_modules/randomcolor/randomColor.js");
/* harmony import */ var randomcolor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(randomcolor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var parse_svg_path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! parse-svg-path */ "./node_modules/parse-svg-path/index.js");
/* harmony import */ var parse_svg_path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(parse_svg_path__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var extract_svg_path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! extract-svg-path */ "./node_modules/extract-svg-path/browser.js");
/* harmony import */ var extract_svg_path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(extract_svg_path__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var load_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! load-svg */ "./node_modules/load-svg/index.js");
/* harmony import */ var load_svg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(load_svg__WEBPACK_IMPORTED_MODULE_8__);

/// <reference types="@types/googlemaps" />








i18n_iso_countries__WEBPACK_IMPORTED_MODULE_4__["registerLocale"](__webpack_require__(/*! i18n-iso-countries/langs/en.json */ "./node_modules/i18n-iso-countries/langs/en.json"));
var AppComponent = /** @class */ (function () {
    function AppComponent(http, vc) {
        var _this = this;
        this.http = http;
        this.vc = vc;
        this.objectsToTrack = [];
        this.symbolPath = '';
        this.mapOptions = {
            center: {
                lat: 42.504154,
                lng: 12.646361
            },
            zoom: 6,
            mapTypeId: google.maps.MapTypeId.SATELLITE,
        };
        // Load svg as symbol path
        load_svg__WEBPACK_IMPORTED_MODULE_8__('assets/baseline-local_airport-24px.svg', function (err, svg) {
            var paths = parse_svg_path__WEBPACK_IMPORTED_MODULE_6__(extract_svg_path__WEBPACK_IMPORTED_MODULE_7__["parse"](svg));
            var i = paths.findIndex(function (p) { return p[0] == 'z'; });
            _this.symbolPath = paths
                .slice(0, i - 1)
                .map(function (p) { return p.join(' '); }).join(' ');
        });
    }
    AppComponent.prototype.ngAfterContentInit = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.mapView.ready()];
                    case 1:
                        _a.sent();
                        this.getAircracts();
                        setInterval(function () { return _this.getAircracts(); }, 10000);
                        return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.prototype.getAircracts = function () {
        var _this = this;
        var bounds = this.mapView.map.getBounds();
        var ne = bounds.getNorthEast();
        var sw = bounds.getSouthWest();
        this.http.get("https://opensky-network.org/api/states/all?lamin=" + sw.lat() + "&lomin=" + sw.lng() + "&lamax=" + ne.lat() + "&lomax=" + ne.lng())
            .subscribe(function (response) {
            _this.objectsToTrack = response.states &&
                response.states.map(function (aircraft) {
                    var found = _this.objectsToTrack.find(function (a) { return a.id == aircraft[0]; });
                    var trkObj = {
                        altitude: aircraft[13],
                        id: aircraft[0],
                        color: found && found.color || randomcolor__WEBPACK_IMPORTED_MODULE_5__(),
                        country: aircraft[2],
                        heading: aircraft[10],
                        icon: found && found.icon || _this.getIcon(aircraft[10]),
                        // speed: 0,
                        label: {
                            text: aircraft[0].toLocaleUpperCase(),
                            color: 'white'
                        },
                        // isOffline: true,
                        onGround: aircraft[8],
                        position: new google.maps.LatLng(aircraft[6], aircraft[5]),
                    };
                    return trkObj;
                })
                    .filter(function (a) { return !a.onGround; })
                    .splice(0, 50)
                || [];
        });
    };
    AppComponent.prototype.getIsoCode = function (countryName) {
        return i18n_iso_countries__WEBPACK_IMPORTED_MODULE_4__["getAlpha2Code"](countryName, 'en');
    };
    AppComponent.prototype.getIcon = function (rotation) {
        var color = randomcolor__WEBPACK_IMPORTED_MODULE_5__();
        return {
            path: this.symbolPath,
            labelOrigin: new google.maps.Point(0, 5),
            fillColor: color,
            fillOpacity: .6,
            strokeColor: color,
            strokeOpacity: 1,
            strokeWeight: 2,
            scale: 2,
            rotation: rotation
        };
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ngx_googlemaps_tracking_view__WEBPACK_IMPORTED_MODULE_2__["NgxGooglemapsTrackingViewComponent"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_googlemaps_tracking_view__WEBPACK_IMPORTED_MODULE_2__["NgxGooglemapsTrackingViewComponent"])
    ], AppComponent.prototype, "mapView", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_googlemaps_tracking_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-googlemaps-tracking-view */ "./dist/ngx-googlemaps-tracking-view/fesm5/ngx-googlemaps-tracking-view.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");






var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ngx_googlemaps_tracking_view__WEBPACK_IMPORTED_MODULE_4__["NgxGooglemapsTrackingViewModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Raschid\Git\angular\googlemaps-tracking-view\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
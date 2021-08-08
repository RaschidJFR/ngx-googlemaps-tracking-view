"use strict";
(self["webpackChunktracking_view"] = self["webpackChunktracking_view"] || []).push([["stencil-ion-backdrop-md-entry-js"],{

/***/ 49058:
/*!********************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-backdrop-md.entry.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ion_backdrop": function() { return /* binding */ Backdrop; }
/* harmony export */ });
/* harmony import */ var _index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-2cd7e630.js */ 14007);
/* harmony import */ var _ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-a175fa73.js */ 77362);
/* harmony import */ var _helpers_d8b49b57_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers-d8b49b57.js */ 36173);
/* harmony import */ var _index_e44ebcc6_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-e44ebcc6.js */ 23719);





const backdropIosCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";

const backdropMdCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";

const Backdrop = class {
    constructor(hostRef) {
        (0,_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        this.lastClick = -10000;
        this.blocker = _index_e44ebcc6_js__WEBPACK_IMPORTED_MODULE_3__.GESTURE_CONTROLLER.createBlocker({
            disableScroll: true
        });
        /**
         * If `true`, the backdrop will be visible.
         */
        this.visible = true;
        /**
         * If `true`, the backdrop will can be clicked and will emit the `ionBackdropTap` event.
         */
        this.tappable = true;
        /**
         * If `true`, the backdrop will stop propagation on tap.
         */
        this.stopPropagation = true;
        this.ionBackdropTap = (0,_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__.d)(this, "ionBackdropTap", 7);
    }
    connectedCallback() {
        if (this.stopPropagation) {
            this.blocker.block();
        }
    }
    disconnectedCallback() {
        this.blocker.unblock();
    }
    onTouchStart(ev) {
        this.lastClick = (0,_helpers_d8b49b57_js__WEBPACK_IMPORTED_MODULE_2__.n)(ev);
        this.emitTap(ev);
    }
    onMouseDown(ev) {
        if (this.lastClick < (0,_helpers_d8b49b57_js__WEBPACK_IMPORTED_MODULE_2__.n)(ev) - 2500) {
            this.emitTap(ev);
        }
    }
    emitTap(ev) {
        if (this.stopPropagation) {
            ev.preventDefault();
            ev.stopPropagation();
        }
        if (this.tappable) {
            this.ionBackdropTap.emit();
        }
    }
    render() {
        const mode = (0,_ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);
        return ((0,_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__.H, { tabindex: "-1", class: {
                [mode]: true,
                'backdrop-hide': !this.visible,
                'backdrop-no-tappable': !this.tappable,
            } }));
    }
};
Backdrop.style = {
    /*STENCIL:MODE:ios*/ ios: backdropIosCss,
    /*STENCIL:MODE:md*/ md: backdropMdCss
};




/***/ })

}]);
//# sourceMappingURL=stencil-ion-backdrop-md-entry-js-es2015.js.map
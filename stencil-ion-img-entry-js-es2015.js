"use strict";
(self["webpackChunktracking_view"] = self["webpackChunktracking_view"] || []).push([["stencil-ion-img-entry-js"],{

/***/ 78967:
/*!************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-img.entry.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ion_img": function() { return /* binding */ Img; }
/* harmony export */ });
/* harmony import */ var _index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-2cd7e630.js */ 14007);
/* harmony import */ var _ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ionic-global-a175fa73.js */ 77362);



const imgCss = ":host{display:block;-o-object-fit:contain;object-fit:contain}img{display:block;width:100%;height:100%;-o-object-fit:inherit;object-fit:inherit;-o-object-position:inherit;object-position:inherit}";

const Img = class {
    constructor(hostRef) {
        (0,_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        this.onLoad = () => {
            this.ionImgDidLoad.emit();
        };
        this.onError = () => {
            this.ionError.emit();
        };
        this.ionImgWillLoad = (0,_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__.d)(this, "ionImgWillLoad", 7);
        this.ionImgDidLoad = (0,_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__.d)(this, "ionImgDidLoad", 7);
        this.ionError = (0,_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__.d)(this, "ionError", 7);
    }
    srcChanged() {
        this.addIO();
    }
    componentDidLoad() {
        this.addIO();
    }
    addIO() {
        if (this.src === undefined) {
            return;
        }
        if ('IntersectionObserver' in window) {
            this.removeIO();
            this.io = new IntersectionObserver(data => {
                // because there will only ever be one instance
                // of the element we are observing
                // we can just use data[0]
                if (data[0].isIntersecting) {
                    this.load();
                    this.removeIO();
                }
            });
            this.io.observe(this.el);
        }
        else {
            // fall back to setTimeout for Safari and IE
            setTimeout(() => this.load(), 200);
        }
    }
    load() {
        this.loadError = this.onError;
        this.loadSrc = this.src;
        this.ionImgWillLoad.emit();
    }
    removeIO() {
        if (this.io) {
            this.io.disconnect();
            this.io = undefined;
        }
    }
    render() {
        return ((0,_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__.H, { class: (0,_ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__.b)(this) }, (0,_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__.h)("img", { decoding: "async", src: this.loadSrc, alt: this.alt, onLoad: this.onLoad, onError: this.loadError })));
    }
    get el() { return (0,_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__.e)(this); }
    static get watchers() { return {
        "src": ["srcChanged"]
    }; }
};
Img.style = imgCss;




/***/ })

}]);
//# sourceMappingURL=stencil-ion-img-entry-js-es2015.js.map
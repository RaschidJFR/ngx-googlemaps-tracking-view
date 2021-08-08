(function () {
  "use strict";

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunktracking_view"] = self["webpackChunktracking_view"] || []).push([["stencil-ion-text-entry-js"], {
    /***/
    2699: function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ion_text": function ion_text() {
          return (
            /* binding */
            Text
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./index-2cd7e630.js */
      14007);
      /* harmony import */


      var _ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./ionic-global-a175fa73.js */
      77362);
      /* harmony import */


      var _theme_c2dc54d9_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./theme-c2dc54d9.js */
      39551);

      var textCss = ":host(.ion-color){color:var(--ion-color-base)}";

      var Text = /*#__PURE__*/function () {
        function Text(hostRef) {
          _classCallCheck(this, Text);

          (0, _index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__.r)(this, hostRef);
        }

        _createClass(Text, [{
          key: "render",
          value: function render() {
            var mode = (0, _ionic_global_a175fa73_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);
            return (0, _index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__.h)(_index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__.H, {
              "class": Object.assign(Object.assign({}, (0, _theme_c2dc54d9_js__WEBPACK_IMPORTED_MODULE_2__.c)(this.color)), _defineProperty({}, mode, true))
            }, (0, _index_2cd7e630_js__WEBPACK_IMPORTED_MODULE_0__.h)("slot", null));
          }
        }]);

        return Text;
      }();

      Text.style = textCss;
      /***/
    }
  }]);
})();
//# sourceMappingURL=stencil-ion-text-entry-js-es5.js.map
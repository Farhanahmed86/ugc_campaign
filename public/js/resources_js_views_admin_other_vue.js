(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_admin_other_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/other.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/other.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.esm.js");
/* harmony import */ var _admin_components_lib_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../admin/components/lib/api */ "./resources/js/views/admin/components/lib/api.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 //  import {Typehead } from '../../components/typehead'

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  // components: { Typehead},
  data: function data() {
    return {
      model: {
        data: []
      }
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    (0,_admin_components_lib_api__WEBPACK_IMPORTED_MODULE_0__.get)('/api/inventory', to.query).then(function (res) {
      next(function (vm) {
        return vm.setData(res);
      });
    });
  },
  beforeRouteUpdate: function beforeRouteUpdate(to, from, next) {
    var _this = this;

    (0,_admin_components_lib_api__WEBPACK_IMPORTED_MODULE_0__.get)('/api/inventory', to.query).then(function (res) {
      _this.setData(res);

      next();
    });
  },
  methods: {
    detailsPage: function detailsPage(item) {
      this.$router.push("/inventory/".concat(item.id));
    },
    setData: function setData(res) {
      vue__WEBPACK_IMPORTED_MODULE_1__.default.set(this.$data, 'model', res.data.results);
      this.page = this.model.current_page;
      console.log(res.data.results);
    },
    nextPage: function nextPage() {
      if (this.model.next_page_url) {
        var query = Object.assign({}, this.$route.query);
        query.page = query.page ? Number(query.page) + 1 : 2;
        this.$router.push({
          path: '/inventory/stock',
          query: query
        });
      }
    },
    prevPage: function prevPage() {
      if (this.model.prev_page_url) {
        var query = Object.assign({}, this.$route.query);
        query.page = query.page ? Number(query.page) - 1 : 1;
        this.$router.push({
          path: '/inventory/stock',
          query: query
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/views/admin/other.vue":
/*!********************************************!*\
  !*** ./resources/js/views/admin/other.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _other_vue_vue_type_template_id_34d41021___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./other.vue?vue&type=template&id=34d41021& */ "./resources/js/views/admin/other.vue?vue&type=template&id=34d41021&");
/* harmony import */ var _other_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./other.vue?vue&type=script&lang=js& */ "./resources/js/views/admin/other.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _other_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _other_vue_vue_type_template_id_34d41021___WEBPACK_IMPORTED_MODULE_0__.render,
  _other_vue_vue_type_template_id_34d41021___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/admin/other.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/admin/other.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/views/admin/other.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_other_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./other.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/other.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_other_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/admin/other.vue?vue&type=template&id=34d41021&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/admin/other.vue?vue&type=template&id=34d41021& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_other_vue_vue_type_template_id_34d41021___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_other_vue_vue_type_template_id_34d41021___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_other_vue_vue_type_template_id_34d41021___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./other.vue?vue&type=template&id=34d41021& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/other.vue?vue&type=template&id=34d41021&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/other.vue?vue&type=template&id=34d41021&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/admin/other.vue?vue&type=template&id=34d41021& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "panel" }, [
    _vm._m(0),
    _vm._v(" "),
    _c("div", { staticClass: "panel-body" }, [
      _c("table", { staticClass: "table table-link" }, [
        _vm._m(1),
        _vm._v(" "),
        _c(
          "tbody",
          _vm._l(_vm.model.data, function(item) {
            return _c("tr", { key: item.data }, [
              _c("td", { staticClass: "w-3" }, [_vm._v(_vm._s(item.id))]),
              _vm._v(" "),
              _c("td", { staticClass: "w-3" }, [
                _vm._v(_vm._s(item.vendor.name))
              ]),
              _vm._v(" "),
              _c("td", { staticClass: "w-3" }, [_vm._v(_vm._s(item.item))]),
              _vm._v(" "),
              _c("td", { staticClass: "w-3" }, [_vm._v(_vm._s(item.quantity))]),
              _vm._v(" "),
              _c("td", { staticClass: "w-3" }, [
                _vm._v(_vm._s(item.quantity - item.stock))
              ])
            ])
          }),
          0
        )
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "panel-footer flex-between" }, [
      _c("div", [
        _c("small", [
          _vm._v(
            "Showing " +
              _vm._s(_vm.model.from) +
              " - " +
              _vm._s(_vm.model.to) +
              " of " +
              _vm._s(_vm.model.total)
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", [
        _c(
          "button",
          {
            staticClass: "btn btn-sm",
            attrs: { disabled: !_vm.model.prev_page_url },
            on: { click: _vm.prevPage }
          },
          [_vm._v("\n                Prev\n            ")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "btn btn-sm",
            attrs: { disabled: !_vm.model.next_page_url },
            on: { click: _vm.nextPage }
          },
          [_vm._v("\n                Next\n            ")]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "panel-heading" }, [
      _c("span", { staticClass: "panel-title" }, [_vm._v("Stock Report")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("INVENTORY ID")]),
        _vm._v(" "),
        _c("th", [_vm._v("VENDOR NAME")]),
        _vm._v(" "),
        _c("th", [_vm._v("ITEM")]),
        _vm._v(" "),
        _c("th", [_vm._v("QUANTITY")]),
        _vm._v(" "),
        _c("th", [_vm._v("REMANING STOCK")])
      ])
    ])
  }
]
render._withStripped = true



/***/ })

}]);
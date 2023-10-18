(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_register_company_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoadingButton.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoadingButton.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "LoadingButton",
  props: {
    text: String,
    isLoading: Boolean
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/company.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/company.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_notify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/notify.js */ "./resources/js/utils/notify.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Nav */ "./resources/js/components/Nav.vue");
/* harmony import */ var _components_LoadingButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/LoadingButton */ "./resources/js/components/LoadingButton.vue");
/* harmony import */ var _admin_components_lib_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../admin/components/lib/api */ "./resources/js/views/admin/components/lib/api.js");
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





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "Register",
  components: {
    Nav: _components_Nav__WEBPACK_IMPORTED_MODULE_2__.default,
    LoadingButton: _components_LoadingButton__WEBPACK_IMPORTED_MODULE_3__.default
  },
  data: function data() {
    return {
      form: {
        company: '',
        id: ''
      },
      company_id: '',
      company_type: '',
      method: 'POST',
      bgColor1: 'white',
      bgColor2: 'white',
      bgColor3: 'white',
      bgColor4: 'white',
      bgColor5: 'white',
      bgColor6: 'white',
      bgColor7: 'white',
      color1: 'black',
      color2: 'black',
      color3: 'black',
      color4: 'black',
      color5: 'black',
      color6: 'black',
      color7: 'black'
    };
  },
  created: function created() {
    console.log(this.$route.params.id);
    this.company_id = this.$route.params.id; // const companyId = this.$route.params.id;
  },
  methods: {
    datas: function datas(e, num) {
      this.company_type = e;
      console.log(this.company_type);

      if (num == 1) {
        this.bgColor1 = '#2A2C76';
        this.bgColor2 = 'white';
        this.bgColor3 = 'white';
        this.bgColor4 = 'white';
        this.bgColor5 = 'white';
        this.bgColor6 = 'white';
        this.bgColor7 = 'white';
        this.color1 = 'white';
        this.color2 = 'black';
        this.color3 = 'black';
        this.color4 = 'black';
        this.color5 = 'black';
        this.color6 = 'black';
        this.color7 = 'black';
      }

      if (num == 2) {
        this.bgColor1 = 'white';
        this.bgColor2 = '#2A2C76';
        this.bgColor3 = 'white';
        this.bgColor4 = 'white';
        this.bgColor5 = 'white';
        this.bgColor6 = 'white';
        this.bgColor7 = 'white';
        this.color1 = 'black';
        this.color2 = 'white';
        this.color3 = 'black';
        this.color4 = 'black';
        this.color5 = 'black';
        this.color6 = 'black';
        this.color7 = 'black';
      }

      if (num == 3) {
        this.bgColor1 = 'white';
        this.bgColor2 = 'white';
        this.bgColor3 = '#2A2C76';
        this.bgColor4 = 'white';
        this.bgColor5 = 'white';
        this.bgColor6 = 'white';
        this.bgColor7 = 'white';
        this.color1 = 'black';
        this.color2 = 'black';
        this.color3 = 'white';
        this.color4 = 'black';
        this.color5 = 'black';
        this.color6 = 'black';
        this.color7 = 'black';
      }

      if (num == 4) {
        this.bgColor1 = 'white';
        this.bgColor2 = 'white';
        this.bgColor3 = 'white';
        this.bgColor4 = '#2A2C76';
        this.bgColor5 = 'white';
        this.bgColor6 = 'white';
        this.bgColor7 = 'white';
        this.color1 = 'black';
        this.color2 = 'black';
        this.color3 = 'black';
        this.color4 = 'white';
        this.color5 = 'black';
        this.color6 = 'black';
        this.color7 = 'black';
      }

      if (num == 5) {
        this.bgColor1 = 'white';
        this.bgColor2 = 'white';
        this.bgColor3 = 'white';
        this.bgColor4 = 'white';
        this.bgColor5 = '#2A2C76';
        this.bgColor6 = 'white';
        this.bgColor7 = 'white';
        this.color1 = 'black';
        this.color2 = 'black';
        this.color3 = 'black';
        this.color4 = 'black';
        this.color5 = 'white';
        this.color6 = 'black';
        this.color7 = 'black';
      }

      if (num == 6) {
        this.bgColor1 = 'white';
        this.bgColor2 = 'white';
        this.bgColor3 = 'white';
        this.bgColor4 = 'white';
        this.bgColor5 = 'white';
        this.bgColor6 = '#2A2C76';
        this.bgColor7 = 'white';
        this.color1 = 'black';
        this.color2 = 'black';
        this.color3 = 'black';
        this.color4 = 'black';
        this.color5 = 'black';
        this.color6 = 'white';
        this.color7 = 'black';
      }

      if (num == 7) {
        this.bgColor1 = 'white';
        this.bgColor2 = 'white';
        this.bgColor3 = 'white';
        this.bgColor4 = 'white';
        this.bgColor5 = 'white';
        this.bgColor6 = 'white';
        this.bgColor7 = '#2A2C76';
        this.color1 = 'black';
        this.color2 = 'black';
        this.color3 = 'black';
        this.color4 = 'black';
        this.color5 = 'black';
        this.color6 = 'black';
        this.color7 = 'white';
      }
    },
    save: function save() {
      var _this = this;

      this.form.company = this.company_type;
      this.form.id = this.company_id;
      (0,_admin_components_lib_api__WEBPACK_IMPORTED_MODULE_4__.byMethod)(this.method, 'company_register', this.form).then(function (res) {
        if (res.data && res.data.saved) {
          _this.$router.push("/register/company_category/".concat(_this.company_id));
        }
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this.errors = error.response.data.errors;
        }

        _this.isProcessing = false;
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/utils/notify.js":
/*!**************************************!*\
  !*** ./resources/js/utils/notify.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "authError": () => (/* binding */ authError)
/* harmony export */ });
function authError(error) {
  var errorMessages = [];
  var detailedMessages = [];
  var errorMessage = error.response.data.message || "The given data was invalid.";
  errorMessages.push(errorMessage);

  if (error.response.data.errors) {
    detailedMessages = [].concat.apply([], Object.values(error.response.data.errors));
    errorMessages = errorMessages.concat(detailedMessages);
  }

  errorMessages.forEach(function (message) {
    var toast = Vue.toasted.show(message, {
      theme: "toasted-primary",
      position: "top-right",
      duration: 5000
    });
  });
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/company.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/company.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.main-form {\n    width: 100%;\n    background-color: #ECEC4F;\n}\n.container-1{\n    width: 100%;\n    max-width: 30%;\n    margin: 0 auto;\n    padding: 15px 0px;\n}\n.from-img img {\n    width: 85%;\n}\n.form-group {\n    width: 100%;\n    /* padding: 30px 0px 100px 0px; */\n}\n.form-type {\n    width: 100%;\n}\n.form-type h2{\n    font-size: 25px;\n    font-weight: bold;\n    color: #000;\n}\n.form-type p{\n    font-size: 20px;\n    font-weight:400;\n    color: #000;\n}\n.col {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n}\n.card-body {\n    font-size: 18px;\n    font-weight:400;\n    padding: 8px 0px 8px 50px !important;\n}\n.next-button {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    padding-top: 1%;\n}\nbutton.btn.btn-dark {\n    padding: 10px 150px;\n    font-size: 20px;\n    font-weight: 400;\n    background-color:#2A2C76;\n}\nhtml,body{\n    background-color:#ECEC4F ;\n}\n@media screen and (max-width: 600px){\n.form-type h2 {\n    font-size: 14px;\n    font-weight: bold;\n}\n.form-type p {\n    font-size: 12px;\n    font-weight: 400;\n}\n.card-body {\n    font-size: 12px;\n    font-weight: 400;\n    padding: 8px 0px 8px 16px !important;\n}\n.container-1 {\n    width: 100%;\n    max-width: 60%;\n    margin: 0 auto;\n    padding: 20px 0px;\n}\n.form-group {\n    width: 100%;\n    padding: 10px 0px 50px 0px;\n}\nbutton.btn.btn-dark {\n    padding: 5px 55px;\n    font-size: 12px;\n    font-weight: 400;\n    background-color: #000;\n}\n.next-button {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    gap: 15px;\n}\n.col {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/company.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/company.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./company.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/company.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/LoadingButton.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/LoadingButton.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LoadingButton_vue_vue_type_template_id_b8be879a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoadingButton.vue?vue&type=template&id=b8be879a& */ "./resources/js/components/LoadingButton.vue?vue&type=template&id=b8be879a&");
/* harmony import */ var _LoadingButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LoadingButton.vue?vue&type=script&lang=js& */ "./resources/js/components/LoadingButton.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__.default)(
  _LoadingButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _LoadingButton_vue_vue_type_template_id_b8be879a___WEBPACK_IMPORTED_MODULE_0__.render,
  _LoadingButton_vue_vue_type_template_id_b8be879a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/LoadingButton.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/views/register/company.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/register/company.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _company_vue_vue_type_template_id_036684e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./company.vue?vue&type=template&id=036684e0& */ "./resources/js/views/register/company.vue?vue&type=template&id=036684e0&");
/* harmony import */ var _company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./company.vue?vue&type=script&lang=js& */ "./resources/js/views/register/company.vue?vue&type=script&lang=js&");
/* harmony import */ var _company_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./company.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/register/company.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _company_vue_vue_type_template_id_036684e0___WEBPACK_IMPORTED_MODULE_0__.render,
  _company_vue_vue_type_template_id_036684e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/register/company.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/LoadingButton.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/LoadingButton.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoadingButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoadingButton.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/register/company.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/views/register/company.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./company.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/company.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/register/company.vue?vue&type=style&index=0&lang=css&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/register/company.vue?vue&type=style&index=0&lang=css& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./company.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/company.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/LoadingButton.vue?vue&type=template&id=b8be879a&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/LoadingButton.vue?vue&type=template&id=b8be879a& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingButton_vue_vue_type_template_id_b8be879a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingButton_vue_vue_type_template_id_b8be879a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_LoadingButton_vue_vue_type_template_id_b8be879a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LoadingButton.vue?vue&type=template&id=b8be879a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoadingButton.vue?vue&type=template&id=b8be879a&");


/***/ }),

/***/ "./resources/js/views/register/company.vue?vue&type=template&id=036684e0&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/register/company.vue?vue&type=template&id=036684e0& ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_template_id_036684e0___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_template_id_036684e0___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_company_vue_vue_type_template_id_036684e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./company.vue?vue&type=template&id=036684e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/company.vue?vue&type=template&id=036684e0&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoadingButton.vue?vue&type=template&id=b8be879a&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LoadingButton.vue?vue&type=template&id=b8be879a& ***!
  \*************************************************************************************************************************************************************************************************************************/
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
  return _c(
    "button",
    {
      staticClass: "btn btn-primary btn-user btn-block",
      attrs: { type: "submit", disabled: _vm.isLoading }
    },
    [
      !_vm.isLoading ? _c("span", [_vm._v(_vm._s(_vm.text))]) : _vm._e(),
      _vm._v(" "),
      _vm.isLoading
        ? _c(
            "div",
            {
              staticClass: "spinner-border text-light",
              attrs: { role: "status" }
            },
            [_c("span", { staticClass: "sr-only" }, [_vm._v("Loading...")])]
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/company.vue?vue&type=template&id=036684e0&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/company.vue?vue&type=template&id=036684e0& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "main-form" }, [
    _c("div", { staticClass: "container-1" }, [
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c("form", [
        _c("div", { staticClass: "form-group" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col" }, [
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  {
                    staticClass: "card-body",
                    style: { backgroundColor: _vm.bgColor1, color: _vm.color1 },
                    on: {
                      click: function($event) {
                        return _vm.datas("E-commerce", 1)
                      }
                    }
                  },
                  [_vm._v("E-commerce")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  {
                    staticClass: "card-body",
                    style: { backgroundColor: _vm.bgColor2, color: _vm.color2 },
                    on: {
                      click: function($event) {
                        return _vm.datas("Entreprise B2C", 2)
                      }
                    }
                  },
                  [_vm._v("Entreprise B2C")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  {
                    staticClass: "card-body",
                    style: { backgroundColor: _vm.bgColor3, color: _vm.color3 },
                    on: {
                      click: function($event) {
                        return _vm.datas("Restaurateur", 3)
                      }
                    }
                  },
                  [_vm._v("Restaurateur")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  {
                    staticClass: "card-body",
                    style: { backgroundColor: _vm.bgColor4, color: _vm.color4 },
                    on: {
                      click: function($event) {
                        return _vm.datas("Agence", 4)
                      }
                    }
                  },
                  [_vm._v("Agence")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  {
                    staticClass: "card-body",
                    style: { backgroundColor: _vm.bgColor5, color: _vm.color5 },
                    on: {
                      click: function($event) {
                        return _vm.datas("Application mobile", 5)
                      }
                    }
                  },
                  [_vm._v("Application mobile")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  {
                    staticClass: "card-body",
                    style: { backgroundColor: _vm.bgColor6, color: _vm.color6 },
                    on: {
                      click: function($event) {
                        return _vm.datas("Grande distribution & automobile", 6)
                      }
                    }
                  },
                  [_vm._v("Grande distribution & automobile")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  {
                    staticClass: "card-body",
                    style: { backgroundColor: _vm.bgColor7, color: _vm.color7 },
                    on: {
                      click: function($event) {
                        return _vm.datas("Autre", 7)
                      }
                    }
                  },
                  [_vm._v("Autre")]
                )
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "next-button" }, [
          _c(
            "button",
            {
              staticClass: "btn btn-dark",
              attrs: { type: "button" },
              on: { click: _vm.save }
            },
            [_vm._v("Suivant")]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "from-img",
        staticStyle: { width: "100%", "padding-bottom": "20px" }
      },
      [_c("img", { attrs: { src: "/images/line.png" } })]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-type" }, [
      _c("h2", [_vm._v("Quel est votre type d’entreprise ?")]),
      _vm._v(" "),
      _c("p", [_vm._v("Sélectionnez l'une des options suivantes")])
    ])
  }
]
render._withStripped = true



/***/ })

}]);
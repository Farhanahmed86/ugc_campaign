(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_register_influencer_account_vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/influencer_account.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/influencer_account.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
/* harmony import */ var _admin_components_typehead_Typehead_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../admin/components/typehead/Typehead.vue */ "./resources/js/views/admin/components/typehead/Typehead.vue");
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
    LoadingButton: _components_LoadingButton__WEBPACK_IMPORTED_MODULE_3__.default,
    Typehead: _admin_components_typehead_Typehead_vue__WEBPACK_IMPORTED_MODULE_5__.default
  },
  data: function data() {
    return {
      items: [{
        image: '/images/games.jpg',
        label: 'Gaming'
      }, {
        image: '/images/games.jpg',
        label: 'Sports'
      }, {
        image: '/images/games.jpg',
        label: 'beauty'
      }, {
        image: '/images/games.jpg',
        label: 'funny'
      }, {
        image: '/images/games.jpg',
        label: 'Art'
      }, {
        image: '/images/games.jpg',
        label: 'Nature'
      }],
      imageUrl: null,
      file: null,
      countriestURL: '/api/search/countries',
      form: {},
      // form:[],
      method: 'POST',
      first_name: "",
      last_name: "",
      pay_email: "",
      address: "",
      age: "",
      postal: "",
      gender: "",
      password: "",
      password_confirm: "",
      location: "",
      company: "",
      website: "",
      phone: "",
      selectedIndexes: [],
      selectedLabels: [],
      isLoading: false
    };
  },
  created: function created() {
    // console.log(this.$route.params.id);
    this.company_id = this.$route.params.id;
    var companyId = this.$route.params.id;
  },
  computed: {
    selectedLabels: function selectedLabels() {
      var _this = this;

      return this.selectedIndexes.map(function (index) {
        return _this.items[index].label;
      });
    }
  },
  methods: {
    toggleSelect: function toggleSelect(index, label) {
      // Toggle selection by clicking on the image
      var selectedIndex = this.selectedLabels.indexOf(label);
      console.log(selectedIndex);

      if (selectedIndex === -1) {
        // Add to selection
        this.selectedLabels.push(label);
      } else {
        // Remove from selection
        this.selectedLabels.splice(selectedIndex, 1);
      }

      console.log(this.selectedLabels);
      this.form.selectedLabelsss = this.selectedLabels;
    },
    isSelected: function isSelected(index, label) {
      // Check if the label is selected
      return this.selectedLabels.includes(label);
    },
    onStates: function onStates(e) {
      var states = e.target.value;
      Vue.set(this.form, 'states', states);
      Vue.set(this.form, 'states_name', states.name);
      Vue.set(this.form, 'states_id', states.id);
    },
    onCity: function onCity(e) {
      var city = e.target.value;
      Vue.set(this.form, 'city', city);
      Vue.set(this.form, 'city_name', city.name);
      Vue.set(this.form, 'city_id', city.id);
    },
    onCountry: function onCountry(e) {
      var countries = e.target.value;
      Vue.set(this.form, 'countries', countries);
      Vue.set(this.form, 'countries_name', countries.name);
      Vue.set(this.form, 'countries_id', countries.id);
    },
    influencer: function influencer() {},
    save: function save() {
      var _this2 = this;

      console.log('abcd');
      this.form.id = this.company_id; // this.form.first_name = this.first_name;
      // this.form.last_name = this.last_name;
      // this.form.location = this.location;
      // this.form.website = this.website;
      // this.form.company = this.company;
      // this.form.phone = this.phone;
      // this.form.id = this.company_id;
      // this.form.gender = this.gender;
      // this.form.postal = this.postal;
      // this.form.pay_email = this.pay_email;
      // this.form.age = this.age;
      // this.form.address = this.address;

      this.form.auth_type = 'influener';
      console.log(this.form);
      (0,_admin_components_lib_api__WEBPACK_IMPORTED_MODULE_4__.byMethod)(this.method, 'influencer_details', this.form).then(function (res) {
        if (res.data && res.data.saved) {
          _this2.$router.push("/influencer_uploads/".concat(_this2.company_id));
        }
      })["catch"](function (error) {
        if (error.response.status === 422) {
          _this2.errors = error.response.data.errors;
        }

        _this2.isProcessing = false;
      });
    } // async register() {
    //   this.isLoading = true;
    //   try {
    //     var response = await axios.post("registered", {
    //       first_name: this.first_name,
    //       last_name: this.last_name,
    //       email: this.email,
    //       password: this.password,
    //       password_confirm: this.password_confirm,
    //       location: this.location,
    //       website: this.website,
    //       company: this.company,
    //     });
    //     this.isLoading = false;
    //     if (response.data.must_verify_email) {
    //       this.$router.push(`/verify/user/${response.data.id}`);
    //     } else {
    //       let message =
    //         "Your countries has been created successfully.";
    //       let toast = Vue.toasted.show(message, {
    //         theme: "toasted-primary",
    //         position: "top-right",
    //         duration: 5000,
    //       });
    //       this.$router.push(`/register/company/${response.data.id}`);
    //     }
    //   } catch (error) {
    //     notify.authError(error);
    //     this.isLoading = false;
    //   }
    // },

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

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/influencer_account.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/influencer_account.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "\n.col-3 {\n      border: 1px solid #ddd;\n      margin: 10px;\n      padding: 10px;\n      text-align: center;\n      cursor: pointer;\n}\n.selected {\n      background-color: #3498db; /* Change this to your desired selected color */\n      color: #fff; /* Change this to your desired text color */\n}\n.imgs{\n  width: 100%;\n    height: 120%;\n    border-radius: 10px;\n}\n.spans{\n  color: black;\n    display: flex;\n    align-content: stretch;\n    justify-content: center;\n    font-weight: bold;\n    font-size: smaller;\n}\n.lb{\n  color: black;\n    font-weight: bold;\n}\n.form-control {\n    display: block;\n    width: 100%;\n    height: calc(2em + 0.75rem + 2px);\n    padding: 0.375rem 0.75rem;\n    font-size: 1rem;\n    font-weight: 400;\n    line-height: 1.5;\n    color: #6e707e;\n    background-color: #fff;\n    background-clip: padding-box;\n    border: 1px solid #d1d3e2;\n    border-radius: 0.35rem;\n    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n.form-check-inline {\n    display: inline-flex;\n    align-items: center;\n    padding-left: 30px;\n    margin-right: 0.75rem;}\nhtml, body{\n\n  /* background-color: #ECEC4F; */\n background-position: center;\n  background-image: url(/images/Web.png);\n  background-size: cover;\n}\n.radio_lable{\n  position: relative;\n    color: black;\n    font-size: smaller;\n    font-weight: bold;}\n.form {\n    display: flex;\n    width: 100%;\n    flex-direction: column;\n    gap: 8px;\n    max-width: 400px;\n    /* background-color: #ECEC4F; */\n    /* padding: 20px; */\n    border-radius: 20px;\n    top: 6%;\n    left: 35%;\n    position: absolute;\n}\n.title {\n  font-size: 28px;\n  color: royalblue;\n  font-weight: 600;\n  letter-spacing: -1px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding-left: 30px;\n}\n.title::before,.title::after {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  border-radius: 50%;\n  left: 0px;\n  background-color: royalblue;\n}\n.title::before {\n  width: 18px;\n  height: 18px;\n  background-color: royalblue;\n}\n.title::after {\n  width: 18px;\n  height: 18px;\n  -webkit-animation: pulse 1s linear infinite;\n          animation: pulse 1s linear infinite;\n}\n.message, .signin {\n  color: rgba(88, 87, 87, 0.822);\n  font-size: 14px;\n}\n.signin {\n  text-align: center;\n}\n.signin a {\n  color: royalblue;\n}\n.signin a:hover {\n  -webkit-text-decoration: underline royalblue;\n          text-decoration: underline royalblue;\n}\n.flex {\n  display: flex;\n  width: 100%;\n  gap: 6px;\n}\n.form label {\n  position: relative;\n}\n.form label .input {\n  width: 100%;\n  padding: 7px 10px 15px 10px;\n  outline: 0;\n  border: 1px solid rgba(105, 105, 105, 0.397);\n  border-radius: 10px;\n}\n.form label .input + span {\n  position: absolute;\n  left: 10px;\n  top: 15px;\n  color: grey;\n  font-size: 0.9em;\n  cursor: text;\n  transition: 0.3s ease;\n}\n.form label .input:-moz-placeholder-shown + span {\n  top: 15px;\n  font-size: 0.9em;\n}\n.form label .input:-ms-input-placeholder + span {\n  top: 15px;\n  font-size: 0.9em;\n}\n.form label .input:placeholder-shown + span {\n  top: 15px;\n  font-size: 0.9em;\n}\n.form label .input:focus + span,.form label .input:valid + span {\n  top: 30px;\n  font-size: 0.7em;\n  font-weight: 600;\n}\n.form label .input:valid + span {\n  color: green;\n}\n.submit {\n  border: none;\n  outline: none;\n  background-color:#2A2C76;\n  padding: 10px;\n  border-radius: 10px;\n  color: #fff;\n  font-size: 16px;\n  border-radius: 8px;\n  transform: .3s ease;\n  width: 50%;\n}\n.submit:hover {\n  background-color:#2A2C76;\n}\n@-webkit-keyframes pulse {\nfrom {\n    transform: scale(0.9);\n    opacity: 1;\n}\nto {\n    transform: scale(1.8);\n    opacity: 0;\n}\n}\n@keyframes pulse {\nfrom {\n    transform: scale(0.9);\n    opacity: 1;\n}\nto {\n    transform: scale(1.8);\n    opacity: 0;\n}\n}\n#image-drop-area {\n  width: 45%;\n    height: 165px;\n  border: 2px dashed #ccc;\n  padding: 20px;\n  text-align: center;\n  border-radius: 50%;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-color: white\n}\n.image-drop-zone {\n    margin-top: 30px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: #666;\n}\n.image-drop-zone i {\n  font-size: 48px;\n}\n.image-preview img {\n  max-width: 100%;\n    min-height: 125px;\n  min-width: 100%;\n  max-height: 125px;\n  border-radius: 50%;\n}\n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/influencer_account.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/influencer_account.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_influencer_account_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./influencer_account.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/influencer_account.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_influencer_account_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_influencer_account_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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

/***/ "./resources/js/views/register/influencer_account.vue":
/*!************************************************************!*\
  !*** ./resources/js/views/register/influencer_account.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _influencer_account_vue_vue_type_template_id_0c628948___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./influencer_account.vue?vue&type=template&id=0c628948& */ "./resources/js/views/register/influencer_account.vue?vue&type=template&id=0c628948&");
/* harmony import */ var _influencer_account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./influencer_account.vue?vue&type=script&lang=js& */ "./resources/js/views/register/influencer_account.vue?vue&type=script&lang=js&");
/* harmony import */ var _influencer_account_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./influencer_account.vue?vue&type=style&index=0&lang=css& */ "./resources/js/views/register/influencer_account.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _influencer_account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _influencer_account_vue_vue_type_template_id_0c628948___WEBPACK_IMPORTED_MODULE_0__.render,
  _influencer_account_vue_vue_type_template_id_0c628948___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/register/influencer_account.vue"
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

/***/ "./resources/js/views/register/influencer_account.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/register/influencer_account.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_influencer_account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./influencer_account.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/influencer_account.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_influencer_account_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/views/register/influencer_account.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/views/register/influencer_account.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_influencer_account_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./influencer_account.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/influencer_account.vue?vue&type=style&index=0&lang=css&");


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

/***/ "./resources/js/views/register/influencer_account.vue?vue&type=template&id=0c628948&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/views/register/influencer_account.vue?vue&type=template&id=0c628948& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_influencer_account_vue_vue_type_template_id_0c628948___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_influencer_account_vue_vue_type_template_id_0c628948___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_influencer_account_vue_vue_type_template_id_0c628948___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./influencer_account.vue?vue&type=template&id=0c628948& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/influencer_account.vue?vue&type=template&id=0c628948&");


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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/influencer_account.vue?vue&type=template&id=0c628948&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/register/influencer_account.vue?vue&type=template&id=0c628948& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "form" }, [
        _c("br"),
        _vm._v(" "),
        _c(
          "p",
          {
            staticClass: "text-center",
            staticStyle: {
              "font-size": "24px",
              "font-weight": "bold",
              color: "black"
            }
          },
          [_vm._v("Do you have any socail accounts ")]
        ),
        _vm._v(" "),
        _c(
          "p",
          {
            staticClass: "text-center",
            staticStyle: {
              "font-size": "15px",
              "font-weight": "900",
              color: "black",
              cursor: "pointer"
            }
          },
          [
            _vm._v(
              "The importtant info will allow us to pair with the right brands "
            )
          ]
        ),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c("label", [
          _c("span", { staticClass: "lb" }, [
            _vm._v("Instagram Handel(optional)")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.instagram,
                expression: "form.instagram"
              }
            ],
            staticClass: "input",
            attrs: { required: "", placeholder: "", type: "text" },
            domProps: { value: _vm.form.instagram },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "instagram", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("label", [
          _c("span", { staticClass: "lb" }, [
            _vm._v("Tiktok Handel(optional)")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.tiktok,
                expression: "form.tiktok"
              }
            ],
            staticClass: "input",
            attrs: { required: "", placeholder: "", type: "text" },
            domProps: { value: _vm.form.tiktok },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "tiktok", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("label", [
          _c("span", { staticClass: "lb" }, [
            _vm._v("Youtube Channel URL(optional)")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.youtube,
                expression: "form.youtube"
              }
            ],
            staticClass: "input",
            attrs: { required: "", placeholder: "", type: "text" },
            domProps: { value: _vm.form.youtube },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "youtube", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("label", [
          _c("span", { staticClass: "lb" }, [
            _vm._v("Portfolio Site (optional)")
          ]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.form.website,
                expression: "form.website"
              }
            ],
            staticClass: "input",
            attrs: { required: "", placeholder: "", type: "text" },
            domProps: { value: _vm.form.website },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.form, "website", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c(
          "p",
          {
            staticClass: "text-center",
            staticStyle: {
              "font-size": "15px",
              "font-weight": "900",
              color: "black",
              cursor: "pointer"
            }
          },
          [
            _vm._v(
              "Select the Categories that the best describe you as a creator "
            )
          ]
        ),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "row",
            staticStyle: { display: "flex", "justify-content": "space-evenly" }
          },
          _vm._l(_vm.items, function(item, index) {
            return _c(
              "div",
              {
                key: index,
                staticClass: "col-3  ",
                class: { selected: _vm.isSelected(index, item.label) },
                on: {
                  click: function($event) {
                    return _vm.toggleSelect(index, item.label)
                  }
                }
              },
              [
                _c("img", { staticClass: "imgs", attrs: { src: item.image } }),
                _vm._v(" "),
                _c("span", { staticClass: "spans" }, [
                  _vm._v(_vm._s(item.label))
                ])
              ]
            )
          }),
          0
        ),
        _vm._v(" "),
        _c("br"),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "col ",
            staticStyle: {
              display: "flex",
              "flex-direction": "column",
              gap: "15px",
              "align-items": "center",
              "justify-content": "space-evenly"
            }
          },
          [
            _c("button", { staticClass: "submit", on: { click: _vm.save } }, [
              _vm._v("Suivant")
            ])
          ]
        ),
        _vm._v(" "),
        _c("br")
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `div {\n  display: flex;\n}\n\nbutton {\n  background-color: rgb(179, 203, 179);\n}\n\n* {\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\nbody {\n  padding: 0;\n  margin: 0;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: stretch;\n  align-content: stretch;\n}\nbody #body-header {\n  height: 50px;\n  background-color: rgb(80, 219, 68);\n  padding: 10px;\n  align-items: center;\n  justify-content: center;\n}\nbody #body-header p {\n  padding: 0;\n  margin: 0;\n  font-size: 2rem;\n  font-weight: 700;\n}\nbody #body-content {\n  flex-grow: 1;\n  justify-content: stretch;\n}\nbody #body-content #left-panel {\n  flex-direction: column;\n  align-items: center;\n  flex-grow: 0;\n  width: 300px;\n  background-color: rgb(174, 186, 174);\n  padding: 10px;\n  gap: 5px;\n}\nbody #body-content #left-panel * {\n  height: 60px;\n  padding: 0;\n  margin: 0;\n  width: 98%;\n  border-radius: 2px;\n  border-color: rgb(16, 67, 16);\n}\nbody #body-content #left-panel .project-card {\n  display: grid;\n  grid-template-columns: 3fr 1fr;\n  align-items: center;\n  align-content: center;\n  width: 95%;\n  border-style: solid;\n  border-width: 2px;\n  background-color: rgb(164, 184, 153);\n}\nbody #body-content #left-panel .project-card * {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\nbody #body-content #left-panel .project-card button {\n  height: 70%;\n  width: 70%;\n  background-color: rgb(179, 203, 179);\n}\nbody #body-content #left-panel .project-active {\n  background-color: rgb(134, 159, 121);\n  font-weight: 600;\n}\nbody #body-content #right-panel {\n  flex-direction: column;\n  background-color: rgb(199, 216, 198);\n  flex-wrap: wrap;\n  width: 100%;\n  gap: 5px;\n  padding: 10px;\n}\nbody #body-content #right-panel .note-card {\n  display: grid;\n  grid-template-columns: 2fr 2fr 2fr 1fr;\n  align-items: center;\n  height: 60px;\n  padding-left: 20px;\n  padding-right: 20px;\n  gap: 20px;\n  border-style: solid;\n  border-color: gray;\n  border-width: 1px;\n  border-radius: 2px;\n  margin: 1px;\n}\nbody #body-content #right-panel .note-card * {\n  padding: 0;\n  margin: 0;\n}\nbody #body-content #right-panel .note-card button {\n  justify-self: end;\n  height: 40px;\n  width: 80px;\n  margin-right: 20px;\n}\nbody #body-content #right-panel .priority-High {\n  background-color: rgb(255, 205, 205);\n}\nbody #body-content #right-panel .priority-Medium {\n  background-color: rgb(239, 241, 203);\n}\nbody #body-content #right-panel .priority-Low {\n  background-color: rgb(199, 227, 202);\n}\nbody #body-content #right-panel button.note-card {\n  height: 62px;\n}\nbody #body-footer {\n  align-content: center;\n  align-items: center;\n  justify-content: center;\n  height: 25px;\n  width: 100vw;\n  background-color: rgb(60, 66, 61);\n}\nbody #body-footer * {\n  padding: 0;\n  margin: 0;\n  color: rgb(199, 220, 198);\n}\nbody .backdrop {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1000;\n  background-color: rgba(0, 0, 0, 0.116);\n  backdrop-filter: blur(5px);\n}\nbody .popup-form {\n  position: fixed;\n  flex-direction: column;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background-color: #f0f0f0;\n  padding: 20px;\n  border-radius: 10px;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  width: 300px;\n  z-index: 1001;\n  gap: 5px;\n}\nbody .popup-form .form-group #description {\n  display: block;\n  height: 100px;\n  overflow-wrap: break-word;\n  overflow-y: scroll;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/styles.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/styles.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.scss */ \"./src/styles.scss\");\n/* harmony import */ var _logic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic.js */ \"./src/logic.js\");\n/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./interface */ \"./src/interface.js\");\n\r\n\r\n\r\n\r\n\r\nconst notebook = new _logic_js__WEBPACK_IMPORTED_MODULE_1__.Notebook();\r\nconst display = new _interface__WEBPACK_IMPORTED_MODULE_2__.Display(notebook);\r\ndisplay.refreshLeft();\r\ndisplay.refreshRight();\r\nnotebook.saveStorage();\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Display: () => (/* binding */ Display)\n/* harmony export */ });\n\r\nvar dateFNS = new Date();\r\nclass Display {\r\n    constructor(notebook) {\r\n        this.left = document.getElementById('left-panel');\r\n        this.right = document.getElementById('right-panel');\r\n        this.body = document.querySelector('body');\r\n        this.notebook = notebook;\r\n        this.selectedProject = 0;\r\n\r\n    }\r\n    refreshLeft() {\r\n        while (this.left.lastChild) {\r\n            this.left.removeChild(this.left.lastChild);\r\n        }\r\n        this.notebook.projects.forEach(element => {\r\n            const container = document.createElement('div')\r\n            container.className = 'project-card';\r\n            if (element.id === this.selectedProject) container.className = 'project-card project-active';\r\n            else container.className = 'project-card';\r\n            container.addEventListener('click', () => {\r\n                this.selectedProject = element.id;\r\n                this.refreshRight();\r\n                this.refreshLeft();\r\n            })\r\n            const name = document.createElement('p');\r\n            const btn = document.createElement('button');\r\n            btn.addEventListener('click', () => {\r\n                this.notebook.removeProject(element.id)\r\n                console.log(element.id);\r\n                this.refreshLeft();\r\n            }\r\n            )\r\n            btn.textContent = 'X';\r\n            name.textContent = element.name;\r\n            container.appendChild(name);\r\n            container.appendChild(btn);\r\n            this.left.appendChild(container);\r\n        });\r\n        const btn = document.createElement('button');\r\n        btn.textContent = 'Add Project';\r\n        btn.classList.add('add-project');\r\n        btn.addEventListener('click', (event) => {\r\n            this.createForm(projectForm);\r\n        })\r\n        this.left.appendChild(btn);\r\n        this.notebook.saveStorage();\r\n    }\r\n    refreshRight() {\r\n        while (this.right.lastChild) {\r\n            this.right.removeChild(this.right.lastChild);\r\n        };\r\n        this.displayNotes();\r\n        const btn = document.createElement('button');\r\n        btn.textContent = 'Add note';\r\n        btn.classList.add('note-card');\r\n        btn.addEventListener('click', (event) => {\r\n            event.stopPropagation();\r\n            this.createForm(noteForm);\r\n        });\r\n        this.right.appendChild(btn);\r\n        this.notebook.saveStorage();\r\n    }\r\n    text() {\r\n        this.notebook.test();\r\n    }\r\n    form() {\r\n        this.createForm(noteForm);\r\n    }\r\n    createForm(input) {\r\n        const formContainer = document.createElement('div');\r\n        const backdrop = document.createElement('div');\r\n        formContainer.classList.add('popup-form');\r\n        backdrop.classList.add('backdrop');\r\n        for (const key in input) {\r\n            const element = input[key];\r\n            const div = document.createElement('div');\r\n            div.classList.add('form-group');\r\n            const label = document.createElement('label');\r\n            label.textContent = element.label;\r\n            div.appendChild(label);\r\n\r\n            if (key === 'optionsRadio') {\r\n                const select = document.createElement('select');\r\n                select.id = key;\r\n                element.options.forEach(option => {\r\n                    const optionElement = document.createElement('option');\r\n                    optionElement.value = option.value;\r\n                    optionElement.textContent = option.label;\r\n                    if (option.value === element.value) {\r\n                        console.log(\"tony halik\")\r\n                        optionElement.selected = true;\r\n                    }\r\n                    select.appendChild(optionElement);\r\n                    select.appendChild(optionElement);\r\n                });\r\n\r\n                div.appendChild(select);\r\n            }\r\n            else {\r\n                const inputElement = document.createElement('input');\r\n                inputElement.type = element.type;\r\n                inputElement.id = key;\r\n                inputElement.value = element.value;\r\n                div.appendChild(inputElement);\r\n            }\r\n            formContainer.appendChild(div);\r\n        }\r\n        const submitButton = document.createElement('button');\r\n        submitButton.type = 'submit';\r\n        submitButton.textContent = 'Submit';\r\n        submitButton.addEventListener('click', (event) => {\r\n            event.preventDefault();\r\n            const formData = {};\r\n            const formInputs = formContainer.querySelectorAll('.form-group input, .form-group select');\r\n            formInputs.forEach(input => {\r\n                formData[input.id] = input.value;\r\n\r\n            })\r\n            console.log(formData);\r\n            this.submit(formData);\r\n            backdrop.remove();\r\n            formContainer.remove();\r\n        });\r\n        formContainer.appendChild(submitButton);\r\n        document.body.appendChild(backdrop);\r\n        document.body.appendChild(formContainer);\r\n    }\r\n    submit(formInput) {\r\n        if (formInput.title) {\r\n            this.notebook.addNote(formInput.title, formInput.description, formInput.dueDate, formInput.optionsRadio, this.selectedProject);\r\n            this.refreshRight();\r\n            this.refreshLeft();\r\n        }\r\n        if (formInput.name) {\r\n            console.log(formInput.name);\r\n            this.notebook.addProject(formInput.name);\r\n            this.refreshLeft();\r\n        }\r\n        console.log('submit');\r\n        this.hideForm();\r\n    }\r\n    hideForm() {\r\n        const backdrop = document.querySelector('.backdrop');\r\n        const formContainer = document.querySelector('.popup-form');\r\n        backdrop.remove();\r\n        formContainer.remove();\r\n    }\r\n    displayNotes() {\r\n        console.log(\"get notes of project\");\r\n        console.log(this.notebook.projects[this.selectedProject].notes);\r\n        this.notebook.getNotesOfProject(this.selectedProject).forEach(element => {\r\n            const container = document.createElement('div');\r\n            container.addEventListener('click', () => {\r\n                this.editNote(element.id);\r\n            });\r\n            container.className = 'note-card priority-' + element.priorityLabel;\r\n            const title = document.createElement('h4');\r\n            const priority = document.createElement('p')\r\n            const dueDate = document.createElement('p');\r\n            dueDate.className = 'date';\r\n            title.className = 'note-title';\r\n            const btn = document.createElement('button');\r\n            btn.addEventListener('click', (event) => {\r\n                event.stopPropagation();\r\n                this.notebook.removeNote(this.selectedProject, element.id)\r\n                console.log(element.id);\r\n                this.refreshRight();\r\n            });\r\n            btn.textContent = 'done';\r\n            title.textContent = element.title;\r\n            dueDate.textContent = element.dateDisplay;\r\n            priority.textContent = element.priorityLabel;\r\n            container.appendChild(title);\r\n            container.appendChild(priority);\r\n            container.appendChild(dueDate);\r\n            container.appendChild(btn);\r\n            this.right.appendChild(container);\r\n        })\r\n    }\r\n\r\n    editNote(noteID) {\r\n        console.log(`noteID: ${noteID}`);\r\n        console.log(this.notebook.projects[this.selectedProject].notes);\r\n        const _noteID = this.notebook.projects[this.selectedProject].notes.map((note) => note.id).indexOf(noteID);\r\n        this.createForm(editNoteFormFactory(this.notebook.projects[this.selectedProject].notes[_noteID]));\r\n        this.notebook.removeNote(this.selectedProject, noteID);\r\n    };\r\n}\r\n\r\n\r\n\r\n\r\n\r\nconst projectForm = {\r\n    name: {\r\n        type: 'text',\r\n        label: 'Project name:'\r\n    }\r\n};\r\n\r\nconst noteForm = {\r\n    title: {\r\n        type: 'text',\r\n        label: 'Note name:',\r\n        value: ''\r\n    },\r\n    description: {\r\n        type: 'textarea',\r\n        label: 'Description:',\r\n        value: ''\r\n    },\r\n    optionsRadio: {\r\n        options: [\r\n            { value: '2', label: 'High' },\r\n            { value: '1', label: 'Medium' },\r\n            { value: '0', label: 'Low' }\r\n        ],\r\n        label: 'Priority:',\r\n        value: '1'\r\n\r\n    },\r\n    dueDate: {\r\n        label: 'Due date:',\r\n        value: new Date().toISOString().split('T')[0]\r\n\r\n    }\r\n};\r\n\r\nfunction editNoteFormFactory(note) {\r\n    const noteForm = {\r\n        title: {\r\n            type: 'text',\r\n            label: 'Note name:',\r\n            value: note.title\r\n        },\r\n        description: {\r\n            type: 'textarea',\r\n            label: 'Description:',\r\n            value: note.description\r\n        },\r\n        optionsRadio: {\r\n            options: [\r\n                { value: '2', label: 'High' },\r\n                { value: '1', label: 'Medium' },\r\n                { value: '0', label: 'Low' }\r\n            ],\r\n            label: 'Priority:',\r\n            value: note.priority\r\n        },\r\n        dueDate: {\r\n            type: 'date',\r\n            label: 'Due date:',\r\n            value: new Date(note.dueDate).toISOString().split('T')[0]\r\n        }\r\n    };\r\n    return noteForm;\r\n\r\n}\r\n\n\n//# sourceURL=webpack://todo/./src/interface.js?");

/***/ }),

/***/ "./src/logic.js":
/*!**********************!*\
  !*** ./src/logic.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Notebook: () => (/* binding */ Notebook)\n/* harmony export */ });\n\r\n\r\nclass Notebook {\r\n    constructor() {\r\n        console.log(localStorage.getItem('notes'));\r\n        this.notes = [];\r\n        this.projects = [];\r\n        if (localStorage.getItem('projects') != null) {\r\n            let _projects = JSON.parse(localStorage.getItem('projects') || '[]');\r\n            _projects.forEach(element => {\r\n                console.log(element);\r\n                this.addProject(element.name);\r\n                element.notes.forEach(note => {\r\n                    this.addNote(note.title, note.description, note.dueDate, note.priority, element.id);\r\n                });\r\n            });\r\n        }\r\n        else {\r\n            this.addDummyContent();\r\n\r\n        };\r\n        console.log(\"projects from JSON:\");\r\n        console.log(this.getProjects());\r\n        console.log(\"notes get from JSON\");\r\n        console.log(this.getNotesOfProject(0));\r\n    }\r\n    addNote(title, description, dueDate, priority, projectID) {\r\n        this.projects[projectID].addNote(title, description, dueDate, priority);\r\n        const newNote = new Note(title, description, dueDate, priority, projectID);\r\n        console.log(`new note id: ${newNote.id}`);\r\n\r\n    }\r\n    addProject(projectName) {\r\n        this.projects.push(new Project(projectName));\r\n    }\r\n    getNotes() {\r\n        return (this.notes);\r\n    }\r\n    getProjects() {\r\n        return (this.projects);\r\n    }\r\n    getNotesOfProject(projectID) {\r\n        if (this.projects[projectID] === undefined) { return }\r\n        const _notes = this.projects[projectID].notes;\r\n        const _notesPriority = _notes.sort((a, b) => b.priority - a.priority);\r\n\r\n        return _notesPriority.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));\r\n    }\r\n    markNoteAsDone(id) {\r\n        this.notes[id].isComplete = true;\r\n    }\r\n    removeProject(projectID) {\r\n        const ID = this.projects.map((project) => project.id).indexOf(projectID);\r\n        this.projects.splice(ID, 1);\r\n    }\r\n    removeNote(projectID, noteID) {\r\n        console.log(`remove note - projectID: ${projectID}, noteID: ${noteID}`);\r\n        const _noteID = this.projects[projectID].notes.map((note) => note.id).indexOf(noteID);\r\n        this.projects[projectID].notes.splice(_noteID, 1);\r\n    }\r\n    saveStorage() {\r\n        localStorage.setItem('projects', JSON.stringify(this.projects));\r\n        console.log(\"Saved!\");\r\n    }\r\n    addDummyContent() {\r\n        this.addProject('Project 1');\r\n        this.addProject('Project 2');\r\n        this.addNote('title1', 'desc', '2024-10-20', '1', 0);\r\n        this.addNote('title2', 'desc', '2024-10-20', '1', 0);\r\n        this.addNote('title3', 'desc', '2024-10-20', '1', 0);\r\n        this.addNote('title4', 'desc', '2024-10-20', '1', 0);\r\n\r\n        /*        this.addNote('title0', 'desc', '2024-10-20', '0', 0);\r\n                this.addNote('title1', 'desc', '2024-10-21', '2', 0);\r\n                this.addNote('title2', 'desc', '2024-10-22', '2', 0);\r\n                this.addNote('title3', 'desc', '2024-10-22', '1', 0);\r\n                this.addNote('title4', 'desc', '2024-10-23', '0', 0);\r\n                this.addNote('title5', 'desc', '2024-10-21', '0', 0);\r\n                this.addNote('title6', 'desc', '2024-10-20', '1', 0);\r\n                this.addNote('title2', 'desc', '2024-10-23', '1', 0);\r\n                this.addNote('title3', 'desc', '2024-10-22', '2', 1);\r\n                this.addNote('title4', 'desc', '2024-10-20', '1', 1);\r\n                this.addNote('title5', 'desc', '2024-10-21', '0', 1);\r\n                this.addNote('title6', 'desc', '2024-10-20', '0', 1);\r\n                */\r\n        console.log('Added dummy notes:');\r\n        console.log(this.projects[0].notes);\r\n        console.log(this.notes);\r\n    }\r\n\r\n}\r\n\r\nclass Note {\r\n    static id = 0;\r\n    static priorities = ['Low', 'Medium', 'High'];\r\n    constructor(title, description, dueDate, priority, project) {\r\n        this.title = title;\r\n        this.description = description;\r\n        this.dueDate = new Date(dueDate);\r\n        this.dateDisplay = this.dueDate.toLocaleDateString(\"pl-PL\");\r\n        this.priorityLabel = Note.priorities[priority];\r\n        this.priority = priority;\r\n        this.project = project;\r\n        this.id = Note.id;\r\n        Note.id++;\r\n        this.isComplete = false;\r\n    }\r\n}\r\n\r\nclass Project {\r\n    static id = 0;\r\n\r\n    constructor(projectName) {\r\n        this.name = projectName;\r\n        this.notes = [];\r\n\r\n        this.id = Project.id;\r\n        Project.id++;\r\n    }\r\n    addNote(title, description, dueDate, priority) {\r\n        this.notes.push(new Note(title, description, dueDate, priority, this.id));\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://todo/./src/logic.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
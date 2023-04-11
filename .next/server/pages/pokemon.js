"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/pokemon";
exports.ids = ["pages/pokemon"];
exports.modules = {

/***/ "./pages/pokemon.tsx":
/*!***************************!*\
  !*** ./pages/pokemon.tsx ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Home() {\n    const [searchValue, setSearchValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"\");\n    const { status , data , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({\n        queryKey: [\n            \"repoData\"\n        ],\n        queryFn: ()=>fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`).then((res)=>res.json())\n    });\n    console.log(searchValue);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"home\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Pokemon Index\"\n            }, void 0, false, {\n                fileName: \"/Users/skylarsiggard/Code/Projects/query-time/pages/pokemon.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                onChange: ({ target: { value  }  })=>setSearchValue(value),\n                value: searchValue\n            }, void 0, false, {\n                fileName: \"/Users/skylarsiggard/Code/Projects/query-time/pages/pokemon.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/skylarsiggard/Code/Projects/query-time/pages/pokemon.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlbW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1QztBQUNiO0FBRTFCLFNBQVNFLE9BQU87SUFDWixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0gscURBQWMsQ0FBQztJQUNyRCxNQUFNLEVBQUVLLE9BQU0sRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUUsR0FBR1IscURBQVFBLENBQUM7UUFDckNTLFVBQVU7WUFBQztTQUFXO1FBQ3RCQyxTQUFTLElBQ0xDLE1BQU0sQ0FBQyxrQ0FBa0MsRUFBRVIsWUFBWSxDQUFDLEVBQUVTLElBQUksQ0FDMUQsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtJQUU3QjtJQUNBQyxRQUFRQyxHQUFHLENBQUNiO0lBRVoscUJBQ0ksOERBQUNjO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFDR0MsTUFBSztnQkFDTEMsVUFBVSxDQUFDLEVBQUVDLFFBQVEsRUFBRUMsTUFBSyxFQUFFLEdBQUUsR0FBS3BCLGVBQWVvQjtnQkFDcERBLE9BQU9yQjs7Ozs7Ozs7Ozs7O0FBSXZCO0FBQ0EsaUVBQWVELElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb2tlbW9uLnRzeD82ZGYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcInJlYWN0LXF1ZXJ5XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmZ1bmN0aW9uIEhvbWUoKSB7XG4gICAgY29uc3QgW3NlYXJjaFZhbHVlLCBzZXRTZWFyY2hWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZShcIlwiKTtcbiAgICBjb25zdCB7IHN0YXR1cywgZGF0YSwgZXJyb3IgfSA9IHVzZVF1ZXJ5KHtcbiAgICAgICAgcXVlcnlLZXk6IFsncmVwb0RhdGEnXSxcbiAgICAgICAgcXVlcnlGbjogKCkgPT5cbiAgICAgICAgICAgIGZldGNoKGBodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vJHtzZWFyY2hWYWx1ZX1gKS50aGVuKFxuICAgICAgICAgICAgICAgIChyZXMpID0+IHJlcy5qc29uKCksXG4gICAgICAgICAgICApLFxuICAgIH0pXG4gICAgY29uc29sZS5sb2coc2VhcmNoVmFsdWUpXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWVcIj5cbiAgICAgICAgICAgIDxoMT5Qb2tlbW9uIEluZGV4PC9oMT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gc2V0U2VhcmNoVmFsdWUodmFsdWUpfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hWYWx1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsIlJlYWN0IiwiSG9tZSIsInNlYXJjaFZhbHVlIiwic2V0U2VhcmNoVmFsdWUiLCJ1c2VTdGF0ZSIsInN0YXR1cyIsImRhdGEiLCJlcnJvciIsInF1ZXJ5S2V5IiwicXVlcnlGbiIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/pokemon.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/pokemon.tsx"));
module.exports = __webpack_exports__;

})();
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
exports.id = "pages/home";
exports.ids = ["pages/home"];
exports.modules = {

/***/ "./pages/home.tsx":
/*!************************!*\
  !*** ./pages/home.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction Home() {\n    const [searchValue, setSearchValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"\");\n    const { status , data , error  } = (0,react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({\n        queryKey: [\n            \"repoData\"\n        ],\n        queryFn: ()=>fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`).then((res)=>res.json())\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"home\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Search Your Pokemon\"\n            }, void 0, false, {\n                fileName: \"/Users/skylarsiggard/Code/Projects/query-time/pages/home.tsx\",\n                lineNumber: 16,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                onChange: ({ target: { value  }  })=>setSearchValue(value),\n                value: searchValue\n            }, void 0, false, {\n                fileName: \"/Users/skylarsiggard/Code/Projects/query-time/pages/home.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/skylarsiggard/Code/Projects/query-time/pages/home.tsx\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ob21lLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUF1QztBQUNiO0FBRTFCLFNBQVNFLE9BQU87SUFDWixNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0gscURBQWMsQ0FBQztJQUNyRCxNQUFNLEVBQUVLLE9BQU0sRUFBRUMsS0FBSSxFQUFFQyxNQUFLLEVBQUUsR0FBR1IscURBQVFBLENBQUM7UUFDckNTLFVBQVU7WUFBQztTQUFXO1FBQ3RCQyxTQUFTLElBQ0xDLE1BQU0sQ0FBQyxrQ0FBa0MsRUFBRVIsWUFBWSxDQUFDLEVBQUVTLElBQUksQ0FDMUQsQ0FBQ0MsTUFBUUEsSUFBSUMsSUFBSTtJQUU3QjtJQUVBLHFCQUNJLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQ0dDLE1BQUs7Z0JBQ0xDLFVBQVUsQ0FBQyxFQUFFQyxRQUFRLEVBQUVDLE1BQUssRUFBRSxHQUFFLEdBQUtsQixlQUFla0I7Z0JBQ3BEQSxPQUFPbkI7Ozs7Ozs7Ozs7OztBQUl2QjtBQUNBLGlFQUFlRCxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG9tZS50c3g/NDhmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5mdW5jdGlvbiBIb21lKCkge1xuICAgIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3QgeyBzdGF0dXMsIGRhdGEsIGVycm9yIH0gPSB1c2VRdWVyeSh7XG4gICAgICAgIHF1ZXJ5S2V5OiBbJ3JlcG9EYXRhJ10sXG4gICAgICAgIHF1ZXJ5Rm46ICgpID0+XG4gICAgICAgICAgICBmZXRjaChgaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLyR7c2VhcmNoVmFsdWV9YCkudGhlbihcbiAgICAgICAgICAgICAgICAocmVzKSA9PiByZXMuanNvbigpLFxuICAgICAgICAgICAgKSxcbiAgICB9KVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lXCI+XG4gICAgICAgICAgICA8aDE+U2VhcmNoIFlvdXIgUG9rZW1vbjwvaDE+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldDogeyB2YWx1ZSB9IH0pID0+IHNldFNlYXJjaFZhbHVlKHZhbHVlKX1cbiAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoVmFsdWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufVxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwibmFtZXMiOlsidXNlUXVlcnkiLCJSZWFjdCIsIkhvbWUiLCJzZWFyY2hWYWx1ZSIsInNldFNlYXJjaFZhbHVlIiwidXNlU3RhdGUiLCJzdGF0dXMiLCJkYXRhIiwiZXJyb3IiLCJxdWVyeUtleSIsInF1ZXJ5Rm4iLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJqc29uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsInRhcmdldCIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/home.tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/home.tsx"));
module.exports = __webpack_exports__;

})();
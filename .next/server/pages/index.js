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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ IndexPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__]);\n_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction IndexPage() {\n    const [searchValue, setSearchValue] = react__WEBPACK_IMPORTED_MODULE_2___default().useState(\"\");\n    const { isLoading , error , data  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_1__.useQuery)({\n        queryKey: [\n            \"allPokemon\"\n        ],\n        queryFn: ()=>fetch(\"https://pokeapi.co/api/v2/pokemon/\").then((res)=>res.json())\n    });\n    if (isLoading) return \"Loading...\";\n    if (error) return \"An error has occurred\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n            children: `Total Pokemon pulled ${data.count}`\n        }, void 0, false, {\n            fileName: \"/Users/skylarsiggard/Code/Projects/query-time/pages/index.tsx\",\n            lineNumber: 23,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/skylarsiggard/Code/Projects/query-time/pages/index.tsx\",\n        lineNumber: 22,\n        columnNumber: 9\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNpRDtBQUN2QjtBQUdYLFNBQVNFLFlBQVk7SUFFaEMsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdILHFEQUFjLENBQUM7SUFDckQsTUFBTSxFQUFFSyxVQUFTLEVBQUVDLE1BQUssRUFBRUMsS0FBSSxFQUFFLEdBQUdSLCtEQUFRQSxDQUFDO1FBQ3hDUyxVQUFVO1lBQUM7U0FBYTtRQUN4QkMsU0FBUyxJQUNMQyxNQUFNLHNDQUFzQ0MsSUFBSSxDQUM1QyxDQUFDQyxNQUFRQSxJQUFJQyxJQUFJO0lBRTdCO0lBRUEsSUFBSVIsV0FBVyxPQUFPO0lBRXRCLElBQUlDLE9BQU8sT0FBTztJQUVsQixxQkFDSSw4REFBQ1E7a0JBQ0csNEVBQUNDO3NCQUFJLENBQUMscUJBQXFCLEVBQUVSLEtBQUtTLEtBQUssQ0FBQyxDQUFDOzs7Ozs7Ozs7OztBQVNyRCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXgudHN4PzA3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJAdGFuc3RhY2svcmVhY3QtcXVlcnlcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoKSB7XG5cbiAgICBjb25zdCBbc2VhcmNoVmFsdWUsIHNldFNlYXJjaFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKFwiXCIpO1xuICAgIGNvbnN0IHsgaXNMb2FkaW5nLCBlcnJvciwgZGF0YSB9ID0gdXNlUXVlcnkoe1xuICAgICAgICBxdWVyeUtleTogWydhbGxQb2tlbW9uJ10sXG4gICAgICAgIHF1ZXJ5Rm46ICgpID0+XG4gICAgICAgICAgICBmZXRjaCgnaHR0cHM6Ly9wb2tlYXBpLmNvL2FwaS92Mi9wb2tlbW9uLycpLnRoZW4oXG4gICAgICAgICAgICAgICAgKHJlcykgPT4gcmVzLmpzb24oKSxcbiAgICAgICAgICAgICksIFxuICAgIH0pIFxuXG4gICAgaWYgKGlzTG9hZGluZykgcmV0dXJuICdMb2FkaW5nLi4uJ1xuXG4gICAgaWYgKGVycm9yKSByZXR1cm4gJ0FuIGVycm9yIGhhcyBvY2N1cnJlZCdcblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aDE+e2BUb3RhbCBQb2tlbW9uIHB1bGxlZCAke2RhdGEuY291bnR9YH08L2gxPlxuICAgICAgICAgICAgey8qIDxoMT5TZWFyY2ggWW91ciBQb2tlbW9uPC9oMT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gc2V0U2VhcmNoVmFsdWUodmFsdWUpfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hWYWx1ZX1cbiAgICAgICAgICAgIC8+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICApO1xufSJdLCJuYW1lcyI6WyJ1c2VRdWVyeSIsIlJlYWN0IiwiSW5kZXhQYWdlIiwic2VhcmNoVmFsdWUiLCJzZXRTZWFyY2hWYWx1ZSIsInVzZVN0YXRlIiwiaXNMb2FkaW5nIiwiZXJyb3IiLCJkYXRhIiwicXVlcnlLZXkiLCJxdWVyeUZuIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRpdiIsImgxIiwiY291bnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
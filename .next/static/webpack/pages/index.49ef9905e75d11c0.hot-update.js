"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ IndexPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tanstack/react-query */ \"./node_modules/@tanstack/react-query/build/lib/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction IndexPage() {\n    _s();\n    const [searchValue, setSearchValue] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(\"\");\n    const { isLoading , isError  } = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery)([\n        \"pokemon\"\n    ], ()=>axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"https://pokeapi.co/api/v2/pokemon/\").then((result)=>console.log(result.data)));\n    if (isLoading) {\n        return \"Loading...\";\n    }\n    if (isError) {\n        return \"\".concat(error);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Search Your Pokemon\"\n            }, void 0, false, {\n                fileName: \"/Users/skylarsiggard/Code/Projects/query-time/pages/index.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                onChange: (param)=>{\n                    let { target: { value  }  } = param;\n                    return setSearchValue(value);\n                },\n                value: searchValue\n            }, void 0, false, {\n                fileName: \"/Users/skylarsiggard/Code/Projects/query-time/pages/index.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/skylarsiggard/Code/Projects/query-time/pages/index.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_s(IndexPage, \"MX/9ryt3/jr+Z3nae7oXAH9OVt4=\", false, function() {\n    return [\n        _tanstack_react_query__WEBPACK_IMPORTED_MODULE_2__.useQuery\n    ];\n});\n_c = IndexPage;\nvar _c;\n$RefreshReg$(_c, \"IndexPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ2lEO0FBQ3ZCO0FBQ0Q7QUFFVixTQUFTRyxZQUFZOztJQUVoQyxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR0oscURBQWMsQ0FBQztJQUNyRCxNQUFNLEVBQUNNLFVBQVMsRUFBRUMsUUFBTyxFQUFFLEdBQUdSLCtEQUFRQSxDQUFDO1FBQUM7S0FBVSxFQUFFLElBQU1FLGlEQUNsRCxDQUFFLHNDQUNMUSxJQUFJLENBQUNDLENBQUFBLFNBQVVDLFFBQVFDLEdBQUcsQ0FBQ0YsT0FBT0csSUFBSTtJQUczQyxJQUFJUCxXQUFXO1FBQ1gsT0FBUTtJQUNaLENBQUM7SUFFRCxJQUFJQyxTQUFTO1FBQ1QsT0FBTyxHQUFTLE9BQU5PO0lBQ2QsQ0FBQztJQUVELHFCQUNJLDhEQUFDQzs7MEJBQ0csOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDO2dCQUNHQyxNQUFLO2dCQUNMQyxVQUFVLFNBQTJCZjt3QkFBMUIsRUFBRWdCLFFBQVEsRUFBRUMsTUFBSyxFQUFFLEdBQUU7MkJBQUtqQixlQUFlaUI7Z0JBQUs7Z0JBQ3pEQSxPQUFPbEI7Ozs7Ozs7Ozs7OztBQUl2QixDQUFDO0dBMUJ1QkQ7O1FBR1VILDJEQUFRQTs7O0tBSGxCRyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IHVzZVF1ZXJ5IH0gZnJvbSBcIkB0YW5zdGFjay9yZWFjdC1xdWVyeVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4UGFnZSgpIHtcblxuICAgIGNvbnN0IFtzZWFyY2hWYWx1ZSwgc2V0U2VhcmNoVmFsdWVdID0gUmVhY3QudXNlU3RhdGUoXCJcIik7XG4gICAgY29uc3Qge2lzTG9hZGluZywgaXNFcnJvciB9ID0gdXNlUXVlcnkoWydwb2tlbW9uJ10sICgpID0+IGF4aW9zXG4gICAgICAgIC5nZXQoYGh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi9gKVxuICAgICAgICAudGhlbihyZXN1bHQgPT4gY29uc29sZS5sb2cocmVzdWx0LmRhdGEpKVxuICAgICAgICApXG4gICAgICAgIFxuICAgIGlmIChpc0xvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIGBMb2FkaW5nLi4uYFxuICAgIH1cblxuICAgIGlmIChpc0Vycm9yKSB7XG4gICAgICAgIHJldHVybiBgJHtlcnJvcn1gXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxoMT5TZWFyY2ggWW91ciBQb2tlbW9uPC9oMT5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0OiB7IHZhbHVlIH0gfSkgPT4gc2V0U2VhcmNoVmFsdWUodmFsdWUpfVxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZWFyY2hWYWx1ZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59Il0sIm5hbWVzIjpbInVzZVF1ZXJ5IiwiUmVhY3QiLCJheGlvcyIsIkluZGV4UGFnZSIsInNlYXJjaFZhbHVlIiwic2V0U2VhcmNoVmFsdWUiLCJ1c2VTdGF0ZSIsImlzTG9hZGluZyIsImlzRXJyb3IiLCJnZXQiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJlcnJvciIsImRpdiIsImgxIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n"));

/***/ })

});
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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PokemonPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction PokemonPage() {\n    // Handles the submit event on form submit.\n    const handleSubmit = async (event)=>{\n        // Stop the form from submitting and refreshing the page.\n        event.preventDefault();\n        // Get data from the form.\n        const data = {\n            pokemon: event.target.pokemon.value\n        };\n        // Send the data to the server in JSON format.\n        const JSONdata = JSON.stringify(data);\n        // API endpoint where we send form data.\n        const endpoint = \"/api/form\";\n        // Form the request for sending data to the server.\n        const options = {\n            // The method is POST because we are sending data.\n            method: \"POST\",\n            // Tell the server we're sending JSON.\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            // Body of the request is the JSON data we created above.\n            body: JSONdata\n        };\n        // Send the form data to our forms API on Vercel and get a response.\n        const response = await fetch(endpoint, options);\n        // Get the response data from server as JSON.\n        // If server returns the name submitted, that means the form works.\n        const result = await response.json();\n        alert(`Pokemon: ${result.data}`);\n    };\n    return(// We pass the event to the handleSubmit() function on submit.\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"pokemon\",\n                children: \"Pokemon\"\n            }, void 0, false, {\n                fileName: \"/Users/skylarsiggard/Code/Projects/query-time/pages/pokemon.tsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"pokemon\",\n                name: \"pokemon\",\n                required: true\n            }, void 0, false, {\n                fileName: \"/Users/skylarsiggard/Code/Projects/query-time/pages/pokemon.tsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/skylarsiggard/Code/Projects/query-time/pages/pokemon.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/skylarsiggard/Code/Projects/query-time/pages/pokemon.tsx\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, this));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlbW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFJWCxTQUFTQyxjQUFjO0lBQ2xDLDJDQUEyQztJQUMzQyxNQUFNQyxlQUFlLE9BQU9DLFFBQVU7UUFDbEMseURBQXlEO1FBQ3pEQSxNQUFNQyxjQUFjO1FBRXBCLDBCQUEwQjtRQUMxQixNQUFNQyxPQUFPO1lBQ1RDLFNBQVNILE1BQU1JLE1BQU0sQ0FBQ0QsT0FBTyxDQUFDRSxLQUFLO1FBQ3ZDO1FBRUEsOENBQThDO1FBQzlDLE1BQU1DLFdBQVdDLEtBQUtDLFNBQVMsQ0FBQ047UUFFaEMsd0NBQXdDO1FBQ3hDLE1BQU1PLFdBQVc7UUFFakIsbURBQW1EO1FBQ25ELE1BQU1DLFVBQVU7WUFDWixrREFBa0Q7WUFDbERDLFFBQVE7WUFDUixzQ0FBc0M7WUFDdENDLFNBQVM7Z0JBQ0wsZ0JBQWdCO1lBQ3BCO1lBQ0EseURBQXlEO1lBQ3pEQyxNQUFNUDtRQUNWO1FBRUEsb0VBQW9FO1FBQ3BFLE1BQU1RLFdBQVcsTUFBTUMsTUFBTU4sVUFBVUM7UUFFdkMsNkNBQTZDO1FBQzdDLG1FQUFtRTtRQUNuRSxNQUFNTSxTQUFTLE1BQU1GLFNBQVNHLElBQUk7UUFDbENDLE1BQU0sQ0FBQyxTQUFTLEVBQUVGLE9BQU9kLElBQUksQ0FBQyxDQUFDO0lBQ25DO0lBQ0EsT0FDSSw4REFBOEQ7a0JBQzlELDhEQUFDaUI7UUFBS0MsVUFBVXJCOzswQkFDWiw4REFBQ3NCO2dCQUFNQyxTQUFROzBCQUFVOzs7Ozs7MEJBQ3pCLDhEQUFDQztnQkFBTUMsTUFBSztnQkFBT0MsSUFBRztnQkFBVUMsTUFBSztnQkFBVUMsUUFBUTs7Ozs7OzBCQUV2RCw4REFBQ0M7Z0JBQU9KLE1BQUs7MEJBQVM7Ozs7Ozs7Ozs7OztBQUdsQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvcG9rZW1vbi50c3g/NmRmMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9rZW1vblBhZ2UoKSB7XG4gICAgLy8gSGFuZGxlcyB0aGUgc3VibWl0IGV2ZW50IG9uIGZvcm0gc3VibWl0LlxuICAgIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jIChldmVudCkgPT4ge1xuICAgICAgICAvLyBTdG9wIHRoZSBmb3JtIGZyb20gc3VibWl0dGluZyBhbmQgcmVmcmVzaGluZyB0aGUgcGFnZS5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxuXG4gICAgICAgIC8vIEdldCBkYXRhIGZyb20gdGhlIGZvcm0uXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBwb2tlbW9uOiBldmVudC50YXJnZXQucG9rZW1vbi52YWx1ZSxcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNlbmQgdGhlIGRhdGEgdG8gdGhlIHNlcnZlciBpbiBKU09OIGZvcm1hdC5cbiAgICAgICAgY29uc3QgSlNPTmRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKVxuXG4gICAgICAgIC8vIEFQSSBlbmRwb2ludCB3aGVyZSB3ZSBzZW5kIGZvcm0gZGF0YS5cbiAgICAgICAgY29uc3QgZW5kcG9pbnQgPSAnL2FwaS9mb3JtJ1xuXG4gICAgICAgIC8vIEZvcm0gdGhlIHJlcXVlc3QgZm9yIHNlbmRpbmcgZGF0YSB0byB0aGUgc2VydmVyLlxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgLy8gVGhlIG1ldGhvZCBpcyBQT1NUIGJlY2F1c2Ugd2UgYXJlIHNlbmRpbmcgZGF0YS5cbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgLy8gVGVsbCB0aGUgc2VydmVyIHdlJ3JlIHNlbmRpbmcgSlNPTi5cbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIEJvZHkgb2YgdGhlIHJlcXVlc3QgaXMgdGhlIEpTT04gZGF0YSB3ZSBjcmVhdGVkIGFib3ZlLlxuICAgICAgICAgICAgYm9keTogSlNPTmRhdGEsXG4gICAgICAgIH1cblxuICAgICAgICAvLyBTZW5kIHRoZSBmb3JtIGRhdGEgdG8gb3VyIGZvcm1zIEFQSSBvbiBWZXJjZWwgYW5kIGdldCBhIHJlc3BvbnNlLlxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGVuZHBvaW50LCBvcHRpb25zKVxuXG4gICAgICAgIC8vIEdldCB0aGUgcmVzcG9uc2UgZGF0YSBmcm9tIHNlcnZlciBhcyBKU09OLlxuICAgICAgICAvLyBJZiBzZXJ2ZXIgcmV0dXJucyB0aGUgbmFtZSBzdWJtaXR0ZWQsIHRoYXQgbWVhbnMgdGhlIGZvcm0gd29ya3MuXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICAgICAgICBhbGVydChgUG9rZW1vbjogJHtyZXN1bHQuZGF0YX1gKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICAvLyBXZSBwYXNzIHRoZSBldmVudCB0byB0aGUgaGFuZGxlU3VibWl0KCkgZnVuY3Rpb24gb24gc3VibWl0LlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicG9rZW1vblwiPlBva2Vtb248L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwb2tlbW9uXCIgbmFtZT1cInBva2Vtb25cIiByZXF1aXJlZCAvPlxuXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJQb2tlbW9uUGFnZSIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwicG9rZW1vbiIsInRhcmdldCIsInZhbHVlIiwiSlNPTmRhdGEiLCJKU09OIiwic3RyaW5naWZ5IiwiZW5kcG9pbnQiLCJvcHRpb25zIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJyZXNwb25zZSIsImZldGNoIiwicmVzdWx0IiwianNvbiIsImFsZXJ0IiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJuYW1lIiwicmVxdWlyZWQiLCJidXR0b24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/pokemon.tsx\n");

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
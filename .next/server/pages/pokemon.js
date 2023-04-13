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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PokemonPage)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nfunction PokemonPage() {\n    // Handles the submit event on form submit.\n    const handleSubmit = async (event)=>{\n        // Stop the form from submitting and refreshing the page.\n        event.preventDefault();\n        // Get data from the form.\n        const data = {\n            pokemon: event.target.pokemon.value\n        };\n        // Send the data to the server in JSON format.\n        const JSONdata = JSON.stringify(data);\n        // API endpoint where we send form data.\n        const endpoint = \"/api/form\";\n        // Form the request for sending data to the server.\n        const options = {\n            // The method is POST because we are sending data.\n            method: \"POST\",\n            // Tell the server we're sending JSON.\n            headers: {\n                \"Content-Type\": \"application/json\"\n            },\n            // Body of the request is the JSON data we created above.\n            body: JSONdata\n        };\n        // Send the form data to our forms API on Vercel and get a response.\n        const response = await fetch(endpoint, options);\n        // Get the response data from server as JSON.\n        // If server returns the name submitted, that means the form works.\n        const result = await response.json();\n        alert(`Is this your full name: ${result.data}`);\n    };\n    return(// We pass the event to the handleSubmit() function on submit.\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                htmlFor: \"pokemon\",\n                children: \"Pokemon\"\n            }, void 0, false, {\n                fileName: \"/Users/skylarsiggard/Code/Projects/query-time/pages/pokemon.tsx\",\n                lineNumber: 45,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"text\",\n                id: \"pokemon\",\n                name: \"pokemon\",\n                required: true\n            }, void 0, false, {\n                fileName: \"/Users/skylarsiggard/Code/Projects/query-time/pages/pokemon.tsx\",\n                lineNumber: 46,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Submit\"\n            }, void 0, false, {\n                fileName: \"/Users/skylarsiggard/Code/Projects/query-time/pages/pokemon.tsx\",\n                lineNumber: 48,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/skylarsiggard/Code/Projects/query-time/pages/pokemon.tsx\",\n        lineNumber: 44,\n        columnNumber: 9\n    }, this));\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlbW9uLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFJWCxTQUFTQyxjQUFjO0lBQ2xDLDJDQUEyQztJQUMzQyxNQUFNQyxlQUFlLE9BQU9DLFFBQVU7UUFDbEMseURBQXlEO1FBQ3pEQSxNQUFNQyxjQUFjO1FBRXBCLDBCQUEwQjtRQUMxQixNQUFNQyxPQUFPO1lBQ1RDLFNBQVNILE1BQU1JLE1BQU0sQ0FBQ0QsT0FBTyxDQUFDRSxLQUFLO1FBQ3ZDO1FBRUEsOENBQThDO1FBQzlDLE1BQU1DLFdBQVdDLEtBQUtDLFNBQVMsQ0FBQ047UUFFaEMsd0NBQXdDO1FBQ3hDLE1BQU1PLFdBQVc7UUFFakIsbURBQW1EO1FBQ25ELE1BQU1DLFVBQVU7WUFDWixrREFBa0Q7WUFDbERDLFFBQVE7WUFDUixzQ0FBc0M7WUFDdENDLFNBQVM7Z0JBQ0wsZ0JBQWdCO1lBQ3BCO1lBQ0EseURBQXlEO1lBQ3pEQyxNQUFNUDtRQUNWO1FBRUEsb0VBQW9FO1FBQ3BFLE1BQU1RLFdBQVcsTUFBTUMsTUFBTU4sVUFBVUM7UUFFdkMsNkNBQTZDO1FBQzdDLG1FQUFtRTtRQUNuRSxNQUFNTSxTQUFTLE1BQU1GLFNBQVNHLElBQUk7UUFDbENDLE1BQU0sQ0FBQyx3QkFBd0IsRUFBRUYsT0FBT2QsSUFBSSxDQUFDLENBQUM7SUFDbEQ7SUFDQSxPQUNJLDhEQUE4RDtrQkFDOUQsOERBQUNpQjtRQUFLQyxVQUFVckI7OzBCQUNaLDhEQUFDc0I7Z0JBQU1DLFNBQVE7MEJBQVU7Ozs7OzswQkFDekIsOERBQUNDO2dCQUFNQyxNQUFLO2dCQUFPQyxJQUFHO2dCQUFVQyxNQUFLO2dCQUFVQyxRQUFROzs7Ozs7MEJBRXZELDhEQUFDQztnQkFBT0osTUFBSzswQkFBUzs7Ozs7Ozs7Ozs7O0FBR2xDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wb2tlbW9uLnRzeD82ZGYyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQb2tlbW9uUGFnZSgpIHtcbiAgICAvLyBIYW5kbGVzIHRoZSBzdWJtaXQgZXZlbnQgb24gZm9ybSBzdWJtaXQuXG4gICAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIFN0b3AgdGhlIGZvcm0gZnJvbSBzdWJtaXR0aW5nIGFuZCByZWZyZXNoaW5nIHRoZSBwYWdlLlxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICAgICAgLy8gR2V0IGRhdGEgZnJvbSB0aGUgZm9ybS5cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIHBva2Vtb246IGV2ZW50LnRhcmdldC5wb2tlbW9uLnZhbHVlLFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2VuZCB0aGUgZGF0YSB0byB0aGUgc2VydmVyIGluIEpTT04gZm9ybWF0LlxuICAgICAgICBjb25zdCBKU09OZGF0YSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpXG5cbiAgICAgICAgLy8gQVBJIGVuZHBvaW50IHdoZXJlIHdlIHNlbmQgZm9ybSBkYXRhLlxuICAgICAgICBjb25zdCBlbmRwb2ludCA9ICcvYXBpL2Zvcm0nXG5cbiAgICAgICAgLy8gRm9ybSB0aGUgcmVxdWVzdCBmb3Igc2VuZGluZyBkYXRhIHRvIHRoZSBzZXJ2ZXIuXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAvLyBUaGUgbWV0aG9kIGlzIFBPU1QgYmVjYXVzZSB3ZSBhcmUgc2VuZGluZyBkYXRhLlxuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICAvLyBUZWxsIHRoZSBzZXJ2ZXIgd2UncmUgc2VuZGluZyBKU09OLlxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gQm9keSBvZiB0aGUgcmVxdWVzdCBpcyB0aGUgSlNPTiBkYXRhIHdlIGNyZWF0ZWQgYWJvdmUuXG4gICAgICAgICAgICBib2R5OiBKU09OZGF0YSxcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNlbmQgdGhlIGZvcm0gZGF0YSB0byBvdXIgZm9ybXMgQVBJIG9uIFZlcmNlbCBhbmQgZ2V0IGEgcmVzcG9uc2UuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZW5kcG9pbnQsIG9wdGlvbnMpXG5cbiAgICAgICAgLy8gR2V0IHRoZSByZXNwb25zZSBkYXRhIGZyb20gc2VydmVyIGFzIEpTT04uXG4gICAgICAgIC8vIElmIHNlcnZlciByZXR1cm5zIHRoZSBuYW1lIHN1Ym1pdHRlZCwgdGhhdCBtZWFucyB0aGUgZm9ybSB3b3Jrcy5cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgICAgIGFsZXJ0KGBJcyB0aGlzIHlvdXIgZnVsbCBuYW1lOiAke3Jlc3VsdC5kYXRhfWApXG4gICAgfVxuICAgIHJldHVybiAoXG4gICAgICAgIC8vIFdlIHBhc3MgdGhlIGV2ZW50IHRvIHRoZSBoYW5kbGVTdWJtaXQoKSBmdW5jdGlvbiBvbiBzdWJtaXQuXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwb2tlbW9uXCI+UG9rZW1vbjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInBva2Vtb25cIiBuYW1lPVwicG9rZW1vblwiIHJlcXVpcmVkIC8+XG5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPlN1Ym1pdDwvYnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJSZWFjdCIsIlBva2Vtb25QYWdlIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJwb2tlbW9uIiwidGFyZ2V0IiwidmFsdWUiLCJKU09OZGF0YSIsIkpTT04iLCJzdHJpbmdpZnkiLCJlbmRwb2ludCIsIm9wdGlvbnMiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXN1bHQiLCJqc29uIiwiYWxlcnQiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm5hbWUiLCJyZXF1aXJlZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/pokemon.tsx\n");

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
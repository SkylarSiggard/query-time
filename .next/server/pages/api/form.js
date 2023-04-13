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
exports.id = "pages/api/form";
exports.ids = ["pages/api/form"];
exports.modules = {

/***/ "(api)/./pages/api/form.jsx":
/*!****************************!*\
  !*** ./pages/api/form.jsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\nfunction handler(req, res) {\n    // Get data submitted in request's body.\n    const body = req.body;\n    // Optional logging to see the responses\n    // in the command line where next.js app is running.\n    console.log(\"body: \", body);\n    // Guard clause checks for first and last name,\n    // and returns early if they are not found\n    if (!body.first || !body.last) {\n        // Sends a HTTP bad request error code\n        return res.status(400).json({\n            data: \"First or last name not found\"\n        });\n    }\n    // Found the name.\n    // Sends a HTTP success code\n    res.status(200).json({\n        data: `${body.first} ${body.last}`\n    });\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZm9ybS5qc3guanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLFNBQVNBLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3RDLHdDQUF3QztJQUN4QyxNQUFNQyxPQUFPRixJQUFJRSxJQUFJO0lBRXJCLHdDQUF3QztJQUN4QyxvREFBb0Q7SUFDcERDLFFBQVFDLEdBQUcsQ0FBQyxVQUFVRjtJQUV0QiwrQ0FBK0M7SUFDL0MsMENBQTBDO0lBQzFDLElBQUksQ0FBQ0EsS0FBS0csS0FBSyxJQUFJLENBQUNILEtBQUtJLElBQUksRUFBRTtRQUMzQixzQ0FBc0M7UUFDdEMsT0FBT0wsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxNQUFNO1FBQStCO0lBQ3ZFLENBQUM7SUFFRCxrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCUixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1FBQUVDLE1BQU0sQ0FBQyxFQUFFUCxLQUFLRyxLQUFLLENBQUMsQ0FBQyxFQUFFSCxLQUFLSSxJQUFJLENBQUMsQ0FBQztJQUFDO0FBQzlELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvZm9ybS5qc3g/OTA0OSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gICAgLy8gR2V0IGRhdGEgc3VibWl0dGVkIGluIHJlcXVlc3QncyBib2R5LlxuICAgIGNvbnN0IGJvZHkgPSByZXEuYm9keVxuXG4gICAgLy8gT3B0aW9uYWwgbG9nZ2luZyB0byBzZWUgdGhlIHJlc3BvbnNlc1xuICAgIC8vIGluIHRoZSBjb21tYW5kIGxpbmUgd2hlcmUgbmV4dC5qcyBhcHAgaXMgcnVubmluZy5cbiAgICBjb25zb2xlLmxvZygnYm9keTogJywgYm9keSlcblxuICAgIC8vIEd1YXJkIGNsYXVzZSBjaGVja3MgZm9yIGZpcnN0IGFuZCBsYXN0IG5hbWUsXG4gICAgLy8gYW5kIHJldHVybnMgZWFybHkgaWYgdGhleSBhcmUgbm90IGZvdW5kXG4gICAgaWYgKCFib2R5LmZpcnN0IHx8ICFib2R5Lmxhc3QpIHtcbiAgICAgICAgLy8gU2VuZHMgYSBIVFRQIGJhZCByZXF1ZXN0IGVycm9yIGNvZGVcbiAgICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAwKS5qc29uKHsgZGF0YTogJ0ZpcnN0IG9yIGxhc3QgbmFtZSBub3QgZm91bmQnIH0pXG4gICAgfVxuXG4gICAgLy8gRm91bmQgdGhlIG5hbWUuXG4gICAgLy8gU2VuZHMgYSBIVFRQIHN1Y2Nlc3MgY29kZVxuICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgZGF0YTogYCR7Ym9keS5maXJzdH0gJHtib2R5Lmxhc3R9YCB9KVxufSJdLCJuYW1lcyI6WyJoYW5kbGVyIiwicmVxIiwicmVzIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJmaXJzdCIsImxhc3QiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/form.jsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/form.jsx"));
module.exports = __webpack_exports__;

})();
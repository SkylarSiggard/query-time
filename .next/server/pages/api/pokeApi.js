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
exports.id = "pages/api/pokeApi";
exports.ids = ["pages/api/pokeApi"];
exports.modules = {

/***/ "(api)/./pages/api/pokeApi.tsx":
/*!*******************************!*\
  !*** ./pages/api/pokeApi.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSomething\": () => (/* binding */ getSomething)\n/* harmony export */ });\nconst getSomething = async ()=>{\n    // do fetch here\n    const res = await fetch(\"https://pokeapi.co/api/v2/pokemon/\", {\n        method: \"GET\"\n    });\n    if (res.status === 401) {\n        // call logout session expired\n        return;\n    }\n    if (res.status === 400) {\n        const error = await res.text();\n        const message = JSON.parse(error);\n        throw message;\n    }\n    if (res.ok) {\n        try {\n            return await res.json();\n        } catch (e) {\n            return;\n        }\n    } else {\n        const errorMessage = await res.text();\n        return Promise.reject(new HttpError(errorMessage, res.status));\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvcG9rZUFwaS50c3guanMiLCJtYXBwaW5ncyI6Ijs7OztBQUVPLE1BQU1BLGVBQWUsVUFBWTtJQUVwQyxnQkFBZ0I7SUFDaEIsTUFBTUMsTUFBTSxNQUFNQyxNQUFNLHNDQUFzQztRQUFFQyxRQUFRO0lBQU07SUFFOUUsSUFBSUYsSUFBSUcsTUFBTSxLQUFLLEtBQUs7UUFDcEIsOEJBQThCO1FBQzlCO0lBQ0osQ0FBQztJQUNELElBQUlILElBQUlHLE1BQU0sS0FBSyxLQUFLO1FBQ3BCLE1BQU1DLFFBQVEsTUFBTUosSUFBSUssSUFBSTtRQUM1QixNQUFNQyxVQUFVQyxLQUFLQyxLQUFLLENBQUNKO1FBQzNCLE1BQU1FLFFBQVE7SUFDbEIsQ0FBQztJQUNELElBQUlOLElBQUlTLEVBQUUsRUFBRTtRQUNSLElBQUk7WUFDQSxPQUFPLE1BQU1ULElBQUlVLElBQUk7UUFDekIsRUFBRSxPQUFPQyxHQUFHO1lBQ1I7UUFDSjtJQUNKLE9BQU87UUFDSCxNQUFNQyxlQUFlLE1BQU1aLElBQUlLLElBQUk7UUFDbkMsT0FBT1EsUUFBUUMsTUFBTSxDQUFDLElBQUlDLFVBQVVILGNBQWNaLElBQUlHLE1BQU07SUFDaEUsQ0FBQztBQUNMLEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvcG9rZUFwaS50c3g/YTlkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGNvbnN0IGdldFNvbWV0aGluZyA9IGFzeW5jICgpID0+IHtcblxuICAgIC8vIGRvIGZldGNoIGhlcmVcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vcG9rZWFwaS5jby9hcGkvdjIvcG9rZW1vbi9cIiwgeyBtZXRob2Q6IFwiR0VUXCIgfSk7XG5cbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAxKSB7XG4gICAgICAgIC8vIGNhbGwgbG9nb3V0IHNlc3Npb24gZXhwaXJlZFxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDApIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBhd2FpdCByZXMudGV4dCgpO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gSlNPTi5wYXJzZShlcnJvcik7XG4gICAgICAgIHRocm93IG1lc3NhZ2U7XG4gICAgfVxuICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBhd2FpdCByZXMudGV4dCgpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEh0dHBFcnJvcihlcnJvck1lc3NhZ2UsIHJlcy5zdGF0dXMpKTtcbiAgICB9XG59OyJdLCJuYW1lcyI6WyJnZXRTb21ldGhpbmciLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsInN0YXR1cyIsImVycm9yIiwidGV4dCIsIm1lc3NhZ2UiLCJKU09OIiwicGFyc2UiLCJvayIsImpzb24iLCJlIiwiZXJyb3JNZXNzYWdlIiwiUHJvbWlzZSIsInJlamVjdCIsIkh0dHBFcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/pokeApi.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/pokeApi.tsx"));
module.exports = __webpack_exports__;

})();
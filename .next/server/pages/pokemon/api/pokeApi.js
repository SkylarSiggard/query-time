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
exports.id = "pages/pokemon/api/pokeApi";
exports.ids = ["pages/pokemon/api/pokeApi"];
exports.modules = {

/***/ "./pages/pokemon/api/pokeApi.tsx":
/*!***************************************!*\
  !*** ./pages/pokemon/api/pokeApi.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSomething\": () => (/* binding */ getSomething)\n/* harmony export */ });\nconst getSomething = async ()=>{\n    // do fetch here\n    const res = await fetch(\"https://pokeapi.co/api/v2/pokemon/\", {\n        method: \"GET\"\n    });\n    if (res.status === 401) {\n        // call logout session expired\n        return;\n    }\n    if (res.status === 400) {\n        const error = await res.text();\n        const message = JSON.parse(error);\n        throw message;\n    }\n    if (res.ok) {\n        try {\n            return await res.json();\n        } catch (e) {\n            return;\n        }\n    } else {\n        const errorMessage = await res.text();\n        return Promise.reject(new HttpError(errorMessage, res.status));\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb2tlbW9uL2FwaS9wb2tlQXBpLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRU8sTUFBTUEsZUFBZSxVQUFZO0lBRXBDLGdCQUFnQjtJQUNoQixNQUFNQyxNQUFNLE1BQU1DLE1BQU0sc0NBQXNDO1FBQUVDLFFBQVE7SUFBTTtJQUU5RSxJQUFJRixJQUFJRyxNQUFNLEtBQUssS0FBSztRQUNwQiw4QkFBOEI7UUFDOUI7SUFDSixDQUFDO0lBQ0QsSUFBSUgsSUFBSUcsTUFBTSxLQUFLLEtBQUs7UUFDcEIsTUFBTUMsUUFBUSxNQUFNSixJQUFJSyxJQUFJO1FBQzVCLE1BQU1DLFVBQVVDLEtBQUtDLEtBQUssQ0FBQ0o7UUFDM0IsTUFBTUUsUUFBUTtJQUNsQixDQUFDO0lBQ0QsSUFBSU4sSUFBSVMsRUFBRSxFQUFFO1FBQ1IsSUFBSTtZQUNBLE9BQU8sTUFBTVQsSUFBSVUsSUFBSTtRQUN6QixFQUFFLE9BQU9DLEdBQUc7WUFDUjtRQUNKO0lBQ0osT0FBTztRQUNILE1BQU1DLGVBQWUsTUFBTVosSUFBSUssSUFBSTtRQUNuQyxPQUFPUSxRQUFRQyxNQUFNLENBQUMsSUFBSUMsVUFBVUgsY0FBY1osSUFBSUcsTUFBTTtJQUNoRSxDQUFDO0FBQ0wsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3BhZ2VzL3Bva2Vtb24vYXBpL3Bva2VBcGkudHN4P2U4MGYiXSwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBjb25zdCBnZXRTb21ldGhpbmcgPSBhc3luYyAoKSA9PiB7XG5cbiAgICAvLyBkbyBmZXRjaCBoZXJlXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3Bva2VhcGkuY28vYXBpL3YyL3Bva2Vtb24vXCIsIHsgbWV0aG9kOiBcIkdFVFwiIH0pO1xuXG4gICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwMSkge1xuICAgICAgICAvLyBjYWxsIGxvZ291dCBzZXNzaW9uIGV4cGlyZWRcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocmVzLnN0YXR1cyA9PT0gNDAwKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gYXdhaXQgcmVzLnRleHQoKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IEpTT04ucGFyc2UoZXJyb3IpO1xuICAgICAgICB0aHJvdyBtZXNzYWdlO1xuICAgIH1cbiAgICBpZiAocmVzLm9rKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gYXdhaXQgcmVzLnRleHQoKTtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBIdHRwRXJyb3IoZXJyb3JNZXNzYWdlLCByZXMuc3RhdHVzKSk7XG4gICAgfVxufTsiXSwibmFtZXMiOlsiZ2V0U29tZXRoaW5nIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJzdGF0dXMiLCJlcnJvciIsInRleHQiLCJtZXNzYWdlIiwiSlNPTiIsInBhcnNlIiwib2siLCJqc29uIiwiZSIsImVycm9yTWVzc2FnZSIsIlByb21pc2UiLCJyZWplY3QiLCJIdHRwRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/pokemon/api/pokeApi.tsx\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/pokemon/api/pokeApi.tsx"));
module.exports = __webpack_exports__;

})();
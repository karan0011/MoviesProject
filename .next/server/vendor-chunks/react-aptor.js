"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-aptor";
exports.ids = ["vendor-chunks/react-aptor"];
exports.modules = {

/***/ "(ssr)/./node_modules/react-aptor/esm/index.js":
/*!***********************************************!*\
  !*** ./node_modules/react-aptor/esm/index.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ useAptor),\n/* harmony export */   useAptor: () => (/* binding */ useAptor)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction useAptor(ref, configuration, deps = []) {\n    const [instance, setInstance] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);\n    const domRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    const { instantiate, destroy, getAPI, params } = configuration;\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const instanceReference = instantiate(domRef.current, params);\n        setInstance(instanceReference);\n        return ()=>{\n            if (destroy) destroy(instanceReference, params);\n        };\n    }, deps);\n    const api = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>getAPI(instance, params), [\n        instance\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref, api, [\n        api\n    ]);\n    return domRef;\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvcmVhY3QtYXB0b3IvZXNtL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBa0Y7QUFFbEYsU0FBU0ssU0FBU0MsR0FBRyxFQUFFQyxhQUFhLEVBQUVDLE9BQU8sRUFBRTtJQUM3QyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1YsK0NBQVFBLENBQUM7SUFDekMsTUFBTVcsU0FBU1YsNkNBQU1BLENBQUM7SUFDdEIsTUFBTSxFQUFFVyxXQUFXLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFQyxNQUFNLEVBQUUsR0FBR1I7SUFDakRMLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTWMsb0JBQW9CSixZQUFZRCxPQUFPTSxPQUFPLEVBQUVGO1FBQ3RETCxZQUFZTTtRQUNaLE9BQU87WUFDTCxJQUFJSCxTQUNGQSxRQUFRRyxtQkFBbUJEO1FBQy9CO0lBQ0YsR0FBR1A7SUFDSCxNQUFNVSxNQUFNZiw4Q0FBT0EsQ0FBQyxJQUFNVyxPQUFPTCxVQUFVTSxTQUFTO1FBQUNOO0tBQVM7SUFDOURMLDBEQUFtQkEsQ0FBQ0UsS0FBS1ksS0FBSztRQUFDQTtLQUFJO0lBQ25DLE9BQU9QO0FBQ1Q7QUFFeUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aGQtdHYvLi9ub2RlX21vZHVsZXMvcmVhY3QtYXB0b3IvZXNtL2luZGV4LmpzP2ZjMjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZVJlZiwgdXNlRWZmZWN0LCB1c2VNZW1vLCB1c2VJbXBlcmF0aXZlSGFuZGxlIH0gZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiB1c2VBcHRvcihyZWYsIGNvbmZpZ3VyYXRpb24sIGRlcHMgPSBbXSkge1xuICBjb25zdCBbaW5zdGFuY2UsIHNldEluc3RhbmNlXSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBkb21SZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IHsgaW5zdGFudGlhdGUsIGRlc3Ryb3ksIGdldEFQSSwgcGFyYW1zIH0gPSBjb25maWd1cmF0aW9uO1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGluc3RhbmNlUmVmZXJlbmNlID0gaW5zdGFudGlhdGUoZG9tUmVmLmN1cnJlbnQsIHBhcmFtcyk7XG4gICAgc2V0SW5zdGFuY2UoaW5zdGFuY2VSZWZlcmVuY2UpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpZiAoZGVzdHJveSlcbiAgICAgICAgZGVzdHJveShpbnN0YW5jZVJlZmVyZW5jZSwgcGFyYW1zKTtcbiAgICB9O1xuICB9LCBkZXBzKTtcbiAgY29uc3QgYXBpID0gdXNlTWVtbygoKSA9PiBnZXRBUEkoaW5zdGFuY2UsIHBhcmFtcyksIFtpbnN0YW5jZV0pO1xuICB1c2VJbXBlcmF0aXZlSGFuZGxlKHJlZiwgYXBpLCBbYXBpXSk7XG4gIHJldHVybiBkb21SZWY7XG59XG5cbmV4cG9ydCB7IHVzZUFwdG9yIGFzIGRlZmF1bHQsIHVzZUFwdG9yIH07XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VSZWYiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1vIiwidXNlSW1wZXJhdGl2ZUhhbmRsZSIsInVzZUFwdG9yIiwicmVmIiwiY29uZmlndXJhdGlvbiIsImRlcHMiLCJpbnN0YW5jZSIsInNldEluc3RhbmNlIiwiZG9tUmVmIiwiaW5zdGFudGlhdGUiLCJkZXN0cm95IiwiZ2V0QVBJIiwicGFyYW1zIiwiaW5zdGFuY2VSZWZlcmVuY2UiLCJjdXJyZW50IiwiYXBpIiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/react-aptor/esm/index.js\n");

/***/ })

};
;
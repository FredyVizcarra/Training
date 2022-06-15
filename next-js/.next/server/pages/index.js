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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-react */ \"semantic-ui-react\");\n/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nconst Home = ()=>{\n    const { 0: productList , 1: setProductList  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        window.fetch(\"/api/avo\").then((response)=>response.json()\n        ).then(({ data , length  })=>{\n            setProductList(data);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"content\",\n        children: productList.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card, {\n                className: \"content_card\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                        src: product.image,\n                        wrapped: true,\n                        ui: false\n                    }, void 0, false, {\n                        fileName: \"/Users/fredy/Documents/workspace/Platzi/next-js/pages/index.js\",\n                        lineNumber: 20,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Content, {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Header, {\n                                children: product.name\n                            }, void 0, false, {\n                                fileName: \"/Users/fredy/Documents/workspace/Platzi/next-js/pages/index.js\",\n                                lineNumber: 22,\n                                columnNumber: 25\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(semantic_ui_react__WEBPACK_IMPORTED_MODULE_2__.Card.Meta, {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"date\",\n                                    children: product.price\n                                }, void 0, false, {\n                                    fileName: \"/Users/fredy/Documents/workspace/Platzi/next-js/pages/index.js\",\n                                    lineNumber: 24,\n                                    columnNumber: 29\n                                }, undefined)\n                            }, void 0, false, {\n                                fileName: \"/Users/fredy/Documents/workspace/Platzi/next-js/pages/index.js\",\n                                lineNumber: 23,\n                                columnNumber: 25\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/fredy/Documents/workspace/Platzi/next-js/pages/index.js\",\n                        lineNumber: 21,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/fredy/Documents/workspace/Platzi/next-js/pages/index.js\",\n                lineNumber: 19,\n                columnNumber: 17\n            }, undefined)\n        )\n    }, void 0, false, {\n        fileName: \"/Users/fredy/Documents/workspace/Platzi/next-js/pages/index.js\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBbUQ7QUFDSjtBQUsvQyxNQUFNSyxJQUFJLEdBQUcsSUFBTTtJQUNmLE1BQU0sRUFQVixHQU9XQyxXQUFXLEdBUHRCLEdBT3dCQyxjQUFjLE1BQUlMLCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBS2xERCxnREFBUyxDQUFDLElBQU07UUFDWk8sTUFBTSxDQUFDQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUNDLElBQUksQ0FBQ0MsQ0FBQUEsUUFBUSxHQUFJQSxRQUFRLENBQUNDLElBQUksRUFBRTtRQUFBLENBQUMsQ0FBQ0YsSUFBSSxDQUFDLENBQUMsRUFBRUcsSUFBSSxHQUFFQyxNQUFNLEdBQUUsR0FBSztZQUFFUCxjQUFjLENBQUNNLElBQUksQ0FBQztTQUFFLENBQUM7S0FDbEgsRUFBRSxFQUFFLENBQUM7SUFDTixxQkFDSSw4REFBQ0UsS0FBRztRQUFDQyxTQUFTLEVBQUMsU0FBUztrQkFDbkJWLFdBQVcsQ0FBQ1csR0FBRyxDQUFDLENBQUNDLE9BQU8saUJBQ3JCLDhEQUFDZixtREFBSTtnQkFBQ2EsU0FBUyxFQUFDLGNBQWM7O2tDQUMxQiw4REFBQ1osb0RBQUs7d0JBQUNlLEdBQUcsRUFBRUQsT0FBTyxDQUFDRSxLQUFLO3dCQUFFQyxPQUFPO3dCQUFDQyxFQUFFLEVBQUUsS0FBSzs7Ozs7aUNBQUk7a0NBQ2hELDhEQUFDbkIsMkRBQVk7OzBDQUNULDhEQUFDQSwwREFBVzswQ0FBRWUsT0FBTyxDQUFDTyxJQUFJOzs7Ozt5Q0FBZTswQ0FDekMsOERBQUN0Qix3REFBUzswQ0FDTiw0RUFBQ3dCLE1BQUk7b0NBQUNYLFNBQVMsRUFBQyxNQUFNOzhDQUFFRSxPQUFPLENBQUNVLEtBQUs7Ozs7OzZDQUFROzs7Ozt5Q0FDckM7Ozs7OztpQ0FFRDs7Ozs7O3lCQUVaO1FBQ1YsQ0FBQzs7Ozs7aUJBS0EsQ0FDVDtDQUNKO0FBRUQsaUVBQWV2QixJQUFJLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGF0emktbmV4dGpzLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQ2FyZCwgSW1hZ2UgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcblxuXG5cblxuY29uc3QgSG9tZSA9ICgpID0+IHtcbiAgICBjb25zdCBbcHJvZHVjdExpc3QsIHNldFByb2R1Y3RMaXN0XSA9IHVzZVN0YXRlKFtdKTtcblxuXG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIHdpbmRvdy5mZXRjaCgnL2FwaS9hdm8nKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbigoeyBkYXRhLCBsZW5ndGggfSkgPT4geyBzZXRQcm9kdWN0TGlzdChkYXRhKSB9KVxuICAgIH0sIFtdKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAge3Byb2R1Y3RMaXN0Lm1hcCgocHJvZHVjdCkgPT4gKFxuICAgICAgICAgICAgICAgIDxDYXJkIGNsYXNzTmFtZT1cImNvbnRlbnRfY2FyZFwiPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtwcm9kdWN0LmltYWdlfSB3cmFwcGVkIHVpPXtmYWxzZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDYXJkLkhlYWRlcj57cHJvZHVjdC5uYW1lfTwvQ2FyZC5IZWFkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2FyZC5NZXRhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGF0ZSc+e3Byb2R1Y3QucHJpY2V9PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9DYXJkLk1ldGE+XG5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG5cbiAgICAgICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgICAgICApKX1cblxuXG5cblxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJDYXJkIiwiSW1hZ2UiLCJIb21lIiwicHJvZHVjdExpc3QiLCJzZXRQcm9kdWN0TGlzdCIsIndpbmRvdyIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwianNvbiIsImRhdGEiLCJsZW5ndGgiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJwcm9kdWN0Iiwic3JjIiwiaW1hZ2UiLCJ3cmFwcGVkIiwidWkiLCJDb250ZW50IiwiSGVhZGVyIiwibmFtZSIsIk1ldGEiLCJzcGFuIiwicHJpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

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

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("semantic-ui-react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "packages_farms_constants_5_ts";
exports.ids = ["packages_farms_constants_5_ts"];
exports.modules = {

/***/ "./packages/farms/constants/5.ts":
/*!***************************************!*\
  !*** ./packages/farms/constants/5.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @pancakeswap/tokens */ \"./packages/tokens/src/index.ts\");\n\nconst farms = [\n    {\n        pid: 7,\n        vaultPid: 1,\n        lpSymbol: \"CELR-WETH LP\",\n        lpAddress: \"0xF8E1FA0648F87c115F26E43271B3D6e4a80A2944\",\n        quoteToken: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__.goerliTestnetTokens.weth,\n        token: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__.goerliTestnetTokens.celr\n    },\n    {\n        pid: 8,\n        vaultPid: 2,\n        lpSymbol: \"LEET-WETH LP\",\n        lpAddress: \"0x846f5e6DDb29dC5D07f8dE0a980E30cb5aa07109\",\n        quoteToken: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__.goerliTestnetTokens.weth,\n        token: _pancakeswap_tokens__WEBPACK_IMPORTED_MODULE_0__.goerliTestnetTokens.leet\n    }, \n].map((p)=>({\n        ...p,\n        token: p.token.serialize,\n        quoteToken: p.quoteToken.serialize\n    }));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (farms);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWNrYWdlcy9mYXJtcy9jb25zdGFudHMvNS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUF5RDtBQUd6RCxNQUFNQyxLQUFLLEdBQTJCO0lBQ3BDO1FBQ0VDLEdBQUcsRUFBRSxDQUFDO1FBQ05DLFFBQVEsRUFBRSxDQUFDO1FBQ1hDLFFBQVEsRUFBRSxjQUFjO1FBQ3hCQyxTQUFTLEVBQUUsNENBQTRDO1FBQ3ZEQyxVQUFVLEVBQUVOLHlFQUF3QjtRQUNwQ1EsS0FBSyxFQUFFUix5RUFBd0I7S0FDaEM7SUFDRDtRQUNFRSxHQUFHLEVBQUUsQ0FBQztRQUNOQyxRQUFRLEVBQUUsQ0FBQztRQUNYQyxRQUFRLEVBQUUsY0FBYztRQUN4QkMsU0FBUyxFQUFFLDRDQUE0QztRQUN2REMsVUFBVSxFQUFFTix5RUFBd0I7UUFDcENRLEtBQUssRUFBRVIseUVBQXdCO0tBQ2hDO0NBQ0YsQ0FBQ1csR0FBRyxDQUFDLENBQUNDLENBQUMsR0FBTTtRQUFFLEdBQUdBLENBQUM7UUFBRUosS0FBSyxFQUFFSSxDQUFDLENBQUNKLEtBQUssQ0FBQ0ssU0FBUztRQUFFUCxVQUFVLEVBQUVNLENBQUMsQ0FBQ04sVUFBVSxDQUFDTyxTQUFTO0tBQUUsRUFBRTtBQUV0RixpRUFBZVosS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3BhbmNha2UtZnJvbnRlbmQvLi9wYWNrYWdlcy9mYXJtcy9jb25zdGFudHMvNS50cz85OWQyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdvZXJsaVRlc3RuZXRUb2tlbnMgfSBmcm9tICdAcGFuY2FrZXN3YXAvdG9rZW5zJ1xyXG5pbXBvcnQgeyBTZXJpYWxpemVkRmFybUNvbmZpZyB9IGZyb20gJ0BwYW5jYWtlc3dhcC9mYXJtcydcclxuXHJcbmNvbnN0IGZhcm1zOiBTZXJpYWxpemVkRmFybUNvbmZpZ1tdID0gW1xyXG4gIHtcclxuICAgIHBpZDogNyxcclxuICAgIHZhdWx0UGlkOiAxLFxyXG4gICAgbHBTeW1ib2w6ICdDRUxSLVdFVEggTFAnLFxyXG4gICAgbHBBZGRyZXNzOiAnMHhGOEUxRkEwNjQ4Rjg3YzExNUYyNkU0MzI3MUIzRDZlNGE4MEEyOTQ0JyxcclxuICAgIHF1b3RlVG9rZW46IGdvZXJsaVRlc3RuZXRUb2tlbnMud2V0aCxcclxuICAgIHRva2VuOiBnb2VybGlUZXN0bmV0VG9rZW5zLmNlbHIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwaWQ6IDgsXHJcbiAgICB2YXVsdFBpZDogMixcclxuICAgIGxwU3ltYm9sOiAnTEVFVC1XRVRIIExQJyxcclxuICAgIGxwQWRkcmVzczogJzB4ODQ2ZjVlNkREYjI5ZEM1RDA3ZjhkRTBhOTgwRTMwY2I1YWEwNzEwOScsXHJcbiAgICBxdW90ZVRva2VuOiBnb2VybGlUZXN0bmV0VG9rZW5zLndldGgsXHJcbiAgICB0b2tlbjogZ29lcmxpVGVzdG5ldFRva2Vucy5sZWV0LFxyXG4gIH0sXHJcbl0ubWFwKChwKSA9PiAoeyAuLi5wLCB0b2tlbjogcC50b2tlbi5zZXJpYWxpemUsIHF1b3RlVG9rZW46IHAucXVvdGVUb2tlbi5zZXJpYWxpemUgfSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmYXJtc1xyXG4iXSwibmFtZXMiOlsiZ29lcmxpVGVzdG5ldFRva2VucyIsImZhcm1zIiwicGlkIiwidmF1bHRQaWQiLCJscFN5bWJvbCIsImxwQWRkcmVzcyIsInF1b3RlVG9rZW4iLCJ3ZXRoIiwidG9rZW4iLCJjZWxyIiwibGVldCIsIm1hcCIsInAiLCJzZXJpYWxpemUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./packages/farms/constants/5.ts\n");

/***/ })

};
;
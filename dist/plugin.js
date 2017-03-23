(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ReactPlugin"] = factory();
	else
		root["ReactPlugin"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* exports used: default */
/*!******************************************!*\
  !*** ./lib/plugin/worker/main.worker.js ***!
  \******************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = function () {\n\treturn new Worker(__webpack_require__.p + \"37c77419bf43e9b07f07.worker.js\");\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9saWIvcGx1Z2luL3dvcmtlci9tYWluLndvcmtlci5qcz9kMTFiIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiBuZXcgV29ya2VyKF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCIzN2M3NzQxOWJmNDNlOWIwN2YwNy53b3JrZXIuanNcIik7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsaWIvcGx1Z2luL3dvcmtlci9tYWluLndvcmtlci5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9");

/***/ }),
/* 1 */
/* exports provided: default */
/* all exports used */
/*!*****************************!*\
  !*** ./lib/plugin/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__worker_main_worker_js__ = __webpack_require__(/*! ./worker/main.worker.js */ 0);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__worker_main_worker_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__worker_main_worker_js__);\n\n\nvar request = {\n    method: 'GET',\n    mode: 'cors',\n    cache: 'default',\n    redirect: 'follow',\n    headers: {\n        'Content-Type': 'application/json'\n    }\n};\n\nvar worker = new __WEBPACK_IMPORTED_MODULE_0__worker_main_worker_js___default.a();\nvar tasks = {};\n\nworker.addEventListener('message', function (event) {\n    var _event$data = event.data,\n        id = _event$data.id,\n        data = _event$data.data;\n\n    tasks[id].res(data);\n    delete tasks[id];\n}, false);\n\nvar API = {\n    fetch: function fetch(url) {\n        var id = Math.random() * 1000 + '_' + Date.now();\n\n        tasks[id] = function () {\n            var res = void 0,\n                rej = void 0;\n            var promise = new Promise(function (resolve, reject) {\n                res = resolve;\n                rej = reject;\n            });\n            return {\n                promise: promise,\n                res: res,\n                rej: rej\n            };\n        }();\n\n        var query = {\n            url: 'http://localhost:3000/api/List',\n            request: request\n        };\n\n        worker.postMessage({ id: id, query: query });\n\n        return tasks[id].promise;\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = API;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9saWIvcGx1Z2luL2luZGV4LmpzP2EzYjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE15V29ya2VyIGZyb20gJy4vd29ya2VyL21haW4ud29ya2VyLmpzJztcblxuY29uc3QgcmVxdWVzdCA9IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIG1vZGU6ICdjb3JzJyxcbiAgICBjYWNoZTogJ2RlZmF1bHQnLFxuICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9XG59O1xuXG5jb25zdCB3b3JrZXIgPSBuZXcgTXlXb3JrZXIoKTtcbmNvbnN0IHRhc2tzID0ge307XG5cbndvcmtlci5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBpZCwgZGF0YSB9ID0gZXZlbnQuZGF0YTtcbiAgICB0YXNrc1tpZF0ucmVzKGRhdGEpO1xuICAgIGRlbGV0ZSB0YXNrc1tpZF07XG59LCBmYWxzZSk7XG5cbmNvbnN0IEFQSSA9IHtcbiAgICBmZXRjaDogZnVuY3Rpb24gKHVybCkge1xuICAgICAgICBjb25zdCBpZCA9IGAkeyhNYXRoLnJhbmRvbSgpICogMTAwMCl9XyR7RGF0ZS5ub3coKX1gO1xuXG4gICAgICAgIHRhc2tzW2lkXSA9ICgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzLCByZWo7XG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIHJlcyA9IHJlc29sdmU7XG4gICAgICAgICAgICAgICAgcmVqID0gcmVqZWN0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHByb21pc2UsXG4gICAgICAgICAgICAgICAgcmVzLFxuICAgICAgICAgICAgICAgIHJlalxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICBjb25zdCBxdWVyeSA9IHtcbiAgICAgICAgICAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvTGlzdCcsXG4gICAgICAgICAgICByZXF1ZXN0XG4gICAgICAgIH07XG5cbiAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQsIHF1ZXJ5IH0pO1xuXG4gICAgICAgIHJldHVybiB0YXNrc1tpZF0ucHJvbWlzZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBUEk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL3BsdWdpbi9pbmRleC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFMQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBekJBO0FBQ0E7QUEyQkE7OzsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);
});
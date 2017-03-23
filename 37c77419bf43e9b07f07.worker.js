/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* unknown exports provided */
/* all exports used */
/*!******************************************!*\
  !*** ./lib/plugin/worker/main.worker.js ***!
  \******************************************/
/***/ (function(module, exports) {

eval("\n/* global onmessage */\n/* eslint no-unused-vars: 0, no-native-reassign: 0 */\n\nonmessage = function (event) {\n    const { id, query } = event.data;\n    fetch(query.url, query.request)\n        .then(function (response) {\n            return response.json();\n        }).then(function (json) {\n            postMessage({ id, data: json });\n        }).catch(function (ex) {\n            postMessage({ id, error: ex });\n        });\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9wbHVnaW4vd29ya2VyL21haW4ud29ya2VyLmpzPzliNTIiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vKiBnbG9iYWwgb25tZXNzYWdlICovXG4vKiBlc2xpbnQgbm8tdW51c2VkLXZhcnM6IDAsIG5vLW5hdGl2ZS1yZWFzc2lnbjogMCAqL1xuXG5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICBjb25zdCB7IGlkLCBxdWVyeSB9ID0gZXZlbnQuZGF0YTtcbiAgICBmZXRjaChxdWVyeS51cmwsIHF1ZXJ5LnJlcXVlc3QpXG4gICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfSkudGhlbihmdW5jdGlvbiAoanNvbikge1xuICAgICAgICAgICAgcG9zdE1lc3NhZ2UoeyBpZCwgZGF0YToganNvbiB9KTtcbiAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24gKGV4KSB7XG4gICAgICAgICAgICBwb3N0TWVzc2FnZSh7IGlkLCBlcnJvcjogZXggfSk7XG4gICAgICAgIH0pO1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbGliL3BsdWdpbi93b3JrZXIvbWFpbi53b3JrZXIuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);
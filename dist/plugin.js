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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/* exports provided: default */
/* all exports used */
/*!*****************************!*\
  !*** ./lib/plugin/index.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\nvar request = {\n    method: 'GET',\n    mode: 'cors',\n    cache: 'default',\n    redirect: 'follow',\n    headers: {\n        'Content-Type': 'application/json'\n    }\n};\n\nvar tasks = {};\n\nvar onmessage = function onmessage(event) {\n    var _event$data = event.data,\n        id = _event$data.id,\n        query = _event$data.query;\n\n    fetch(query.url, query.request).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        postMessage({ id: id, data: json });\n    }).catch(function (ex) {\n        postMessage({ id: id, error: ex });\n    });\n};\n\nvar blob = new Blob(['onmessage = ' + String(onmessage)], {\n    type: \"text\\/javascript\"\n});\n\nvar worker = new Worker(URL.createObjectURL(blob));\n\nworker.addEventListener('message', function (event) {\n    var _event$data2 = event.data,\n        id = _event$data2.id,\n        data = _event$data2.data;\n\n    tasks[id].res(data);\n    delete tasks[id];\n}, false);\n\nvar API = {\n    fetch: function fetch(url) {\n        var req = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : request;\n\n        var id = Math.random() * 1000 + '_' + Date.now();\n\n        tasks[id] = function () {\n            var res = void 0,\n                rej = void 0;\n            var promise = new Promise(function (resolve, reject) {\n                res = resolve;\n                rej = reject;\n            });\n            return {\n                promise: promise,\n                res: res,\n                rej: rej\n            };\n        }();\n\n        var query = {\n            url: url || 'http://localhost:3000/api/List',\n            request: req\n        };\n\n        worker.postMessage({ id: id, query: query });\n\n        return tasks[id].promise;\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = API;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9saWIvcGx1Z2luL2luZGV4LmpzP2EzYjUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcmVxdWVzdCA9IHtcbiAgICBtZXRob2Q6ICdHRVQnLFxuICAgIG1vZGU6ICdjb3JzJyxcbiAgICBjYWNoZTogJ2RlZmF1bHQnLFxuICAgIHJlZGlyZWN0OiAnZm9sbG93JyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICB9XG59O1xuXG5jb25zdCB0YXNrcyA9IHt9O1xuXG5jb25zdCBvbm1lc3NhZ2UgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGNvbnN0IHsgaWQsIHF1ZXJ5IH0gPSBldmVudC5kYXRhO1xuICAgIGZldGNoKHF1ZXJ5LnVybCwgcXVlcnkucmVxdWVzdClcbiAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgICAgICBwb3N0TWVzc2FnZSh7IGlkLCBkYXRhOiBqc29uIH0pO1xuICAgICAgICB9KS5jYXRjaChmdW5jdGlvbiAoZXgpIHtcbiAgICAgICAgICAgIHBvc3RNZXNzYWdlKHsgaWQsIGVycm9yOiBleCB9KTtcbiAgICAgICAgfSk7XG59XG5cbmNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYG9ubWVzc2FnZSA9ICR7U3RyaW5nKG9ubWVzc2FnZSl9YF0sIHtcbiAgICB0eXBlOiBcInRleHRcXC9qYXZhc2NyaXB0XCJcbn0pO1xuXG5jb25zdCB3b3JrZXIgPSBuZXcgV29ya2VyKFxuICBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpXG4pO1xuXG5cbndvcmtlci5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgeyBpZCwgZGF0YSB9ID0gZXZlbnQuZGF0YTtcbiAgICB0YXNrc1tpZF0ucmVzKGRhdGEpO1xuICAgIGRlbGV0ZSB0YXNrc1tpZF07XG59LCBmYWxzZSk7XG5cbmNvbnN0IEFQSSA9IHtcbiAgICBmZXRjaDogZnVuY3Rpb24gKHVybCwgcmVxID0gcmVxdWVzdCkge1xuICAgICAgICBjb25zdCBpZCA9IGAkeyhNYXRoLnJhbmRvbSgpICogMTAwMCl9XyR7RGF0ZS5ub3coKX1gO1xuXG4gICAgICAgIHRhc2tzW2lkXSA9ICgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzLCByZWo7XG4gICAgICAgICAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIHJlcyA9IHJlc29sdmU7XG4gICAgICAgICAgICAgICAgcmVqID0gcmVqZWN0O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHByb21pc2UsXG4gICAgICAgICAgICAgICAgcmVzLFxuICAgICAgICAgICAgICAgIHJlalxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICBjb25zdCBxdWVyeSA9IHtcbiAgICAgICAgICAgIHVybDogdXJsIHx8ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL0xpc3QnLFxuICAgICAgICAgICAgcmVxdWVzdDogcmVxXG4gICAgICAgIH07XG5cbiAgICAgICAgd29ya2VyLnBvc3RNZXNzYWdlKHsgaWQsIHF1ZXJ5IH0pO1xuXG4gICAgICAgIHJldHVybiB0YXNrc1tpZF0ucHJvbWlzZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBBUEk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbGliL3BsdWdpbi9pbmRleC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUxBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUF6QkE7QUFDQTtBQTJCQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);
});
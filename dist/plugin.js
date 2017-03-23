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
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n\n\nvar request = {\n    method: 'GET',\n    mode: 'cors',\n    cache: 'default',\n    redirect: 'follow',\n    headers: {\n        'Content-Type': 'application/json'\n    }\n};\n\nvar newWorker = function newWorker(funcObj) {\n    var blobURL = URL.createObjectURL(new Blob(['(', funcObj.toString(), ')()'], {\n        type: 'application/javascript'\n    })),\n        worker = new Worker(blobURL);\n\n    URL.revokeObjectURL(blobURL);\n\n    return worker;\n};\n\nvar worker = newWorker(function (event) {\n    var _event$data = event.data,\n        id = _event$data.id,\n        query = _event$data.query;\n\n    fetch(query.url, query.request).then(function (response) {\n        return response.json();\n    }).then(function (json) {\n        postMessage({ id: id, data: json });\n    }).catch(function (ex) {\n        postMessage({ id: id, error: ex });\n    });\n});\n\nvar tasks = {};\n\nworker.addEventListener('message', function (event) {\n    var _event$data2 = event.data,\n        id = _event$data2.id,\n        data = _event$data2.data;\n\n    tasks[id].res(data);\n    delete tasks[id];\n}, false);\n\nvar API = {\n    fetch: function fetch(url) {\n        var id = Math.random() * 1000 + '_' + Date.now();\n\n        tasks[id] = function () {\n            var res = void 0,\n                rej = void 0;\n            var promise = new Promise(function (resolve, reject) {\n                res = resolve;\n                rej = reject;\n            });\n            return {\n                promise: promise,\n                res: res,\n                rej: rej\n            };\n        }();\n\n        var query = {\n            url: 'http://localhost:3000/api/List',\n            request: request\n        };\n\n        worker.postMessage({ id: id, query: query });\n\n        return tasks[id].promise;\n    }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = API;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9saWIvcGx1Z2luL2luZGV4LmpzP2EzYjUiXSwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgTXlXb3JrZXIgZnJvbSAnLi93b3JrZXIvbWFpbi53b3JrZXIuanMnO1xuXG5jb25zdCByZXF1ZXN0ID0ge1xuICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgbW9kZTogJ2NvcnMnLFxuICAgIGNhY2hlOiAnZGVmYXVsdCcsXG4gICAgcmVkaXJlY3Q6ICdmb2xsb3cnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH1cbn07XG5cbmNvbnN0IG5ld1dvcmtlciA9IGZ1bmN0aW9uIChmdW5jT2JqKSB7XG4gICAgdmFyIGJsb2JVUkwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKG5ldyBCbG9iKFsnKCcsXG5cbiAgICBmdW5jT2JqLnRvU3RyaW5nKCksXG5cbiAgICAgICAgJykoKSddLCB7XG4gICAgICAgIHR5cGU6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0J1xuICAgIH0pKSxcblxuICAgICAgICB3b3JrZXIgPSBuZXcgV29ya2VyKGJsb2JVUkwpO1xuXG4gICAgVVJMLnJldm9rZU9iamVjdFVSTChibG9iVVJMKTtcblxuICAgIHJldHVybiB3b3JrZXI7XG59XG5cbmNvbnN0IHdvcmtlciA9IG5ld1dvcmtlcihmdW5jdGlvbiAoZXZlbnQpIHtcbiAgY29uc3QgeyBpZCwgcXVlcnkgfSA9IGV2ZW50LmRhdGE7XG4gIGZldGNoKHF1ZXJ5LnVybCwgcXVlcnkucmVxdWVzdClcbiAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICB9KS50aGVuKGZ1bmN0aW9uIChqc29uKSB7XG4gICAgICAgICAgcG9zdE1lc3NhZ2UoeyBpZCwgZGF0YToganNvbiB9KTtcbiAgICAgIH0pLmNhdGNoKGZ1bmN0aW9uIChleCkge1xuICAgICAgICAgIHBvc3RNZXNzYWdlKHsgaWQsIGVycm9yOiBleCB9KTtcbiAgICAgIH0pO1xufSk7XG5cbi8vY29uc3Qgd29ya2VyID0gbmV3IE15V29ya2VyKCk7XG5jb25zdCB0YXNrcyA9IHt9O1xuXG53b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHsgaWQsIGRhdGEgfSA9IGV2ZW50LmRhdGE7XG4gICAgdGFza3NbaWRdLnJlcyhkYXRhKTtcbiAgICBkZWxldGUgdGFza3NbaWRdO1xufSwgZmFsc2UpO1xuXG5jb25zdCBBUEkgPSB7XG4gICAgZmV0Y2g6IGZ1bmN0aW9uICh1cmwpIHtcbiAgICAgICAgY29uc3QgaWQgPSBgJHsoTWF0aC5yYW5kb20oKSAqIDEwMDApfV8ke0RhdGUubm93KCl9YDtcblxuICAgICAgICB0YXNrc1tpZF0gPSAoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJlcywgcmVqO1xuICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICByZXMgPSByZXNvbHZlO1xuICAgICAgICAgICAgICAgIHJlaiA9IHJlamVjdDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwcm9taXNlLFxuICAgICAgICAgICAgICAgIHJlcyxcbiAgICAgICAgICAgICAgICByZWpcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pKCk7XG5cbiAgICAgICAgY29uc3QgcXVlcnkgPSB7XG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL0xpc3QnLFxuICAgICAgICAgICAgcmVxdWVzdFxuICAgICAgICB9O1xuXG4gICAgICAgIHdvcmtlci5wb3N0TWVzc2FnZSh7IGlkLCBxdWVyeSB9KTtcblxuICAgICAgICByZXR1cm4gdGFza3NbaWRdLnByb21pc2U7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgQVBJO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxpYi9wbHVnaW4vaW5kZXguanMiXSwibWFwcGluZ3MiOiI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUxBO0FBQ0E7QUFTQTtBQUNBO0FBS0E7QUFEQTtBQUpBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUF6QkE7QUFDQTtBQTJCQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ })
/******/ ]);
});
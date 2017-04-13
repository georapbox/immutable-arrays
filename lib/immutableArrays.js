/*!
 * immutable-arrays - Immutable versions of normally mutable array methods
 * 
 * @version v0.2.0
 * @author George Raptis <georapbox@gmail.com> (georapbox.github.io)
 * @homepage https://github.com/georapbox/immutable-arrays#readme
 * @repository git+https://github.com/georapbox/immutable-arrays.git
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("immutableArrays", [], factory);
	else if(typeof exports === 'object')
		exports["immutableArrays"] = factory();
	else
		root["immutableArrays"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = immutableDelete;
/**
 * Deletes an element from an array by its index in the array.
 *
 * @param {Array} array The original array.
 * @param {Number} index The index of the element to delete in the original array.
 * @return {Array} A new array with the element removed.
 */
function immutableDelete(array, index) {
  return array.slice(0, index).concat(array.slice(index + 1));
}
module.exports = exports["default"];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = immutablePop;
/**
 * Removes the last element from an array by returning
 * a new array instead of mutating the original one.
 *
 * @param {Array} array The original array.
 * @return {Array} A new array with the last element removed.
 */
function immutablePop(array) {
  return array.slice(0, -1);
}
module.exports = exports["default"];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = immutablePush;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Adds one or more elements to the end of an array by returning
 * a new array instead of mutating the original one.
 *
 * @param {Array} array The original array.
 * @param {*} elementN The elements to add to the end of the array.
 * @return {Array} A new array with the new entries added to the end.
 */
function immutablePush(array) {
  for (var _len = arguments.length, elementN = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    elementN[_key - 1] = arguments[_key];
  }

  return [].concat(_toConsumableArray(array), elementN);
}
module.exports = exports["default"];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = immutableReverse;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Reverses an array (not in place).
 * The first array element becomes the last, and the last array element becomes the first.
 *
 * @param {Array} array The original array.
 * @return {Array} A new array reversed.
 */
function immutableReverse(array) {
  return [].concat(_toConsumableArray(array)).reverse();
}
module.exports = exports["default"];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = immutableShift;
/**
 * Removes the first element from an array.
 *
 * @param {Array} array The original array.
 * @return {Array} A new array with the first element removed.
 */
function immutableShift(array) {
  return array.slice(1);
}
module.exports = exports["default"];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = immutableSplice;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Removes existing elements and/or adds new elements to an array.
 *
 * @param {Array} array The original array.
 * @param {Number} start Zero based index at which to start changing the array.
 * @param {Number} [deleteCount] An integer indicating the number of old array elements to remove.
 * @param {*} elementN The elements to add to the array, beginning at the start index. If you don't specify any elements, splice() will only remove elements from the array.
 * @return {Array} The result array.
 */
function immutableSplice(array, start, deleteCount) {
  for (var _len = arguments.length, elementN = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    elementN[_key - 3] = arguments[_key];
  }

  return [].concat(_toConsumableArray(array.slice(0, start)), elementN, _toConsumableArray(array.slice(start + deleteCount)));
}
module.exports = exports["default"];

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = immutableUnshift;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Adds one or more elements to the beginning of an array.
 *
 * @param {Array} array The original array.
 * @param {*} elementN [description] The elements to add to the front of the array.
 * @return {Array} A new array with the new elements added to the front.
 */
function immutableUnshift(array) {
  for (var _len = arguments.length, elementN = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    elementN[_key - 1] = arguments[_key];
  }

  return [].concat(elementN, _toConsumableArray(array));
}
module.exports = exports["default"];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutablePush = __webpack_require__(2);

var _immutablePush2 = _interopRequireDefault(_immutablePush);

var _immutablePop = __webpack_require__(1);

var _immutablePop2 = _interopRequireDefault(_immutablePop);

var _immutableShift = __webpack_require__(4);

var _immutableShift2 = _interopRequireDefault(_immutableShift);

var _immutableUnshift = __webpack_require__(6);

var _immutableUnshift2 = _interopRequireDefault(_immutableUnshift);

var _immutableSplice = __webpack_require__(5);

var _immutableSplice2 = _interopRequireDefault(_immutableSplice);

var _immutableReverse = __webpack_require__(3);

var _immutableReverse2 = _interopRequireDefault(_immutableReverse);

var _immutableDelete = __webpack_require__(0);

var _immutableDelete2 = _interopRequireDefault(_immutableDelete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = { push: _immutablePush2.default, pop: _immutablePop2.default, shift: _immutableShift2.default, unshift: _immutableUnshift2.default, splice: _immutableSplice2.default, reverse: _immutableReverse2.default, del: _immutableDelete2.default };
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=immutableArrays.js.map
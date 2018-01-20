/*!
 * immutable-arrays - Immutable versions of normally mutable array methods
 * 
 * @version v1.0.2
 * @author George Raptis <georapbox@gmail.com> (georapbox.github.io)
 * @homepage https://github.com/georapbox/immutable-arrays#readme
 * @repository https://github.com/georapbox/immutable-arrays.git
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
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.del = exports.sort = exports.reverse = exports.splice = exports.unshift = exports.shift = exports.pop = exports.push = undefined;

var _immutablePush = __webpack_require__(1);

var _immutablePush2 = _interopRequireDefault(_immutablePush);

var _immutablePop = __webpack_require__(2);

var _immutablePop2 = _interopRequireDefault(_immutablePop);

var _immutableShift = __webpack_require__(3);

var _immutableShift2 = _interopRequireDefault(_immutableShift);

var _immutableUnshift = __webpack_require__(4);

var _immutableUnshift2 = _interopRequireDefault(_immutableUnshift);

var _immutableSplice = __webpack_require__(5);

var _immutableSplice2 = _interopRequireDefault(_immutableSplice);

var _immutableReverse = __webpack_require__(6);

var _immutableReverse2 = _interopRequireDefault(_immutableReverse);

var _immutableSort = __webpack_require__(7);

var _immutableSort2 = _interopRequireDefault(_immutableSort);

var _immutableDelete = __webpack_require__(8);

var _immutableDelete2 = _interopRequireDefault(_immutableDelete);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var push = exports.push = _immutablePush2.default;
var pop = exports.pop = _immutablePop2.default;
var shift = exports.shift = _immutableShift2.default;
var unshift = exports.unshift = _immutableUnshift2.default;
var splice = exports.splice = _immutableSplice2.default;
var reverse = exports.reverse = _immutableReverse2.default;
var sort = exports.sort = _immutableSort2.default;
var del = exports.del = _immutableDelete2.default;

exports.default = {
  push: _immutablePush2.default,
  pop: _immutablePop2.default,
  shift: _immutableShift2.default,
  unshift: _immutableUnshift2.default,
  splice: _immutableSplice2.default,
  reverse: _immutableReverse2.default,
  sort: _immutableSort2.default,
  del: _immutableDelete2.default
};

/***/ }),
/* 1 */
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
 * @example
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutablePush(originalArray, 'f', 'g');
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray ['a', 'b', 'c', 'd', 'e', 'f', 'g']
 */
function immutablePush(array) {
  for (var _len = arguments.length, elementN = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    elementN[_key - 1] = arguments[_key];
  }

  return [].concat(_toConsumableArray(array), elementN);
}
module.exports = exports["default"];

/***/ }),
/* 2 */
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
 * @example
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutablePop(originalArray);
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray ['a', 'b', 'c', 'd']
 */
function immutablePop(array) {
  return array.slice(0, -1);
}
module.exports = exports["default"];

/***/ }),
/* 3 */
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
 * @example
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutableShift(originalArray);
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray ['b', 'c', 'd', 'e']
 */
function immutableShift(array) {
  return array.slice(1);
}
module.exports = exports["default"];

/***/ }),
/* 4 */
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
 * @example
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutableUnshift(originalArray, 'f', 'g');
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray ['f', 'g', 'a', 'b', 'c', 'd', 'e']
 */
function immutableUnshift(array) {
  for (var _len = arguments.length, elementN = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    elementN[_key - 1] = arguments[_key];
  }

  return [].concat(elementN, _toConsumableArray(array));
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
 * @param {Number} [start = array.length]
 *        Zero based index at which to start changing the array.
 *        If greater than the length of the array, actual starting index will be set to the length of the array.
 * @param {Number} [deleteCount = array.length - start]
 *        An integer indicating the number of old array elements to remove.
 *        If `deleteCount` is 0, no elements are removed.
 *        If `deleteCount` is lower than 0, `deleteCount` will be equal to 0.
 *        If `deleteCount` is greater than the number of elements left in the array starting at
 *        `start`, then all of the elements through the end of the array will be deleted.
 *        If `deleteCount` is omitted, `deleteCount` will be equal to (`array.length - start`),
 *        i.e., all of the elements beginning with `start` index on through the end of the array will be deleted.
 * @param {*} [elementN]
 *        The elements to add to the array, beginning at the start index.
 *        If you don't specify any elements, will only remove elements from the array.
 * @return {Array} The result array.
 *
 * @example
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutableSplice(originalArray, 0);
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray []
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutableSplice(originalArray, 0, 1);
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray ['b', 'c', 'd', 'e']
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutableSplice(originalArray, 0, 3);
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray ['d', 'e']
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutableSplice(originalArray, 0, originalArray.length);
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray []
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutableSplice(originalArray, 0, -3);
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray ['a', 'b', 'c', 'd', 'e']
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutableSplice(originalArray, 0, 0, 'lorem', 'ipsum');
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray ['lorem', 'ipsum', 'a', 'b', 'c', 'd', 'e']
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutableSplice(originalArray, originalArray.length, 0, 'lorem', 'ipsum');
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray ['a', 'b', 'c', 'd', 'e', 'lorem', 'ipsum']
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutableSplice(originalArray, 0, 2, 'lorem', 'ipsum');
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray ['lorem', 'ipsum', 'c', 'd', 'e']
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutableSplice(originalArray, originalArray.length - 2, 2, 'lorem', 'ipsum');
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray ['a', 'b', 'c', 'lorem', 'ipsum']
 */
function immutableSplice(array) {
  var start = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : array.length;
  var deleteCount = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : array.length - start;

  for (var _len = arguments.length, elementN = Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
    elementN[_key - 3] = arguments[_key];
  }

  return [].concat(_toConsumableArray(array.slice(0, start)), elementN, _toConsumableArray(array.slice(start + (deleteCount < 0 ? 0 : deleteCount))));
}
module.exports = exports["default"];

/***/ }),
/* 6 */
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
 * @example
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutableReverse(originalArray);
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray ['e', 'd', 'c', 'b', 'a']
 */
function immutableReverse(array) {
  return [].concat(_toConsumableArray(array)).reverse();
}
module.exports = exports["default"];

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = immutableSort;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Sorts the elements of an array (not in place) and returns a sorted array.
 *
 * @param {Array} array The original array.
 * @param {Function} [compareFunction] Specifies a function that defines the sort order.
 *        If omitted, the array is sorted according to each character's Unicode code point value, according to the string conversion of each element.
 * @return {Array} A new sorted array.
 * @example
 *
 * const numberArray = [20, 3, 4, 10, -3, 1, 0, 5];
 * const stringArray = ['Blue', 'Humpback', 'Beluga'];
 *
 * const resultArray = immutableSort(numberArray, (a, b) => a - b);
 * // -> numberArray [20, 3, 4, 10, -3, 1, 0, 5]
 * // -> resultArray [-3, 0, 1, 3, 4, 5, 10, 20]
 *
 * const resultArray = immutableSort(numberArray, (a, b) => b - a);
 * // -> numberArray [20, 3, 4, 10, -3, 1, 0, 5]
 * // -> resultArray [20, 10, 5, 4, 3, 1, 0, -3]
 *
 * const resultArray = immutableSort(stringArray);
 * // -> stringArray ['Blue', 'Humpback', 'Beluga']
 * // -> resultArray ['Beluga', 'Blue', 'Humpback']
 *
 * const resultArray = immutableSort(stringArray, (a, b) => a.toLowerCase() < b.toLowerCase());
 * // -> stringArray ['Blue', 'Humpback', 'Beluga']
 * // -> resultArray ['Humpback', 'Blue', 'Beluga']
 */
function immutableSort(array, compareFunction) {
  return [].concat(_toConsumableArray(array)).sort(compareFunction);
}
module.exports = exports["default"];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = immutableDelete;

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/**
 * Deletes an element from an array by its index in the array.
 *
 * @param {Array} array The original array.
 * @param {Number} index The index of the element to delete in the original array.
 * @return {Array} A new array with the element removed.
 * @example
 *
 * const originalArray = ['a', 'b', 'c', 'd', 'e'];
 * const resultArray = immutableDelete(originalArray, 2);
 * // -> originalArray ['a', 'b', 'c', 'd', 'e']
 * // -> resultArray ['a', 'b', 'd', 'e']
 */
function immutableDelete(array, index) {
  return index >= 0 ? [].concat(_toConsumableArray(array.slice(0, index)), _toConsumableArray(array.slice(index + 1))) : [].concat(_toConsumableArray(array));
}
module.exports = exports["default"];

/***/ })
/******/ ]);
});
//# sourceMappingURL=immutableArrays.js.map
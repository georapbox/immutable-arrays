(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["module", "exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(module, exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod, mod.exports);
    global.immutableSplice = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = immutableSplice;

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
  }

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
});
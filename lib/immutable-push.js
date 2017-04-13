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
    global.immutablePush = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = immutablePush;

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
});
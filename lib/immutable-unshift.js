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
    global.immutableUnshift = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = immutableUnshift;

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
});
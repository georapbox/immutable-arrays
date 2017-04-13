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
    global.immutableReverse = mod.exports;
  }
})(this, function (module, exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = immutableReverse;

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
});
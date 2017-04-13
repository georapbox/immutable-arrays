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
    global.immutableDelete = mod.exports;
  }
})(this, function (module, exports) {
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
});
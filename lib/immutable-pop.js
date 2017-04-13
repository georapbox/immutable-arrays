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
    global.immutablePop = mod.exports;
  }
})(this, function (module, exports) {
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
});
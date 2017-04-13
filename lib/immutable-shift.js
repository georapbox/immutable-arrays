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
    global.immutableShift = mod.exports;
  }
})(this, function (module, exports) {
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
});
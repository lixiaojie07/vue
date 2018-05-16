"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  changeCity: function changeCity(state, city) {
    state.city = city;
    try {
      localStorage.city = city;
    } catch (e) {}
  }
};
//# sourceMappingURL=mutations.js.map
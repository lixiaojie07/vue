'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var defaultCity = '上海';

try {
  if (localStorage.city) {
    defaultCity = localStorage.city;
  }
} catch (e) {}
exports.default = {
  city: defaultCity
};
//# sourceMappingURL=state.js.map
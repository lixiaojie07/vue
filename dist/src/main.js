'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _fastclick = require('fastclick');

var _fastclick2 = _interopRequireDefault(_fastclick);

var _vueAwesomeSwiper = require('vue-awesome-swiper');

var _vueAwesomeSwiper2 = _interopRequireDefault(_vueAwesomeSwiper);

require('babel-polyfill');

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

require('styles/reset.css');

require('styles/border.css');

require('styles/iconfont.css');

require('swiper/dist/css/swiper.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.config.productionTip = false; // The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

_fastclick2.default.attach(document.body);
_vue2.default.use(_vueAwesomeSwiper2.default);

/* eslint-disable no-new */
new _vue2.default({
  el: '#app',
  router: _router2.default,
  store: _store2.default,
  components: { App: _App2.default },
  template: '<App/>'
});
//# sourceMappingURL=main.js.map
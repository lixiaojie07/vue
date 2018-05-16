'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Home = require('@/pages/home/Home');

var _Home2 = _interopRequireDefault(_Home);

var _City = require('@/pages/city/City');

var _City2 = _interopRequireDefault(_City);

var _Detail = require('@/pages/detail/Detail');

var _Detail2 = _interopRequireDefault(_Detail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  routes: [{
    path: '/',
    name: 'Home',
    component: _Home2.default
  }, {
    path: '/city',
    name: 'City',
    component: _City2.default
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: _Detail2.default
  }],
  scrollBehavior: function scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }
});
//# sourceMappingURL=index.js.map
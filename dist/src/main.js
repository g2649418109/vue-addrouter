'use strict';

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _App = require('./App');

var _App2 = _interopRequireDefault(_App);

var _router = require('./router');

var _router2 = _interopRequireDefault(_router);

var _vueResource = require('vue-resource');

var _vueResource2 = _interopRequireDefault(_vueResource);

var _iview = require('iview');

var _iview2 = _interopRequireDefault(_iview);

require('!style-loader!css-loader!less-loader!./theme/index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
_vue2.default.config.productionTip = false;

_vue2.default.use(_iview2.default);
_vue2.default.use(_vueResource2.default);
_vue2.default.http.options.emulateJSON = false;

_vue2.default.http.get('../static/test.json').then(function (data) {
  _vue2.default.data = data.body;
  console.log(_vue2.default.data);
}).catch(function (response) {
  console.log(response);
});
_router2.default.beforeEach(function (to, from, next) {
  if (to.path === '/') {
    next({ path: '/login' });
  } else if (to.path === '/leaknav') {
    next({ path: '/leaknav/leak-1' });
  } else if (to.path === '/workordernav') {
    next({ path: '/workordernav/workorder-1' });
  } else if (to.path === '/systemnav') {
    next({ path: '/systemnav/system-1' });
  } else {
    next();
  }
});

/* eslint-disable no-new */
new _vue2.default({
  el: '#app',
  router: _router2.default,
  template: '<App/>',
  components: { App: _App2.default }
});
//# sourceMappingURL=main.js.map
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _vue = require('vue');

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = require('vue-router');

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Home = require('@/pages/Home');

var _Home2 = _interopRequireDefault(_Home);

var _homepage = require('@/pages/homepage');

var _homepage2 = _interopRequireDefault(_homepage);

var _leaknav = require('@/pages/leaknav');

var _leaknav2 = _interopRequireDefault(_leaknav);

var _allleak = require('@/pages/leak/allleak');

var _allleak2 = _interopRequireDefault(_allleak);

var _examineleak = require('@/pages/leak/examineleak');

var _examineleak2 = _interopRequireDefault(_examineleak);

var _handleleak = require('@/pages/leak/handleleak');

var _handleleak2 = _interopRequireDefault(_handleleak);

var _submitleak = require('@/pages/leak/submitleak');

var _submitleak2 = _interopRequireDefault(_submitleak);

var _verificationleak = require('@/pages/leak/verificationleak');

var _verificationleak2 = _interopRequireDefault(_verificationleak);

var _workordernav = require('@/pages/workordernav');

var _workordernav2 = _interopRequireDefault(_workordernav);

var _examineworkorder = require('@/pages/workorder/examineworkorder');

var _examineworkorder2 = _interopRequireDefault(_examineworkorder);

var _allworkorder = require('@/pages/workorder/allworkorder');

var _allworkorder2 = _interopRequireDefault(_allworkorder);

var _handleworkorder = require('@/pages/workorder/handleworkorder');

var _handleworkorder2 = _interopRequireDefault(_handleworkorder);

var _verificationworkorder = require('@/pages/workorder/verificationworkorder');

var _verificationworkorder2 = _interopRequireDefault(_verificationworkorder);

var _systemnav = require('@/pages/systemnav');

var _systemnav2 = _interopRequireDefault(_systemnav);

var _presentation = require('@/pages/presentation');

var _presentation2 = _interopRequireDefault(_presentation);

var _users = require('@/pages/system/users');

var _users2 = _interopRequireDefault(_users);

var _roles = require('@/pages/system/roles');

var _roles2 = _interopRequireDefault(_roles);

var _log = require('@/pages/system/log');

var _log2 = _interopRequireDefault(_log);

var _mail = require('@/pages/system/mail');

var _mail2 = _interopRequireDefault(_mail);

var _dict = require('@/pages/system/dict');

var _dict2 = _interopRequireDefault(_dict);

var _label = require('@/pages/system/label');

var _label2 = _interopRequireDefault(_label);

var _Login = require('@/pages/Login');

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_vue2.default.use(_vueRouter2.default);

exports.default = new _vueRouter2.default({
  routes: [{
    path: '/',
    component: _Home2.default,
    children: [{
      path: '/homepage',
      icon: 'fa fa-home',
      name: '首页',
      component: _homepage2.default
    }, {
      path: '/leaknav',
      name: '漏洞管理',
      icon: 'fa fa-bug',
      component: _leaknav2.default,
      children: [{
        path: '/leaknav/leak-1',
        name: '全部漏洞',
        component: _allleak2.default
      }, {
        path: '/leaknav/leak-2',
        name: '待提交漏洞',
        component: _submitleak2.default
      }, {
        path: '/leaknav/leak-3',
        name: '待审核漏洞',
        component: _examineleak2.default
      }, {
        path: '/leaknav/leak-4',
        name: '待处理漏洞',
        component: _handleleak2.default
      }, {
        path: '/leaknav/leak-5',
        name: '待验证漏洞',
        component: _verificationleak2.default
      }]
    }, {
      path: '/workordernav',
      name: '工单管理',
      icon: 'fa fa-clipboard',
      component: _workordernav2.default,
      children: [{
        path: '/workordernav/workorder-1',
        name: '全部工单',
        component: _allworkorder2.default
      }, {
        path: '/workordernav/workorder-2',
        name: '待处理工单',
        component: _handleworkorder2.default
      }, {
        path: '/workordernav/workorder-3',
        name: '待审核工单',
        component: _examineworkorder2.default
      }, {
        path: '/workordernav/workorder-4',
        name: '待验证工单',
        component: _verificationworkorder2.default
      }]
    }, {
      path: '/systemnav',
      name: '系统设置',
      icon: 'fa fa-cogs',
      component: _systemnav2.default,
      children: [{
        path: '/systemnav/system-1',
        name: '用户管理',
        component: _users2.default
      }, {
        path: '/systemnav/system-2',
        name: '角色管理',
        component: _roles2.default
      }, {
        path: '/systemnav/system-3',
        name: '字典管理',
        component: _dict2.default
      }, {
        path: '/systemnav/system-4',
        name: '标签管理',
        component: _label2.default
      }, {
        path: '/systemnav/system-5',
        name: '邮件网关',
        component: _mail2.default
      }, {
        path: '/systemnav/system-6',
        name: '系统日志',
        component: _log2.default
      }]
    }, {
      path: '/presentation',
      name: '报告管理',
      icon: 'fa fa-file-word-o',
      component: _presentation2.default
    }]
  }, {
    path: '/login',
    name: 'Login',
    components: {
      blank: _Login2.default
    }
  }]
});
//# sourceMappingURL=index.js.map
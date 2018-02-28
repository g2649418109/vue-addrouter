// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import vueResource from 'vue-resource'
import iView from 'iview'
import '!style-loader!css-loader!less-loader!./theme/index.less'

Vue.config.productionTip = false

Vue.use(iView)
Vue.use(vueResource)
Vue.http.options.emulateJSON = false
Vue.http.get('../static/test.json').then(function (data) {
  Vue.data = data.body
  console.log(Vue.data)
}).catch(function (response) {
  console.log(response)
})
const extendsRoutes = [
  {
    path: '/',
    component: require('@/pages/Home'),
    children: [
      {
        path: '/homepage',
        icon: 'fa fa-home',
        name: 'Home',
        component: require('@/pages/homepage')
      },
      {
        path: '/management',
        name: 'management',
        icon: 'fa fa-bug',
        component: require('@/pages/management'),
        children: [
          {
            path: '/management/manage-1',
            name: 'manage-1',
            component: require('@/pages/management/manage-1')
          },
          {
            path: '/management/manage-2',
            name: 'manage-2',
            component: require('@/pages/management/manage-2')
          },
          {
            path: '/management/manage-3',
            name: 'manage-3',
            component: require('@/pages/management/manage-3')
          },
          {
            path: '/management/manage-4',
            name: 'manage-4',
            component: require('@/pages/management/manage-4')
          }
        ]
      },
      {
        path: '/workordernav',
        name: 'Work',
        icon: 'fa fa-clipboard',
        component: require('@/pages/workordernav'),
        children: [
          {
            path: '/workordernav/workorder-1',
            name: 'workorder-1',
            component: require('@/pages/workorder/work-1')
          },
          {
            path: '/workordernav/workorder-2',
            name: 'workorder-2',
            component: require('@/pages/workorder/work-2')
          },
          {
            path: '/workordernav/workorder-3',
            name: 'workorder-3',
            component: require('@/pages/workorder/work-3')
          }
        ]
      },
      {
        path: '/systemnav',
        name: 'system',
        icon: 'fa fa-cogs',
        component: require('@/pages/systemnav'),
        children: [
          {
            path: '/systemnav/system-1',
            name: 'users',
            component: require('@/pages/system/users')
          },
          {
            path: '/systemnav/system-2',
            name: 'roles',
            component: require('@/pages/system/roles')
          },
          {
            path: '/systemnav/system-6',
            name: 'log',
            component: require('@/pages/system/log')
          }
        ]
      },
      {
        path: '/report',
        name: 'report',
        icon: 'fa fa-file-word-o',
        component: require('@/pages/report')
      }
    ]
  },
  {
    path: '*',
    redirect: '/404'
  }
]
// store.commit('getRouter', extendsRoutes)
router.beforeEach((to, from, next) => {
  if (store.state.oneRouter.length === 0) {
    store.dispatch('haha', {extendsRoutes}).then(function (data) {
      router.addRoutes(extendsRoutes)
    })
  }
  if (to.path === '/') {
    next({path: '/homepage'})
  } else if (to.path === '/management') {
    next({path: '/management/manage-1'})
  } else if (to.path === '/workordernav') {
    next({path: '/workordernav/workorder-1'})
  } else if (to.path === '/systemnav') {
    next({path: '/systemnav/system-1'})
  } else {
    next()
  }
})
// } else {
//   router.push({path: '/login'})
// }

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})

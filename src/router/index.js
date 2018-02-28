import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: require('@/pages/Login')
    },
    {
      path: '/404',
      name: 'notfound',
      component: require('@/pages/404')
    }
  ]
})

 // routes: [
  //   {
  //     path: '/',
  //     component: Home,
  //     children: [
  //       {
  //         path: '/homepage',
  //         icon: 'fa fa-home',
  //         name: '首页',
  //         component: homepage
  //       },
  //       {
  //         path: '/leaknav',
  //         name: '漏洞管理',
  //         icon: 'fa fa-bug',
  //         component: leaknav,
  //         children: [
  //           {
  //             path: '/leaknav/leak-1',
  //             name: '全部漏洞',
  //             component: allleak
  //           },
  //           {
  //             path: '/leaknav/leak-2',
  //             name: '待提交漏洞',
  //             component: submitleak
  //           },
  //           {
  //             path: '/leaknav/leak-3',
  //             name: '待审核漏洞',
  //             component: examineleak
  //           },
  //           {
  //             path: '/leaknav/leak-4',
  //             name: '待处理漏洞',
  //             component: handleleak
  //           },
  //           {
  //             path: '/leaknav/leak-5',
  //             name: '待验证漏洞',
  //             component: verificationleak
  //           }
  //         ]
  //       },
  //       {
  //         path: '/workordernav',
  //         name: '工单管理',
  //         icon: 'fa fa-clipboard',
  //         component: workordernav,
  //         children: [
  //           {
  //             path: '/workordernav/workorder-1',
  //             name: '全部工单',
  //             component: allworkorder
  //           },
  //           {
  //             path: '/workordernav/workorder-2',
  //             name: '待处理工单',
  //             component: handleworkorder
  //           },
  //           {
  //             path: '/workordernav/workorder-3',
  //             name: '待审核工单',
  //             component: examineworkorder
  //           },
  //           {
  //             path: '/workordernav/workorder-4',
  //             name: '待验证工单',
  //             component: verificationworkorder
  //           }
  //         ]
  //       },
  //       {
  //         path: '/systemnav',
  //         name: '系统设置',
  //         icon: 'fa fa-cogs',
  //         component: systemnav,
  //         children: [
  //           {
  //             path: '/systemnav/system-1',
  //             name: '用户管理',
  //             component: users
  //           },
  //           {
  //             path: '/systemnav/system-2',
  //             name: '角色管理',
  //             component: roles
  //           },
  //           {
  //             path: '/systemnav/system-3',
  //             name: '字典管理',
  //             component: dict
  //           },
  //           {
  //             path: '/systemnav/system-4',
  //             name: '标签管理',
  //             component: label
  //           },
  //           {
  //             path: '/systemnav/system-5',
  //             name: '邮件网关',
  //             component: mail
  //           },
  //           {
  //             path: '/systemnav/system-6',
  //             name: '系统日志',
  //             component: log
  //           }
  //         ]
  //       },
  //       {
  //         path: '/presentation',
  //         name: '报告管理',
  //         icon: 'fa fa-file-word-o',
  //         component: presentation
  //       }
  //     ]
  //   },
  //   {
  //     path: '/login',
  //     name: 'Login',
  //     components: {
  //       blank: Login
  //     }
  //   }
  // ]

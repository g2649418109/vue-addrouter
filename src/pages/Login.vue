<template>
  <div class="login">
    <Row class="vm-login vm-panel" span="10">
   <Col span="10" class="login-form">
     <div class="login-header">
       <img src="../assets/img/logo.png" height="80" alt="">
       <p>SRC系统</p>
     </div>
     <div class="login-form">
        <Input v-model="username" placeholder="please enter username"></Input>
        <Input v-model="password" type="password" placeholder="Please enter password"></Input>
        <Button type="primary" @click.native="Login">Login</Button>
     </div>
     <div class="login-footer">
       <Checkbox v-model="remenber">Remenber</Checkbox>
       <span class="forget"><a href="#">Forget Password</a></span>
     </div>
   </Col>
   <Col span="14" class="login-ad"></Col>
  </Row>
  </div>
</template>
<script>
  export default {
    name: 'Login',
    components: {
    },
    data: function () {
      return {
        username: '',
        password: '',
        remenber: false
      }
    },
    methods: {
      Login () {
//        const extendsRoutes = [
//          {
//            path: '/',
//            component: require('@/pages/Home'),
//            children: [
//              {
//                path: '/homepage',
//                icon: 'fa fa-home',
//                name: '首页',
//                component: require('@/pages/homepage')
//              },
//              {
//                path: '/leaknav',
//                name: '漏洞管理',
//                icon: 'fa fa-bug',
//                component: require('@/pages/leaknav'),
//                children: [
//                  {
//                    path: '/leaknav/leak-1',
//                    name: '全部漏洞',
//                    component: require('@/pages/leak/allleak')
//                  },
//                  {
//                    path: '/leaknav/leak-2',
//                    name: '待提交漏洞',
//                    component: require('@/pages/leak/submitleak')
//                  },
//                  {
//                    path: '/leaknav/leak-3',
//                    name: '待审核漏洞',
//                    component: require('@/pages/leak/examineleak')
//                  },
//                  {
//                    path: '/leaknav/leak-4',
//                    name: '待处理漏洞',
//                    component: require('@/pages/leak/handleleak')
//                  },
//                  {
//                    path: '/leaknav/leak-5',
//                    name: '待验证漏洞',
//                    component: require('@/pages/leak/verificationleak')
//                  }
//                ]
//              },
//              {
//                path: '/workordernav',
//                name: '工单管理',
//                icon: 'fa fa-clipboard',
//                component: require('@/pages/workordernav'),
//                children: [
//                  {
//                    path: '/workordernav/workorder-1',
//                    name: '全部工单',
//                    component: require('@/pages/workorder/allworkorder')
//                  },
//                  {
//                    path: '/workordernav/workorder-2',
//                    name: '待处理工单',
//                    component: require('@/pages/workorder/handleworkorder')
//                  },
//                  {
//                    path: '/workordernav/workorder-3',
//                    name: '待审核工单',
//                    component: require('@/pages/workorder/examineworkorder')
//                  },
//                  {
//                    path: '/workordernav/workorder-4',
//                    name: '待验证工单',
//                    component: require('@/pages/workorder/verificationworkorder')
//                  }
//                ]
//              },
//              {
//                path: '/systemnav',
//                name: '系统设置',
//                icon: 'fa fa-cogs',
//                component: require('@/pages/systemnav'),
//                children: [
//                  {
//                    path: '/systemnav/system-1',
//                    name: '用户管理',
//                    component: require('@/pages/system/users')
//                  },
//                  {
//                    path: '/systemnav/system-2',
//                    name: '角色管理',
//                    component: require('@/pages/system/roles')
//                  },
//                  {
//                    path: '/systemnav/system-3',
//                    name: '字典管理',
//                    component: require('@/pages/system/dict')
//                  },
//                  {
//                    path: '/systemnav/system-4',
//                    name: '标签管理',
//                    component: require('@/pages/system/label')
//                  },
//                  {
//                    path: '/systemnav/system-5',
//                    name: '邮件网关',
//                    component: require('@/pages/system/mail')
//                  },
//                  {
//                    path: '/systemnav/system-6',
//                    name: '系统日志',
//                    component: require('@/pages/system/log')
//                  }
//                ]
//              },
//              {
//                path: '/report',
//                name: '报告管理',
//                icon: 'fa fa-file-word-o',
//                component: require('@/pages/report')
//              }
//            ]
//          }
//        ]
//        console.log(extendsRoutes)
        // sessionStorage.setItem('menus', JSON.stringify(extendsRoutes))
        // sessionStorage.setItem('tocken', JSON.stringify('islogin'))
        // if (this.$store.state.oneRouter.length === 0) {
        //   this.$store.dispatch('haha', {extendsRoutes}).then(function () {
        //     vm.$router.addRoutes(extendsRoutes)
        //   })
        // }
        // this.$store.commit('getRouter', extendsRoutes)
        // this.$router.addRoutes(extendsRoutes)
        // 跳转到应用界面
//        window.location.href = '#'
        this.$router.push({path: '/homepage'})
      }
    }
  }
</script>

<template>
  <div class="home">
    <Row class="header" type="flex" align="middle" style="padding:0px;">
      <div class="logo" style="margin-right:150px;margin-left:10px;">
        <div style="color:#41b883;">one vue project forfun</div>
        <div style="font-size: 12px;font-family: Arial;color:#41b883;">vuex + addrouter 2017-12-12</div>
      </div>
        <Menu mode="horizontal" class="menu">
          <router-link :to="item.path"  v-for="(item,index) in $store.state.oneRouter.extendsRoutes[0].children">
            <MenuItem style="font-size:18px;padding: 0 30px;" :name="item.name" class="cc" :class="$route.path.indexOf(item.path) == -1? 'xx': ''">
              <div> <i :class="item.icon"></i> {{item.name}}</div>
            </MenuItem>
          </router-link>
        </Menu>
      <Dropdown class="login-info" placement="bottom-end">
        <Button type="ghost" style="width:100px">
            <img src="../assets/img/photo.jpg" height="20" alt="">Admin
            <Icon type="arrow-down-b"></Icon>
        </Button>
        <Dropdown-menu slot="list">
            <Dropdown-item divided @click.native="logout"><i class="fa fa-key"></i>退出登陆</Dropdown-item>
            <Dropdown-item divided><i class="fa fa-cog"></i>修改密码</Dropdown-item>
        </Dropdown-menu>
      </Dropdown>
    </Row>
    <div class="main-content">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  name: 'home',
  components: {
  },
  created: function () {
  },
  data () {
    return {
      class1: false,
      item: {},
      menus: []
    }
  },
  methods: {
    logout: function () {
      sessionStorage.removeItem('tocken')
      this.$router.push('/login')
    }
  },
  mounted () {
  }
}
</script>
<style>
.ivu-menu-horizontal {
    height: 60px;
    line-height: 60px;
}
.ivu-menu-light {
    background-color: transparent;
}
.ivu-menu-horizontal.ivu-menu-light:after {
    content: '';
    display: none;
    width: 100%;
    height: 1px;
    background: #dddee1;
    position: absolute;
    bottom: 0;
    left: 0;
}
.xx {
    color: #495060 !important;
    border-bottom: 0px solid #41b883 !important;
}
.router-link-active > .cc{
  color: #41b883 !important;
  border-bottom: 2px solid #41b883 !important;
  }
</style>

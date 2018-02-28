<template>
  <div>
    <Row style="border-bottom: 2px solid #41b883;padding-bottom: 16px;margin-bottom: 26px;">
      <Col span="6">
      <div>
        <Button type="success" style="width:100px;" @click="addUser()">添加用户</Button>
      </div>
      </Col>
      <Col span="12">
      <div>
        <Input placeholder="请输入..." style="width: 500px"></Input>
      </div>
      </Col>
      <Col span="6">
      <div>
        <Button type="success" style="width:100px;">查询</Button>
      </div>
      </Col>
    </Row>
    <Row>
      <Col span="24">
      <div  style="margin-top:20px;">
        <Table border :columns="columns1" :data="data1"></Table>
      </div>
      </Col>
    </Row>
    <Modal
      v-model="modal1"
      title="用户管理 > 用户操作"
      width="600"
      :styles="{top: '20px'}"
      @on-ok="ok"
      @on-cancel="cancel">
      <Form :label-width="80" :rules="ruleValidate" ref="formValidate" :model="formValidate">
        <FormItem label="登录名" prop="userName">
          <Input type="text" v-model="formValidate.userName"  placeholder="请输入姓名"></Input>
        </FormItem>
        <FormItem label="姓名" prop="name">
          <Input type="text" v-model="formValidate.name" placeholder="请输入"></Input>
        </FormItem>
        <FormItem label="密码" prop="password1">
          <Input type="password" v-model="formValidate.password1" placeholder="请输入"></Input>
        </FormItem>
        <FormItem label="密码确认" prop="password2">
          <Input type="password" v-model="formValidate.password2" placeholder="请输入"></Input>
        </FormItem>
        <FormItem label="邮箱" v-model="formValidate.mail">
          <Input type="text" v-model="formValidate.mail" placeholder="请输入"></Input>
        </FormItem>
        <FormItem label="电话" v-model="formValidate.tel">
          <Input type="text" v-model="formValidate.tel" placeholder="请输入"></Input>
        </FormItem>
        <FormItem label="用户角色" prop="roles">
          <RadioGroup v-model="formValidate.role">
            <Radio label="一般用户">一般用户</Radio>
            <Radio label="角色管理员">角色管理员</Radio>
            <Radio label="字典管理角色">字典管理角色</Radio>
            <Radio label="普通用户">普通用户</Radio>
            <Radio label="开发人员">开发人员</Radio>
            <Radio label="日志审计员">日志审计员</Radio>
            <Radio label="用户">用户</Radio>
            <Radio label="测试角色">测试角色</Radio>
          </RadioGroup>
        </FormItem>
      </Form>
    </Modal>
    <Modal
      v-model="modal2"
      title="用户管理 > 用户操作"
      width="600"
      :styles="{top: '20px'}"
      @on-ok="ok"
      @on-cancel="cancel">
      <Form :label-width="80" :rules="ruleValidate" ref="formValidate" :model="formValidate">
        <FormItem label="登录名" prop="userName">
          <Input type="text" v-model="formValidate.userName" placeholder="请输入"></Input>
        </FormItem>
        <FormItem label="姓名" prop="name">
          <Input type="text" v-model="formValidate.name" placeholder="请输入"></Input>
        </FormItem>
        <FormItem label="密码" prop="password1">
          <Input type="password" v-model="formValidate.password1" placeholder="请输入"></Input>
        </FormItem>
        <FormItem label="密码确认" prop="password2">
          <Input type="password" v-model="formValidate.password2" placeholder="请输入"></Input>
        </FormItem>
        <FormItem label="邮箱" v-model="formValidate.mail">
          <Input type="text" v-model="formValidate.email" placeholder="请输入"></Input>
        </FormItem>
        <FormItem label="电话" v-model="formValidate.tel">
          <Input type="text" v-model="formValidate.tel" placeholder="请输入"></Input>
        </FormItem>
        <FormItem label="用户角色" prop="roles">
          <RadioGroup v-model="formValidate.role">
            <Radio label="一般用户">一般用户</Radio>
            <Radio label="角色管理员">角色管理员</Radio>
            <Radio label="字典管理角色">字典管理角色</Radio>
            <Radio label="普通用户">普通用户</Radio>
            <Radio label="开发人员">开发人员</Radio>
            <Radio label="日志审计员">日志审计员</Radio>
            <Radio label="用户">用户</Radio>
            <Radio label="测试角色">测试角色</Radio>
          </RadioGroup>
        </FormItem>
      </Form>
    </Modal>
  </div>
</template>

<script>
  export default {
    name: 'users',
    components: {
    },
    data () {
      return {
        modal1: false,
        modal2: false,
        formValidate: {
          userName: '',
          name: '',
          password1: '',
          password2: '',
          email: '',
          tel: '',
          role: '一般用户'
        },
        ruleValidate: {
          userName: [
            { required: true, message: '登录名不能为空', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '姓名不能为空', trigger: 'blur' }
          ],
          password1: [
            { required: true, message: '密码不能为空', trigger: 'blur' }
          ],
          password2: [
            { required: true, message: '密码确认不能为空', trigger: 'blur' }
          ],
          mail: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { type: 'email', message: '邮箱格式不正确', trigger: 'blur' }
          ],
          roles: [
            { required: true, message: '至少选择一种', trigger: 'blur' }
          ]
        },
        columns1: [
          {
            title: '登录名',
            key: 'userName'
          },
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '电话',
            key: 'phone'
          },
          {
            title: '邮箱',
            key: 'email'
          },
          {
            title: '操作',
            key: 'option',
            width: 150,
            align: 'center',
            render: (h, params) => {
              return h('div', [
                h('Button', {
                  props: {
                    type: 'primary',
                    size: 'small'
                  },
                  style: {
                    marginRight: '5px'
                  },
                  on: {
                    click: () => {
                      this.editUser(params)
                    }
                  }
                }, '编辑'),
                h('Button', {
                  props: {
                    type: 'error',
                    size: 'small'
                  },
                  on: {
                    click: () => {
                      this.$Modal.confirm({
                        title: '删除用户',
                        content: '<p>确认删除此用户吗？</p>',
                        onOk: () => {
                          this.$Message.info('点击了确定')
                        },
                        onCancel: () => {
                          this.$Message.info('点击了取消')
                        }
                      })
                    }
                  }
                }, '删除')
              ])
            }
          }
        ],
        data1: [
          {
            userName: 'admin',
            name: '小明',
            phone: '185xxxxxxxx',
            email: 'xxx@.qq.com'
          },
          {
            userName: 'user1',
            name: '小花',
            phone: '155xxxxxxxx',
            email: 'xxx@.qq.com'
          },
          {
            userName: 'user2',
            name: '小王',
            phone: '177xxxxxxxx',
            email: 'xxx@.qq.com'
          }
        ]
      }
    },
    created: function () {
    },
    methods: {
      addUser () {
        this.formValidate = {
          userName: '',
          name: '',
          password1: '',
          password2: '',
          email: '',
          tel: '',
          role: '一般用户'
        }
        this.modal1 = true
      },
      editUser (params) {
        console.log(params.row)
        this.modal2 = true
        this.formValidate = {
          userName: params.row.userName,
          name: params.row.name,
          password1: '123456',
          password2: '123456',
          email: params.row.email,
          tel: params.row.tel,
          role: '角色管理员'
        }
      },
      ok () {
        this.$Message.info('点击了确定')
      },
      cancel () {
        this.$Message.info('点击了取消')
      }
    }
  }
</script>
<style>
  .addBtn{
    width: 133px;
    height: 34px;
    background-color: rgba(0, 204, 102, 1);
    border-width: 1px;
    border-style: solid;
    border-color: rgba(102, 255, 0, 1);
    border-radius: 3px;
    box-shadow: none;
    color: #fff;
    cursor: pointer;
  }
</style>

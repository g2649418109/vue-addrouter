<template>
 <div>
  <Row style="border-bottom: 2px solid #41b883;padding-bottom: 16px;margin-bottom: 26px;">
	<Col span="6">
	  <div>
		<Button type="success" style="width:100px;" @click="modal0 = true">添加角色</Button>
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
      <div style="margin-top:20px;">
  		<Table border :columns="columns0" :data="data0"></Table>
  	  </div>
  	</Col>
   </Row>
  	<Modal
        v-model="modal0"
        title="添加角色"
        @on-ok="ok"
        @on-cancel="cancel"
        :styles="{top: '20px'}">
        <Row>
        	<Col span="24" offset="5">
	            <label>角色名称：</label>
	            <Input placeholder="" style="width:200px;"></Input>
            </Col>
	    </Row>
	    <br>
	    <Row>
	        <Col span="24" offset="5">
	            <label>英文名称：</label>
	            <Input placeholder="" style="width:200px;"></Input>
	        </Col>
	    </Row>
	    <br>
	    <Row>
	        <Col span="4" offset="5">
	            <label>角色授权：</label>
	        </Col>
	        <Col span="15">
	            <Tree :data="data1" show-checkbox multiple ref="Tree"></Tree>
	            <!-- <Button type="success" style="width:100px;" @click="getCheckedNodes">获取被勾选的节点</Button> -->
	        </Col>
	    </Row>
	    <br>
	    <Row>
	        <Col span="24" offset="5">
	            <label>角色描述：</label>
	            <Input placeholder="" type="textarea" style="width:200px;"></Input>
	        </Col>
	    </Row>
        </Row>
    </Modal>
    <Modal
        v-model="modal1"
        title="编辑角色"
        @on-ok="ok"
        @on-cancel="cancel"
        :styles="{top: '20px'}">
        <Row>
        	<Col span="24" offset="5">
	            <label>角色名称：</label>
	            <Input placeholder="" style="width:200px;" v-model="userid"></Input>
            </Col>
	    </Row>
	    <br>
	    <Row>
	        <Col span="24" offset="5">
	            <label>英文名称：</label>
	            <Input placeholder="" style="width:200px;" v-model="username"></Input>
	        </Col>
	    </Row>
	    <br>
	    <Row>
	        <Col span="4" offset="5">
	            <label>角色授权：</label>
	        </Col>
	        <Col span="15">
	            <Tree :data="data2" show-checkbox multiple ref="tree"></Tree>
	            <!-- <Button type="success" style="width:100px;" @click="getCheckedNodes">获取被勾选的节点</Button> -->
	        </Col>
	    </Row>
	    <br>
	    <Row>
	        <Col span="24" offset="5">
	            <label>角色描述：</label>
	            <Input placeholder="" type="textarea" style="width:200px;"></Input>
	        </Col>
	    </Row>
        </Col> -->
        </Row>
    </Modal>
 </div>
</template>

<script>
  export default {
    name: 'EditableTable',
    components: {
    },
    methods: {
      getCheckedNodes () {
        this.checkedNodes = this.$refs.Tree.getCheckedNodes()
      },
      ok () {
      },
      cancel () {
      }
    },
    data () {
      return {
        modal0: false,
        modal1: false,
        checkedNodes: '',
        userid: '',
        username: '',
        columns0: [
          {
            title: '角色名称',
            key: 'rolename',
            render: (h, params) => {
              return h('div', [
                h('Icon', {
                  props: {
                    type: 'person'
                  }
                }),
                h('strong', params.row.rolename)
              ])
            }
          },
          {
            title: '英文名称',
            key: 'roleenglish'
          },
          {
            title: '创建时间',
            key: 'time'
          },
          {
            title: '操作',
            key: 'action',
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
                      this.modal1 = true
                      this.userid = this.data0[params.index].rolename
                      this.username = this.data0[params.index].roleenglish
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
                        title: '确认删除',
                        content: '<p>删除后无法恢复</p><p>确认要删除该条数据吗？</p>',
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
        data0: [
          {
            rolename: ' 角色一',
            roleenglish: 'System roleone',
            time: '2017-11-2 10:25:30'
          },
          {
            rolename: ' 角色二',
            roleenglish: 'System roletwo',
            time: '2017-11-2 10:25:60'
          },
          {
            rolename: ' 角色三',
            roleenglish: 'System rolethree',
            time: '2017-11-2 10:26:54'
          }
        ],
        data1: [
          {
            title: '功能菜单',
            expand: true,
            children: [
              {
                title: '统计报告',
                expand: true,
                children: [
                  {
                    title: '我的报告'
                  },
                  {
                    title: '我的模板'
                  }
                ]
              },
              {
                title: '系统管理',
                expand: true,
                children: [
                  {
                    title: '用户管理',
                    expand: true,
                    children: [
                      {
                        title: '查看'
                      },
                      {
                        title: '修改'
                      }
                    ]
                  },
                  {
                    title: '角色管理',
                    expand: true,
                    children: [
                      {
                        title: '查看'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ],
        data2: [
          {
            title: '功能菜单',
            expand: true,
            children: [
              {
                title: '统计报告',
                expand: true,
                children: [
                  {
                    title: '我的报告'
                  },
                  {
                    title: '我的模板'
                  }
                ]
              },
              {
                title: '系统管理',
                expand: true,
                children: [
                  {
                    title: '用户管理',
                    expand: true,
                    children: [
                      {
                        title: '查看'
                      },
                      {
                        title: '修改'
                      }
                    ]
                  },
                  {
                    title: '角色管理',
                    expand: true,
                    children: [
                      {
                        title: '查看'
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    }
  }
</script>

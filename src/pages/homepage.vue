<template>
  <div class="dashboard">
    <Row :gutter="24">
      <Col span="24">
        <div>首页的内容</div>
        <div>{{count}}</div>
      </Col>
    </Row>
    <Button @click="$store.commit('add', 10)">+</Button>
    <Button @click="$store.commit('reduce', 2)">-</Button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'homePage',
  components: {
  },
  // computed: {  // 方法一传值
  //   count () {
  //     return this.$store.state.count
  //   }
  // },
  // computed: mapState({ // 方法二传值
  //   count: state => state.count  // 理解为传入state对象，修改state.count属性
  // }),
  computed: mapState(['count']), // 方法三传值
  data () {
    return {
    }
  },
  methods: mapMutations([
    'add', 'reduce'
  ])
}
</script>

<style lang="less">
</style>

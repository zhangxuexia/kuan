<template>
  <div class="manage-layout manage-layout-admin">
    <!-- 头部-->
    <header1 :nav="nav" :info="info" @change="leftNav"></header1>
    <!-- 导航-->
     <nav1 :nav="nav"></nav1>
    <!--内容-->
    <div :class="['page-wrapper']" id="page-wrapper">
      <transition name="router-fade" mode="out-in"><router-view></router-view></transition>
    </div>
  </div>
</template>
<script>
import header1 from 'src/components/header/header'
import nav1 from 'src/components/nav/nav'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      nav: {
        left: false,
        inMenu: false
      }
    }
  },
  watch: {
    $route (curVal, oldVal) { // 路由改变是直接改变rout
      let a = curVal.meta
    }
  },
  methods: {
    leftNav (nav) {
      this.nav = Object.assign({}, nav)
    }
  },
  computed: {
    ...mapState({
      info: function (state) {
        return state.userInfo
      }
    })
  },
  components: {
    header1,
    nav1
  }
}
</script>

<style lang="scss" type="text/scss">

</style>

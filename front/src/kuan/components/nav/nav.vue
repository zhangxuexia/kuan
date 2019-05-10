<template>
  <!--左侧导航-->
  <div class="sidebar-left">
        <div class="manage-side-scroll">
          <a href="javascript:void(0)" class="logo">
            <img src="data:image/png;base64,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">
          </a>
          <ul class="sidebar-menu">
            <li class="active">
              <router-link :to="{name: 'welcome'}">
                <i class="iconfont iconxiazai45"></i>
                <span>首页</span>
              </router-link>
            </li>
            <li class="">
              <router-link :to="{name: 'tableList'}">
                <i class="iconfont iconkaoqinguanli"></i>
                <span>考勤</span>
              </router-link>
            </li>
            <li class="">
              <a>
                <i class="iconfont iconyuangonggoumaishebaoshenqingbiao"></i>
                <span>社保</span>
              </a>
            </li>
            <li class="">
              <a>
                <i class="iconfont icontubiao"></i>
                <span>图表</span>
              </a>
            </li>
          </ul>
        </div>
  </div>
</template>

<script>
  import config from '@/common/config'
  import { mapState } from 'vuex'
  export default {
    props: {
      nav: {}
    },
    data () {
      return {

      }
    },
    created () {

    },
    methods: {
      // 退出登录
      loginOut () {
        this.$store.state.userInfo = {} // 清除vuex储存的用户信息
        this.$store.state.navList = []
        window.open(`${config.loginUrl}logout?redirect=${window.location.href}`, '_self')
      }
    }
  }
</script>


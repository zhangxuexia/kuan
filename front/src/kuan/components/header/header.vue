<template>
  <div>
    <div class="manage-header clearfix" >
      <div class="company-name">
        <a href="javascript:void(0)">
        <span class="company-name-text ellipse">个人体验</span>
        </a>
        <a href="javascript:void(0)">
          <span class="warn-status  red-status">(未审核)</span>
        </a>
        <i class="iconfont iconshezhi ml10"></i>
      </div>
      <div class="right-content fr">
        <div class="inline header-input-content">
          <input class="input" placeholder="姓名/手机号">
          <i class="iconfont iconai219"></i>
        </div>
        <div class="inline">
          <i class="iconfont iconshouji"></i>
        </div>
        <div class="inline">
          <i class="iconfont iconmsg-system"></i>
        </div>
        <div class="inline user pointerCursor">
          <i class="iconfont icongeren"></i>
          <span class="">野渡</span>
        </div>
      </div>
    </div>
    <!-- 右侧提示 -->
    <div class="online-service tc">
      <i class="iconfont iconerji"></i>
      <div class="text">
        小薪在线
      </div>
    </div>
    <div class="new-step-content">
      <i class="iconfont iconxinshouyindao"></i>
      <div class="text">
        新手引导
      </div>
    </div>
  </div>
</template>

<script>
  import config from '@/common/config'
  import { mapState } from 'vuex'
  export default {
    props: {
      nav: {},
      info: {}
    },
    data () {
      return {
        navLeft: Object.assign({}, this.nav), // 左侧菜单控制
        admin: {
          admin: false,
          news: false
        },
        home: `${config.homeUrl}`,
        login: `${config.loginUrl}`
      }
    },
    computed: {
      ...mapState({
        mainMenu: function (state) {
          return state.mainMenu
        }
      })
    },
    methods: {
      currentNav (item) {
        this.$emit('nav', item)
      },
      // 点击
      showNav () {
        this.navLeft.left = !this.navLeft.left
        this.$emit('change', this.navLeft)
      },
      changeMenu (menu) {
        let manage = this.$route.meta
        let a = ''
        if (!(Object.keys(manage).length === 0)) {
          if (manage.navLevel != null && menu == manage.menu) {
            a = {[manage.navLevel]: true}
          }
        }
        this.$store.state.mainMenu = Object.assign({}, {[menu]: true}, a)
      },
      // 退出登录
      loginOut () {
        let a = this.$store.state.userInfo.logouturl
        this.$store.state.userInfo = {} // 清除vuex储存的用户信息
        /*window.open(`${config.loginUrl}logout?redirect=${window.location.href}`, '_self')*/
        window.open(`/logout`, '_self')
      }
    }
  }
</script>

<style lang="scss" type="text/scss">

</style>

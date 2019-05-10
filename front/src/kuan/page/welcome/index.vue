<template>
  <div class="welcome">
    <div class="block-flat mb30">
      <div class="detail-header">
        <h1 class="greetings">下午好，野渡
          <p class="info">早上叫醒我的不是闹铃而是梦想</p>
        </h1>
        <ul>
          <li>
            本月（04.01-04.30）：
          </li>
          <li>
            <span class="label">在职</span>
            <span class="num">0</span>
          </li>
          <li>
            <span class="label">离职</span>
            <span class="num">0</span>
          </li>
          <li>
            <span class="label">待入职</span>
            <span class="num">0</span>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-content clearfix">
      <div class="col-xs-8">
        <div class="block-flat mb30">
          内容
        </div>
        <div class="tabs clearfix">
          <div class="tab-item fl active">
           工作台
          </div>
          <div class="tab-item fl">
            人事报表
          </div>
        </div>
      </div>
      <div class="col-xs-4">
        <div class="block-flat">
          <div class="header">
            快捷工具
          </div>
          <div class="content">
            <ul class="quick-content clearfix">
              <li class="quick-item">
                <i class="iconfont icongeren1"></i>
                <label>添加员工</label>
              </li>
              <li class="quick-item">
                <i class="iconfont icongeren1"></i>
                <label>添加员工</label>
              </li>
              <li class="quick-item">
                <i class="iconfont icongeren1"></i>
                <label>添加员工</label>
              </li>

            </ul>
          </div>
          <div class="header">
            公司动态
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data() {
      return {
        appData: ''
      }
    }
  }
</script>

<style lang="scss" type="text/scss">

</style>

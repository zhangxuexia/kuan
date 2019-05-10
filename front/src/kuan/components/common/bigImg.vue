<template>
  <div class="main-page">
    <el-dialog :visible.sync="dialog.showDialog" :before-close="cancel" custom-class="myDialogBigImg" :append-to-body="true">
      <div id="form-info" class="mydialog colored-header custom-width">
        <div class="md-content">
          <div class="modal-body no-padding-top clearfix bigImgView">
            <img :src="dialog.imgUrl" alt="">
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    props: {
      dialog: {}
    },
    data() {
      return {
      }
    },
    created () {
      this.scrollYhidden()
    },
    methods: {
      cancel () {
        this.$emit('change', false)
        this.scrollYauto()
      }
    }
  }
</script>
<style lang="scss" type="text/scss">
</style>

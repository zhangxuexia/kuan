<template>
  <div class="main-page">
    <el-dialog :visible.sync="progress.show"  custom-class="progressDialog" :title="progress.title" :show-close="false" :close-on-click-modal="false">
      <div id="form-info" class="mydialog colored-header custom-width">
        <div class="md-content">
          <div class="modal-body no-padding-top clearfix tc progress-div">
            <div class="inline progress-div-bar">
              <el-progress type="circle" :percentage="progress.progress" v-show="progress.show"></el-progress>
            </div>
            <div class="inline progress-div-info">{{progress.info}}</div>
          </div>
        </div>
      </div>
      <div slot="footer" class="dialog-footer">
        <button type="submit" class="btn btn-default" @click="cancel">取 消</button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    progress: {}
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

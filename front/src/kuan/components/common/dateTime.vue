<template>
  <div class="clearfix doubleDate">
    <el-date-picker
      v-model="selectData.startTime"
      name="startTime"
      type="date"
      :clearable=false
      :editable="false"
      :picker-options="selectData.pickerOptions1"
      placeholder="开始日期">
    </el-date-picker>
    -
    <el-date-picker
      v-model="selectData.endTime"
      type="date"
      :clearable=false
      :editable="false"
      name="endTime"
      :picker-options="selectData.pickerOptions2"
      placeholder="结束日期"
    >
    </el-date-picker>
  </div>
</template>

<script>

export default {
  props: {
    selected: {}
  },
  data () {
    return {
      selectData: Object.assign({}, this.selected)
    }
  },
  watch: {
    // 分别给开始结束日期 限制选择面板
    'selectData.startTime': {
      handler: function (curVal, oldVal) {
        this.changeDate()
        this.selectData.pickerOptions2 = {
          disabledDate: function (time) {
            if (curVal !== '') {
              return time.getTime() < curVal
            } else {
              return false
            }
          }
        }
      }
    },
    'selectData.endTime': {
      handler: function (curVal, oldVal) {
        this.changeDate()
        this.selectData.pickerOptions1 = {
          disabledDate: function (time) {
            if (curVal !== '') {
              return time.getTime() > curVal
            } else {
              return false
            }
          }
        }
      }
    },
    selected: {
      handler: function (curVal) {
        this.selectData = Object.assign({}, curVal)
      },
      deep: true
    }
  },
  methods: {
    changeDate () {
      this.$emit('change', this.selectData)
    }
  }
}
</script>

<style lang="scss" type="text/scss">

</style>

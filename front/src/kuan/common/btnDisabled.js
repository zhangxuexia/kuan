const btn = {
  data () {
    return {
      btn: {
        btnSub: true // true 按钮可点击
      }
    }
  },
  methods: {
    // 按钮disabled
    btnDisabled () {
      this.btn.btnSub = false
    },
    // 按钮click
    btnClick () {
      this.btn.btnSub = true
    }
  }
}
export default btn

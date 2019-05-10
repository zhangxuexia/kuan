
import config from 'common/config'
import axios from 'axios'
axios.defaults.withCredentials = true
axios.defaults.transformRequest = [function (data) {
  let ret = ''
  for (let it in data) {
    ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
  }
  return ret
}]
var instance = axios.create({/*application/json*/
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});
const MyPlugin = {
  install: function (Vue, options) {
    // 判断属性值是否为空 并赋值
    Vue.prototype.isEmpty = function (obj, value) {
      for (let i in obj) {
        if (obj[i] === '' || obj[i] === null) {
          obj[i] = value
        }
      }
      return obj
    }
    Vue.prototype.scrollYauto = function () {
      document.getElementById('page-wrapper').style.overflowY = 'auto'
    }
    Vue.prototype.scrollYhidden = function () {
      document.getElementById('page-wrapper').style.overflowY = 'hidden'
    }
    // 置空对象属性
    Vue.prototype.emptyObj = function (obj) {
      for (let i in obj) {
        obj[i] = ''
      }
      return obj
    }
    // 处理日期
    Vue.prototype.dealTime = function (obj) {
      let query = {startTime: '',endTime: ''}
      if (obj.startTime !== '') {
        let start = new Date(obj.startTime)
        start = `${start.getFullYear()}-${start.getMonth() + 1}-${start.getDate()}`
        query.startTime = start
      }
      if (obj.endTime !== '') {
        let end = new Date(obj.endTime)
        end = `${end.getFullYear()}-${end.getMonth() + 1}-${end.getDate()}`
        query.endTime = `${end} 23:59:59`
      }
      return query
    }
    /* 日期格式转为 时分秒*/
    Vue.prototype.dealToTime = function (time) {
      if (time!=='' && time instanceof Date) {
        time = `${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
      }
      return time
    },
    Vue.prototype.$http = axios
    // 处理url
    Vue.prototype.getUrl = function (url) {
      let getUrl = config.mockUrl + url
      return getUrl
    }
    Vue.prototype.goBack = function () {
      /* window.history.go(-1) */
      this.$router.back(-1)
    }
    Vue.prototype.freshPage = function () {
      /* window.history.go(-1) */
      location.reload()
    }
    Vue.prototype.messageBox = function (info, type, myCustomClass) {
      this.$message({
        message: info,
        type: type,
        duration: 1000,
        showClose: true,
        customClass: myCustomClass === undefined ? 'my-el-message' : myCustomClass
      })
    }
    Vue.prototype.loginFailure = function (file) {
      this.messageBox('登录失效，请重新登录', 'error')
      let t = null
      clearTimeout(t)
      t = setTimeout(() => {
      /*  this.$router.push('/login')
        location.reload() // 主要是重新注入路由实例 */
        window.open(`/login`, '_self')
      }, 1000)
    }
    // 处理返回数据 handle 为true时，组件自己处理返回数据
    Vue.prototype.handelResponse = function (res, cb, handle) {
      if (res.status == '2') { // 半小时不操作，返回登录页
        this.loginFailure()
      } else if (res.status == '0' || handle) {
        cb(res)
      } else if (res.status == '1') {
        this.messageBox(res.error[0], 'error')
      }
    }
    // 处理文件上传返回 数据
    Vue.prototype.handleFileResonse = function (res) {
      return new Promise((resolve, reject) => {
        this.handelResponse(res, resolve)
      })
    }
    // 文件上传 通讯失败
    Vue.prototype.handleFileError = function () {
      this.messageBox('系统繁忙，请稍后再试', 'error')
    }
    Vue.prototype.apiGet = function (url, data) {
      return new Promise((resolve, reject) => {
        this.$http.get(this.getUrl(url),{params:data}).then((response) => {
          this.handelResponse(response.data, resolve)
        }).catch((response) => { /*  reject(response) */
          this.messageBox('系统繁忙，请稍后再试', 'error')
        })
      })
    }
    Vue.prototype.apiPost = function (url, data, config) {
      data = this.isEmpty(data,'')
      return new Promise((resolve, reject) => {
        this.$http.post(this.getUrl(url), data, config).then((response) => {
          this.handelResponse(response.data, resolve)
          if (this.btn) {
            this.btnClick() // 按钮恢复可点击
          }
        }).catch((response) => { /*  reject(response) */
          if (this.btn) {
            this.btnClick() // 按钮恢复可点击
          }
          if (config!=undefined&&config.back) {
            resolve({back: true})
            return false
          }
          this.messageBox('系统繁忙，请稍后再试', 'error')
        })
      })
    },
      Vue.prototype.apiGetJson = function (url, data) {//获取静态json数据
        return new Promise((resolve, reject) => {
          this.$http.get(url,{params:data}).then((response) => {
            resolve(response.data)
          }).catch((response) => { /*  reject(response) */
            this.messageBox('系统繁忙，请稍后再试', 'error')
          })
        })
      }
  }
}
export default MyPlugin

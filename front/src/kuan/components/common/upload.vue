<template>
  <div class="inline">
    <slot>
      <button  class="btn btn-default btn-flat btn-pri btn-sm myBtn" :id="btnId">
      上传
    </button>
    </slot>
    <progressType v-if="progress.show" :progress="progress" @change="progressChange"></progressType>
  </div>
</template>
<script>
import plupload from 'plupload'
import {getFileType} from 'src/common/util'
import progressType from 'src/components/common/progress'
export default {
  props: {
    action: { // 文件上传地址
      type: String,
      default: ''
    },
    btnId: { // 按钮id
      type: String,
      default: 'browse'
    },
    type: { // 上传文件类型
      type: String,
      default: 'apk'
    },
    typeInfo: { // 上传文件类型 错误提示关键字
      type: String,
      default: 'apk'
    },
    maxSize: { // 上传文件大小限制
      type: String,
      default: '100'
    },
    progressC: { // 进度
      type: Object,
      default: function () {
        return {}
      }
    },
    imgSize: { // 图片大小
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      upload: '',
      uploadFile: '',
      // 上传进度参数
      progress: {
        ...this.progressC
      }
    }
  },
  created () {
    this.$nextTick(() => {
      this.initPlUploader()
    })
  },
  methods: {
    initPlUploader () {
      this.upload = new plupload.Uploader({
        runtimes: 'html5,flash,silverlight,html4',
        url: this.action,
        browse_button: this.btnId,
        flash_swf_url: '/static/xazx/js/Moxie.swf',
        silverlight_xap_url: '/static/xazx/js/Moxie.xap',
        filters: {
          prevent_duplicates: true
        },
        init: {
          FilesAdded: function (up, files) {
            up.start()
          },
          BeforeUpload: this.beforeFileUpload,
          FileUploaded: this.handleFileSuccess,
          UploadProgress: this.uploadOnProgress
        }
      })
      this.upload.init()
    },
    beforeFileUpload (uploader, file) {
      const isExcel = getFileType(file.name, this.type)
      let imgSize2 = Object.keys(this.imgSize).length
      if (imgSize2>0) {
        if (!isExcel) {
          this.messageBox(`上传文件只能是${this.typeInfo}格式!`, 'error')
          this.upload.removeFile(file)
        }
        const imgPromise = new Promise((resolve, reject) => {
          let width = this.imgSize.width, height = this.imgSize.height, _URL = window.URL || window.webkitURL
          let img = new Image()
          img.onload = () => {
            let imgSize1 = img.width == width && img.height == height
            if (!imgSize1) {
              this.messageBox(`请上传图片比例为${this.imgSize.width}*${this.imgSize.height}大小的图片`, 'error')
              this.upload.removeFile(file)
              return false
              reject()
            } else {
              let a = Object.keys(this.progress).length // a>2传入了progress对象 否则没有进度
              if (a > 0) {
                this.progress.show = true
                this.uploadFile = file
              }
              return true
              resolve()
            }
          }
          img.src = _URL.createObjectURL(file.getNative())
        })
        return isExcel && imgPromise
      } else {
        const isLt2M = file.size / 1024 / 1024 < Number.parseInt(this.maxSize)
        if (!isExcel) {
          let a = Object.keys(this.progress).length // a>2传入了progress对象 否则没有进度
          if (a > 0) {
            this.progress.show = false
          }
          this.messageBox(`上传文件只能是${this.typeInfo}格式!`, 'error')
          this.upload.removeFile(file)
        }
        if (!isLt2M) {
          let a = Object.keys(this.progress).length // a>2传入了progress对象 否则没有进度
          if (a > 0) {
            this.progress.show = false
          }
          this.messageBox(`上传文件大小不能超过${this.maxSize}MB!`, 'error')
          this.upload.removeFile(file)
        }
        if (isExcel && isLt2M) {
          let a = Object.keys(this.progress).length // a>2传入了progress对象 否则没有进度
          if (a > 0) {
            this.progress.show = true
            this.uploadFile = file
          }
          this.scrollYhidden()
        }
        return isExcel && isLt2M
      }

    },
    handleFileSuccess (uploader, file, responseObject) {
      this.upload.removeFile(this.uploadFile)
      responseObject.response = JSON.parse(responseObject.response)
      this.$emit('change', responseObject.response, file,this.btnId)
      let a = Object.keys(this.progress).length // a>2传入了progress对象 否则没有进度
      if (a > 0) {
        let t = null
        clearTimeout(t)
        t = setTimeout(() => {
          this.progress.progress = 0
          this.progress.show = false
          this.scrollYauto()
        }, 1000)
      } else {
        this.scrollYauto()
      }
    },
    uploadOnProgress (uploader, file) {
      let a = Object.keys(this.progress).length // a>2传入了progress对象 否则没有进度
      if (a > 0) {
        this.progress.progress = uploader.total.percent
      }
    },
    progressChange (flag) {
      // 取消上传请求
      this.progress.progress = 0
      this.upload.removeFile(this.uploadFile)
      this.progress.show = false
      this.scrollYauto()
    }
  },
  components: {
    progressType
  }
}
</script>

<style lang="scss" type="text/scss">

</style>

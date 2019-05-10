<template>
  <my-upload field="file"
             ref="cropper"
             @crop-success="cropSuccess"
             @crop-upload-success="cropUploadSuccess"
             @crop-upload-fail="cropUploadFail"
             @src-file-set="srcFileSet"
             v-model="myUploadData.show"
             :width="myUploadData.size.width"
             :height="myUploadData.size.height"
             :url="myUploadData.avtarImg"
             :params="myUploadData.params"
             :headers="myUploadData.headers"
             img-format="png"
             :autoCropWidth="myUploadData.size.width"
             :autoCropHeight="myUploadData.size.height"
  ></my-upload>
</template>

<script>
import myUpload from 'vue-image-crop-upload'
export default {
  props: {
    myUploadData: {
      show: false,
      params: {
      },
      headers: {
        smail: '*_~'
      },
      imgDataUrl: '',
      avtarImg: '',
      size: {
        width: 120,
        height: 120
      }
    }
  },
  data () {
    return {
      loop: ''
    }
  },
  created () {
  },
  methods: {
    srcFileSet () {
      this.loop = setInterval(() => {
        this.changeHtml()
      }, 50)
    },
    changeHtml () {
      let vicp = document.getElementsByClassName('vicp-preview-item')
      if (vicp.length>0) {
        clearInterval(this.loop)
        for (let i = 0; i < vicp.length; i++) {
          vicp[i].children[1].innerHTML = '图片预览'
        }
      }
    },
    cropSuccess (imgDataUrl, field) {
    },
    cropUploadSuccess (jsonData, field) {
      this.handleFileResonse(jsonData).then((res) => {
        this.$emit('change', res.data)
      })
    },
    cropUploadFail (status, field) {
      // this.messageBox('!', 'success')
    }
  },
  components: {
    myUpload
  },
  destroyed() {
    clearInterval(this.loop)
  }
}
</script>
<style lang="scss" type="text/scss">
  .vue-image-crop-upload .vicp-wrap .vicp-operate a{
    color:#fff!important;
    background-color: #378cdc !important;
    &:hover{
      opacity: .8;
    }
  }
  .vue-image-crop-upload .vicp-wrap .vicp-close{
    position:static!important;
    text-align:right;
  }
  .vue-image-crop-upload .vicp-wrap{
  }
  .vicp-icon4{
    display: inline-block!important;
    &::before{
      background-color: #909399!important;
      width: 14px!important;
      height: 1px!important;
    }
    &::after{
      background-color: #909399!important;
      width: 14px!important;
      height: 1px!important;
    }
    &:hover{
        -webkit-transform: none!important;
        transform: none!important;
    }
  }
  input[type=range]::-moz-range-track {
    background-color: rgba(0, 135, 212, 0.5)!important;}
  input[type=range]::-webkit-slider-runnable-track {
    background-color: rgba(0, 135, 212, 0.5)!important;}
 input[type=range]::-ms-fill-lower {
    background-color: rgba(0, 135, 212, 0.3)!important; }
 input[type=range]::-ms-fill-upper {
    background-color: rgba(0, 135, 212, 0.15)!important; }
  input[type=range]:focus::-webkit-slider-runnable-track {
    background-color: rgba(0, 135, 212, 0.5)!important;}
 input[type=range]:focus::-moz-range-track {
    background-color: rgba(0, 135, 212, 0.5)!important;}
 input[type=range]:focus::-ms-fill-lower {
    background-color: rgba(0, 135, 212, 0.45)!important;}
  input[type=range]:focus::-ms-fill-upper {
    background-color: rgba(0, 135, 212, 0.25)!important; }
  input[type=range]::-webkit-slider-thumb{
    background-color:#0087d4!important;
  }
  input[type=range]::-ms-thumb{
  background-color:#0087d4!important;
  }
     input[type=range]::-moz-range-thumb{
       background-color:#0087d4!important;
     }
</style>

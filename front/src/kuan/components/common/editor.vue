
<template>
  <textarea :id='id' :value='value'></textarea>
</template>

<script>
  // Import TinyMCE
  import tinymce from 'tinymce/tinymce'
  import 'tinymce/themes/modern/theme'
  import 'tinymce/plugins/advlist'
  import 'tinymce/plugins/link'
  import 'tinymce/plugins/image'
  import 'tinymce/plugins/code'
  import 'tinymce/plugins/table'
  import 'tinymce/plugins/textcolor'
  import 'tinymce/plugins/paste'
  import 'tinymce/plugins/textcolor'
  import 'tinymce/plugins/colorpicker'
  import config from 'common/config.js'
  const INIT = 0
  const CHANGED = 2
  // var EDITOR = null
  export default {
    props: {
      value: {
        type: String,
        editor: null,
        required: true
      },
      setting: {},
      type: '',
      url: { // 接口
        default: config.newsImg,
        type: String
      },
      accept: { // 文件类型
        default: 'image/jpeg, image/png',
        type: String
      },
      maxSize: { // 大小
        default: 2097152,
        type: Number
      },
      withCredentials: {
        default: false,
        type: Boolean
      }
    },
    watch: {
      value: function(val) {
        //console.log('init ' + val)
        if (this.status === INIT || tinymce.get(this.id).getContent() !== val) {
          let a= val==null?'':val
          tinymce.get(this.id).setContent(a)
        }
        this.status = CHANGED
      }
    },
    data() {
      return {
        status: INIT,
        id: 'editor-'+this.type+ new Date().getMilliseconds()
      }
    },
    methods: {
    },
    mounted() {
      const _this = this
      const setting =
        {
          selector: '#' + _this.id,
          convert_urls: false,
          upload_image_url: config.imgUpload, // 配置的上传图片的路由
          language_url: '/static/freebuds/editor/langs/zh_CN.js',
          images_upload_base_path:'/',
          language: 'zh_CN',
          skin_url: '/static/freebuds/editor/skins/lightgray',
          init_instance_callback: function(editor) {
            editor.on('input change undo redo', () => {
              var content = editor.getContent()
              _this.$emit('show', content,_this.type)
            })
          },
          content_style: `
    *                         { padding:0; margin:0; }
    html, body                { height:100%; }
    img                       { max-width:100%; display:block;height:auto; }
    a                         { text-decoration: none; }
    iframe                    { width: 100%; }
    p                         { line-height:1.6; margin: 0px; }
    table                     { word-wrap:break-word; word-break:break-all; max-width:100%; border:none; border-color:#999; }
    .mce-object-iframe        { width:100%; box-sizing:border-box; margin:0; padding:0; }
    ul,ol                     { list-style-position:inside; }
  `,
          insert_button_items: 'image link | inserttable',
          paste_retain_style_properties: 'all',
          paste_word_valid_elements: '*[*]', // word需要它
          paste_data_images: true, // 粘贴的同时能把内容里的图片自动上传，非常强力的功能
          paste_convert_word_fake_lists: false, // 插入word文档需要该属性
          paste_webkit_styles: 'all',
          automatic_uploads: true,
          paste_merge_formats: true,
          nonbreaking_force_tab: false,
          paste_auto_cleanup_on_paste: false,
          'plugins': [
            'advlist link image',
            'code',
            'table textcolor paste textcolor colorpicker'
          ], // 配置
          'toolbar_items_size': 'small',
          'block_formats': 'Paragraph=p;Heading 1=h1;Heading 2=h2;Heading 3=h3;Heading 4=h4;Heading 5=h5;Heading 6=h6;',
          'toolbar1': 'table |insertfile undo redo | formatselect | link unlink | uploadimg image media', // 工具栏1
          'toolbar2': ' fontsizeselect | forecolor backcolor | fontselect bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | outdent indent | removeformat', // 工具栏2
          // 图片上传
          images_upload_handler: function(blobInfo, success, failure) {
            if (blobInfo.blob().size > _this.maxSize) {
              failure('文件体积过大')
              return false
            }
            if (_this.accept.indexOf(blobInfo.blob().type) >= 0) {
              uploadPic()
            } else {
              failure('图片格式错误')
            }
            function uploadPic() { // 发送请求
              const xhr = new XMLHttpRequest()
              const formData = new FormData()
              xhr.withCredentials = _this.withCredentials
              xhr.open('POST', _this.url)
              const filethis = _this
              xhr.onload = function() {
                //failure('上传---' + xhr.status)
                if (xhr.status !== 200) {
                  // 抛出 'on-upload-fail' 钩子
                  filethis.$emit('on-upload-fail')
                  failure('上传失败: ' + xhr.status)
                  return
                }else{
                  const json = JSON.parse(xhr.responseText)
                  // 抛出 'on-upload-success' 钩子
                 /* filethis.$emit('on-upload-success', [
                    json, success, failure
                  ])*/
                  success(json.data,filethis.type)
                }
              }
              xhr.onerror = function() {
                _this.$emit('on-ready', '上传失败')
              }
              formData.append('file', blobInfo.blob())
              xhr.send(formData)
            }
          }
        }
      Object.assign(setting, _this.setting)
      tinymce.init(setting)
    },
    beforeDestroy: function() {
      tinymce.get(this.id).destroy()
    }
  }
</script>
<style lang="scss" type="text/scss">
  #mceu_49{
    display: none!important;
  }
  .mce-tinymce,.mce-top-part::before{//去掉富文本编辑器阴影
    -webkit-box-shadow: none!important;
    -ms-box-shadow: none!important;
    -o-box-shadow: none!important;
    -moz-box-shadow: none!important;
    box-shadow: none!important;
  }
  div.mce-menubtn.mce-opened{
    z-index:65534!important;
  }
</style>

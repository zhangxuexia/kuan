<template>
  <div class="error-html tc">
    <div class="error">
    <div class="error-img">
      <img src="/static/freebuds/images/404.png">
    </div>
    <div class="error-content">
      <div class="font30">您访问的页面不存在</div>
    </div>
    </div>
  </div>
</template>
<style lang="scss" type="text/scss">
  .tc{
    text-align:center;
  }
  .error-html{
    background:#F6F6F6; padding:20px; font-family:Georgia;
    position:relative;
    .error{
      display:inline-block;
      margin:15vh auto auto;
      color:#979797;
      .error-img{
        img{
          max-width:600px;
        }
      }
      .font30{
        font-size:30px;
        margin:20px 0;
      }
      .error-href{
        margin:30px auto;
        font-size:14px;
        a{
          color:#979797;
          text-decoration: underline;
          &:hover{
            color:#1161ed;
          }
        }
      }
      .error-icp{
        font-size:14px;
        margin-top:50px;
      }
    }
    /*span{font-size:55px; font-weight:bold; color:#06c}
    p{margin:20px 0; font-size:40px; font-weight:bold; font-family:"微软雅黑"; color:#ccc}
    div{height:80px; line-height:25px; color:#333; font-size:12px}
    div a{color:#333}*/
  }
</style>

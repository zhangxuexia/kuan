<template>
    <div>
      <div class="treeTable">
        <div class="thead trow">
          <div class="tc info" :style="'width:'+item1.width" v-for="(item1, index1) in columns" :key="index1">{{item1.label}}</div>
        </div>
        <div class="tbody border1">
          <treeItem :list="appList" :columns="columns" @change="expandTr"></treeItem>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  data () {
    return {
      appList: '',
      columns: [
        {
          label: '组织名称',
          width: '20%',
          value: 'name',
          align: 'tl'
        },
        {
          label: '检测URL/IP',
          width: '35%',
          value: 'url',
          btnFont: ['edit']
        },
        {
          label: '更新时间',
          width: '15%',
          value: 'time'
        },
        {
          label: '敏感词',
          width: '15%',
          value: 'time'
        },
        {
          label: '操作',
          width: '15%',
          btn: true,
          value: '<a class="btn btn-xs md-trigger" >删除</a>'
        }
      ]
    }
  },
  created () {
    this.getLIst()
  },
  methods: {
    getLIst () {
      this.apiPost('/kirin/judge/listm').then((res) => {
        this.appList = this.dealList(res.data.dataList)
      })
    },
    expandTr (m) {
      m.show = !m.show
      if (m.child && m.child.length) {
        this.dealExpand(m.child, !m.show)
      }
    },
    dealExpand (list, flag) {
      list.map((item) => {
        if (item.child && item.child.length) {
          item.show = true
          item.child = this.dealExpand(item.child)
        }
      })
      return list
    },
    dealList (list) {
      list.map((item) => {
        if (item.child && item.child.length) {
          item.show = false
          item.child = this.dealList(item.child)
        }
      })
      return list
    }
  },
  components: {
    treeItem: () => import('./tree-item.vue')
  }
}
</script>

<style lang="scss" type="text/scss">
  .treeTable{
    .border1{
      border-bottom:1px solid #e9e9e9!important;
    }
    .thead{
      width:100%;
      .info{
        font-size:16px;
        color:#54638e;
      }
    }
    .info{
      padding: 8px;
      color:#333;
      line-height: 1.42857143;
    }
    div{
      float:left;
    }
    .tbody{
      width:100%;
      font-size:14px;
      color:#8b8b8b;
    }
    .w35{
      width:35%;
    }
    .w20{
      width:20%;
    }
    .w15{
      width:15%;
    }
    .w10{
      width:10%;
    }
    .trow{
      border-bottom:0px solid #e9e9e9;
      width:100%;
      .btn-arrow{
        width:25px;
        i{
          color:#333;
          font-size:16px;
          line-height:25px;
          cursor:pointer;
        }
        &.active{
        }
      }
      .tcrow{
        width:100%;
      }
      .iconbianji{
        opacity:0;
        color:#2edc9e;
      }
      .iconfont{
        cursor:pointer;
      }
      &:hover{
        >.info{
          .iconbianji{
            opacity:1;
          }
        }
      }
    }
  }
</style>

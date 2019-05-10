<template>
  <ul class="mo-paging fr">
    <div class="inline pageItem">共<span>{{pages}}</span>页/<span>{{total}}</span>条数据</div>
    <li
      :class="{'disable' : pageCurrent === 1}"
      @click="prev">
      <a>上一页</a>
    </li>
    <li
      :class="['paging-item', 'paging-item--more']"
      v-if="showPrevMore">...</li>
    <li
      :class="{'current' : pageCurrent === pager}"
      :key="index"
      v-for="(pager, index) in pagers"
      @click="go(pager)"><a>{{ pager }}</a></li>
    <li
      :class="['paging-item', 'paging-item--more']"
      v-if="showNextMore">...</li>
    <li
      :class="{'disable':pageCurrent === pages}"
      @click="next"><a>下一页</a></li>
  </ul>
</template>
<script type="text/ecmascript-6">
export default {
//  通过props来接受从父组件传递过来的值
  props: {
    // 页面中的可见页码，其他的以...替代, 必须是奇数
    perPages: {
      type: Number,
      default: 5
    },
    // 当前页码
    pageIndex: {
      type: Number,
      default: 1
    },
    // 每页显示条数
    pageSize: {
      type: Number,
      default: 10
    },
    // 总记录数
    total: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      pageCurrent: this.pageIndex, // 当前页码
      limit: this.pageSize, // 每页显示条数
      size: this.total || 1, // 总记录数
      showPrevMore: false,
      showNextMore: false
    }
  },
  watch: {
    pageIndex (val) {
      this.pageCurrent = val || 1
    },
    pageSize (val) {
      this.limit = val || 10
    },
    total (val) {
      this.size = val || 1
    }
  },
  create: {

  },
  methods: {
    prev () {
      if (this.pageCurrent > 1) {
        this.go(this.pageCurrent - 1)
      }
    },
    next () {
      if (this.pageCurrent < this.pages) {
        this.go(this.pageCurrent + 1)
      }
    },
    first () {
      if (this.pageCurrent !== 1) {
        this.go(1)
      }
    },
    last () {
      if (this.pageCurrent !== this.pages) {
        this.go(this.pages)
      }
    },
    go (page) {
      if (this.pageCurrent !== page) {
        this.pageCurrent = page
        // 父组件通过change方法来接受当前的页码
        this.$emit('change', this.pageCurrent)
      }
    }
  },
  computed: {
  // 计算总页码
    pages () {
      return Math.ceil(this.size / this.limit)
    },
    // 计算页码，当count等变化时自动计算
    pagers () {
      const array = []
      const perPages = this.perPages
      const pageCount = this.pages
      let current = this.pageCurrent
      const _offset = (perPages - 1) / 2
      const offset = {
        start: current - _offset,
        end: current + _offset
      }
      // -1, 3
      if (offset.start < 1) {
        offset.end = offset.end + (1 - offset.start)
        offset.start = 1
      }
      if (offset.end > pageCount) {
        offset.start = offset.start - (offset.end - pageCount)
        offset.end = pageCount
      }
      if (offset.start < 1) offset.start = 1
      this.showPrevMore = (offset.start > 1)
      this.showNextMore = (offset.end < pageCount)
      for (let i = offset.start; i <= offset.end; i++) {
        array.push(i)
      }
      return array
    }
  }

}
</script>
<style lang="scss" type="text/scss">
  .mo-paging{
    padding:10px 0;
    .pageItem{
      margin-right:10px;
      span{
        margin:0 6px;
        color:#436585;
      }
    }
    li{
      display: inline-block;
      margin: 0 2px;
      &:hover{
        background-color: #e4e4e4;
        color: #888;
      }
      a{
        height: 30px;
        line-height: 28px;
        text-align: center;
        padding: 0 10px;
        cursor: pointer;
        display: inline-block;
        color: #436585;
        text-decoration: none;
        background-color: #fff;
        border: 1px solid #436585;
        &:hover,&:focus{
          text-decoration: none;
          background-color: #436585;
          color:#fff;
        }
      }
    }
    .current{
      cursor: default;
      color: #fff;
      background-color: #436585;
      border-color: #436585;
      a{
        background-color: #436585;
        border-color: #436585;
        color: #fff;
        &:hover,&:focus{
          color: #fff;
          cursor: default;
          background-color: #436585;
          border-color: #436585;
        }
      }
    }
    .disable{
      a{
        border: 1px solid #ddd;
        color: #777;
        cursor: not-allowed;
        background-color: #fff;
      }
      &:hover,:focus{
        color: #777;
        cursor: not-allowed;
        background-color: #fff;
        border-color: #ddd;
      }
    }
  }
</style>

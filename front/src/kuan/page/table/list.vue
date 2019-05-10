<template>
    <div>
      <h2>树表格实现</h2>
      <tree-table ref="recTree"
                  :list.sync="treeDataSource"
                  @actionFunc="actionFunc"
                  @deleteFunc="deleteFunc"
                  @orderByFunc="orderByFunc"
                  @handlerExpand="handlerExpand"
      ></tree-table>
    </div>
</template>

<script>
import treeTable from '@/components/common/tree-table.vue'
export default {
  data () {
    return {
      list: [], // 请求原始数据
      treeDataSource: [
        {
          id: '1',
          name: '姓名',
          children: [
            {
              id: '12',
              name: '子集姓名'
            }
          ]
        },
        {
          id: '2',
          name: '姓名',
          children: [
            {
              id: '12',
              name: '子集姓名'
            }
          ]
        },
        {
          id: '3',
          name: '姓名',
          children: [
            {
              id: '12',
              name: '子集姓名'
            }
          ]
        }
      ] // 组合成树表格接收的数据
    }
  },
  components: {
    treeTable
  },
  methods: {
    orderByFunc (val) {
      alert('排序')
      alert(val)
    },
    actionFunc (m) {
      alert('编辑')
    },
    deleteFunc (m) {
      alert('删除')
    },
    handlerExpand (m) {
      m.isExpand = !m.isExpand
    }
  }
}
</script>

<template>
    <div style="width:100%;">
      <div class="trow" v-for="(item, index) in list" :key="index" :class="[{'border1':item.level==0&&index<list.length-1}]">
        <div :class="['info',item1.align==undefined?'tc':item1.align]" :style="{width:item1.width,'padding-left':index1==0?20*item.level+'px':'0px'}" v-for="(item1, index1) in columns" :key="index1">
          <div :class="['btn-arrow',{'active':item.show,'visibilityNone':!(item.child&&item.child.length>0)}]"  v-if="item.child&&item.child.length>0&&index1==0" @click="showTagle(item)">
            <i class="iconfont iconshangjiantou" v-if="!item.show"></i>
            <i class="iconfont iconxiajiantou" v-else></i>
          </div>
          <template v-if="item1.btn">
            <div v-html="item1.value" style="width:100%;"></div>
          </template>
          <template v-else>
            {{item[item1.value]}}
            <i class="iconfont iconbianji" v-if="item1.btnFont!=undefined&&item1.btnFont.indexOf('edit')>-1"></i>
          </template>
        </div>
        <el-collapse-transition>
          <div class="tcrow" v-show="item.show" v-if="item.child&&item.child.length>0">
            <treeItem :list="item.child" :columns="columns" @change="expandTr"></treeItem>
          </div>
        </el-collapse-transition>
    </div>
    </div>
</template>

<script>
export default {
  name: 'treeItem',
  props: {
    list: '',
    columns: ''
  },
  data () {
    return {}
  },
  methods: {
    showTagle (item) {
      this.$emit('change', item)
    },
    expandTr (m) {
      this.$emit('change', m)
    }
  }
}
</script>

<style lang="scss" type="text/scss">

</style>

<template>
    <div class="clearfix">
      <div class="fl mr10">
        <el-select v-model="cityData.province" filterable placeholder="请选择" >
          <el-option
            v-for="item in selectData.provinceOptions"
            :key="item.id"
            :label="item.name"
            :value="String(item.id)">
          </el-option>
        </el-select>
      </div>
      <div class="fl">
        <el-select v-model="cityData.city" filterable placeholder="请选择" >
          <el-option
            v-for="item in selectData.cityOptions"
            :key="item.id"
            :label="item.name"
            :value="String(item.id)">
          </el-option>
        </el-select>
      </div>
    </div>
</template>

<script>
export default {
  data() {
      return {
        cityData: Object.assign({},this.address),
        selectData: {
          provinceOptions: [],
          cityOptions: []
        }
      }
  },
  props:{
    address:{province:{type:String,default:''},city:{type:String,default:''}}
  },
  created () {
      this.getProvince({act: 'parent'})
  },
  watch:{
    'cityData.province':{
      handler:function(curVal,oldVal){
        this.getCity({id: curVal,act: 'child'});
      }
    },
    'cityData.city':{
      handler:function(curVal,oldVal){
        this.$emit('area',this.cityData);
      }
    }
  },
  methods: {
    getProvince (query) {
      this.apiPost('/freebuds/Website/city', query).then((res) => {
        this.selectData.provinceOptions = res.data.dataList
        if(this.cityData.province==''||this.cityData.province ==undefined){
          this.cityData.province=this.selectData.provinceOptions[0].id.toString();
        }
        else{
          this.getCity({id: this.cityData.province,act: 'child'});
        }
      })
    },
    getCity (query) {
      this.apiPost('/freebuds/Website/city', query).then((res) => {
        this.selectData.cityOptions = res.data.dataList
        if(this.address.city==''||this.address.city ==undefined){
          this.cityData.city=this.selectData.cityOptions[0].id.toString();
        }
      })
    }
  }
}
</script>

<style lang="scss" type="text/scss">

</style>

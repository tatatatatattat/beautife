<template>
  <div v-if="Object.keys(paramInfo).length !== 0" class="param-info">
    <table class="param-tab" v-for="(tab,indet) in paramInfo.sizes" :key="indet">
      <tr v-for="(tr,inder) in tab" :key="inder">
        <td v-for="(td,inded) in tr" :key="inded">{{td}}</td>
      </tr>
    </table>
    <table class="param-tab">
        <tr v-for="(item,index) in paramInfo.infos" :key="index">
            <td style="min-width:50px;">{{item.key}}</td>
            <td class="last">{{item.value}}</td>
        </tr>
    </table>
    <div v-if="paramInfo.image">
        <img style="width:100%;" :src="paramInfo.image" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: "DetailParamInfo",
  props: {
    paramInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style scoped>
.param-info{
    padding: 0 5px;
    margin-bottom:20px;
}
.param-tab {
border-collapse:collapse;
  font-size:13px;
  width: 100%;
  vertical-align: middle;
}
.param-tab td{
    padding:10px 0;
    border-bottom:1px solid #ccc;
    border-top:1px solid #ccc;
     
}
.last{
    color:#f40;
}
</style>
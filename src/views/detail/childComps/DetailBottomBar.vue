<template>
  <div class="bottom-bar">
    <div class="bottom-left">
      <div class="item-icon">
        <div class="icon"></div>
        <div>客服</div>
      </div>
      <div class="item-icon">
        <div class="icon service"></div>
        <div>店铺</div>
      </div>
      <div class="item-icon">
        <div class="icon shop"></div>
        <div>收藏</div>
      </div>
    </div>
    <div class="bottom-right">
      <div class="car" @click="addToCar">加入购物车</div>
      <div class="maranoy">购买</div>
    </div>
  </div>
</template>
<script>
export default {
    name:"DetailBottomBar",
    methods:{
        addToCar(){
            this.$emit('addCart')
        }
    }
};
</script>
<style scoped>
.bottom-bar {
  height: 49px;
  /* background-color:#f40; */
  position: absolute;
  height: 49px;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
}
.bottom-bar > div {
  flex: 1;
  font-size: 13px;
  text-align: center;
}
.bottom-left,.bottom-right{
    display:flex;
}
.item-icon,.bottom-right>div{
    flex:1;
     
}
.item-icon .icon {
  margin: 5px auto 0;
  width: 24px;
  height: 24px;
  background: url("~assets/img/detail/detail_bottom.png") no-repeat 0 0;
  background-size: 100%;
}
.icon.service {
  background-position: 0 -58px;
}
.icon.shop {
  background-position: 0 -107px;
}
.car,.maranoy{
    height:49px;
    line-height:49px;
    background:yellowgreen;
    color:#333;
}
.maranoy{
    background:#f40;
}
</style>
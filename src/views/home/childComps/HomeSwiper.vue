<template>
  <swiper v-if="banners.length">
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt @load="imgLoad"/>
        </a>
      </swiper-item>
    </swiper>
</template>
<script>
import { Swiper, SwiperItem } from "components/common/swiper"
export default {
  name: "HomeSwiper",
  components:{
      Swiper, 
      SwiperItem
  },
  data(){
    return {
      isLoad:false
    }
  },
  props:{
      banners:{
          type:Array,
          default:[]
      }
  },
  methods:{
    imgLoad(){
      // 可以使用isLoad变量进行状态记录
      // 可以不免HomeSwiper向home多次发出事件
      if(!this.isLoad){
        this.$emit('swiperImgLoad');
        this.isLoad = true
      }
    }
  }
};
</script>

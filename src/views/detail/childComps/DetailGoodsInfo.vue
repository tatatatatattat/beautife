<template>
    <div v-if="Object.keys(detailInfo).length !==0" class="good-info">
        <div class="start"></div>
        <div class="desc">{{detailInfo.desc}}</div>
        <div class="end"></div>
        <div v-for="(item,index) in detailInfo.detailImage" :key="index">
            <div class="myKey">{{item.key}}</div>
            <div class="info-list">
                <img 
                @load="imgLoad" 
                v-for="(img,indet) in item.list" 
                :key="indet" 
                :src="img" 
                alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'DetailGoodsInfo',
    props:{
        detailInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return {
            currentIndex:0,
            etailInfoLength:0
        }
    },
    methods:{
        imgLoad(){
            // if(++this.currentIndex == this.detailInfoLength){
            //     this.$emit('imageLoad')
            // }

            
            //新方法用的混入防抖函数 
            this.$emit('imageLoad')


            
        }
    },
    watch:{
        detailInfo() {
         this.detailInfoLength = this.detailInfo.detailImage[0].list.length   
        }
    }
}
</script>
<style scoped>
    .good-info{
        font-size:13px;
        color:#000;
        padding:20px 5px;
        border-bottom:5px solid #000;
    }
    .desc{
        padding:10px;

    }
    .myKey{
        padding:10px;
    }
    .info-list img{
        width:100%;
    }
</style>
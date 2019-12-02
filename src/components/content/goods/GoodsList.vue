<template>
    <div class="goods">
        <goods-item class="goods-item" v-for="(item,index) in goods" :key="index" :goods-item="item"/>
    </div>
</template>
<script>
import GoodsItem from './GoodsItem'
export default {
    name:"GoodsList",
    components:{
        GoodsItem,
    },
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>
    .goods{
        display:flex;
        flex-wrap: wrap;
        padding: 10px 10px 0;
        font-size:13px;
    }
    .goods-item{
        position:relative;
        flex:1;
        flex-basis:48%;
        max-width:49.4%;
        background:#fff;
        margin-bottom:10px;
        overflow: hidden;
    }
    .goods-item:nth-child(n){
        margin-right: 10px;
        
    }
    .goods-item:nth-child(2n){
        margin-right: 0px;
    }
    
</style>
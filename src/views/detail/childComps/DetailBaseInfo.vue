<template>
    <div class="base-info">
        <div class="info-title">{{goods.title}}</div>
        <div class="info-price">
            <span class="new-price">{{goods.newPrice}}</span>
            <span class="old-price"><s>{{goods.oldPrice}}</s></span>
            <span class="disCount" v-if="goods.disCount" :style="{background:goods.discountBgColor}">
                {{goods.disCount}}
            </span>
        </div>
        <div class="columns" v-if="goods.columns">
            <span>{{goods.columns[0]}}</span>
            <span>{{goods.columns[1]}}</span>
            <span>{{goods.services[goods.services.length-1].name}}</span>
        </div>
        <div class="services" v-if="goods.services&&goods.services.length-1>0">
            <div class="services-item" v-for="index in goods.services.length-1" :key="index">
                <img v-if="goods.services[index-1].icon" :src="goods.services[index-1].icon" alt="">
                <span>{{goods.services[index-1].name}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'DetailBaseIndo',
    props:{
        goods:{
            type:Object,
            default(){
                return {}
            }
        }
    },
}
</script>
<style scoped>
    .base-info{
        padding:10px;
        color:#000;
    }
    .info-title{
        margin-bottom:20px;
        font-size:16px;
    }
    .info-price{
        margin-bottom:20px;
    }
    .info-price span{
        /* flex:1; */
        display:inline-block;
        vertical-align: bottom;
        margin-right:5px;
    }
    .new-price{
        color:#f40;
        font-size:30px;
    }
    .old-price{
        color:#8e8b8b;
    }
    .disCount{
        color:#fff;
        border-radius: 10px;
        padding:5px 10px;
    }
    .columns{
        color:#7a7373;
        display:flex;
        padding-bottom:10px;
        border-bottom:1px solid #ccc;
        margin-bottom:20px;
        font-size:14px;
    }
    .columns span{
        flex:1;
        text-align:center;
    }
    .services{
        color:#7a7373;
        display:flex;
        font-size:13px;
        margin-bottom:10px;
    }
    .services img{
        width:15px;
        margin-right:3px;
        vertical-align: middle;
    }
    .services-item span{
        vertical-align:middle;
    }
    .services-item{
        text-align:center;
        flex:1;
    }
</style>
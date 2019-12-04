<template>
    <div class="shop-info">
        <div class="shop-title">
            <img :src="shop.logo" alt="">
            <span>{{shop.name}}</span>
        </div>
        <div class="shop-content">
            <div class="shop-item shop-left">
                <div class="left-item">
                    <p>{{shop.sells|temp}}</p>
                    <p class="bottom">总销量</p>
                </div>
                <div class="left-item">
                    <p>{{shop.goodsCount}}</p>
                    <p class="bottom">全部宝贝</p>
                </div>
            </div>
            <div class="shop-item shop-right">
                <table style="float:right;">
                    <tr v-for="(item,index) in shop.score" :key="index">
                        <td><span>{{item.name}}</span></td>
                        <td><span class="right-cold" :class="{rightScore:item.isBetter}">{{item.score}}</span></td>
                        <td><span class="right-colds" :class="{rightBetter:item.isBetter}">{{item.isBetter?'高':'低'}}</span></td>
                    </tr>
                </table>
                <div style="clear:both;"></div>
            </div>
        </div>
        <div class="shop-in" style="text-align:center;">
            <a href="">进店逛逛</a>
        </div>
    </div>
</template>
<script>
export default {
    name:"DetailShopInfo",
    props:{
        shop:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters:{
        temp:function(value){
            if(value<10000) return value
            return (value/10000).toFixed(1) + '万'
        }
    }
}
</script>
<style scoped>
    .shop-info{
        padding:10px;
    }
    .shop-title{
        margin:20px 0;
    }
    .shop-title img{
        width:50px;
        border-radius:50px;
        margin-right:10px;
        vertical-align: middle;
    }
    .shop-title span{
        vertical-align: middle;
        color:#000;

    }
    .shop-content{
        display:flex;
        align-items: center;
        color:#000; 
        font-size:13px;
        margin-bottom:20px;
    }
    .shop-item{
        flex:1;
    }
    .shop-left{
        display:flex;
        border-right:1px solid #000;
    }
    .left-item{
        flex:1;
        text-align:center;
    }
    .left-item p{
        margin-bottom:8px;
    }
    .left-item p.bottom {
        margin:0;
    }
    .shop-right tr td{
        padding:5px 0;
        padding-left:10px;
        font-size:14px;
    }
    .right-cold{
        color:#5ea732;
    }
    .right-colds{
        color:#fff;
        background-color:#5ea732;
        border-radius:2px;
        padding:2px;
    }
    .rightScore{
        color:#f13e3a;
    }
    .rightBetter{
        background-color:#f13e3a
    }
    .shop-in a{
        display:inline-block;
        padding:10px 20px;
        background:#ccc;
        border-radius:10px;
    }
</style>
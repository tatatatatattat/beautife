<template>
    <div class="detail">
        <detail-nav-bar class="home-nav"></detail-nav-bar>
        <scroll class="content" ref="scroll">
            <detail-swiper :topImages="topImages"/>
            <detail-base-info :goods="goods"/>
            <detail-shop-info :shop="shop"/>
            <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
            <detail-param-info :param-info="paramInfo"/>
        </scroll>
    </div>
</template>
<script>
import Scroll from 'components/common/scroll/Scroll'

import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'

import {getDetail,Goods,Shop,GoodsParam} from 'network/detail'
export default {
    name:'Detail',
    components:{
        Scroll,
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo
    },
    data(){
        return {
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{}
        }
    },
    created(){
        // 保存传入的iid
        this.iid = this.$route.params.id;
        
        // 根据iid请求详情数据
        getDetail(this.iid).then(res=>{
            const data = res.result;
            this.topImages = data.itemInfo.topImages;
            console.log(res)
            // 创建商品信息
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);

            // 创建店铺信息
            this.shop = new Shop(data.shopInfo);

            // 保存商品的详情数据
            this.detailInfo = data.detailInfo;
            // 参数信息
            this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)

        });
        
    },
    methods:{
        imageLoad(){
            this.$refs.scroll.refresh()
        }
    },
    
}
</script>
<style scoped>
    .detail{
        position:relative;
        z-index:10;
        background:#fff;
        height:100vh;
    }
    .content{
        position:absolute;
        top:44px;
        bottom:49px;
        /* z-index:11; */
        overflow: hidden;
    }
</style>
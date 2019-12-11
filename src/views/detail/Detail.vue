<template>
    <div class="detail">
        
        <detail-nav-bar @titleClick="titleClick" class="home-nav" ref = "nav"/>
        <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
            <detail-swiper :topImages="topImages"/>
            <detail-base-info :goods="goods"/>
            <detail-shop-info :shop="shop"/>
            <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"/>
            <detail-param-info ref="param" :param-info="paramInfo"/>
            <detail-comment-info ref="comment" :comment-info="commentInfo"/>
            <goods-list ref="list" :goods="recommend"/>
        </scroll>
        <detail-bottom-bar @addCart="addCart"/>
        <back-top @click.native="backClick" v-show="isShow"/>
        <!-- <toast :show="show" :my-toast="massage"/> -->
    </div>
</template>
<script>
import Scroll from 'components/common/scroll/Scroll'
// import Toast from 'components/common/toast/Toast'

import DetailNavBar from './childComps/DetailNavBar'
import DetailSwiper from './childComps/DetailSwiper'
import DetailBaseInfo from './childComps/DetailBaseInfo'
import DetailShopInfo from './childComps/DetailShopInfo'
import DetailGoodsInfo from './childComps/DetailGoodsInfo'
import DetailParamInfo from './childComps/DetailParamInfo'
import DetailCommentInfo from './childComps/DetailCommentInfo'
import GoodsList from 'components/content/goods/GoodsList'
import DetailBottomBar from './childComps/DetailBottomBar'

import {debounce} from 'common/utils'
import {getDetail,getRecommend,Goods,Shop,GoodsParam} from 'network/detail'
import {itemListenerMixin,backTopMixin} from 'common/mixin'
export default {
    name:'Detail',
    components:{
        Scroll,
        DetailNavBar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamInfo,
        DetailCommentInfo,
        GoodsList,
        DetailBottomBar,
        // Toast
    },
    data(){
        return {
            iid:null,
            topImages:[],
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:{},
            recommend:[],
            itemListener:null,
            themeTopY:[],
            thisFangDou:null,
            currentIndex:0,
            // massage:"",
            // show:false,
        }
    },
    mixins:[itemListenerMixin,backTopMixin],
    
    created(){
        // 保存传入的iid
        this.iid = this.$route.params.id;
        
        // 根据iid请求详情数据
        getDetail(this.iid).then(res=>{
            const data = res.result;
            this.topImages = data.itemInfo.topImages;
            // 创建商品信息
            this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services);

            // 创建店铺信息
            this.shop = new Shop(data.shopInfo);

            // 保存商品的详情数据
            this.detailInfo = data.detailInfo;
            // 参数信息
            this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule);

            // 评论信息
            this.commentInfo = data.rate;



            // this.$nextTick(()=>{
                
            // })

        });
        getRecommend().then(res=>{
            this.recommend = res.data.list;
        });

        this.thisFangDou = debounce(()=>{
            this.themeTopY=[]
            this.themeTopY.push(0);
            this.themeTopY.push(this.$refs.param.$el.offsetTop);
            this.themeTopY.push(this.$refs.comment.$el.offsetTop);
            this.themeTopY.push(this.$refs.list.$el.offsetTop);
 
            // 使用  滚动内容显示正确的标题 方法2 还需要push进去一个无穷大
            // this.themeTopY.push(Number.MAX_VALUE)
        })
    },
    mounted(){
        // 混入


        // const refresh = debounce(this.$refs.scroll.refresh)
        // 监听图片加载完成 事件总线
        // this.itemListener = ()=>{
            // this.$refs.scroll.refresh()
        //     refresh()
        // }
        // this.$bus.$on('itemImgLoad',this.itemListener);
        
    },
    updated(){
        
    },
    destroyed(){
        this.$bus.$off('itemImgLoad',this.itemListener)
    },
    methods:{
        imageLoad(){
            this.refresh();
            this.thisFangDou()
        },
        titleClick(index){
            this.$refs.scroll.scrollTo(0,-this.themeTopY[index],200)
        },
        contentScroll(position){
            // 滚动内容显示正确的标题

            const positY = -position.y;
            let length = this.themeTopY.length;
            for(let i = 0; i < length; i++){

                //方法一

                // if(this.currentIndex!==i&&((i<length-1&&positY>this.themeTopY[i]&&positY<this.themeTopY[i+1])||(i === length-1&&positY>this.themeTopY[i]))){
                //     this.currentIndex = i;
                //     this.$refs.nav.currentIndex = this.currentIndex;
                    
                // }

                // 方法二

                if(this.currentIndex !== i&&(positY>=this.themeTopY[i])){
                    this.currentIndex = i;
                    this.$refs.nav.currentIndex = this.currentIndex;
                }

            }
            this.isShow = (-position.y) > 1000;
            (-position.y)+40 > this.tabOffsetTop?this.isTabShow=true:this.isTabShow=false
        },
        addCart(){
            const product = {};
            product.iid = this.iid;
            product.image = this.topImages[0];
            product.title = this.goods.title;
            product.desc = this.goods.desc;
            product.price = this.goods.realPrice;
            this.$store.dispatch('addCat',product).then(res=>{
                // this.massage=res;
                // this.show=true;
                // setTimeout(()=>{
                //     this.massage='';
                //     this.show=false;
                // },2000)
                this.$toast.show()
                // console.log(this.$toast.show)
            })
            
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
        left:0;
        right:0;
        overflow: hidden;
    }
</style>
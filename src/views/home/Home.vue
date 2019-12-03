<template>
    <div id="home">
       <nav-bar class="home-nav">
           <div slot="center">购物街</div>
       </nav-bar>
       <tab-control 
           class="tabcontrol"
           :titles="['流行','新款','精选']" 
           @tabClick="tabClick"
           ref="tabControl1" v-show="isTabShow"/>
       <scroll class="content" ref="scroll" 
       :probe-type="3"
       @scroll="contentScroll"
       :pull-up-load="true"
       @pullingUp="pullingUp">
           <home-swiper :banners="banners" @swiperImgLoad="swiperImgLoad"/>
           <recommend-view :recommend="recommends.list"/>
           <feature/>
           <tab-control 
           :titles="['流行','新款','精选']" 
           @tabClick="tabClick"
           ref="tabControl2"/>
           <goods-list :goods="showGoods"></goods-list>
       </scroll>
       <!-- 当监听组件的原生事件的时候 必须给对应的事件加上 .native修饰符，才能进行监听 -->
       <back-top @click.native="backClick" v-show="isShow"/>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'

import RecommendView from './childComps/RecommendView'
import HomeSwiper from "./childComps/HomeSwiper"
import Feature from "./childComps/Feature"

import {getHomeTitle,getHomeGoods} from 'network/home'
import {debounce} from 'common/utils'

export default {
    components:{
        NavBar,
        RecommendView,
        HomeSwiper,
        Feature,
        TabControl,
        GoodsList,
        Scroll,
        BackTop
    },
    data(){
        return {
            banners:[],
            recommends:[],
            goods:{
                "pop":{page:0,list:[]},
                "new":{page:0,list:[]},
                "sell":{page:0,list:[]},
            },
            currentType:'pop',
            isShow:false,
            tabOffsetTop:0,
            isTabShow:false,
            saveY:0
        }
    },
    created(){
        
        // 轮播图数据请求
        this. getHomeTitle()
        // 请求商品列表数据
        this.getHomeGoods('pop')
        this.getHomeGoods("new")
        this.getHomeGoods("sell")
    },
    mounted(){
        const refresh = debounce(this.$refs.scroll.refresh)
        // 监听图片加载完成 事件总线
        this.$bus.$on('itemImgLoad',()=>{
            // this.$refs.scroll.refresh()
            refresh()
        });
    },
    methods:{
        /**
         * 
         * 网络请求
         */
        getHomeTitle(){
            getHomeTitle().then(res => {
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend;
            });
        },
        getHomeGoods(type){
            const page = this.goods[type].page+1
            getHomeGoods(type,page).then(res => {
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page += 1;
                // 上拉加载更多
                this.$refs.scroll.finishPullUp()
            });
            
        },

        /**
         * 
         * 事件
         */
        tabClick(index){
            switch(index){
                case 0:
                    this.currentType="pop"
                    break
                case 1:
                    this.currentType="new"
                    break
                case 2:
                    this.currentType="sell"
                break
            }
            this.$refs.tabControl2.currentIndex = index;
            this.$refs.tabControl1.currentIndex = index;
        },
        backClick(){
            this.$refs.scroll.scrollTo(0,0,500)
        },
        contentScroll(position){
            this.isShow = (-position.y) > 1000;
            (-position.y)+40 > this.tabOffsetTop?this.isTabShow=true:this.isTabShow=false
        },
        // 刷新频繁的函数防抖动
        // debounce(func,delay=300){
        //     //采用闭包原理
        //     let timer = null;
        //     return function(...args){
        //         if(timer) clearTimeout(timer)
        //         timer = setTimeout(()=>{
        //             func.apply(this,args)
        //         },delay);
                 
        //     }
        // }
        pullingUp(){
            this.getHomeGoods(this.currentType);
            
        },
        swiperImgLoad(){
            this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
        }
        // 获取组件的offsetTop
        // 所有组件都有一个属性，$el，用于获取组件的元素
        // console.log(this.$refs.tabControl.$el.offsetTop)
    },
    
    activated(){
        this.$refs.scroll.scrollTo(0,this.saveY,500)
        this.$refs.scroll.refresh()
    },
    deactivated(){
        this.saveY = this.$refs.scroll.scroll.y
    },
    computed:{
        showGoods(){
            return this.goods[this.currentType].list
        }
    }
}
</script>
<style scoped>
    .home-nav{
        background-color:var(--color-tint);
        color:#fff;
        font-weight: bold;
    }
    .content{
        height:calc(100vh - 44px - 49px);
        overflow: hidden;
    }
    .tabcontrol{
        position: absolute;
        left:0;
        top:44px;
        z-index:9;
        width:100%;
    }
</style>
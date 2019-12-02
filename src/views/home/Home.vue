<template>
    <div id="home">
       <nav-bar class="home-nav">
           <div slot="center">购物街</div>
       </nav-bar>
       <scroll class="content" ref="scroll">
           <home-swiper :banners="banners"></home-swiper>
           <recommend-view :recommend="recommends.list"/>
           <feature/>
           <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick"/>
           <goods-list :goods="showGoods"></goods-list>
       </scroll>
       <!-- 当监听组件的原生事件的时候 必须给对应的事件加上 .native修饰符，才能进行监听 -->
       <back-top @click.native="backClick"/>
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
            currentType:'pop'

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
    methods:{
        /**
         * 
         * 网络请求
         */
        getHomeTitle(){
            getHomeTitle().then(res => {
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend;
                console.log(this.banners)
            });
        },
        getHomeGoods(type){
            const page = this.goods[type].page+1
            getHomeGoods(type,page).then(res => {
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page += 1
            })
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
        },
        backClick(){
            this.$refs.scroll.scrollTo(0,0,500)
        }
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
</style>
<template>
    <div id="home">
       <nav-bar class="home-nav">
           <div slot="center">购物街</div>
       </nav-bar>
        <swiper v-if="banners.length">
            <swiper-item v-for="(item,index) in banners" :key="index">
                <a :href="item.link">
                    <img :src="item.image" alt="">
                </a>
            </swiper-item>
        </swiper>
       <recommend-view :recommend="recommends.list"/>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeTitle} from 'network/home'
import RecommendView from './childComps/RecommendView'
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
    components:{
        NavBar,
        RecommendView,
        Swiper,
        SwiperItem
    },
    data(){
        return {
            banners:[],
            recommends:[]
        }
    },
    created(){
        getHomeTitle().then(res=>{
            this.banners = res.data.banner.list;
            this.recommends = res.data.recommend;
            console.log(this.banners)
        })
    }
}
</script>
<style scoped>
    .home-nav{
        background-color:var(--color-tint);
        color:#fff;
        font-weight: bold;
    }
</style>
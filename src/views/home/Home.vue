<template>
    <div id="home">
       <nav-bar class="home-nav">
           <div slot="center">购物街</div>
       </nav-bar>
       <recommend-view :recommend="recommends.list"/>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeTitle} from 'network/home'
import RecommendView from './childComps/RecommendView'
export default {
    components:{
        NavBar,
        RecommendView
    },
    data(){
        return {
            banners:[],
            recommends:[]
        }
    },
    created(){
        getHomeTitle().then(res=>{
            this.banners = res.data.banner;
            this.recommends = res.data.recommend;
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
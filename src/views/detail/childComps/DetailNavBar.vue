<template>
    <div class="detail-nav-bar">
        <nav-bar>
            <div slot="left" class="back" @click="backClick">
                <img src="~assets/img/common/back.svg" alt="">
            </div>
            <div slot="center" class="title">
                <div 
                class="title-item" 
                :class="{active:currentIndex===index}" 
                v-for="(item,index) in titles" 
                :key="index"
                @click="detailClick(index)">{{item}}</div>
            </div>
        </nav-bar>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
export default {
    components:{
        NavBar
    },
    data(){
        return {
            titles: ['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    methods:{
        detailClick(index){
            this.currentIndex = index;
        },
        backClick(){
            // this.$router.back();
            this.$router.go(-1)
        }
    }
}
</script>
<style scoped>
    .title{display:flex;}
    .title-item{flex:1;text-align: center;}
    .active{color:#f40}
    .back img{margin-top:13px;}
</style>
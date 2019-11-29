<template>
    <div class="recommend">
        <div class="recommend-item" v-for="(item,index) in recommend" :key="index">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>
<script>
export default {
    name:'RecommendView',
    props:{
        recommend:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>
    .recommend{
        display:flex;
        width:100%;
        text-align:center;
        font-size:12px;
        padding-top:10px;
        padding-bottom:20px;
        margin-bottom:10px;
        border-bottom:5px solid #ccc;
    }
    .recommend-item{
        align-items:stretch;
        flex-wrap: nowrap;
        padding:5px;
    }
    
    img{
        margin-bottom:5px;
        width:100%;
    }
</style>
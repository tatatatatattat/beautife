<template>
    <div class="comment-info" v-if="commentInfo">
        <div class="title">
            <div>用户评价</div>
            <div>更多</div>
        </div>
        <div class="info-cont" v-for="(item,index) in commentInfo.list" :key="index">
            <div class="user">
                <img :src="item.user.avatar" alt="">
                <span>{{item.user.uname}}</span>
            </div>
            <div class="content">{{item.content}}</div>
            <div class="time">
                <span style="padding-right:10px;">{{item.created | timer}}</span>
                <span>{{item.style}}</span>
            </div>
            <div class="img">
                <img v-for="(img,i) in item.images" :src="img" alt="" :key="i">
            </div>
        </div>
    </div>
</template>
<script>
import {formatDate} from 'common/utils.js'
export default {
    name:"DetailCommentInfo",
    props:{
        commentInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters:{
        timer(value){
            const date = new Date(value*1000)
            return formatDate(date,'yyyy-MM-dd')
        }
    },
}
</script>
<style scoped>
    .comment-info{
        padding:5px 10px;
    }
    .title{
        display:flex;
        justify-content:space-between;
        padding-bottom:10px;
        border-bottom:1px solid #ccc;
        font-size:14px;
        padding-right:10px;
        margin-bottom:10px;
    }
    .user{
        padding-top:5px;
        font-size:15px;
        margin-bottom:10px;
    }
    .user img{
        border-radius:50%;
        width:40px;
        vertical-align:middle;
        margin-right:5px;
    }
    .info-cont .content{
        font-size:13px;
        line-height:1.5;
        padding-bottom:15px;
    }
    .time{
        font-size:13px;
        padding-bottom:15px;
    }
    .img img{
        width:100px;
    }
</style>
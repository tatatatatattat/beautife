<template>
    <div class="green-list">
        <div class="end">
            <green-item v-for="(item,index) in orderList" :key="index">
                <img  slot="img" :src="item.icon" alt="">
                <div slot="content">{{item.info}}</div>
            </green-item>
        </div>
        <div class="end">
            <green-item v-for="(item,index) in serviceList" :key="index">
                <img  slot="img" :src="item.icon" alt="">
                <div slot="content">{{item.info}}</div>
            </green-item>
        </div>
    </div>
</template>
<script>
import GreenItem from './GreenItem'
export default {
    name:'CreenList',
    components:{
        GreenItem
    },
    props:{
        orderList:{
            type:Array,
            default(){
                return []
            }
        },
        serviceList:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>
    .green-list{
        
    }
    img{
        width:100%;
        height:100%;
    }
    .end{
        margin-top:20px;
        background:#fff;
    }
</style>
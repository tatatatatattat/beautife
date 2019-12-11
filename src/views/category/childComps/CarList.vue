<template>
    <div class="car-list">
        <user-car class="list-item" v-for="(item,index) in carmsg" :key="index">
            <div slot="msg1">{{item.msg1}}</div>
            <div slot="msg2">{{item.msg2}}</div>
            <div slot="msg3">{{item.msg3}}</div>
        </user-car>
    </div>
</template>
<script>
import UserCar from './UserCar'
export default {
    name:'CarList',
    components:{
        UserCar
    },
    props:{
        carmsg:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>
    .car-list{
        display:flex;
        padding:18px 0;
        background:#fff;
    }
    .list-item{
        flex:1;
        text-align:center;
    }
</style>
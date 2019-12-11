<template>
    <div class="category">
        <nav-bar class="nav-bar">
            <div slot="center">练习商城</div>
        </nav-bar>
        <user-info/>
        <car-list :carmsg="carmsg"/>
        <green-list :order-list="orderList" :service-list="serviceList"/>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import UserInfo from './childComps/UserInfo'
import CarList from './childComps/CarList'
import GreenList from './childComps/GreenList'
export default {
    name:'Category',
    components:{
        NavBar,
        UserInfo,
        CarList,
        GreenList
    },
    data(){
        return {
            carmsg:[
                {
                    msg1:'0.00',
                    msg2:'元',
                    msg3:'我的余额'
                },{
                    msg1:'0',
                    msg2:'个',
                    msg3:'我的优惠'
                },{
                    msg1:'0',
                    msg2:'分',
                    msg3:'我的积分'
                }
            ],
            orderList: [
                {icon:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576066599607&di=8279c8f9ea7200347918479f0108346c&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2018-12-06%2F5c08c8739dcee.jpg', info: '我的消息'},
                {icon:'http://pic1.win4000.com/wallpaper/2017-11-23/5a167fb985759.jpg', info: '积分商城'},
                {icon:'http://pic1.win4000.com/wallpaper/2017-11-23/5a167fb985759.jpg', info: '会员卡'},
            ],
            serviceList: [
                {icon:'http://pic1.win4000.com/wallpaper/2017-11-23/5a167fb985759.jpg', info: '我的购物车'},
                {icon:'http://pic1.win4000.com/wallpaper/2017-11-23/5a167fb985759.jpg', info: '下载购物APP'},
            ]
        }
    }
}
</script>
<style scoped>
    .category{
        background:#f2f2f2;
    }
    .nav-bar{
        background-color:var(--color-tint);
        color:#fff;
    }
</style>
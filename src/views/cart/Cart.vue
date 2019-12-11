<template>
    <div class="cart">
        <nav-bar class="cart-bar">
            <div slot="center">购物车({{cartLength}})</div>
        </nav-bar>
        <cart-list/>
        <car-bottom-bar/>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'

import {mapGetters} from 'vuex'
import CartList from './childComps/CartList'
import CarBottomBar from './childComps/CarBottomBar'
export default {
    name:'Cart',
    components:{
        NavBar,
        CartList,
        CarBottomBar
    },
    computed:{
        ...mapGetters([
            'cartLength'
        ])
    }
}
</script>
<style scoped>
    .cart-bar{
        background-color:var(--color-tint);
        color:#fff;
    }
</style>
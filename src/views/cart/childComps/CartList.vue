<template>
    <div class="cart-list">
        <scroll ref="scroll" class="content">
            <!-- <cart-item></cart-item> -->
            <cart-item v-for="(item,index) in cartList" :key="index" :cart-list="item"/>
        </scroll>
    </div>
</template>
<script>
import Scroll from 'components/common/scroll/Scroll'

import CartItem from './CartItem'
import { mapGetters } from 'vuex'
export default {
    name:"CartList",
    components:{
        CartItem,
        Scroll
    },
    computed:{
        ...mapGetters([
            'cartList'
        ])
    },
    activated(){
        this.$refs.scroll.refresh()
    }
}
</script>
<style scoped>
    .cart-list{
        height:calc(100% - 44px - 49px);
    }
    .content{
        height:100%;
        overflow: hidden;
    }
</style>
<template>
    <div class="cart-item">
        <div class="select">
            <check-button @click.native="checkClick" :is-checked="cartList.checked"/>
        </div>
        <div class='item-img'>
            <img :src="cartList.image" alt="">
        </div>
        <div class="content">
            <p class="title">{{cartList.title}}</p>
            <p class="desc">{{cartList.desc}}</p>
            <div class="manoy">
                <span class="price">￥{{cartList.price}}</span>
                <span class="count">X{{cartList.count}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import CheckButton from 'components/content/checkButton/CheckButton'
export default {
    name:'CartItem',
    components:{
        CheckButton
    },
    props:{
        cartList:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    data(){
        return {
            isChecked:true
        }
    },
    methods:{
        checkClick(){
            this.cartList.checked = !this.cartList.checked;
        }
    }
}
</script>
<style scoped>
    .cart-item{
        width:100%;
        display:flex;
        padding:5px;
        /* why?? */
        font-size:0;
        border-bottom:1px solid #ccc;
    }
    .select{
        display:flex;
        align-items: center;
        width:20px;
    }
    .item-img{
        width:70px;
        margin-left:10px;
        height:100px;
        overflow: hidden;
        border-radius:6px;
    }
    .item-img img{
        width:100%;
    }
    .content{
        width:calc(100% - 110px);
        padding-left:10px;
        padding-bottom:40px;
        position:relative;
    }
    .content .title,.content .desc{
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-top:10px;
    }
    .content .title{
        font-size:15px;
    }
    .content .desc{
        font-size:13px;
    }
    .manoy{
        position:absolute;
        bottom:10px;
        width:100%;
        display:flex;
        font-size:13px;
        padding:0 5px;
        padding-right:20px;
        justify-content:space-between;
    }
    .price{
        color:#f40;
    }
</style>
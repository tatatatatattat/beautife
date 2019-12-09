<template>
    <div class="cart-item">
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
export default {
    name:'CartItem',
    props:{
        cartList:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    created(){
        console.log(this.cartList)
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
    .item-img{
        width:80px;
        height:100px;
        overflow: hidden;
        border-radius:6px;
    }
    .item-img img{
        width:100%;
    }
    .content{
        width:calc(100% - 80px - 10px);
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
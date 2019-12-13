<template>
    <div class="goods-item" @click="goodsItemClick">
        <img v-lazy="showImage" alt="" @load="imgLoad">
        <p>{{goodsItem.title}}</p>
        <div class="item-list">
            <span class="price">￥{{goodsItem.price}}</span>
            <span class="fav">{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>
<script>
export default {
    name:"GoodsItem",
    props:{
        goodsItem:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    // created(){
    //     console.log(this.goodsItem.img)
    // },
    computed:{
        showImage(){
            return this.goodsItem.img || this.goodsItem.image||this.goodsItem.show.img
        }
    },
    methods:{
        imgLoad(){
            this.$bus.$emit('itemImgLoad');
        },
        goodsItemClick(){
            if(this.goodsItem.show) this.$router.push('/detail/'+this.goodsItem.iid);
        
            // 也可以根据路由判断
            // if(this.$route.path.indexOf('/home')!=-1)
        }
    }
}
</script>
<style scoped>
    img{
        width:100%;
    }
    .goods-item p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom:3px;
        margin-top:10px;
    }
    .item-list{
        text-align:center;
    }
    .item-list .price{
        color:#f40;
    }
    .item-list .fav{
        position:relative;
        padding-left:15px;
        margin-left:5px;
        cursor:pointer;
    }
    .item-list .fav::before{
        content:"";
        display:block;
        position:absolute;
        left:0;
        top:0;
        width:14px;
        height:14px;
        background:url('~assets/img/common/collect.svg') 0 0/14px 14px;
    }
</style>
<template>
    <div class="tab-content-tab">
        <grid-view :cols="3" v-if="profileData">
            <div class="item" v-for="(item,index) in profileData" :key = 'index'>
                <img :src="item.image" alt="">
                <div class="text-item">{{item.title}}</div>
            </div>
        </grid-view>
    </div>
</template>
<script>
import GridView from 'components/common/gridView/GridView'
export default {
    name:'TabContentTop',
    components:{
        GridView
    },
    props:{
        profileData:{
            type:Array,
            default(){
                return []
            }
        }
    }
}
</script>
<style scoped>
    .item img{
        width:100%;
    }
    .text-item{
        margin-top:5px;
    }
</style>
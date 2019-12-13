<template>
    <div class="tab-content-tab">
        <grid-view :cols="3" v-if="profileData">
            <div class="item" v-for="(item,index) in profileData" :key = 'index'>
                <img :src="item.image" alt="" @load="topImgLoad">
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
    data(){
        return {
            loadIndex:0
        }
    },
    props:{
        profileData:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        topImgLoad(){
            
          if(++this.loadIndex === this.profileData.length){
              this.$emit('topImgLoad')
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
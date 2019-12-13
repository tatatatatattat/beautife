<template>
    <div class="tab-menu">
        <scroll class="menuscroll">
            <div class="menu-list">
                <div class="menu-item" 
                v-for="(item,index) in menudata" 
                :key="index" 
                @click="menuItemClick(index)"
                :class="{active:index === createIndex}">{{item.title}}</div>
            </div>
        </scroll>
    </div>
</template>
<script>
import Scroll from 'components/common/scroll/Scroll'
export default {
    name:'TabMenu',
    components:{
        Scroll
    },
    data(){
        return {
            createIndex:0
        }
    },
    props:{
        menudata:{
            type:Array,
            default(){
                return []
            }
        }
    },
    methods:{
        menuItemClick(index){
            this.createIndex = index;
            this.$emit('itemSelect',index)
        }
    }
}
</script>
<style scoped>
    .tab-menu{
        height:100%;
        font-size:14px;
    }
    .menuscroll{
        height:100%;
        overflow: hidden;
    }
    .menu-item{
        padding:15px 0;
        border-bottom:1px solid rgba(113, 109, 109, 0.1);
        border-left:5px solid rgba(0,0,0,0);
        text-align:center;
    }
    .menu-item.active{
         border-left:5px solid var(--color-tint);
         color:var(--color-tint);
         font-weight:700;
    }
</style>
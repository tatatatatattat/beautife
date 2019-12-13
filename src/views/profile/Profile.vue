<template>
    <div class="profile">
        <nav-bar class="nav-bar">
            <div slot="center">商品分类</div>
        </nav-bar>
        <div class="content">
            <tab-menu class="content-left" :menudata="menudata" @itemSelect="itemSelect"/>
            <scroll class="content-right" ref="scroll">
                <tab-content-top @topImgLoad="topImgLoad" :profile-data="profileData"/>
                <tab-control 
                :titles="['综合', '新品', '销量']" 
                @tabClick="tabClick"/>
                <goods-list :goods="showGoods"></goods-list>
            </scroll>
            
        </div>
    </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import Scroll from 'components/common/scroll/Scroll'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import TabMenu from './childComps/TabMenu'
import TabContentTop from './childComps/TabContentTop'

import {itemListenerMixin} from 'common/mixin'
import {debounce} from 'common/utils'
import {getProfile,getSubcategory,getProfileDetail} from 'network/profile'
export default {
    name:'Profile',
    components:{
        NavBar,
        Scroll,
        TabMenu,
        TabContentTop,
        TabControl,
        GoodsList
    },
    data(){
        return {
            menudata:[],
            profileData:[],
            createIndex:0,
            createType:'pop',
            profileGoods:{
                "pop":[],
                "new":[],
                "sell":[],
            },
            miniWallkey:null
        }
    },
    mixins:[itemListenerMixin],
    created(){
        this._profile();
        
    },
    methods:{
        _profile(){
            getProfile().then(res=>{
                this.menudata = res.data.category.list;
                
                this._subcategory(0);

                //  _getProfileDetail()
            });
           
        },
        _subcategory(index){
            const mailKey = this.menudata[index].maitKey;
            this.miniWallkey = this.menudata[index].miniWallkey;
            getSubcategory(mailKey).then(res=>{
                this.profileData = res.data.list;
            })
            this._getProfileDetail('pop');
            this._getProfileDetail('new');
            this._getProfileDetail('sell');
        },
        _getProfileDetail(type){
            console.log(this.miniWallkey)
            getProfileDetail(this.miniWallkey,type).then(res => {
                this.profileGoods[type] = res;
            });
        },
        itemSelect(index){
            this.createIndex = index;
            this._subcategory(index);
            this.$refs.scroll.scrollTo(0,0,0)
        },
        tabClick(index){
            switch(index){
                case 0:
                    this.createType="pop"
                    break
                case 1:
                    this.createType="new"
                    break
                case 2:
                    this.createType="sell"
                break
            }
            // console.log(this.profileGoods.pop)
        },
        topImgLoad(){
            this.$refs.scroll.refresh()
        }
    },
    computed:{
        showGoods(){
            return this.profileGoods[this.createType]
        }
    }  
}
</script>
<style scoped>
    .nav-bar{
        background:var(--color-tint);
        color:#fff;
    }
    .content{
        display:flex;
        height:calc(100vh - 49px - 44px);
        overflow: hidden;
    }
    .content-left{
        width:100px;
    }
    .content-right{
        width:calc(100% - 100px);
        text-align:center;
        font-size:14px;
    }
</style>
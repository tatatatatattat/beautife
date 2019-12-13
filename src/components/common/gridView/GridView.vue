<template>
    <div class="grid-view" ref="gridView">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'GridView',
    props:{
        cols:{
            type:Number,
            default:2
        },
        hMargin:{
            type:Number,
            default:8
        },
        vMargin:{
            type:Number,
            default:8
        },
        itemSpace:{
            type:Number,
            default:8
        },
        lineSpace:{
            type:Number,
            default:8
        },
    },
    created(){
        // 操作dom元素虽然可以在这个里面操作，但是它里面的子元素并没有加载过来，无法操作选择元素的子元素进行操作
        // this.$nextTick(()=>{
        //     this._autoLayout();        
        // })
    },
    // 没有找到更好的方法，暂时在update中进行操作
    updated(){
        this._autoLayout(); 
    },
    methods:{
       _autoLayout(){
           let gridEl = this.$refs.gridView;
           let children = gridEl.children;
           gridEl.style.padding = `${this.vMargin}px ${this.hMargin}px`
           let itemWidth = (gridEl.offsetWidth - (this.vMargin * 2) - this.hMargin * 2 - (this.cols - 1) * this.itemSpace) / this.cols;
           for(let i = 0; i<children.length; i++){
               
               let item = children[i];
               item.style.width = itemWidth + 'px';
               if((i + 1) % this.cols !== 0){
                   item.style.marginRight = this.itemSpace + 'px'
               }
               if(i >= this.cols) {
                   item.style.marginTop = this.lineSpace + "px"
               }
           }
       } 
    }

}
</script>
<style scoped>
    .grid-view {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
    }
</style>
import {debounce} from './utils'
import BackTop from 'components/content/backTop/BackTop'
export const itemListenerMixin = {
    mounted(){
        this.refresh = debounce(this.$refs.scroll.refresh)
        // 监听图片加载完成 事件总线
        this.itemListener = ()=>{
            // this.$refs.scroll.refresh()
            this.refresh()
        }
        this.$bus.$on('itemImgLoad',this.itemListener);
    },


    // 以下这些都是可以混入的
    data(){
        return {
            // 抽取相同的数据
            refresh:null
        }
    },
    methods:{},
    components:{}
}
export const backTopMixin = {

    components:{
        BackTop
    },
    data(){
        return {
            isShow:false,
        }
    },
    methods:{
        backClick(){
            this.$refs.scroll.scrollTo(0,0,500)
        },
    }
}
<template>
    <div class="car-bottom-bar">
        <div class="left">
            <div class="check-click" @click="clickCheck">
                <check-button :is-checked="isCheckedAll" class="checks"/>
                <span>全选</span>
            </div>
            <div>
                合计:{{totalPrice}}
            </div>
        </div>
        <div class="calculate" @click="nomull">
            <span>去计算：{{checkLength}}</span>
        </div>
    </div>
</template>
<script>
import CheckButton from 'components/content/checkButton/CheckButton'
import {mapGetters} from 'vuex'
export default {
    name:'CarBottomBar',
    components:{
        CheckButton
    },
    methods:{
        clickCheck(){
            if(this.isCheckedAll){
                this.cartList.forEach(item => item.checked = false)
            }else{
                this.cartList.forEach(item => {
                    item.checked = true;
                })
            }
        },
        nomull(){
            
            if(!this.isCheckedAll){
                this.$toast.show()
            }
        }
    },
    computed:{
        ...mapGetters(['cartList']),
        totalPrice(){
            return "￥" + this.$store.state.cartList.filter(item =>{
                return item.checked
            }).reduce((preValue,item) => {
                return preValue + item.price * item.count
            },0).toFixed(2)
        },
        checkLength(){
            return this.cartList.filter(item => item.checked).length
        },
        isCheckedAll(){
            if(this.cartList.length===0) return false
            return !(this.cartList.filter(item => !item.checked).length);
            /**
             * 使用find函数（方法2）
             * if(this.cartList.length===0) return false
             * return  !this.cartList.find(item => !item.checked)
             * 
             * 使用普通的for循环（方法3）
             * for(let item of this.cartList){
             *  if(!item.clecked) return false
             * }
             * return falsea
             */
        }
    }
}
</script>
<style scoped>
    .car-bottom-bar{
        height:40px;
        background:#eee;
        display:flex;
        align-items: center;
        padding-left:15px;
        justify-content:space-between;
    }
    .left{
      display:flex;  
    }
    .check-click{
        display:flex;
        margin-right:20px;
    }
    .checks{
        width:20px;
        height:20px;
        margin-right:10px;
    }
    .calculate{
        background:#f40;
        height:100%;
        display:flex;
        align-items: center;
        padding:0 10px;
        color:#fff;
    }
</style>
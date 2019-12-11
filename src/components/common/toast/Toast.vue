<template>
    <div v-show="isShow" class="toast">
        <div>{{massage}}</div>
    </div>
</template>
<script>
export default {
    name:'Toast',
    data(){
        return {
            massage:'',
            isShow:false
        }
    },
    methods:{
        show:function(massage='默认骚操作',duration=2000){
            this.isShow = true;
            this.massage = massage;
            setTimeout(()=>{
                this.isShow=false;
                this.massage=''
            },duration);
        }
    }
}
</script>
<style scoped>
    .toast{
        position:fixed;
        left:50%;
        top:50%;
        background:rgba(0, 0, 0, .7);
        color:#fff;
        padding:5px 10px;
        transform:translate(-50%,-50%);
        border-radius:5px;
        z-index:999;
    }
</style>
<template>
    <div class="green-item">
        <div class="icon-box"><slot name="img"></slot></div>
        <div><slot name="content"></slot></div>
    </div>
</template>
<script>
export default {
    name:'CreenItem',
}
</script>
<style scoped>
    .green-item{
        display:flex;
        align-items: center;
        padding:10px 5px;
        border-bottom:1px solid rgba(100, 100, 100, .1);
    }
    .icon-box{
        height:26px;
        width:40px;
        margin-right:15px;
    }
</style>
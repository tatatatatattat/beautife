<template>
    <div class="user-car">
        <div class="p">
            <div class="pL"><slot name="msg1"></slot></div>
            <div class="pM"><slot name="msg2"></slot></div>
        </div>
        <div class="pM pS"><slot name="msg3"></slot></div>
    </div>
</template>
<script>
export default {
    name:'UserCar'
}
</script>
<style scoped>
    .p{
        display:flex;
        align-items: baseline;
        justify-content: center;
    }
    .pL{
        font-size:24px;
        font-weight:700;
        color:#f40;
    }
    .pM{
        font-size:14px;
    }
    .pS{
        margin-top:5px;
    }
</style>
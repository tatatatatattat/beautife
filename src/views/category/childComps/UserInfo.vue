<template>
  <div class="user-info">
    <div class="user-icon">
      <slot name="user-img">
        <svg class="privateImage-svg left">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#avatar-default" />
        </svg>
      </slot>
    </div>
    <div class="login-info">
        <slot name="login">
            <p>登录/注册</p>
        </slot>
        <p class="phone">
            <svg data-v-735ff1be="" fill="#fff" class="icon-mobile"><use data-v-735ff1be="" xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#mobile"></use></svg>
            <slot name="phone">
                暂无绑定手机号
            </slot>
        </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "UserInfo",
};
</script>
<style scoped>
.user-info{
    background-color:var(--color-tint);
    color:#fff;
    display:flex;
    align-items: center;
    padding:10px 0;
}
.user-icon{
    margin:0 15px;
}
.privateImage-svg{
    background-color:#fff;
    width:60px;
    height:60px;
    border-radius:50%;
}
.phone{
    display:flex;
    align-items: center;
    margin-top:10px;
}
.icon-mobile{
    width:12px;
    height:18px;
    background-color:#fff;
}
</style>
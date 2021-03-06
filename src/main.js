import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import FastClick from 'fastclick'
import LazyLoad from 'vue-lazyload'
import toast from 'components/common/toast'
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue();
// 解决移动端300ms延迟的问题
// FastClick.attach(document.body);
// 如果使用这个的话在Chrome上会抛出一个警告 ：fastclick
// Unable to preventDefault inside passive event listener due to target being treated as passive.
Vue.use(toast);

// 使用懒加载插件
Vue.use(LazyLoad,{
  loading:require('./assets/img/common/placeholder.png')
})
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

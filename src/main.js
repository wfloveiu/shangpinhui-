import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import { reqCategoryList } from '@/api'
import store from '@/store'

reqCategoryList();
Vue.component(TypeNav.name, TypeNav);
//导入路由器组件
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  //注册路由器
  router,
  store
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import TypeNav from '@/components/TypeNav'
import Pagination from '@/components/pagination'
import { reqCategoryList } from '@/api'
import store from '@/store'
import '@/mock/mockServe'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import "swiper/css/swiper.css"
reqCategoryList();
Vue.use(ElementUI);
Vue.component(TypeNav.name, TypeNav);
Vue.component(Pagination.name, Pagination);
//导入路由器组件
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
  //注册路由器
  router,
  scrollBehavior() {
    return { y: 0 };
  },
  store
}).$mount('#app')

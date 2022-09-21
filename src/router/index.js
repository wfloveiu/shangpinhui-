//打造整个项目的路由器

import Vue from 'vue';
import VueRouter from 'vue-router';

//使用插件
Vue.use(VueRouter);
//引入路由组件
import Home from '../view/Home'
import Search from '../view/Search'
import Login from '../view/Login'
import Register from '../view/Register'
//创建路由器
export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: Home,
            meta: { show: true }
        },
        {
            path: "/search",
            component: Search,
            meta: { show: true },
            name: 'search'
            // name是什么呢？name 是配置路由时给 path 取的别名，方便使用。但要注意的是 “地址栏显示的路径始终是 path 的值”
        },
        {
            path: "/login",
            component: Login,
            meta: { show: false }
        },
        {
            path: "/register",
            component: Register,
            meta: { show: false }
        },
        {
            path: '/',
            redirect: '/home',
            meta: { show: false }
        }
    ]
})

//vuex里
//引入vue
import Vue from 'vue';
import Vuex from 'vuex';

//使用vuex插件
Vue.use(Vuex);

import home from './home/index';
import search from './search/index';

export default new Vuex.Store({
    modules: {
        home,
        search
    }
})
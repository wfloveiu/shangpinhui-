import { reqCategoryList } from "@/api";
//state:仓库存储数据的地方
const state = {
    //state中数据的默认初始值不能瞎写，根据接口的返回值初始化的
    categoryList: [],
};

//mutations:修改state的唯一手段
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    }
};
//actions
const actions = {
    async categoryList({ commit }) {

        let result = await reqCategoryList();
        // if (result.code === 200)
        commit("CATEGORYLIST", result.data.data.slice(0, 16));
        //有个贱逼把后端改了

        // await 也是一个修饰符，只能放在async定义的函数内。可以理解为等待。
        // await 修饰的如果是Promise对象：可以获取Promise中返回的内容（resolve或reject的参数），且取到值后语句才会往下执行；
        // 如果不是Promise对象：把这个非promise的东西当做await表达式的结果。
    }
};
//getters为计算属性,非必须
const getters = {};
//对外暴露
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
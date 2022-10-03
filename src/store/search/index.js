import { reqGetSearchInfo } from '@/api'
//state:仓库存储数据的地方
const state = {
    searchList: {},
};

//mutations:修改state的唯一手段
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList;
    }
};
//actions
const actions = {
    //当用户派发action时传过来的，至少是一个空对象，params={}含义是默认是空对象
    async getSearchList({ commit }, params = {}) {
        let result = await reqGetSearchInfo(params);
        if (result.code == 200)
            commit("GETSEARCHLIST", result.data);

    }
    // async getSearchList(params = {}) {
    //     let result = await reqGetSearchInfo(params);
    //     // console.log(result.data);
    //     // console.log((await result).data)
    //     if (result.code == 200)
    //         console.log(result.data);
    // }
};
//getters为计算属性,getters的主要作用是简化仓库中的数据
const getters = {
    //state是当前仓库中state中的数据
    goodsList(state) {
        //如果服务器没有数据，就返回空数组
        return state.searchList.goodsList || [];
    },
    trademarkList(state) {
        return state.searchList.trademarkList;
    },
    attrsList(state) {
        return state.searchList.attrsList;
    },
    total(state) {
        return state.searchList.total;
    }
};
//对外暴露
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
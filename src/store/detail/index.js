import { reqGetDetail } from "@/api";
const state = {
    //根据返回值来定义类型
    goodDetail: {},
};

const mutations = {
    GETDETAIL(state, goodDetail) {
        state.goodDetail = goodDetail;
    }
};

const actions = {
    async getdetail({ commit }, skuId) {
        let result = await reqGetDetail(skuId);
        if (result.code == 200)
            commit("GETDETAIL", result.data);
    }
};
const getters = {};

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
import { reqGetcode } from "@/api";
const state = {
    code: '',
};
const mutations = {
    GETCODE(state, code) {
        state.code = code
    }
};
const actions = {
    async getcode({ commit }, phone) {
        let result = await reqGetcode(phone);
        if (result.code == 200) {
            commit('GETCODE', result.data);
            return 'OK'
        } else {
            return Promise.reject(new Error('fail'));
        }
    }

    // async getcode(phone) {
    // console.log(phone);
    // let result = await reqGetcode(phone);
    // console.log(result);
    // if (result.code == 200) {
    //     commit('GETCODE', result.data);
    //     return 'OK'
    // } else {
    //     return Promise.reject(new Error('fail'));
    // }
    //     }
};
const getters = {};
export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}
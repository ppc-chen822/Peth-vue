import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
    user: [],
    islogin: "",
    count: "",
  },
  getters: {},
  mutations: {
    updateUser(state, data) {
      state.user = data;
    },
  },
  actions: {},
  modules: {},
});

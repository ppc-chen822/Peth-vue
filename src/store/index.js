import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loginname: sessionStorage.getItem("Username"),
    data: [],
    user: [],
    islogin: "",
    count: "",
  },
  getters: {},
  mutations: {
    updateLoginState(state, payload) {
      //将调用当前方法传过来的参数（用户名）赋值给state.loginname
      state.loginname = payload;
      sessionStorage.setItem("name", payload);
    },
    removeLoginState(state) {
      sessionStorage.removeItem("name");
    },
    updateUser(state, data) {
      state.user = data;
    },
  },
  actions: {},
  modules: {},
});

import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";

axios.defaults.baseURL = "http://127.0.0.1:3000";

Vue.use(VueAxios, axios);

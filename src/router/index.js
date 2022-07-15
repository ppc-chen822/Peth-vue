import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),
  },

  {
    path: "/",
    name: "index",
    component: Index,
    meta: {
      hideFooter: true,
      title: "首页",
    },
  },
  {
    path: "/pstore",
    name: "pstore",
    component: () => import("../views/PStore.vue"),
  },
  {
    path: "*",
    name: "NotFound",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

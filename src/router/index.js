import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/test",
    name: "test",
    component: () => import("../views/Test.vue"),
  },
  {
    path: "/pcart",
    name: "pcart",
    component: () => import("../views/PCart.vue"),
  },
  {
    path: "/pdetails",
    name: "pdetails",
    component: () => import("../views/PDetails.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
    meta: {
      title: "peth登录",
      hideFooter: true,
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),
    meta: {
      title: "peth注册",
      hideFooter: true,
    },
  },

  {
    path: "/",
    name: "index",
    component: Index,
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

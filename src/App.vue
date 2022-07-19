<template>
  <div>
    <my-header></my-header>
    <router-view></router-view>
    <my-footer v-show="!$route.meta.hideFooter"></my-footer>
  </div>
</template>
<script>
import MyHeader from "./components/MyHeader.vue";
import MyFooter from "./components/MyFooter.vue";
export default {
  components: { MyHeader, MyFooter },
};
</script>
<style lang="scss" scoped>
@import url("./assets/css/base.css");
@import url("./assets/css/reset.css");
@import url("./assets/iconfont/iconfont.css");
body,
html,
* {
  background-color: #f0f0f0;
}
</style>

<template>
  <div>
    <div class="pet_nav">
      <router-link to="/">
        <img src="../assets/img/logo.png" alt="" />
      </router-link>
      <ul>
        <li id="pet_item">
          <router-link to="/">首页</router-link>
          <i class="iconfont icon-maozhao"></i>
        </li>
        <li id="pet_item">
          <router-link to="/pstore">宠物商城</router-link>
          <i class="iconfont icon-maozhao"></i>
          <div id="pet_list" class="pet_list">
            <ul>
              <li><a href="">宠物食品</a></li>
              <li><a href="">宠物日用</a></li>
              <li><a href="">宠物玩具</a></li>
            </ul>
          </div>
        </li>
        <li id="pet_item">
          <a href="">医护服务</a>
          <i class="iconfont icon-maozhao"></i>
          <div id="pet_list" class="pet_list">
            <ul>
              <li><a href="">诊疗中心</a></li>
              <li><a href="">在线问诊</a></li>
            </ul>
          </div>
        </li>
        <li id="pet_item">
          <a href="">养宠指南</a>
          <i class="iconfont icon-maozhao"></i>
          <div id="pet_list" class="pet_list">
            <ul>
              <li><a href="">资讯中心</a></li>
              <li><a href="">宠屋课堂</a></li>
            </ul>
          </div>
        </li>
        <li id="pet_item">
          <a href=""> 品牌合作</a>
          <i class="iconfont icon-maozhao"></i>
        </li>
        <li id="pet_item">
          <a href="">联系我们</a>
          <i class="iconfont icon-maozhao"></i>
        </li>
      </ul>
      <div>
        <a href="./petcart.html">
          <div class="iconfont icon-gouwuche"></div>
        </a>
        <a href="#">
          <div class="iconfont icon-sousuo"></div>
        </a>
        <router-link to="/login">
          <div class="iconfont icon-geren"></div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

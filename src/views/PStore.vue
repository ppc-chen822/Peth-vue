<template>
  <div class="peth_store">
    <div class="center">
      <div class="store_banner">
        <div class="store_title">
          <h1>宠物商城</h1>
          <ul>
            <li><a href="">热销单品</a></li>
            <li><a href="">新品尝鲜</a></li>
            <li><a href="">猫粮</a></li>
            <li><a href="">犬粮</a></li>
            <li><a href="">冻干零食</a></li>
            <li><a href="">肉类零食</a></li>
          </ul>
        </div>
        <div class="store_banner_img">
          <img src="/img/banner01.webp" alt="" />
        </div>
      </div>
      <store-floor
        title="热销单品"
        subtitle="精选爆款，热销推荐"
        :data="data.ReXiao"
      ></store-floor>
      <store-floor title="新品尝鲜" subtitle="新品抢先购" :data="data.NewPing">
      </store-floor>
    </div>
  </div>
</template>

<script>
import StoreFloor from "@/components/StoreFloor.vue";
export default {
  components: { StoreFloor },
  data() {
    return {
      data: {
        ReXiao: [],
        NewPing: [],
      },
    };
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      const url = "http://127.0.0.1:3000/v1/products/prod";
      this.axios.get(url).then((res) => {
        this.data.ReXiao = res.data.data.slice(0, 8);
        this.data.NewPing = res.data.data.slice(8, 17);
      });
    },
  },
};
</script>
<style scoped src="../assets/css/petstore.css">
</style>

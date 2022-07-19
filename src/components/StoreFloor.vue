<template>
  <div>
    <div class="store_first_floor">
      <div class="first_floor_title">
        <h1>{{ title }}</h1>
        <p>{{ subtitle }}</p>
      </div>
      <div class="first_floor_content">
        <div class="pet_product_list">
          <div class="cat_list" v-for="(v, i) in data" :key="i">
            <a @click="goDetails(i)">
              <img :src="v.product_pic" alt="" />
            </a>
            <div>
              <a @click="goDetails(i)">
                <h4>{{ v.title }}</h4>
              </a>
              <span><span>￥</span>{{ v.price }}<span></span></span>
              <hr />
              <div>
                <p>{{ v.subtitle }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "subtitle", "data"],
  data() {
    return {
      // ldata: [],
    };
  },
  mounted() {},
  methods: {
    goDetails(i) {
      let sort = this.data[i].category;
      // this.$router.push(`/pdetails?category=${sort}&lid=${i}`);
      this.$router.push({
        path: `/pdetails`,
        query: {
          category: sort,
          lid: i + 1,
        },
      });
    },
  },
};
</script>

<style scoped src='../assets/css/petstore.css'>
</style>
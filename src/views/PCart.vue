<template>
  <div>
    <div class="center">
      <div class="cart_content">
        <div class="cart_th">
          <div>
            <input
              type="checkbox"
              :class="{ show: chst }"
              @click="checkedAll"
            />
            <span>全选</span>
          </div>
          <div>商品信息</div>
          <div>单价</div>
          <div>数量</div>
          <div>小计</div>
          <div>操作</div>
        </div>
        <div class="cart_tb" v-for="(v, i) in data" :key="i">
          <div>
            <input
              type="checkbox"
              :class="{ show: !v.ischecked }"
              @click="changeRadius(i)"
            />
          </div>
          <div>
            <img :src="v.product_pic" alt="" />
            <div>
              <div>{{ v.title }}</div>
              <div><span>升级款 2.0配方 1.8千克/袋</span></div>
            </div>
          </div>
          <div>
            <div>
              <span>￥{{ v.price.toFixed(1) }}</span>
            </div>
          </div>
          <div>
            <div>
              <span @click="v.count == 1 ? v.count : v.count--">-</span>
              <input type="text" v-model="v.count" />
              <span @click="v.count++">+</span>
            </div>
          </div>
          <div>
            <span>￥{{ (v.price * v.count).toFixed(1) }}</span>
          </div>
          <div>
            <div>移入收藏夹</div>
            <div @click="deleteCart(i)">删除</div>
          </div>
        </div>
        <div class="cart_tf">
          <div class="tf_left">
            <div>
              <input
                type="checkbox"
                name=""
                id=""
                :class="{ show: chst }"
                @click="checkedAll"
              />
              <span>全选</span>
            </div>
            <div>批量删除</div>
            <div>清空失效商品</div>
          </div>
          <div class="tf_right">
            <div>
              <div>
                <span>商品合计:</span>
                <span>￥{{ total }}</span>
              </div>
              <div>
                <span>已优惠:</span>
                <span>-￥{{ youhui }}</span>
              </div>
            </div>
            <div>
              <span>应付总额:</span>
              <span>￥{{ total }}</span>
            </div>
            <div>下单</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      uid: this.$store.state.user.uid,
      cartdata: [],
      youhui: 0.0,
      chst: 1,
    };
  },
  computed: {
    //计算商品总和
    total() {
      return this.data.reduce(
        (sum, value) => sum + value.price * value.count * value.ischecked,
        0
      );
    },
  },
  mounted() {
    this.getCartData();
  },
  methods: {
    //获取购物车列表数据
    getCartData() {
      const url = `v1/products/cartselect?user_id=${this.uid}`;
      this.axios.get(url).then((res) => {
        this.data = res.data.data;
      });
    },
    //单选点击事件
    changeRadius(i) {
      if (this.data[i].ischecked) {
        this.data[i].ischecked = 0;
      } else {
        this.data[i].ischecked = 1;
      }
      //全选中：false 为选中 true  //取反   every==1 全选 true  全不选或选一个false
      this.chst = !this.data.every((item) => item.ischecked == 1);
    },
    //全选点击事件
    checkedAll() {
      if (this.chst) {
        this.chst = 0;
        this.data.forEach((val) => {
          val.ischecked = 1;
        });
      } else {
        this.chst = 1;
        this.data.forEach((val) => {
          val.ischecked = 0;
        });
      }
    },
    //删除单个商品事件
    deleteCart(i) {
      let pid = this.data[i].pid;
      let category = this.data[i].category;
      const url = `http://127.0.0.1:3000/v1/products/cartdelete/${pid}/${category}`;
      this.axios.delete(url).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
          alert("删除成功");
        }
      });
    },
  },
};
</script>

<style scoped src='../assets/css/pcart.css'>
</style>
<template>
  <div>
    <div class="center">
      <div class="detail_bread">
        <ul>
          <li><a href="">首页</a></li>
          <li><a href="">宠物生活</a></li>
          <li><a href="">猫粮</a></li>
          <li>
            <a href="">{{ data.title }}</a>
          </li>
        </ul>
      </div>
      <div class="detail_content">
        <div class="detail_content_img">
          <div class="img_big">
            <img :src="data.product_pic" alt="" />
          </div>
          <div class="img_small">
            <img
              data-id="detail01.webp"
              src="/img/detail01.webp"
              alt=""
              class="active"
            />
            <img data-id="detail02.webp" src="/img/detail02.webp" alt="" />
            <img data-id="detail03.webp" src="/img/detail03.webp" alt="" />
            <img data-id="detail04.webp" src="/img/detail04.webp" alt="" />
            <img data-id="detail05.webp" src="/img/detail05.webp" alt="" />
          </div>
        </div>
        <div class="detail_content_info">
          <div class="content_title">
            <div class="title">
              <h1>{{ data.title }}</h1>
              <p>{{ data.subtitle }}</p>
            </div>
            <div class="evaluate">
              <div>99.8%</div>
              <div>好评率&nbsp;></div>
            </div>
          </div>
          <div class="content_info">
            <div class="price">
              <span>价格</span>
              <span><span>&yen;</span>{{ data.price }}</span>
            </div>
            <div class="email_price">
              <span>邮费</span>
              <span>满99元免邮，邮费8元</span>
            </div>
            <div class="adress">
              <span>配送</span>
              <span>至</span>
              <span>请选择地址</span>
            </div>
            <hr />
            <div class="serve">
              <span>服务</span>
              <ul>
                <li>·&nbsp;严选自营</li>
                <li>·&nbsp;7天无忧退货（拆货不可退）</li>
                <li>·&nbsp;部分规格不可用券</li>
                <li>·&nbsp;国内部分地区无法配送</li>
              </ul>
            </div>
            <div class="rule">
              <span>规则</span>
              <ul>
                <li>·&nbsp;首单全额返最高返150余额，点击查看</li>
              </ul>
            </div>
          </div>
          <div class="standard">
            <div>规格</div>
            <div>
              <img src="/img/detail06.webp" alt="" />
              <img src="/img/detail07.webp" alt="" />
              <img src="/img/detail08.webp" alt="" />
              <img src="/img/detail09.webp" alt="" />
            </div>
          </div>
          <div class="num">
            <span>数量</span>
            <div>
              <span @click="count == 1 ? count : count--">-</span>
              <input type="text" v-model="count" />
              <span @click="count++">+</span>
            </div>
          </div>
          <div class="buy">
            <a href="" class="buy_button"
              >立即购买<span>￥{{ data.price * count }}</span></a
            >
            <a class="cart_button">
              <div class="iconfont icon-gouwuche"></div>
              <span @click="goCart">加入购物车</span>
            </a>
            <div class="buy_collect">
              <div></div>
              <span>收藏</span>
            </div>
          </div>
        </div>
      </div>
      <div class="detail_like">
        <div class="like_title">你可能还喜欢</div>
        <div class="like_left" id="like_left"></div>
        <div class="like_right" id="like_right"></div>
        <div class="like_content" id="wrap">
          <div class="list1" id="list1">
            <ul>
              <li>
                <a href="">
                  <img src="/img/like01.webp" alt="" />
                </a>
                <a href="">【定金购】全价猫粮 1.8千克*5袋</a>
                <div>
                  <span>￥88</span>
                  <div class="iconfont icon-gouwuche"></div>
                </div>
              </li>
              <li>
                <a href="">
                  <img src="/img/like02.webp" alt="" />
                </a>
                <a href="">可爱健康不要胖，全价成猫粮（阶段）</a>
                <div>
                  <span>￥88</span>
                  <div class="iconfont icon-gouwuche"></div>
                </div>
              </li>
              <li>
                <a href="">
                  <img src="/img/like03.webp" alt="" />
                </a>
                <a href="">每一口都有八种肉，全价猫粮 10千克</a>
                <div>
                  <span>￥88</span>
                  <div class="iconfont icon-gouwuche"></div>
                </div>
              </li>
              <li>
                <a href="">
                  <img src="/img/like04.webp" alt="" />
                </a>
                <a href="">0肉粉高鲜肉，全价冻干双拼猫粮</a>
                <div>
                  <span>￥88</span>
                  <div class="iconfont icon-gouwuche"></div>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">
                  <img src="/img/like05.webp" alt="" />
                </a>
                <a href="">【定金购】全价猫粮 1.8千克*5袋</a>
                <div>
                  <span>￥88</span>
                  <div class="iconfont icon-gouwuche"></div>
                </div>
              </li>
              <li>
                <a href="">
                  <img src="/img/like06.webp" alt="" />
                </a>
                <a href="">可爱健康不要胖，全价成猫粮（阶段）</a>
                <div>
                  <span>￥88</span>
                  <div class="iconfont icon-gouwuche"></div>
                </div>
              </li>
              <li>
                <a href="">
                  <img src="/img/like07.webp" alt="" />
                </a>
                <a href="">每一口都有八种肉，全价猫粮 10千克</a>
                <div>
                  <span>￥88</span>
                  <div class="iconfont icon-gouwuche"></div>
                </div>
              </li>
              <li>
                <a href="">
                  <img src="/img/like08.webp" alt="" />
                </a>
                <a href="">0肉粉高鲜肉，全价冻干双拼猫粮</a>
                <div>
                  <span>￥88</span>
                  <div class="iconfont icon-gouwuche"></div>
                </div>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">
                  <img src="/img/product01.jpg" alt="" />
                </a>
                <a href="">【定金购】全价猫粮 1.8千克*5袋</a>
                <div>
                  <span>￥88</span>
                  <div class="iconfont icon-gouwuche"></div>
                </div>
              </li>
              <li>
                <a href="">
                  <img src="/img/product02.jpg" alt="" />
                </a>
                <a href="">可爱健康不要胖，全价成猫粮（阶段）</a>
                <div>
                  <span>￥88</span>
                  <div class="iconfont icon-gouwuche"></div>
                </div>
              </li>
              <li>
                <a href="">
                  <img src="/img/product03.jpg" alt="" />
                </a>
                <a href="">每一口都有八种肉，全价猫粮 10千克</a>
                <div>
                  <span>￥88</span>
                  <div class="iconfont icon-gouwuche"></div>
                </div>
              </li>
              <li>
                <a href="">
                  <img src="/img/product04.jpg" alt="" />
                </a>
                <a href="">0肉粉高鲜肉，全价冻干双拼猫粮</a>
                <div>
                  <span>￥88</span>
                  <div class="iconfont icon-gouwuche"></div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="detail_assess">
        <div class="assess_list">
          <div class="assess_title">
            <ul>
              <li class="active" data-id="tab1">详情</li>
              <li data-id="tab2">评价</li>
              <li data-id="tab3">甄选评测</li>
              <li data-id="tab4">质检报告</li>
              <li data-id="tab5">常见问题</li>
            </ul>
          </div>
          <div class="d_con">
            <div id="tab1" class="detail_a show">面板一</div>
            <div id="tab2" class="detail_b">面板二</div>
            <div id="tab3" class="detail_c">面板三</div>
            <div id="tab4" class="detail_d">面板四</div>
            <div id="tab5" class="detail_e">面板五</div>
          </div>
        </div>
        <div class="hot_24">
          <div class="hot_title">24小时热榜</div>
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
      count: "1",
      category: this.$route.query.category,
      lid: this.$route.query.lid,
      uid: this.$store.state.user.uid,
    };
  },
  mounted() {
    this.getData();
  },
  // created() {},
  methods: {
    getData() {
      const url = `v1/products/prode?category=${this.category}&lid=${this.lid}`;
      this.axios.get(url).then((res) => {
        console.log(res);
        this.data = res.data.data[0];
      });
    },
    goCart() {
      const url = "http://127.0.0.1:3000/v1/products/cartadd";
      let param = `user_id=${this.uid}&product_id=${this.lid}&category=${this.category}&count=${this.count}`;
      this.axios.post(url, param).then((res) => {
        if ((res.data.code = 200)) {
          this.$router.push("/pcart");
        }
      });
    },
  },
};
</script>

<style scoped src='../assets/css/pdetails.css'>
</style>
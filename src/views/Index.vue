<template>
  <div class="index">
    <div class="pet_center">
      <div class="pet_content">
        <div class="pet_title" id="pet_title" ref="font">
          您或许会有很多个它,<br />但它只有一个您
        </div>
        <div class="pet_motion">
          <div class="line" :style="lineWidthStyle" id="line" ref="line"></div>
          <div class="pet_icon" ref="gicon">
            <div
              id="pet_icon1"
              class="iconfont icon-a-maozhao1"
              @click="lineIncrease"
            ></div>
            <div
              id="pet_icon2"
              class="iconfont icon-a-maozhao1"
              @click="lineIncrease"
            ></div>
            <div
              id="pet_icon3"
              class="iconfont icon-a-maozhao1"
              @click="lineIncrease"
            ></div>
            <div
              id="pet_icon4"
              class="iconfont icon-a-maozhao1"
              @click="lineIncrease"
            ></div>
          </div>
          <ul class="pet_info">
            <li>因为严谨，所以安心</li>
            <li>健康天然，触手可及</li>
            <li>只因有它，岁月静好</li>
            <li>正品好货，精致服务</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="pet_second">
      <div class="pet_content">
        <div class="pet_product_title">产品展示</div>
        <div class="pet_product">
          <div class="cat_product">
            <div class="cat_foot">猫粮</div>
            <div class="pet_product_list">
              <div class="cat_list" v-for="(v, i) in Cdata" :key="i">
                <img :src="v.pic" alt="" />
                <div>
                  <h4>
                    <a href="">{{ v.title }}</a>
                  </h4>
                  <span><span>￥</span>{{ v.price }}<span></span></span>
                  <hr />
                  <div>
                    <p>{{ v.details }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pet_third">
      <div class="pet_content">
        <div class="pet_product">
          <div class="cat_product">
            <div class="cat_foot">狗粮</div>
            <div class="pet_product_list">
              <div class="cat_list" v-for="(v, i) in Ddata" :key="i">
                <img :src="v.pic" alt="" />
                <div>
                  <h4>
                    <a href="">{{ v.title }}</a>
                  </h4>
                  <span><span>￥</span>{{ v.price }}<span></span></span>
                  <hr />
                  <div>
                    <p>{{ v.details }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pet_fourth">
      <div class="pet_content">
        <div class="pet_information">
          <div class="pet_info_title">
            <div class="info_headline">
              <span
                v-for="(item, index) in tabList"
                :key="index"
                :class="{ active: num == index }"
                @click="tabCur(index)"
                >{{ item.title }}</span
              >
            </div>
            <div class="info_icon">
              <a href="#">查看更多</a>
              <div class="iconfont icon-a-maozhao1"></div>
            </div>
          </div>
          <div
            v-for="(item, idx) in contentList"
            :class="{ show: num == idx }"
            :key="idx"
          >
            <div class="pet_info_content">
              <div
                class="info_content_img"
                id="info_content_img"
                v-for="(item, idn) in item"
                :key="idn"
                :class="{ show: liclass == idn }"
              >
                <a href="">
                  <img :src="item.art_pic" alt="" />
                </a>
              </div>
              <div class="info_content_list">
                <ul>
                  <li
                    @mouseover="ImgChange(idn)"
                    v-for="(item, idn) in item"
                    :key="idn"
                    :class="{ active: liclass == idn }"
                  >
                    <div>
                      <div class="iconfont icon-a-maozhao1"></div>
                      <a href="">{{ item.title }}</a>
                    </div>
                    <div>{{ item.addtime }}</div>
                  </li>
                </ul>
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
  data() {
    return {
      liclass: 0,
      num: 0, //默认索引值为0 '最近更新,为默认索引值'
      tabList: [
        {
          id: 1,
          title: "热门文章",
        },
        {
          id: 2,
          title: "最近更新",
        },
      ],
      contentList: [],
      Cdata: [],
      Ddata: [],
      lineWidthStyle: {
        width: "",
        transition: "all 2s",
      },
      newWidth: null,
    };
  },
  mounted() {
    this.getIndexProductData();
    this.getArticleData();
  },
  computed: {},
  methods: {
    getIndexProductData() {
      const url = "http://127.0.0.1:3000/v1/products/inpd";
      this.axios.get(url).then((res) => {
        this.Cdata = res.data.data.slice(0, 4);
        this.Ddata = res.data.data.slice(4, 8);
      });
    },
    getArticleData() {
      const url = "http://127.0.0.1:3000/v1/articles/art";
      this.axios.get(url).then((res) => {
        console.log(res);
        const newContentList = [];
        newContentList[0] = res.data.data.slice(0, 9).filter((v) => {
          v.addtime = v.addtime.substring(0, 10);
          return v.sort !== 2;
        });
        newContentList[1] = res.data.data.slice(11, 20).filter((v) => {
          v.addtime = v.addtime.substring(0, 10);
          return v.sort !== 1;
        });
        this.contentList = newContentList;
      });
    },
    tabCur(idx) {
      this.num = idx;
    },
    lineIncrease(event) {
      this.lineWidthStyle.width = event.clientX + "px";
    },
    ImgChange(idn) {
      this.liclass = idn;
    },
  },
};
</script>
<style scoped src="../assets/css/index.css"></style>
<style scoped></style>

<template>
  <div>
    <div
      :class="{ cur: rSelect.indexOf(index) != -1 }"
      v-for="(value, index) in infoArr"
      :key="index"
      @click="tapInfo(index)"
    >
      {{ value.name }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rSelect: [],
      infoArr: [
        { name: "乘车体验" },
        { name: "线路优化" },
        { name: "提前发车" },
        { name: "没停靠站" },
        { name: "物品遗失" },
        { name: "车票问题" },
        { name: "产品功能" },
        { name: "其他" },
      ],
    };
  },
  methods: {
    tapInfo(e) {
      if (this.rSelect.indexOf(e) == -1) {
        console.log(e); //打印下标
        this.rSelect.push(e); //选中添加到数组里
        console.log(this.rSelect);
      } else {
        this.rSelect.splice(this.rSelect.indexOf(e), 1); //取消
        console.log(this.rSelect);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.cur {
  color: white;
  border: 1px solid #e5e5e5;
  background-color: #ff5d00;
}
</style>
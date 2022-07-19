<template>
  <div>
    <div class="center">
      <div class="cart_content">
        <div class="cart_th">
          <div>
            <input type="checkbox" />
            <span>全选</span>
          </div>
          <div>商品信息</div>
          <div>单价</div>
          <div>数量</div>
          <div>小计</div>
          <div>操作</div>
        </div>
        <div class="cart_tb">
          <div>
            <input type="checkbox" />
          </div>
          <div>
            <img src="/img/like01.webp" alt="" />
            <div>
              <div>0肉粉高鲜肉，全价冻干双拼猫粮</div>
              <div><span>升级款 2.0配方 1.8千克/袋</span></div>
            </div>
          </div>
          <div>
            <div><span>￥98.00</span></div>
          </div>
          <div>
            <div>
              <span>-</span>
              <input type="text" v-model="count" />
              <span>+</span>
            </div>
          </div>
          <div>
            <span>￥98</span>
          </div>
          <div>
            <div>移入收藏夹</div>
            <div>删除</div>
          </div>
        </div>
        <div class="cart_tf">
          <div class="tf_left">
            <div>
              <input type="checkbox" name="" id="" />
              <span>全选</span>
            </div>
            <div>批量删除</div>
            <div>清空失效商品</div>
          </div>
          <div class="tf_right">
            <div>
              <div>
                <span>商品合计:</span>
                <span>￥0.00</span>
              </div>
              <div>
                <span>已优惠:</span>
                <span>-￥0.00</span>
              </div>
            </div>
            <div>
              <span>应付总额:</span>
              <span>￥0.00</span>
            </div>
            <div>下单</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped src='../assets/css/pcart.css'>
</style>
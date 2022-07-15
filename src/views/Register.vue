<template>
  <div>
    <div class="center">
      <div class="login_content">
        <h1>欢迎来到 Peth 商城</h1>
        <div class="inp_box">
          <div>
            <input type="text" name="" id="uname" placeholder="请输入用户名" />
            <span
              class="iconfont icon-icon--yes uname_y"
              style="color: green"
            ></span>
            <span
              class="iconfont icon-icon--shanchu uname_s"
              style="color: red"
            ></span>
          </div>
          <div id="duname">请输入4-30位中文、英文、符号、数字</div>
        </div>
        <div class="inp_box">
          <div>
            <input type="text" placeholder="请输入手机号" id="phone" />
            <span
              class="iconfont icon-icon--yes phone_y"
              style="color: green"
            ></span>
            <span
              class="iconfont icon-icon--shanchu phone_s"
              style="color: red"
            ></span>
          </div>
          <div id="dphone">请输入正确手机号</div>
        </div>
        <div class="inp_box">
          <div>
            <input
              type="password"
              placeholder="请输入密码"
              id="upwd"
              autocomplete
            />
            <span
              class="iconfont icon-icon--yes pwd_y"
              style="color: green"
            ></span>
            <span
              class="iconfont icon-icon--shanchu pwd_s"
              style="color: red"
            ></span>
          </div>
          <div id="dpwd">请输入6-16位字母和数字组合</div>
        </div>
        <button id="register" disabled>注册</button>
        <p>
          点击&nbsp;注册或登录&nbsp;代表您同意&nbsp;<a href="">用户协议</a
          >&nbsp;和&nbsp;<a href="">隐私政策</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped src="../assets/css/register.css">
</style>

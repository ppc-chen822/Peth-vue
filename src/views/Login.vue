<template>
  <div>
    <div class="center">
      <div class="login_content">
        <h1>欢迎来到 Peth 商城</h1>
        <div class="inp_box">
          <div>
            <input
              type="text"
              placeholder="请输入手机号"
              id="phone"
              v-model="phone"
              @focus="pFocus"
              @blur="pBlur"
            />
            <span
              class="iconfont icon-icon--yes phone_y"
              style="color: green"
              v-show="phone_status == 3"
            ></span>
            <span
              class="iconfont icon-icon--shanchu phone_s"
              style="color: red"
              v-show="phone_status == 4"
            ></span>
          </div>
          <div v-show="phone_status == 1" class="texthint">
            请输入正确手机号
          </div>
          <div v-show="phone_status == 2" class="texthint">手机号不能为空</div>
          <div v-show="phone_status == 5" class="texthint">手机号未注册</div>
        </div>
        <div class="inp_box">
          <div>
            <input
              type="password"
              placeholder="请输入密码"
              id="upwd"
              v-model="upwd"
              @focus="upFocus"
              @blur="upBlur"
            />
            <span
              class="iconfont icon-icon--yes pwd_y"
              style="color: green"
              v-show="upwd_status == 3"
            ></span>
            <span
              class="iconfont icon-icon--shanchu pwd_s"
              style="color: red"
              v-show="upwd_status == 4"
            ></span>
          </div>
          <div class="texthint" v-show="upwd_status == 1">
            请输入6-16位字母和数字组合
          </div>
          <div class="texthint" v-show="upwd_status == 2">密码不能为空</div>
        </div>
        <button id="login" @click="goLogin">登录</button>
        <p class="goRegister">
          <router-link to="/register">注册账号</router-link>
        </p>
        <p>
          点击&nbsp;注册或登录&nbsp;代表您同意&nbsp;<a href="">用户协议</a
          >&nbsp;和&nbsp;<a href="">隐私政策</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      upwd: "",
      upwd_status: "",
      phone: "",
      phone_status: "",
    };
  },
  mounted() {},
  methods: {
    pFocus() {
      this.phone_status = 1;
    },
    pBlur() {
      const mPattern = /^1[345789]\d{9}$/;
      const url = "http://127.0.0.1:3000/v1/users/isreg";
      let param = `phone=${this.phone}`;
      this.axios.post(url, param).then((res) => {
        if (res.data.code != 200) {
          this.phone_status = 5;
        }
      });
      if (this.phone == "") {
        this.phone_status = 2;
      } else if (mPattern.test(this.phone)) {
        this.phone_status = 3;
      } else {
        this.phone_status = 4;
      }
    },
    upFocus() {
      this.upwd_status = 1;
    },
    upBlur() {
      const uPattern = /^[a-zA-Z0-9@.-_\u4e00-\u9fa5]{4,30}$/;
      if (this.upwd == "") {
        this.upwd_status = 2;
      } else if (uPattern.test(this.upwd)) {
        this.upwd_status = 3;
      } else {
        this.upwd_status = 4;
      }
    },
    goLogin() {
      const url = "http://127.0.0.1:3000/v1/users/login";
      let param = `phone=${this.phone}&upwd=${this.upwd}`;
      this.axios.post(url, param).then((res) => {
        if (res.data.code == 200) {
          console.log(res.data.data[0]);
          this.$store.commit("updateUser", res.data.data[0]);
          // console.log(object);
          // this.$router.push("/");
        } else {
          alert("登录失败");
        }
      });
    },
  },
};
</script>

<style scoped src="../assets/css/login.css">
</style>

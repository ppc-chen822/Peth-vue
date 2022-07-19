<template>
  <div>
    <div class="center">
      <div class="login_content">
        <h1>欢迎来到 Peth 商城</h1>
        <div class="inp_box">
          <div>
            <input
              type="text"
              name=""
              id="uname"
              v-model="uname"
              @focus="unameFocus"
              @blur="unameBlur"
              placeholder="请输入用户名"
            />
            <span
              class="iconfont icon-icon--yes uname_y"
              style="color: green"
              v-show="uname_status == 3"
            ></span>
            <span
              class="iconfont icon-icon--shanchu uname_s"
              style="color: red"
              v-show="uname_status == 4"
            ></span>
          </div>
          <div class="texthint" v-show="uname_status == 1">
            请输入4-30位中文、英文、符号、数字
          </div>
          <div class="texthint" v-show="uname_status == 2">用户名不能为空</div>
        </div>
        <div class="inp_box">
          <div>
            <input
              type="text"
              placeholder="请输入手机号"
              v-model="phone"
              id="phone"
              @focus="phoneFocus"
              @blur="phoneBlur"
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
          <div class="texthint" v-show="phone_status == 1">
            请输入正确手机号
          </div>
          <div class="texthint" v-show="phone_status == 2">手机号不能为空</div>
          <div class="texthint" v-show="phone_status == 5">该手机号已注册</div>
        </div>
        <div class="inp_box">
          <div>
            <input
              type="password"
              placeholder="请输入密码"
              id="upwd"
              v-model="upwd"
              @focus="upwdFocus"
              @blur="upwdBlur"
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
        <button id="register" @click="goRegister">注册</button>
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
      uname: "",
      uname_status: "",
      phone_status: "",
      upwd_status: "",
      upwd: "",
      phone: "",
    };
  },
  mounted() {},
  methods: {
    unameFocus() {
      this.uname_status = 1;
    },
    unameBlur() {
      const uPattern = /^[a-zA-Z0-9@.-_\u4e00-\u9fa5]{4,30}$/;
      if (this.uname == "") {
        this.uname_status = 2;
      } else if (uPattern.test(this.uname)) {
        this.uname_status = 3;
      } else {
        this.uname_status = 4;
      }
    },
    phoneFocus() {
      this.phone_status = 1;
    },
    phoneBlur() {
      const mPattern = /^1[345789]\d{9}$/;
      const url = "http://127.0.0.1:3000/v1/users/isreg";
      let param = `phone=${this.phone}`;
      this.axios.post(url, param).then((res) => {
        console.log(res);
        if (res.data.code == 200) {
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
    upwdFocus() {
      this.upwd_status = 1;
    },
    upwdBlur() {
      const uPattern = /^[a-zA-Z0-9@.-_\u4e00-\u9fa5]{4,30}$/;
      if (this.upwd == "") {
        this.upwd_status = 2;
      } else if (uPattern.test(this.upwd)) {
        this.upwd_status = 3;
      } else {
        this.upwd_status = 4;
      }
    },
    goRegister() {
      const url = "http://127.0.0.1:3000/v1/users/reg";
      let param = `uname=${this.uname}&phone=${this.phone}&upwd=${this.upwd}`;
      this.axios.post(url, param).then((res) => {
        console.log(res.data);
        if (res.data.code == 200) {
          this.$router.push("/login");
        } else {
          alert(res.data.msg);
        }
      });
    },
  },
};
</script>

<style scoped src="../assets/css/register.css">
</style>

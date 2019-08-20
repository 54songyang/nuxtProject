<template>
  <div class="logIn-body" :style="{backgroundImage:'url('+loginBg+')'}">
    <div class="log-box">
      <Form ref="formInline" :model="formInline" :rules="ruleInline" show-message>
        <FormItem prop="user">
          <Input type="text" v-model="formInline.user" placeholder="请输入账号">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formInline.password" placeholder="请输入密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem class="check-log">
          <CheckboxGroup v-model="bc">
            <Checkbox label="保存账号密码"></Checkbox>
          </CheckboxGroup>
        </FormItem>
        <FormItem>
          <Button type="success" :disabled="disabled" @click="handleSubmit('formInline')" long>登录</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
import pcBg from '@/assets/images/bg.jpeg'
import phoneBg from '@/assets/images/phoneBg.jpeg'
export default {
  data() {
    return {
      disabled: false,
      bc: [],
      loginBg: '',
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "请输入账号",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          {
            type: "string",
            min: 0,
            message: "密码长度大于6位",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    async handleSubmit(name) {
      this.$refs[name].validate(valid => {
        this.disabled = true;
        if (valid) {
          if (this.bc.length > 0) {
            this.$utils.setCookie("user", this.formInline.user, 7);
            this.$utils.setCookie("pwd", this.formInline.password, 7);
            this.$utils.setCookie("check", this.bc, 7);
          } else {
            this.$utils.delCookie("user");
            this.$utils.delCookie("pwd");
            this.$utils.setCookie("check");
          }
          this.$store.dispatch("logIn/getInfo", {
            user: this.formInline.user,
            pwd: this.formInline.password
          });
        }
      });
    }
  },
  beforeMount() {
    console.log(this.$utils.IsPC());
    this.$utils.IsPC()?this.loginBg = pcBg:this.loginBg=phoneBg;
    if (
      this.$utils.getCookie("user") &&
      this.$utils.getCookie("pwd") &&
      this.$utils.getCookie("check")
    ) {
      this.formInline.user = this.$utils.getCookie("user");
      this.formInline.password = this.$utils.getCookie("pwd");
      this.bc.push(this.$utils.getCookie("check"));
    }
  }
};
</script>

<style lang="scss" scoped>
.logIn-body {
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  width: 100vw;
  height: 100vh;
  .log-box {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    width: 300px;
    height: 210px;
    border-radius: 10px;
    .ivu-form {
      width: 208px;
      margin-top: 36px;
    }
    .check-log {
      display: flex;
      justify-content: flex-end;
      margin-bottom: 0px;
      margin-top: -23px;
    }
  }
}
</style>
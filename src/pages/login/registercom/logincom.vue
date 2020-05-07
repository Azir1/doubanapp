// 登陆注册的组件
<template>
  <div class="content">
    <div class="header">
      <h4 @click="fn()">取消</h4>
      <h2>{{title}}豆瓣</h2>
    </div>
    <van-form style="margin: .16rem;">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[
          { required: true, message: '请填写用户名' },
          
          { uPattern:uPattern, message: '用户名格式不正确' }
          
          ]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ pPattern:pPattern, message: '密码强度不够，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit" @click="submit()">{{btn}}</van-button>
      </div>
    </van-form>
    <div class="foot">
      <span>{{foot}}豆瓣账号</span>
      <span>下载豆瓣app</span>
    </div>
  </div>
</template>

<script>
import { Button ,Form,Field,Toast} from "vant";

export default {
  data() {
    return {
      username: "",
      password: "",
      uPattern: /^[a-zA-Z0-9_-]{4,16}$/,
      pPattern: /^.(?=.{6,})(?=.\d)(?=.[A-Z])(?=.[a-z])(?=.*[!@#%^&*? ]).*/
    };
  },
  components: {
    [Button.name]: Button,
    [Form.name]: Form,
    [Field.name]: Field
  },
  props: ["title", "btn", "msg", "foot"],
  methods: {
    fn() {
      this.$router.push("/home");
    },
    submit() {
      if (this.username == "" || this.password == "") {
        return;
      }
      let UrlSearch = new URLSearchParams();
      UrlSearch.append("username", this.username);
      UrlSearch.append("password", this.password);
      console.log(this.username);
      this.axios({
        method: "post",
        url: "/api/user/login",
        data: UrlSearch
      }).then(ok => {
        console.log(ok.data);
        if (ok.data.state === 2) {
          Toast.fail("用户名或密码错误");
        } else if (ok.data.state === 1) {
          Toast.success("登录成功");
          localStorage.setItem('usermsg',ok.data.token)
          setTimeout(() => {
            this.$router.push("/home");
          }, 500);
        }
      });
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 0.5rem;
  border-bottom: 1px solid #eee;
}
.header h4 {
  position: absolute;
  left: 0.1rem;
  color: green;
}
.ipt {
  margin-top: 0.3rem;
  display: flex;
  flex-direction: column;
  padding: 0 0.6rem;
  justify-content: center;
}
.ipt input {
  margin-top: 0.1rem;
  height: 0.3rem;
}
.ipt input:nth-of-type(3) {
  color: #fff;
  background: #17aa52;
  border-radius: 0.06rem;
  font-size: 0.14rem;
}
.ipt p {
  text-align: center;
  padding-top: 0.2rem;
  color: #666;
}
.foot {
  display: flex;
  justify-content: space-around;
  padding: 0 0.6rem;
  margin-top: 0.3rem;
  color: #17aa52;
}
</style>
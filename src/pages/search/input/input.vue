<template>
  <div>
    <div class="top">
      <h4 @click='fn()'>关闭</h4>
      <input type="text" v-focus/>
    </div>
    <div class="bottom">
        <div v-for="(v,i) in list" :key="i">
          <h3>{{v.title}}</h3>
          <p>{{v.con}}</p>
        </div>
      
    </div>
    <div class="footer">
      <div>注册账号</div>
      <div>登录豆瓣</div>
      <div>使用桌面版</div>
      <div>下载豆瓣App</div>
    </div>
  </div>
</template>

<script>
export default {
  directives:{ //自定义指令，进入页面获取焦点
    focus:{//指定指令的名字
      inserted(el){ //自定义指令构造函数
        el.focus()
      }
    }
  },
  methods: {
    fn(){
      this.$router.push('/home')
    }
  },
  props:['list'],
  
}
</script>

<style scoped>
  .top{
    display: flex;
    align-items: center;
    justify-content: center;
    height: .5rem;
    border-bottom: 1px solid #eee;
  }
  h4{
    color: green;
    position: absolute;
    left: 0.3rem;
  }
  input{
    background: #f3f3f3;
    border: 1px solid #eee;
    height: .25rem;
    width: 2rem;
  }
  .bottom{
    margin-top: .3rem;
    display: flex;
    padding: 0 .3rem;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .bottom div{
    width: .8rem;
    padding: .2rem .1rem;
    text-align: center;
  }
  h3{
    color: red;
    
  }
  p{
    color: #777;
  }
  .footer{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .footer div{
    width: 50%;
    text-align: center;
    color: green;
    margin-top: .2rem;
  }
</style>
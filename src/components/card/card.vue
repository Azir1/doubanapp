<template>
  <div>
    <div class="card" v-for="(v,i) in card" :key="i" @click='pfn(v._id)'>
      <div class="title">
        <h3>{{v.sort}}</h3>
        <div>更多</div>
      </div>
      <ul class="list">
        <li v-for="(v,i) in v.content" :key="i" @click='fn(v.id)'>
          <img :src="v.img"/>
          <van-rate v-model="score" readonly size='.17rem' allow-half/>
          <h4>{{v.title | titleStr}}</h4>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Rate } from 'vant';
export default {
  components:{
    [Rate.name]:Rate
  },
  props: ["card"],
  data() {
    return {
      score:3.5
    };
  },
  filters:{ //过滤器，处理标题过长
    titleStr(val){
      return val.substr(0,6)
    },
    sub(val){
      return val*1/2
    }
  },
  computed: { //计算属性，截取要展示的数据
    newArr(){
      return this.card[0].content.slice(0,2)
    }
 
  },
  methods: {
    pfn(index){
      this.$store.commit('pid',index)
      console.log(index)
    },
    fn(i){
      console.log(i)
      this.$store.commit('filmId',i)
      this.$router.push('/detail')
    }
  },
};
</script>

<style scoped>
.card {
  padding: 0.2rem;
}
.title {
  height: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.title > div {
  color: green;
}
.list {
  display: flex;
  justify-content: space-between;
  flex-wrap: no-wrap;
  overflow-x: auto;
}
.list li {
  margin-right: .1rem;
}
img {
  width: 1.05rem;
  height: 1.3rem;
}
h4 {
  text-align: center;
  margin-top: 0.1rem;
  color: #666;
}
li {
  margin-top: 0.1rem;
}
</style>
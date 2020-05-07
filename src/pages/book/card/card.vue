<template>
  <div class="card">
    <van-panel title="最受关注图书" desc="" status="更多">
      <div>
      <ul class="list">
        <li >
          <img src="img/movies1.jpg"/>
          <van-rate v-model="score" readonly size='.17rem' allow-half/>
          <h4>神雕侠侣</h4>
        </li>
        <li >
          <img src="img/movies1.jpg"/>
          <van-rate v-model="score" readonly size='.17rem' allow-half/>
          <h4>神雕侠侣</h4>
        </li>
        <li >
          <img src="img/movies1.jpg"/>
          <van-rate v-model="score" readonly size='.17rem' allow-half/>
          <h4>神雕侠侣</h4>
        </li>
        <li >
          <img src="img/movies1.jpg"/>
          <van-rate v-model="score" readonly size='.17rem' allow-half/>
          <h4>神雕侠侣</h4>
        </li>
      </ul>
      </div>
    </van-panel>
  </div>
</template>

<script>
import { Panel,Rate } from "vant";
export default {
  components:{
  [Panel.name]: Panel,
  [Rate.name]: Rate,

  }
};
</script>

<style scoped>

.van-cell__title{
  font-weight: bolder;
  font-size: .16rem;
}
.van-panel__header-value{
  color: #adff2f;
}
ul{
  display: flex;
  overflow-x: auto;
}
li{
  display: flex;
  flex-flow: column;
  align-items: center;
}
img{
  width: 1rem;
  margin-bottom: .1rem;
  margin:0 .12rem;
}
</style>
<template>
  <div>
    <div class="list" v-for="(v,i) in list" :key="i">
      <div class="left">
        <h3>{{v.title}}</h3>
        <p>{{v.content}}</p>
        <h4>{{v.label}}</h4>
      </div>
      <div class="right">
        <img src="img/logo.jpg" alt />
        <h5>{{v.from}}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["list"]
};
</script>

<style scoped>
.list{
  padding: .1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: .01rem solid #eee;
}
h3{
  margin-bottom: .15rem;
}
p{
  color: #666;
}
img{
  width: 1.15rem;
  height: .8rem;
}
h5{
  margin-top: .08rem;
  font-size: .1rem;
  color: #666;
}
h4{
  color: #666;
  margin-top: .1rem;
  font-size: .1rem;
}
</style>
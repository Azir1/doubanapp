<template>
  <div class="label">
    <div v-for="(v,i) in labels" :key="i">
      <router-link :to="v.linkto">{{v.title}}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ["labels"]
};
</script>

<style scoped>
.label {
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin:.7rem auto;
  margin-bottom: .1rem;
}
.label>div{
  background: #f6f6f6;
  width: 49%;
  margin-bottom: .05rem;
  height: .4rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color:#666;
}
</style>
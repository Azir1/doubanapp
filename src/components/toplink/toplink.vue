<template>
  <div class="toplink">
    <h1>
      <router-link to="/home">豆瓣</router-link>
    </h1>
    <ul>
      <li>
        <router-link to="/film">电影</router-link>
      </li>
      <li>
        <router-link to="/book">图书</router-link>
      </li>
      <li>
        <router-link to="/radio">广播</router-link>
      </li>
      <li>
        <router-link to="/group">小组</router-link>
      </li>
      <li>
        <router-link to="/search">
          <img src="img/search.png" alt />
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.toplink {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 0.6rem;
  width: 100%;
  background: greenyellow;
  position: absolute;
  top: 0;
  border-bottom: .01rem solid #eee;
}
h1 {
  margin-left: 0.1rem;
  color: green;
}
ul {
  display: flex;
}
ul li {
  font-size: 0.16rem;
  margin-left: 0.1rem;
  color: #666;
}
img {
  width: 0.25rem;
  margin-right: 0.1rem;
}
</style>
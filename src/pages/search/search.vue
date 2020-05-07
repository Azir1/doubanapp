<template>
  <div>
    <InputSearch :list='list'></InputSearch>
  </div>
</template>

<script>
import InputSearch from "./input/input";
export default {
  components:{
    InputSearch
  },
  data() {
    return {
      list: [
        { title: "电影", con: "影院热映" },
        { title: "电视", con: "影院热映" },
        { title: "图书", con: "影院热映" },
        { title: "同城", con: "影院热映" },
        { title: "小组", con: "影院热映" },
        { title: "音乐", con: "影院热映" },
        { title: "阅读", con: "影院热映" },
        { title: "游戏", con: "影院热映" },
        { title: "应用", con: "影院热映" },
        { title: "东西", con: "影院热映" },
        { title: "FM", con: "影院热映" },
        { title: "市集", con: "影院热映" }
      ]
    };
  }
};
</script>

<style scoped>
</style>
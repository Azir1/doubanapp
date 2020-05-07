<template>
  <div>
    <TopLink></TopLink>
    <div></div>
    <Card :card="card"></Card>
  </div>
</template>

<script>
import TopLink from "@/components/toplink/toplink";
import Card from "@/components/card/card";

export default {
  
  mounted() {
    this.axios({
      url:'/api/film/filmlist',
      method:'get',
    }).then(ok=>{
      this.card = ok.data.data
      console.log(ok.data.data)
    })
  },
  components: {
    TopLink,
    Card
  },
  data() {
    return {
      card: []
    };
  }
};
</script>

<style scoped>
div {
  height: 0.6rem;
}
</style>
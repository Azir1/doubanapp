<template>
  <div>
    <TopLink></TopLink>
    <FilmDetail></FilmDetail>
  </div>
</template>

<script>
// 电影详情
import TopLink from '@/components/toplink/toplink'
import FilmDetail from './filmdetail/filmdetail'
export default {
  components:{
    TopLink,
    FilmDetail
  },

}
</script>

<style scoped>

</style>
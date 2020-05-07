<template>
  <div>
    <TopLink></TopLink>
    <Label :labels='labels'></Label>
    <List :list='list'></List>
  </div>
</template>

<script>
import TopLink from '@/components/toplink/toplink'
import Label from './label/label'
import List from './list/list'
export default {
  mounted() {
    this.axios({
      url:'/mock/homelist',
      method:'get'
    }).then(ok=>{
      console.log(ok.data.homelist)
      this.list = ok.data.homelist
    })
  },
  components:{
    TopLink,
    Label,
    List
  },
  data() {
    return {
      labels:[
        {title:'影院热映',linkto:'/film'},
        {title:'欧美新碟榜',linkto:'/film'},
        {title:'注册账户',linkto:'/register'},
        {title:'登陆豆瓣',linkto:'/login'},
      ],
      list:[
        
      ]
    }
  },
}
</script>

<style scoped>

</style>
import Vue from 'vue'
import VueRouter from 'vue-router'
// import axios from 'axios'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    // 按需加载
    { name: 'book', path: '/book', component: () => import('@/pages/book/book') },
    { name: 'detail', path: '/detail', component: () => import('@/pages/detail/detail') },
    {
      name: 'film', path: '/film', component: () => import('@/pages/film/film'),
      beforeEnter: (to, from, next) => {
        const usermsg = localStorage.getItem('usermsg')
        console.log(usermsg)
        if (usermsg) {
          next()
        }else{
          next('/login')
        }
      }
    },
    { name: 'group', path: '/group', component: () => import('@/pages/group/group') },
    { name: 'home', path: '/home', component: () => import('@/pages/home/home') },
    { name: 'login', path: '/login', component: () => import('@/pages/login/login') },
    { name: 'radio', path: '/radio', component: () => import('@/pages/radio/radio') },
    { name: 'register', path: '/register', component: () => import('@/pages/register/register') },
    { name: 'search', path: '/search', component: () => import('@/pages/search/search') },
    { path: '*', redirect: '/home' }
  ]
})

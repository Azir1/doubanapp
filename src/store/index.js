import Vue from 'vue'
import Vuex from 'vuex'

// 在全局中使用vuex
Vue.use(Vuex)
// 实例化vuex
export const store = new Vuex.Store({
  state:{//数据源
    text:'vuex的公共仓库',
    id:'',
    pid:''
  },
  getters:{ //相当于vuex的计算属性

  },
  mutations:{ //操作数据源
    filmId(state,payload){
      state.id = payload
    },
    pid(state,payload){
      state.pid = payload
    }
  },
  actions:{//vuex中的异步操作

  }
})
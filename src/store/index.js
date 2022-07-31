import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	  expenseinfo:{}
  },
  getters: {
  },
  mutations: {
	  expenseinfo(state, e){
	  		  state.expenseinfo = e
	  }
  },
  actions: {
  },
  modules: {
  }
})

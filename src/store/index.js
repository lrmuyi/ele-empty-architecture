import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import getters from './gettes'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app
  },
  getters
})

export default store

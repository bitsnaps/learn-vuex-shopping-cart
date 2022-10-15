import Vuex from 'vuex'
// import Vue from 'vue'
import actions from './actions'
import cart from './modules/cart'
import products from './modules/products'
import { createStore } from 'vuex'


// Vue.use(Vuex)
export default createStore({
// export default new Vuex.Store({
  modules: {
    cart,
    products
  },

  state: { // = data

  },

  getters: { // = computed properties

  },

  actions,

  mutations: {

  }
})
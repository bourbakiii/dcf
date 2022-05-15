import Vue from 'vue';
import Vuex from 'vuex'
import typesModule from './modules/types.js'
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
      types: typesModule
    }
  })
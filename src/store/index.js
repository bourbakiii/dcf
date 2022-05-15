import Vue from 'vue';
import Vuex from 'vuex'
import typesModule from './modules/types.js'
import generalsModule from './modules/generals.js'
Vue.use(Vuex);
export default new Vuex.Store({
    modules:{
      types: typesModule,
      generals: generalsModule
    }
  })
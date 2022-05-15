import Vue from 'vue'

import store from './store/index.js'

import App from './App.vue'

Vue.config.productionTip = false

console.object = function (name, object) {
  console.log(`The ${name} is - `);
  console.log(object);
}

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')


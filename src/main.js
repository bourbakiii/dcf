import Vue from 'vue'
import App from './App.vue'
import './assets/styles.scss'

Vue.config.productionTip = false

console.object = function (name, object) {
  console.log(`The ${name} is - `);
  console.log(object);
}

new Vue({
  render: h => h(App),
}).$mount('#app')

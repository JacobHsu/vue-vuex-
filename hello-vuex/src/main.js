import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    count: 0
  }
}, Vue);

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')

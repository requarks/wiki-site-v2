import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vue-axios'
import './plugins/vue-luxon'
import './styles/animate.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  apolloProvider: createProvider(),
  mounted () {
    document.dispatchEvent(new Event('x-app-rendered'))
    this.$store.dispatch('fetchGlobalStats', this.$apollo)
  }
}).$mount('#app')

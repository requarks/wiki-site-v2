import Vue from 'vue'
import './plugins/vuetify'
import './plugins/vue-axios'
import './plugins/vue-luxon'
import './styles/animate.scss'
import App from './App.vue'
import router from './router'
import store from './store'
import { createProvider } from './vue-apollo'
import { init as initApm } from '@elastic/apm-rum'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  apolloProvider: createProvider(),
  mounted () {
    document.dispatchEvent(new Event('x-app-rendered'))
    this.$store.dispatch('fetchGlobalStats', this.$apollo)

    initApm({
      serviceName: 'wiki-site',
      serverUrl: 'https://eac0288f0f054154b8e7454e56dd1261.apm.us-east-1.aws.cloud.es.io:443',
      serviceVersion: process.env.VUE_APP_VERSION
    })
  }
}).$mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import { setupApollo, apolloClient } from './vue-apollo'
import vueAxios from './plugins/vue-axios'
import vueLuxon from './plugins/vue-luxon'
import './styles/animate.scss'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(vuetify)
app.use(vueAxios)
app.use(vueLuxon)

setupApollo(app)

app.mount('#app')

// Dispatch global actions
store.dispatch('fetchGlobalStats', apolloClient)
document.dispatchEvent(new Event('x-app-rendered'))
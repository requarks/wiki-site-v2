import axios from 'axios'

export default {
  install: (app) => {
    app.config.globalProperties.$http = axios
    app.config.globalProperties.$axios = axios
  }
}
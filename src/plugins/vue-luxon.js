import { DateTime } from 'luxon'

export default {
  install: (app) => {
    app.config.globalProperties.$luxon = DateTime
  }
}
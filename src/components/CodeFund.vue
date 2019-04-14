<template lang='pug'>
  .codefund(v-if='ready', v-html='content')
</template>

<script>
import _ from 'lodash'

export default {
  props: {
    tmpl: {
      type: String,
      default: 'horizontal'
    },
    theme: {
      type: String,
      default: 'light'
    }
  },
  data () {
    return {
      ready: false,
      content: ''
    }
  },
  watch: {
    tmpl (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.fetchAd()
      }
    }
  },
  methods: {
    async fetchAd () {
      const resp = await this.$http.get(`https://api.codefund.app/properties/16/funder.html?template=${this.tmpl}&theme=${this.theme}`)
      const adHTML = _.get(resp, 'data', false)
      if (adHTML) {
        this.content = adHTML
        this.ready = true
      }
    }
  },
  mounted () {
    this.fetchAd()
  }
}
</script>

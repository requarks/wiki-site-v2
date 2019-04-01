<template lang='pug'>
  v-app
    site-header
    v-content
      router-view
    site-footer
</template>

<script>
import SiteFooter from './components/SiteFooter'
import SiteHeader from './components/SiteHeader'

export default {
  name: 'App',
  components: {
    SiteFooter,
    SiteHeader
  },
  data () {
    return {
    }
  }
}
</script>

<style lang='scss'>
.v-btn {
  text-transform: none;
}
</style>

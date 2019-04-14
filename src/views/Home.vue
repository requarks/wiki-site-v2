<template lang='pug'>
  .home
    home-splash
    home-easy
    home-features
    home-opensource
    home-integrations
    home-cloud
    home-newsletter
</template>

<script>
import HomeSplash from '../components/HomeSplash'
import HomeEasy from '../components/HomeEasy'
import HomeFeatures from '../components/HomeFeatures'
import HomeOpensource from '../components/HomeOpensource'
import HomeIntegrations from '../components/HomeIntegrations'
import HomeCloud from '../components/HomeCloud'
import HomeNewsletter from '../components/HomeNewsletter'

export default {
  components: {
    HomeSplash,
    HomeEasy,
    HomeFeatures,
    HomeOpensource,
    HomeIntegrations,
    HomeCloud,
    HomeNewsletter
  }
}
</script>

<style lang='scss'>

</style>

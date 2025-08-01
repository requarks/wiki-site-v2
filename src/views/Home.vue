<template lang='pug'>
  .home
    home-splash
    home-easy
    home-features
    home-opensource
    home-integrations
    home-sponsors
    home-cloud
    home-newsletter
</template>

<script>
import HomeSplash from '../components/HomeSplash.vue'
import HomeEasy from '../components/HomeEasy.vue'
import HomeFeatures from '../components/HomeFeatures.vue'
import HomeOpensource from '../components/HomeOpensource.vue'
import HomeIntegrations from '../components/HomeIntegrations.vue'
import HomeCloud from '../components/HomeCloud.vue'
import HomeNewsletter from '../components/HomeNewsletter.vue'
import HomeSponsors from '../components/HomeSponsors.vue'

export default {
  components: {
    HomeSplash,
    HomeEasy,
    HomeFeatures,
    HomeOpensource,
    HomeIntegrations,
    HomeCloud,
    HomeNewsletter,
    HomeSponsors
  }
}
</script>

<style lang='scss'>

</style>

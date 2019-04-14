<template lang='pug'>
  .home
    home-splash
    home-easy
    home-features
    home-opensource
    home-cloud
    home-newsletter
</template>

<script>
import HomeSplash from '../components/HomeSplash'
import HomeEasy from '../components/HomeEasy'
import HomeFeatures from '../components/HomeFeatures'
import HomeOpensource from '../components/HomeOpensource'
import HomeCloud from '../components/HomeCloud'
import HomeNewsletter from '../components/HomeNewsletter'

export default {
  components: {
    HomeSplash,
    HomeEasy,
    HomeFeatures,
    HomeOpensource,
    HomeCloud,
    HomeNewsletter
  }
}
</script>

<style lang='scss'>

</style>

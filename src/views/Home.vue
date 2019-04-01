<template lang='pug'>
  .home
    home-splash
    home-opensource
    home-cloud
    home-newsletter
</template>

<script>
import HomeSplash from '../components/HomeSplash'
import HomeOpensource from '../components/HomeOpensource'
import HomeCloud from '../components/HomeCloud'
import HomeNewsletter from '../components/HomeNewsletter'

export default {
  components: {
    HomeSplash,
    HomeOpensource,
    HomeCloud,
    HomeNewsletter
  }
}
</script>

<style lang='scss'>

</style>

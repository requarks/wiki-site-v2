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

.splash {
  position: relative;
  color: #FFF;
  text-align: center;
  padding: 80px 20px;
  position: relative;
  background-image: url(./assets/img/signal.svg);
  background-size: 200px;
  background-repeat: repeat;
  background-position: center center;
  background-color: #0f1029;
  animation: bgSplashAnim 4s linear infinite;

  h1 {
    font-size: 50px;
    font-weight: 700;
    line-height: 60px;
    position: relative;
    text-shadow: 0 0 30px #090a21;
  }

  h3 {
    margin-top: 15px;
    font-size: 16px;
    font-weight: 300;
    position: relative;
    text-shadow: 0 0 30px #090a21;
  }
}

@keyframes bgSplashAnim {
  0% {
    background-position: 50% 0;
  }
  100% {
    background-position: 50% -115px;
  }
}
</style>

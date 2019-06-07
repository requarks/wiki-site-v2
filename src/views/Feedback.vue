<template lang='pug'>
  .feedback
    particles
      h1.animated.fadeInUp Feedback
      h3.animated.fadeInUp.wait-p2s Request new features and improvements
    v-container.my-4(grid-list-xl)
      v-layout(row, wrap)
        v-flex(xs12)
          .feedback-content(data-canny)
</template>

<script>
import Particles from '../components/Particles'

export default {
  components: {
    Particles
  },
  data () {
    return { }
  },
  mounted() {
    const cannySdkScript = document.createElement('script')
    cannySdkScript.setAttribute('src', 'https://canny.io/sdk.js')
    cannySdkScript.onload = () => {
      Canny('render', {
        boardToken: '632979b0-010b-14e5-1601-40853fe55593',
        basePath: '/feedback',
        ssoToken: null
      })
    }
    document.head.appendChild(cannySdkScript)
  }
}
</script>

<style lang='scss'>
.feedback {
  > .container {
    max-width: 1246px;
  }
}
</style>

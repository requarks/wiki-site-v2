<template lang='pug'>
  .cloud
    particles
      h1.animated.fadeInUp Cloud
      h3.animated.fadeInUp.wait-p2s Wiki.js as a service
    .cloud-splash
      h2 Coming 2020
      h3 Wiki.js as a service, running on a fully-managed cloud.
      ul
        li Always up-to-date
        li No infrastructure to maintain
        li Advanced search pre-configured
        li Daily backups
      v-btn(outline, color='primary', to='/newsletter') Stay Informed
      .cloud-diff
        h3 How does it compare to the self-hosted version?
        .mt-2 They are identical. The cloud version does not have any exclusive features hidden behind a paywall. This service is focused on offering a maintenance-free infrastructure for Wiki.js. You'll get the exact same version of Wiki.js should you choose to host it yourself.
</template>

<script>
import Particles from '../components/Particles'

export default {
  components: {
    Particles
  },
  data () {
    return { }
  }
}
</script>

<style lang='scss'>
.cloud {
  &-splash {
    background: #FFF url(../assets/illustrations/fogg-uploading-1.png) no-repeat top right;
    background-size: 50vw auto;
    height: 800px;
    text-align: center;
    padding: 100px;

    @media screen and (max-width: 900px) {
      background-image: none;
    }

    h2 {
      color: var(--v-greyish-darken1);
      font-size: 44px;
      font-weight: 500;
    }

    h3 {
      margin-top: 12px;
      color: var(--v-greyish-darken2);
      font-size: 18px;
      font-weight: 500;
    }

    ul {
      list-style-type: none;
      padding: 0;
      margin: 24px 0;

      li {
        color: var(--v-greyish-darken2);
        padding: 4px;
      }
    }
  }

  &-diff {
    background-color: rgba(255,255,255,.9);
    padding: 24px;
    border-radius: 8px;
    max-width: 1000px;
    margin: 50px auto 0;
    color: var(--v-greyish-darken2);

    h3 {
      margin: 0;
      color: var(--v-greyish-darken1);
    }
  }
}
</style>

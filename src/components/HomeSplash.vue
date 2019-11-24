<template lang='pug'>
  .home-splash
    h1.animated.fadeInUp The most #[strong powerful] and #[br] extensible #[strong open source] Wiki software
    h2.animated.fadeInUp.wait-p1s Make documentation a joy to write #[br] using Wiki.js's beautiful and intuitive interface!
    ul.home-splash-platforms
      li.animated.fadeInUp.wait-p2s: img(:src='require("../assets/logos/docker.svg")', alt='Docker')
      li.animated.fadeInUp.wait-p3s: img(:src='require("../assets/logos/heroku.svg")', alt='Heroku')
      li.animated.fadeInUp.wait-p4s: img(:src='require("../assets/logos/kubernetes.svg")', alt='Kubernetes')
      li.animated.fadeInUp.wait-p5s: img(:src='require("../assets/logos/linux.svg")', alt='Linux')
      li.animated.fadeInUp.wait-p6s: img(:src='require("../assets/logos/macos.svg")', alt='macOS')
      li.animated.fadeInUp.wait-p7s: img(:src='require("../assets/logos/windows-server.svg")', alt='Windows Server')
    .caption.greyish--text.text--darken-1.animated.fadeInUp.wait-p8s Released under the AGPL-v3 license.
    img.home-splash-ss.animated.fadeInUp.wait-p8s(:src='require("../assets/screenshots/wiki-screenshot.png")', :srcset='require("../assets/screenshots/wiki-screenshot-2x.png") + ` 2x`', alt='Wiki.js Screenshot')
    code-fund.home-splash-codefund-desktop.animated.fadeInRight.wait-p8s(tmpl='square', v-if='$vuetify.breakpoint.xlOnly')
    code-fund.home-splash-codefund-mobile.animated.fadeInUp.wait-p8s(tmpl='horizontal', v-else)
</template>

<script>
import CodeFund from '../components/CodeFund'

export default {
  name: 'HomeSplash',
  components: {
    CodeFund
  },
  data () {
    return {
    }
  }
}
</script>

<style lang='scss'>
.home-splash {
  background-color: var(--v-greyish-base);
  background-image: linear-gradient(to bottom, var(--v-greyish-base) 0%, #FFF 100%);
  min-height: calc(100vh - 84px);
  height: 100%;
  padding: 100px 0;
  text-align: center;
  position: relative;

  @media screen and (max-width: 599px) {
    padding: 50px 0;
  }

  h1 {
    font-size: 40px;
    font-weight: 500;
    color: var(--v-greyish-darken2);
    padding: 0 15px;

    @media screen and (max-width: 599px) {
      font-size: 24px;
    }
  }

  h2 {
    font-size: 18px;
    font-weight: 400;
    color: var(--v-greyish-darken1);
    margin-top: 25px;

    @media screen and (max-width: 599px) {
      font-size: 16px;
    }
  }

  &-platforms {
    list-style-type: none;
    padding: 0 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    flex-wrap: wrap;
    user-select: none;

    li {
      height: 50px;
      margin: 0 15px;

      @media screen and (max-width: 599px) {
        height: 30px;
      }
    }

    img {
      height: 32px;

      @media screen and (max-width: 599px) {
        height: 20px;
      }
    }
  }

  &-ss {
    margin-top: 120px;
    box-shadow: 0 40px 60px 0 rgba(0,11,40,.16);
    border-radius: 8px;
    max-width: 90vw;
    width: 1170px;

    @media screen and (max-width: 599px) {
      margin-top: 50px;
    }
  }

  &-codefund-desktop {
    position: absolute;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    background-color: #EEE;
    border-radius: 4px;
    right: 12px;
    width: 255px;
    height: 298px;
    display: inline-block;
    top: calc(100vh - 396px);
  }

  &-codefund-mobile {
    // position: absolute;
    width: 90vw;
    margin: 0 auto;
    padding: 0;
  }
}
</style>

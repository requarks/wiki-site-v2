<template lang='pug'>
  .home-opensource
    v-container
      v-layout(row, wrap)
        v-flex.home-opensource-main(xs12, md6)
          h3 Open Source
          h4 It's not just about being free, it also means anyone can contribute new features and help squash bugs. Wiki.js is proudly licensed under AGPLv3.
          v-layout.home-opensource-stats(row)
            v-flex(xs6)
              strong 100M+
              span Downloads
            v-flex(xs6)
              strong {{stars}}+
              span Stars on GitHub
          v-btn.mt-5.mx-0(dark, color='primary', large, href='https://github.com/Requarks/wiki') View on GitHub
        v-flex.home-opensource-side.text-xs-center(xs12, md6)
          .home-opensource-shape
          .home-opensource-shape
          img(:src='require("../assets/logos/color-opensource.svg")', alt='Open Source')
</template>

<script>
import { get } from 'vuex-pathify'

export default {
  name: 'HomeOpensource',
  data () {
    return {}
  },
  computed: {
    stars: get('stars')
  }
}
</script>

<style lang='scss'>
.home-opensource {
  background-color: #0f1029;
  padding: 100px 0;
  color: #FFF;
  overflow: hidden;

  @media screen and (max-width: 599px) {
    padding: 50px 15px;
  }

  @media screen and (min-width: 1904px) {
    > .container {
      max-width: 1520px;
    }
  }

  &-main {
    position: relative;
    z-index: 1;
    text-align: center;
  }

  h3 {
    font-size: 60px;
    font-weight: 700;

    @media screen and (max-width: 599px) {
      font-size: 42px;
    }
  }
  h4 {
    margin-top: 20px;
    font-size: 15px;
    font-weight: 300;
    color: var(--v-greyish-lighten3)
  }

  &-stats {
    strong {
      display: block;
      font-size: 70px;
      font-weight: 400;

      @media screen and (max-width: 599px) {
        font-size: 46px;
        padding-top: 15px;
      }
    }
    span {
      color: var(--v-greyish-lighten3);
      font-size: 16px;
    }
  }

  &-side {
    position: relative;
  }

  &-shape {
    width: 500px;
    height: 500px;
    background-image: linear-gradient(-90deg,#290a59,#3d57f4);
    border-radius: 45px;
    transform: rotate(45deg);
    position: absolute;
    opacity: .059;
    left: -80px;
    top: -25px;
    z-index: 0;

    + .home-opensource-shape {
      left: 150px;
    }
  }

  img {
    width: 450px;
    max-width: 90%;

    @media screen and (max-width: 599px) {
      width: 200px;
      margin-top: 30px;
    }
  }
}
</style>

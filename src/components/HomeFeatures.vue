<template lang='pug'>
  .home-features(id='features')
    h2 Bundled with everything you need
    h3 Not all teams need the same set of features. That's why Wiki.js offers a wide range of modules that can be turned on/off on demand.
    v-tabs.mt-4(
      :fixed-tabs='$vuetify.breakpoint.xlOnly'
      centered
      slider-color='primary'
      show-arrows
      next-icon=''
      prev-icon=''
      )
      v-tab Authentication
      v-tab Editors
      v-tab History
      v-tab Localization
      v-tab Media Assets
      v-tab Rendering
      v-tab Search
      v-tab Storage
      v-tab User Management
      v-tab Themes
    v-container.mt-5(grid-list-xl)
      v-layout(row, wrap, justify-center)
        v-flex(xs12, sm6, md3)
          .home-features-tile
            img(:src='require(`../assets/icons/nolan-data-protection.svg`)')
            h5 Local Authentication
            span Built-in authentication with self-registration and password recovery capabilities.
        v-flex(xs12, sm6, md3)
          .home-features-tile
            img(:src='require(`../assets/icons/nolan-data-protection.svg`)')
            h5 Local Authentication
            span Built-in authentication with self-registration and password recovery capabilities.
        v-flex(xs12, sm6, md3)
          .home-features-tile
            img(:src='require(`../assets/icons/nolan-data-protection.svg`)')
            h5 Local Authentication
            span Built-in authentication with self-registration and password recovery capabilities.
        v-flex(xs12, sm6, md3)
          .home-features-tile
            img(:src='require(`../assets/icons/nolan-data-protection.svg`)')
            h5 Local Authentication
            span Built-in authentication with self-registration and password recovery capabilities.
</template>

<script>

export default {
  name: 'HomeFeatures',
  data () {
    return {}
  }
}
</script>

<style lang='scss'>
.home-features {
  background-color: var(--v-greyish-lighten4);
  text-align: center;
  padding: 100px 0 50px 0;
  color: var(--v-greyish-darken2);

  @media screen and (max-width: 599px) {
    padding-bottom: 50px;
  }

  // > .container {
  //   max-width: 1200px;
  // }

  h2 {
    font-size: 30px;
    font-weight: 600;
    padding: 0 15px;
    line-height: 30px;
  }
  h3 {
    font-size: 16px;
    font-weight: 300;
    padding: 15px 0;
    color: var(--v-greyish-darken1);
  }

  .v-tabs__bar {
    background: var(--v-greyish-lighten2) linear-gradient(to bottom, var(--v-greyish-lighten4) 0%, #FFF 100%);
    box-shadow: inset 0px -2px rgba(#6754e2, .1);

    .v-tabs__item {
      color: var(--v-greyish-darken2);
      &.v-tabs__item--active {
        color: var(--v-primary-base);
      }
    }

    .v-tabs__icon--next {
      background: transparent url(../assets/icons/metro-forward.svg) no-repeat center right;
    }
    .v-tabs__icon--prev {
      background: transparent url(../assets/icons/metro-back.svg) no-repeat center left;
    }
  }

  &-tile {
    text-align: center;
    padding-bottom: 50px;

    h5 {
      font-weight: 600;
      font-size: 17px;
      margin: 5px 0 10px 0;
    }

    span {
      font-size: 15px;
      font-weight: 300;
      color: var(--v-greyish-darken1);
    }
  }
}
</style>

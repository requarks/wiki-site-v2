<template lang='pug'>
  .home-cloud
    h3 Wiki.js Cloud #[v-chip.white--text(color='accent') Coming Soon]
    h4 Host it yourself or let us handle the infrastructure with a fully managed installation.
    h5 Both versions of Wiki.js are identical and have exactly the same set of features.
    v-container.mt-5(grid-list-xl)
      v-layout(row, wrap)
        v-flex(xs12, sm6)
          .home-cloud-plan
            .home-cloud-plan-icon
              img(:src='require("../assets/icons/handdrawn-server.svg")')
            h6 Self-Hosted
            span Host it on your own servers
            strong Free
            v-divider.mt-3
            v-btn.mt-4(large, outline, color='primary') Get Started
        v-flex(xs12, sm6)
          .home-cloud-plan
            .home-cloud-plan-icon.alt1
              img(:src='require("../assets/icons/handdrawn-cloud.svg")')
            h6 Cloud
            span Managed infrastructure
            strong TBA
            v-divider.mt-3
            v-btn.mt-4(large, outline, color='greyish darken-1') Coming Soon
</template>

<script>

export default {
  name: 'HomeCloud',
  data () {
    return {}
  }
}
</script>

<style lang='scss'>
.home-cloud {
  background-color: #FFF;
  padding: 100px 15px;
  text-align: center;

  @media screen and (max-width: 599px) {
    padding: 50px 15px;
  }

  > .container {
    max-width: 1000px;
  }

  h3 {
    font-size: 30px;
    font-weight: 600;
  }
  h4 {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 300;
    color: var(--v-greyish-darken1)
  }
  h5 {
    margin-top: 20px;
    font-size: 18px;
    font-weight: 600;
    color: var(--v-greyish-darken1)
  }

  &-plan {
    background: var(--v-greyish-base) linear-gradient(45deg, transparent, var(--v-greyish-lighten4));
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 40px;
    transition: all .6s ease;
    position: relative;

    &-icon {
      background: transparent url('../assets/img/price_line1.png') no-repeat top center;
      width: 150px;
      height: 150px;
      margin: 0 auto;

      &.alt1 {
        background-image: url('../assets/img/price_line2.png');
      }
    }

    &:hover {
      background-color: #FFF;
      border-color: var(--v-greyish-base);
      box-shadow: 0 30px 60px 0 rgba(0,11,40,.14);
    }

    h6 {
      font-size: 20px;
      font-weight: 600;
    }

    strong {
      display: block;
      font-size: 40px;
      font-weight: 700;
      padding: 20px 0;
    }
  }
}
</style>

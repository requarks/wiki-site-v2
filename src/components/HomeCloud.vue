<template lang='pug'>
  .home-cloud
    h3 Get Started #[v-chip.white--text(color='accent') Install Anywhere!]
    h4 Host it yourself or launch a pre-configured installation on a cloud provider.
    v-container.mt-5(grid-list-xl)
      v-layout(row, wrap)
        v-flex(xs12, sm6, md6)
          .home-cloud-plan
            .home-cloud-plan-icon
              img(:src='require("../assets/icons/handdrawn-server.svg")', alt='Self-Hosted')
            h6 Self-Hosted
            span Host it on your on-premise servers
            v-divider.mt-3
            v-btn.mt-4(large, outline, color='primary', to='/get-started') Get Started
        v-flex(xs12, sm6, md6)
          .home-cloud-plan
            .home-cloud-plan-icon.alt1
              img(:src='require("../assets/icons/handdrawn-cloud.svg")', alt='Cloud')
            h6 DigitalOcean Marketplace
            span One-click install, auto-update
            v-divider.mt-3
            v-btn.mt-4(large, outline, color='primary', href='https://marketplace.digitalocean.com/apps/wiki-js?refcode=5f7445bfa4d0', target='_blank') Get Started
        //- v-flex(xs12, sm6, md4)
        //-   .home-cloud-plan
        //-     .home-cloud-plan-icon.alt1
        //-       img(:src='require("../assets/icons/handdrawn-cloud.svg")', alt='Cloud')
        //-     h6 AWS Marketplace
        //-     span One-click install, auto-update
        //-     v-divider.mt-3
        //-     v-btn.mt-4(large, outline, color='primary', href='https://aws.amazon.com/marketplace/pp/B0832LDTKQ', target='_blank') Get Started
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
    max-width: 1520px;
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

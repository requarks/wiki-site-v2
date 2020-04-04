<template lang='pug'>
  .donate
    .splash
      h1.animated.fadeInUp Donate
    v-container(grid-list-xl)
      v-layout(row, wrap, justify-center)
        v-flex(xs12)
          .text-xs-center.py-3(style='max-width: 1000px; margin: 0 auto;')
            .body-1 Wiki.js is #[strong open-source] and #[strong completely free]. I believe in building great software which benefits the community. However, it also brings challenges when it comes to sustaining the developers behind the project. Maintaining and developing new features to Wiki.js takes a considerable amount of time, and I am currently exploring the possibility of working on Wiki.js fulltime.
            .body-1.mt-3 If you run a business and are using Wiki.js, it would make business sense to sponsor Wiki.js development: it ensures the project that your company relies on stays healthy and actively maintained. Of course, individual users are also welcome to make a recurring pledge if Wiki.js has helped you in your work or personal projects!
        v-flex(xs12, md6)
          .donate-item.animated.fadeInUp
            .donate-item-logo
              img(:src='require(`../assets/icons/bubbles-github.svg`)', alt='Github')
            .px-4
              h2.indigo--text GitHub Sponsors
              div
                v-chip.ml-0(color='grey lighten-4', small, label): .caption Monthly
                v-chip.ml-0(color='grey lighten-4', small, label): .caption Public
            v-btn.mx-0(color='indigo', large, dark, href='https://github.com/sponsors/NGPixel')
              v-icon mdi-arrow-right
              span Donate
        v-flex(xs12, md6)
          .donate-item.animated.fadeInUp
            .donate-item-logo
              img(:src='require(`../assets/logos/opencollective.svg`)', alt='OpenCollective', style='width: 80px;')
            .px-4
              h2.blue--text OpenCollective
              div
                v-chip.ml-0(color='grey lighten-4', small, label): .caption Monthly
                v-chip.ml-0(color='grey lighten-4', small, label): .caption One-time
                v-chip.ml-0(color='grey lighten-4', small, label): .caption Public
                v-chip.ml-0(color='grey lighten-4', small, label): .caption Anonymous
            v-btn.mx-0(color='blue', large, dark, href='https://opencollective.com/wikijs/donate')
              v-icon mdi-arrow-right
              span Donate
        v-flex(xs12, md6)
          .donate-item.animated.fadeInUp
            .donate-item-logo
              img(:src='require(`../assets/logos/patreon.svg`)', alt='Patreon', style='width: 80px;')
            .px-4
              h2.deep-orange--text Patreon
              div
                v-chip.ml-0(color='grey lighten-4', small, label): .caption Monthly
                v-chip.ml-0(color='grey lighten-4', small, label): .caption Public
            v-btn.mx-0(color='deep-orange', large, dark, href='https://www.patreon.com/bePatron?u=16744039')
              v-icon mdi-arrow-right
              span Donate
        v-flex(xs12, md6)
          .donate-item.animated.fadeInUp
            .donate-item-logo
              img(:src='require(`../assets/icons/color-paypal.svg`)', alt='Paypal')
            .px-4
              h2.blue--text.text--darken-2 Paypal
              div
                v-chip.ml-0(color='grey lighten-4', small, label): .caption Monthly
                v-chip.ml-0(color='grey lighten-4', small, label): .caption One-time
              div
                v-chip.ml-0(color='grey lighten-4', small, label): .caption Anonymous
            v-btn.mx-0(color='blue darken-2', large, dark, href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=FLV5X255Z9CJU&source=url')
              v-icon mdi-arrow-right
              span Donate
        v-flex(xs12, md6)
          .donate-item.animated.fadeInUp
            .donate-item-logo
              img(:src='require(`../assets/icons/color-ethereum.svg`)', alt='Ethereum')
            .px-4
              h2.blue-grey--text Ethereum
              div
                v-chip.ml-0(color='grey lighten-4', small, label): .caption One-time
                v-chip.ml-0(color='grey lighten-4', small, label): .caption Anonymous
            v-btn.mx-0(color='blue-grey', large, dark, href='https://etherscan.io/address/0xe1d55c19ae86f6bcbfb17e7f06ace96bdbb22cb5')
              v-icon mdi-arrow-right
              span Donate
        v-flex(xs12, md6)
          .donate-item.animated.fadeInUp
            .donate-item-logo
              img(:src='require(`../assets/icons/color-bitcoin.svg`)', alt='Bitcoin')
            .px-4
              h2.orange--text Bitcoin
              div
                v-chip.ml-0(color='grey lighten-4', small, label): .caption One-time
                v-chip.ml-0(color='grey lighten-4', small, label): .caption Anonymous
            v-btn.mx-0(color='orange', large, dark, href='https://checkout.opennode.com/p/2553c612-f863-4407-82b3-1a7685268747')
              v-icon mdi-arrow-right
              span Donate
        v-flex(xs12, md6, )
          .donate-item.animated.fadeInUp
            .donate-item-logo
              img(:src='require(`../assets/icons/infographic-t-shirt.svg`)', alt='T-Shirts', style='width: 80px;')
            .px-4
              h2.teal--text T-Shirts
              div
                v-chip.ml-0(color='grey lighten-4', small, label): .caption One-time
                v-chip.ml-0(color='grey lighten-4', small, label): .caption Anonymous
            v-btn.mx-0(color='teal', large, dark, href='https://wikijs.threadless.com/')
              v-icon mdi-arrow-right
              span Shop
</template>

<script>
export default {
  data () {
    return { }
  }
}
</script>

<style lang='scss'>
.donate {
  > .container {
    max-width: 1200px;
  }

  &-item {
    background-color: #FFF;
    box-shadow: 0 2px 8px 0 rgba(12,0,46,.04);
    border-radius: 7px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    transition: all .6s ease;
    height: 150px;

    &:hover {
      box-shadow: 0 2px 30px 0 rgba(12,0,46,.15);
    }

    &-logo {
      width: 96px;
      text-align: center;
    }

    .px-4 {
      flex: 1 0;
    }
  }
}
</style>

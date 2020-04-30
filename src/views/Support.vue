<template lang='pug'>
  .support
    .splash
      h1.animated.fadeInUp Support
      h3.animated.fadeInUp.wait-p2s General Help, Report Bugs, Ask Questions
    v-container(grid-list-xl)
      v-layout(row, wrap, justify-center)
        v-flex(xs12)
          .support-item.animated.fadeInUp
            .support-item-logo
              img(:src='require(`../assets/icons/color-software-installer.svg`)', alt='Help with Installation / Configuration', style='width: 80px;')
            .px-4
              h2.blue--text.text--darken-2 Help with Installation / Configuration
              .body-1 You're trying to setup Wiki.js but can't get it working and need help.
            v-btn.mx-0(style='width: 200px;', color='blue darken-2', large, dark, href='https://github.com/Requarks/wiki/issues/new?labels=help&template=question---help.md') Request Help
        v-flex(xs12)
          .support-item.animated.fadeInUp
            .support-item-logo
              img(:src='require(`../assets/icons/color-ladybird.svg`)', alt='Report a Bug', style='width: 80px;')
            .px-4
              h2.red--text Report a Bug
              .body-1 You found something that doesn't work or isn't right and want to report it.
            v-btn.mx-0(style='width: 200px;', color='red', large, dark, href='https://github.com/Requarks/wiki/issues/new?template=bug_report.md') Create an Issue
        v-flex(xs12)
          .support-item.animated.fadeInUp
            .support-item-logo
              img(:src='require(`../assets/icons/color-star.svg`)', alt='Suggest a new feature or improvement', style='width: 80px;')
            .px-4
              h2.indigo--text Suggest a new feature or improvement
              .body-1 You have an idea for a new feature or something that could be improved.
            v-btn.mx-0(style='width: 200px;', color='indigo', large, dark, to='/feedback') Suggest an Idea
        v-flex(xs12)
          .support-item.animated.fadeInUp
            .support-item-logo
              img(:src='require(`../assets/icons/color-get-cash.svg`)', alt='Donate', style='width: 80px;')
            .px-4
              h2.green--text Donate
              .body-1 You'd like to financially contribute to this project and help it grow.
            v-btn.mx-0(style='width: 200px;', color='green', large, dark, to='/donate') Donate
        v-flex(xs12)
          .support-item.animated.fadeInUp
            .support-item-logo
              img(:src='require(`../assets/icons/color-developer.svg`)', alt='Contribute / Development', style='width: 80px;')
            .px-4
              h2.blue-grey--text Contribute / Development
              .body-1 You're a developer and would like to contribute new features or fix bugs.
            v-btn.mx-0(style='width: 200px;', color='blue-grey', large, dark, href='https://docs.requarks.io/dev') Read Developer Docs
</template>

<script>
/* global $crisp */

export default {
  data () {
    return { }
  },
  methods: {
    chat () {
      $crisp.push(['do', 'chat:open'])
    }
  }
}
</script>

<style lang='scss'>
.support {
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
    height: 130px;

    @media screen and (max-width: 700px) {
      height: auto;
      display: block;
      text-align: center;

      .px-4 {
        padding: 0 !important;
      }

      .v-btn {
        margin-top: 10px;
      }
    }

    &.dual-lines {
      display: block;
      height: 180px;

      @media screen and (max-width: 700px) {
        height: auto;
      }

      .first-line {
        display: flex;

        @media screen and (max-width: 700px) {
          display: block;
        }
      }

      .second-line {
        border-top: 1px solid #EEE;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-top: 2px;

        @media screen and (max-width: 700px) {
          margin-top: 10px;
          flex-wrap: wrap;

          .body-2 {
            padding-top: 12px;
            flex: 1 0 100%;
          }
        }

        > a {
          padding: 10px;

          img {
            height: 48px;
          }
        }
      }
    }

    &:hover {
      box-shadow: 0 2px 30px 0 rgba(12,0,46,.15);
    }

    &-logo {
      width: 96px;
      text-align: center;

      @media screen and (max-width: 700px) {
        display: none;
      }
    }

    .px-4 {
      flex: 1 0;

      @media screen and (max-width: 700px) {
        padding-left: 0 !important;

        h2 {
          font-size: 16px;
        }
      }
    }
  }
}
</style>

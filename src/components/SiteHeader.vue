<template lang='pug'>
  .header-container
    v-toolbar.header(app, fixed, height='84', v-scroll='toggleNavStyle', :class='{alt1: navStyle === 1}')
      router-link.animated.fadeInLeft(to='/')
        img.header-logo(:src='require("../assets/logos/logo.svg")', alt='Wiki.js')
      v-spacer
      ul.header-nav.hidden-sm-and-down
        router-link.animated.fadeInDown(to='/', tag='li'): a Features
        router-link.animated.fadeInDown.wait-p2s(to='/modules', tag='li'): a Modules
        li.animated.fadeInDown.wait-p3s: a(href='https://docs.requarks.io/', @click.stop.prevent='docsSelector = true') Docs
        li.animated.fadeInDown.wait-p4s: a(href='https://blog.requarks.io/') Blog
        router-link.animated.fadeInDown.wait-p5s(to='/feedback', tag='li'): a Feedback
        router-link.animated.fadeInDown.wait-p6s(to='/about', tag='li'): a Backers
        li.animated.fadeInDown.wait-p6s
          a(href='https://github.com/Requarks/wiki', target='_blank', title='GitHub Project', rel='noopener')
            img(:src='require("../assets/logos/windows-github.svg")', alt='GitHub')
      v-spacer.hidden-sm-and-down
      .header-versions.text-xs-right.animated.fadeInRight.wait-p2s.hidden-md-and-down
        .caption Stable #[strong(v-html='stable')]
        .caption Beta #[strong(v-html='beta')]
      v-btn.mx-0.hidden-sm-and-down.animated.fadeInRight(color='primary', outline, large, to='/get-started') Get Started
      v-btn.mx-0.hidden-md-and-up.header-mobiletoggle(icon, @click='mobileDrawerOpen = !mobileDrawerOpen')
        img(v-if='mobileDrawerOpen', :src='require("../assets/icons/metro-multiply.svg")', alt='Toggle Navigation Menu')
        img(v-else, :src='require("../assets/icons/metro-menu.svg")', alt='Toggle Navigation Menu')
    v-navigation-drawer(app, fixed, temporary, v-model='mobileDrawerOpen')
      v-list(two-line)
        .header-logo-mobile
          img(:src='require("../assets/logos/logo.svg")', alt='Wiki.js')
        v-list-tile(to='/')
          v-list-tile-avatar
            img(:src='require("../assets/icons/nolan-categorize.svg")', alt='Features')
          v-list-tile-title Features
        v-divider
        v-list-tile(to='/modules')
          v-list-tile-avatar
            img(:src='require("../assets/icons/nolan-cloud.svg")', alt='Modules')
          v-list-tile-title Modules
        v-divider
        v-list-tile(href='https://docs-beta.requarks.io/', @click.stop.prevent='docsSelector = true')
          v-list-tile-avatar
            img(:src='require("../assets/icons/nolan-open-book.svg")', alt='Docs')
          v-list-tile-title Docs
        v-divider
        v-list-tile(to='/blog')
          v-list-tile-avatar
            img(:src='require("../assets/icons/nolan-news.svg")', alt='Blog')
          v-list-tile-title Blog
        v-divider
        v-list-tile(to='/feedback')
          v-list-tile-avatar
            img(:src='require("../assets/icons/nolan-feedback.svg")', alt='Feedback')
          v-list-tile-title Feedback
        v-divider
        v-list-tile(to='/about')
          v-list-tile-avatar
            img(:src='require("../assets/icons/nolan-management.svg")', alt='Backers')
          v-list-tile-title Backers
        v-divider
        v-list-tile(to='/get-started')
          v-list-tile-avatar
            img(:src='require("../assets/icons/nolan-downloading-updates.svg")', alt='Get Started')
          v-list-tile-title Get Started

    v-dialog(v-model='docsSelector', width='400')
      v-card.header-docs
        v-btn.header-docs-close(icon, @click='docsSelector = false')
          img(:src='require("../assets/icons/metro-multiply.svg")', alt='Cancel')
        .pa-3.text-xs-center
          img(:src='require(`../assets/icons/nolan-literature.svg`)', alt='Documentation', style='width: 64px;')
          .subheading Select a version...
        v-divider
        v-card-actions.grey.lighten-5
          v-spacer
          v-btn(color='primary', outline, large, href='https://docs-legacy.requarks.io/wiki/') 1.x Stable Docs
          v-btn(color='primary', outline, large, href='https://docs.requarks.io/') 2.0 Beta Docs
          v-spacer
        v-divider
        .px-3.py-4.text-xs-center.greyish--text.text--darken-1 Not sure which version to use? #[a(@click.stop.prevent='$router.push(`/get-started`); docsSelector = false', href='#') See Comparison]
</template>

<script>
import { get } from 'vuex-pathify'

export default {
  name: 'SiteHeader',
  data () {
    return {
      currentYear: new Date().getFullYear(),
      navStyle: 0,
      mobileDrawerOpen: false,
      docsSelector: false
    }
  },
  computed: {
    stable: get('stable'),
    beta: get('beta')
  },
  methods: {
    toggleNavStyle () {
      if (window.scrollY > 50) {
        this.navStyle = 1
      } else {
        this.navStyle = 0
      }
    }
  }
}
</script>

<style lang='scss'>
.theme--light.v-toolbar.header {
  box-shadow: none;
  background-color: var(--v-greyish-base);
  transition: all .4s ease;

  &.alt1 {
    background-color: #FFF;
    box-shadow: 0 4px 6px 0 rgba(12,0,46,.06);
  }
}

.header {
  &-logo {
    width: 150px;
    padding-top: 12px;

    @media screen and (min-width: 1264px) {
      margin-right: 117px;
    }

    &-mobile {
      text-align: center;

      img {
        width: 150px;
        padding: 15px 0 0;
      }
    }
  }
  &-nav {
    list-style-type: none;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;

    li {
      & + li {
        margin-left: 45px;

        @media screen and (max-width: 1264px) {
          margin-left: 30px;
        }
      }

      &.router-link-exact-active {
        a {
          color: var(--v-primary-base);
        }
      }

      a {
        font-size: 15px;
        font-weight: 500;
        color: var(--v-greyish-darken2);
        text-decoration: none;

        &:hover {
          color: var(--v-primary-base);

          img {
            opacity: .5;
          }
        }

        img {
          height: 34px;
          transition: opacity .4s ease;
        }
      }
    }
  }
  &-mobiletoggle {
    img {
      width: 20px;
    }
  }
  &-versions {
    margin-right: 15px;
    color: var(--v-greyish-darken1);
    font-weight: 300;
    border-right: 1px solid var(--v-greyish-lighten1);
    padding-right: 15px;

    strong {
      font-weight: 600;
    }
  }

  &-docs {
    border-radius: 7px;

    &-close {
      top: 0;
      right: 0;
      position: absolute !important;

      img {
        width: 20px;
        opacity: .3;
      }
    }
  }
}
</style>

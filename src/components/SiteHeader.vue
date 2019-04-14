<template lang='pug'>
  .header-container
    v-toolbar.header(app, fixed, height='84', v-scroll='toggleNavStyle', :class='{alt1: navStyle === 1}')
      router-link.animated.fadeInLeft(to='/')
        img.header-logo(:src='require("../assets/logos/logo.svg")', alt='Wiki.js')
      v-spacer
      ul.header-nav.hidden-sm-and-down
        router-link.animated.fadeInDown(to='/', tag='li'): a Home
        router-link.animated.fadeInDown.wait-p1s(to='/#features', tag='li'): a Features
        router-link.animated.fadeInDown.wait-p2s(to='/cloud', tag='li'): a Cloud
        li.animated.fadeInDown.wait-p3s: a(href='https://docs-beta.requarks.io/') Docs
        router-link.animated.fadeInDown.wait-p4s(to='/blog', tag='li'): a Blog
        router-link.animated.fadeInDown.wait-p5s(to='/about', tag='li'): a About
        li.animated.fadeInDown.wait-p6s
          a(href='https://github.com/Requarks/wiki', target='_blank', title='GitHub Project')
            img(:src='require("../assets/logos/windows-github.svg")')
      v-spacer.hidden-sm-and-down
      .header-versions.text-xs-right.animated.fadeInRight.wait-p2s.hidden-md-and-down
        .caption Stable #[strong 1.0.117]
        .caption Beta #[strong 2.0.0-beta.91]
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
            img(:src='require("../assets/icons/nolan-structural.svg")')
          v-list-tile-title Home
        v-divider
        v-list-tile(to='/#features')
          v-list-tile-avatar
            img(:src='require("../assets/icons/nolan-categorize.svg")')
          v-list-tile-title Features
        v-divider
        v-list-tile(to='/cloud')
          v-list-tile-avatar
            img(:src='require("../assets/icons/nolan-cloud.svg")')
          v-list-tile-title Cloud
        v-divider
        v-list-tile(href='https://docs-beta.requarks.io/')
          v-list-tile-avatar
            img(:src='require("../assets/icons/nolan-open-book.svg")')
          v-list-tile-title Docs
        v-divider
        v-list-tile(to='/blog')
          v-list-tile-avatar
            img(:src='require("../assets/icons/nolan-news.svg")')
          v-list-tile-title Blog
        v-divider
        v-list-tile(to='/about')
          v-list-tile-avatar
            img(:src='require("../assets/icons/nolan-management.svg")')
          v-list-tile-title About
        v-divider
        v-list-tile(to='/get-started')
          v-list-tile-avatar
            img(:src='require("../assets/icons/nolan-downloading-updates.svg")')
          v-list-tile-title Get Started
</template>

<script>
export default {
  name: 'SiteHeader',
  data () {
    return {
      currentYear: new Date().getFullYear(),
      navStyle: 0,
      mobileDrawerOpen: false
    }
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
}
</style>

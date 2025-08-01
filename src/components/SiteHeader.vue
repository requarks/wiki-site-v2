<template lang='pug'>
  .header-container
    v-app-bar(app, fixed, height='84', :class='{ "bg-white elevation-2": navStyle === 1}', v-scroll='toggleNavStyle')
      router-link.animated.fadeInLeft(to='/')
        img.header-logo(src='../assets/logos/wikijs-full-2021.svg', alt='Wiki.js')
      v-spacer
      ul.header-nav.d-none.d-md-flex
        li.animated.fadeInDown
          router-link(to='/') Features
        li.animated.fadeInDown.wait-p2s
          router-link(to='/modules') Modules
        li.animated.fadeInDown.wait-p3s
          a(href='https://docs.requarks.io/', @click.stop.prevent='docsSelector = true') Docs
        li.animated.fadeInDown.wait-p4s
          a(href='https://blog.js.wiki', title='News', rel='noopener') News
        li.animated.fadeInDown.wait-p5s
          router-link(to='/about') Backers
        li.animated.fadeInDown.wait-p6s
          router-link(to='/support') Support
        li.animated.fadeInDown.wait-p7s
          a(href='https://github.com/Requarks/wiki', target='_blank', title='GitHub Project', rel='noopener')
            img(src='../assets/logos/windows-github.svg', alt='GitHub')
      v-spacer.d-none.d-md-flex
      .header-versions.text-right.animated.fadeInRight.wait-p2s.d-none.d-lg-block
        .text-caption Stable #[strong(v-html='stable')]
        .text-caption Legacy #[strong(v-html='legacy')]
      v-btn.mx-0.d-none.d-md-flex.animated.fadeInRight(color='primary', variant='outlined', size='large', to='/get-started') Get Started
      v-app-bar-nav-icon.d-md-none(@click='mobileDrawerOpen = !mobileDrawerOpen')

    v-navigation-drawer(app, fixed, temporary, v-model='mobileDrawerOpen')
      v-list(density='compact')
        .header-logo-mobile
          img(src='../assets/logos/wikijs-full-2021.svg', alt='Wiki.js')
        v-list-item(to='/', prepend-avatar-icon='../assets/icons/nolan-categorize.svg')
          v-list-item-title Features
        v-divider
        v-list-item(to='/modules', prepend-avatar-icon='../assets/icons/nolan-cloud.svg')
          v-list-item-title Modules
        v-divider
        v-list-item(href='https://docs.requarks.io/', @click.stop.prevent='docsSelector = true', prepend-avatar-icon='../assets/icons/nolan-open-book.svg')
          v-list-item-title Docs
        v-divider
        v-list-item(href='https://blog.js.wiki', title='News', rel='noopener', prepend-avatar-icon='../assets/icons/nolan-feedback.svg')
          v-list-item-title News
        v-divider
        v-list-item(to='/about', prepend-avatar-icon='../assets/icons/nolan-management.svg')
          v-list-item-title Backers
        v-divider
        v-list-item(to='/support', prepend-avatar-icon='../assets/icons/nolan-about.svg')
          v-list-item-title Support
        v-divider
        v-list-item(to='/get-started', prepend-avatar-icon='../assets/icons/nolan-downloading-updates.svg')
          v-list-item-title Get Started

    v-dialog(v-model='docsSelector', width='400')
      v-card.header-docs
        v-btn.header-docs-close(icon, @click='docsSelector = false')
          v-icon mdi-close
        .pa-3.text-centerx
          img(src='../assets/icons/nolan-literature.svg', alt='Documentation', style='width: 64px;')
          .text-subtitle-1 Select a version...
        v-divider
        v-card-actions.bg-grey-lighten-4
          v-spacer
          v-btn(color='primary', variant='outlined', large, href='https://docs.requarks.io/') 2.0 Docs
          v-btn(color='primary', variant='outlined', large, href='https://docs-legacy.requarks.io/wiki/') 1.0 Docs
          v-spacer
        v-divider
        .px-3.py-4.text-center.text-grey-darken-1 Not sure which version to use? #[a(@click.stop.prevent='$router.push(`/get-started`); docsSelector = false', href='#') See Comparison]
</template>

<script>
import { mapState } from 'vuex'

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
    ...mapState(['stable', 'legacy'])
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
.v-app-bar {
  transition: all .4s ease;
  background: rgb(var(--v-theme-greyish-base)) !important;
}

.v-app-bar.v-toolbar:not(.v-toolbar--flat) {
  box-shadow: none !important;
}

.v-toolbar__content {
  padding: 0 24px;
}

.header {
  &-logo {
    width: 175px;
    padding-top: 6px;

    @media screen and (min-width: 1264px) {
      margin-right: 102px;
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
          color: rgb(var(--v-theme-primary));
        }
      }

      a {
        font-size: 15px;
        font-weight: 500;
        color: rgb(var(--v-theme-greyish-darken2));
        text-decoration: none;

        &:hover {
          color: rgb(var(--v-theme-primary));

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
  &-versions {
    margin-right: 15px;
    color: rgb(var(--v-theme-greyish-darken1));
    font-weight: 300;
    border-right: 1px solid rgb(var(--v-theme-greyish-lighten1));
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

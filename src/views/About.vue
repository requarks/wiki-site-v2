<template lang='pug'>
  .about
    .splash
      h1.animated.fadeInUp Sponsors &amp; Backers
      h3.animated.fadeInUp.wait-p2s Wiki.js is an AGPL-licensed open source project. It's an independent project with its ongoing development #[br] made possible entirely thanks to the support by the awesome sponsors &amp; backers listed below.
    v-container.my-4(grid-list-xl)
      v-layout(row, wrap)
        v-flex(xs12, md4, xl3)
          .about-sidebar
            h2 Quick Navigation
            ul
              li
                a(href='#sponsors') - Sponsors &amp; Backers
                v-chip.ml-2(small, color='green lighten-5') {{sponsors.length}}
              li
                a(href='#developers') - Developers
                v-chip.ml-2(small, color='orange lighten-5') {{developers.length}}
              li
                a(href='#translators') - Translators
                v-chip.ml-2(small, color='blue lighten-5') {{translators.length}}
              li
                a(href='#specialthanks') - Special Thanks
                v-chip.ml-2(small, color='grey lighten-3') {{specialthanks.length}}
            v-divider.my-4
            h2 Become a Sponsor
            v-btn(color='pink', dark, large, block, to='/donate') Donate
            .caption.mt-3.text-xs-center Various platforms are supported, for both monthly and one-time donations.
            v-divider.my-4
            carbon
        v-flex(xs12, md8, xl9)
          .about-list
            h2(id='sponsors') Sponsors &amp; Backers
            .about-list-loading(v-if='!isLoaded')
              v-progress-circular(:value='true', color='primary', width='2', size='24', indeterminate)
              span Fetching list of sponsors...
            v-container.pa-0.mb-4(grid-list-xl)
              v-layout(row, wrap)
                v-flex(xs12, xl6, v-for='(sponsor, idx) of sponsors', :key='sponsor.id')
                  .about-list-item.animated.fadeInUp(:class='`wait-p` + idx + `s`')
                    img(v-if='sponsor.avatar', :src='sponsor.avatar')
                    v-avatar(v-else, color='green darken-1', size='68', tile)
                      .headline.white--text {{sponsor.name | initials}}
                    v-divider.mx-3(vertical)
                    .about-list-item-text
                      strong(v-html='sponsor.name')
                      div Since {{sponsor.joined | luxon }} on #[em.green--text {{sponsor.source}}]
                    v-spacer
                    v-btn(v-if='sponsor.twitter', icon, :href='sponsor.twitter', rel='nofollow')
                      img(:src='require(`../assets/logos/metro-twitter.svg`)', style='width: 24px;')
                    v-btn(v-if='sponsor.website', icon, :href='sponsor.website', rel='nofollow')
                      img(:src='require(`../assets/icons/ios-internet.svg`)')

            h2(id='developers') Developers
            .about-list-loading(v-if='!isLoaded')
              v-progress-circular(:value='true', color='orange', width='2', size='24', indeterminate)
              span Fetching list of developers...
            v-container.pa-0.mb-4(grid-list-xl)
              v-layout(row, wrap)
                v-flex(xs12, md6, xl4, v-for='developer of developers', :key='developer.id')
                  .about-list-item
                    img(v-if='developer.avatar', :src='developer.avatar', style='height: 48px; max-width: 48px;')
                    v-avatar(v-else, color='green darken-1', size='48', tile)
                      .headline.white--text {{developer.name | initials}}
                    v-divider.mx-3(vertical)
                    .about-list-item-text
                      strong(v-html='developer.name')
                      .orange--text.caption {{developer.extraInfo}} commits
                    v-spacer
                    v-btn(icon, :href='developer.website', rel='nofollow')
                      img(src='https://static.requarks.io/logo/github-octocat.svg')

            h2(id='translators') Translators
            .about-list-loading(v-if='!isLoaded')
              v-progress-circular(:value='true', color='blue', width='2', size='24', indeterminate)
              span Fetching list of translators...
            v-container.pa-0.mb-4(grid-list-xl)
              v-layout(row, wrap)
                v-flex(xs12, md6, xl4, v-for='translator of translators', :key='translator.id')
                  .about-list-item
                    v-avatar(color='blue', size='48', tile)
                      .title.white--text {{translator.name | initials}}
                    v-divider.mx-3(vertical)
                    .about-list-item-text
                      strong(v-html='translator.name')
                      .blue--text.caption(v-html='translator.extraInfo')

            h2(id='specialthanks') Special Thanks
            .about-list-item(v-for='sponsor of specialthanks', :key='sponsor.id')
              img(:src='sponsor.logo')
              v-divider.mx-3(vertical)
              .about-list-item-text
                a(:href='sponsor.link', target='_blank', v-html='sponsor.title', rel='nofollow')
                div(v-html='sponsor.description')
              v-spacer
              v-btn(icon, :href='sponsor.link', target='_blank', rel='nofollow')
                img(:src='require(`../assets/icons/ios-internet.svg`)')

</template>

<script>
import Carbon from '../components/Carbon'

import gql from 'graphql-tag'
import _ from 'lodash'

export default {
  components: {
    Carbon
  },
  data () {
    return {
      isLoaded: true,
      sponsors: [],
      developers: [],
      translators: [],
      specialthanks: [
        {
          logo: 'https://static.requarks.io/logo/browserstack.svg',
          title: 'BrowserStack',
          description: 'BrowserStack is a cloud-based cross-browser testing tool that enables developers to test their websites across various browsers on different operating systems and mobile devices, without requiring users to install virtual machines, devices or emulators.',
          link: 'https://www.browserstack.com'
        },
        {
          logo: 'https://static.requarks.io/logo/canny.svg',
          title: 'Canny',
          description: 'Canny helps you collect and organize feature requests to better understand customer needs and prioritize your roadmap.',
          link: 'https://canny.io'
        },
        {
          logo: 'https://static.requarks.io/logo/cloudflare-alt.svg',
          title: 'Cloudflare',
          description: 'Cloudflare provides content delivery network, DDoS mitigation, Internet security services and distributed domain name server services.',
          link: 'https://www.cloudflare.com'
        },
        {
          logo: 'https://static.requarks.io/logo/digitalocean-alt.svg',
          title: 'Digital Ocean',
          description: 'DigitalOcean is a simple and robust cloud computing platform, designed for developers.',
          link: 'https://m.do.co/c/5f7445bfa4d0'
        },
        {
          logo: 'https://static.requarks.io/logo/github-octocat.svg',
          title: 'GitHub',
          description: 'GitHub is a web-based Git repository hosting service.',
          link: 'https://www.github.com'
        },
        {
          logo: 'https://static.requarks.io/logo/icons8.svg',
          title: 'Icons8',
          description: 'All the Icons You Need. Guaranteed.',
          link: 'https://www.icons8.com'
        },
        {
          logo: 'https://static.requarks.io/logo/localazy-alt.svg',
          title: 'Localazy',
          description: 'Software & content localization on autopilot. Productive software developers choose Localazy for automated SW i18n and content localization.',
          link: 'https://www.localazy.com'
        },
        {
          logo: 'https://static.requarks.io/logo/lokalise.png',
          title: 'Lokalise',
          description: 'Lokalise is a translation management system built for agile teams who want to automate their localization process.',
          link: 'https://www.lokalise.co'
        },
        {
          logo: 'https://static.requarks.io/logo/netlify.svg',
          title: 'Netlify',
          description: 'Deploy modern static websites with Netlify. Get CDN, Continuous deployment, 1-click HTTPS, and all the services you need.',
          link: 'https://www.netlify.com'
        },
        {
          logo: 'https://static.requarks.io/logo/ngrok.svg',
          title: 'ngrok',
          description: 'ngrok provides a real-time web UI where you can introspect all HTTP traffic running over your tunnels.',
          link: 'https://ngrok.com'
        },
        {
          logo: 'https://static.requarks.io/logo/statuspage.svg',
          title: 'Statuspage',
          description: 'StatusPage.io is the best way for web infrastructure, developer API, and SaaS companies to get set up with their very own status page in minutes.',
          link: 'https://www.statuspage.io'
        }
      ]
    }
  },
  filters: {
    initials (value) {
      if (!value) return ''
      value = value.toString()
      return value.split(' ').map(v => v.charAt(0).toUpperCase()).join('')
    }
  },
  apollo: {
    sponsors: {
      query: gql`
        {
          sponsors {
            backers: list(kind:BACKER) {
              id
              source
              name
              joined
              website
              twitter
              extraInfo
              avatar
            },
            translators: list(kind:TRANSLATOR) {
              id
              name
              joined
              extraInfo
            },
            developers: list(kind:DEVELOPER) {
              id
              name
              website
              extraInfo
              avatar
            }
          }
        }
      `,
      manual: true,
      result ({ data, loading, networkStatus }) {
        this.sponsors = _.get(data, 'sponsors.backers', [])
        this.translators = _.get(data, 'sponsors.translators', [])
        this.developers = _.get(data, 'sponsors.developers', [])
      },
      watchLoading (isLoading, countModifier) {
        this.isLoaded = !isLoading
      }
    }
  }
}
</script>

<style lang='scss'>
.about {
  &-sidebar {
    background-color: #FFF;
    padding: 20px 40px;
    box-shadow: 0 2px 4px 0 rgba(12,0,46,.04);
    border-radius: 7px;
    font-size: 16px;
    color: var(--v-greyish-darken1);
    border: 1px solid #f4f4f9;

    h2 {
      font-size: 22px;
      font-weight: 600;
      margin-bottom: 20px;
      color: var(--v-greyish-darken2)
    }

    ul {
      list-style-type: none;
      padding: 0;

      li {
        + li {
          margin-top: 10px;
        }

        a {
          text-decoration: none;
          color: var(--v-greyish-darken1);

          &:hover {
            color: var(--v-primary-base);
          }
        }
      }
    }

    &-donate {
      text-align: center;

      &-info {
        font-size: 15px;
        margin-bottom: 12px;
      }
    }
  }

  &-ethaddress {
    background-color: var(--v-greyish-lighten2);
    border-radius: 7px;
    padding: 12px;

    strong {
      display: block;
    }

    span {
      font-size: 12px;
    }

    div {
      margin-top: 12px;
      background-color: #FFF;
      border-radius: 7px;
      padding: 12px;
    }
  }

  &-list {
    h2 {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 20px;
    }

    &-loading {
      background-color: #FFF;
      box-shadow: 0 2px 8px 0 rgba(12,0,46,.04);
      border-radius: 7px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 20px;
      margin-bottom: 30px;

      span {
        margin-left: 20px;
      }
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

      &:hover {
        box-shadow: 0 2px 30px 0 rgba(12,0,46,.15);
      }

      & + & {
        margin-top: 20px;
      }

      + h2 {
        margin-top: 30px;
      }

      > img {
        height: 68px;
        max-width: 68px;
        width: 100%;
        // background-color: var(--v-greyish-base);
      }

      &-text {
        color: var(--v-greyish-darken1);

        > a {
          font-size: 20px;
          font-weight: 500;
          color: var(--v-greyish-darken2);
          text-decoration: none;

          &:hover {
            color: var(--v-primary-base);
          }
        }

        em {
          font-style: normal;
        }
      }

      .v-btn--icon img {
        width: 32px;
        opacity: .5;

        &.small {
          width: 24px;
        }
      }
    }

  }
}
</style>

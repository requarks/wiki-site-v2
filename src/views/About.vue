<template lang='pug'>
  .about
    particles
      h1.animated.fadeInUp Sponsors &amp; Backers
      h3.animated.fadeInUp.wait-p2s Wiki.js is an AGPL-licensed open source project. It's an independent project with its ongoing development #[br] made possible entirely thanks to the support by the awesome sponsors &amp; backers listed below.
    v-container.my-4(grid-list-xl)
      v-layout(row, wrap)
        v-flex(xs12, md4, xl3)
          .about-sidebar
            h2 Quick Navigation
            ul
              li
                a(href='#sponsors') Sponsors &amp; Backers
                v-chip.ml-2(small, color='green lighten-5') {{sponsors.length}}
              li
                a(href='#translators') Translators
                v-chip.ml-2(small, color='blue lighten-5') {{translators.length}}
              li
                a(href='#developers') Developers
                v-chip.ml-2(small, color='orange lighten-5') {{developers.length}}
              li
                a(href='#specialthanks') Special Thanks
                v-chip.ml-2(small, color='grey lighten-3') {{specialthanks.length}}
            v-divider.my-4
            h2 Donate
            .about-sidebar-donate
              .about-sidebar-donate-info
                span Become a backer or sponsor via Patreon
                .caption Donations go directly into supporting lead developer Nicolas Giard's goal of working full-time on Wiki.js.
              a(href='https://www.patreon.com/bePatron?u=16744039')
                img(:src='require(`../assets/img/donate_patreon.png`)', alt='Become a Patron', style='width: 100%; max-width: 200px;')
              v-divider.my-3
              .about-sidebar-donate-info
                span Donate to our Open Collective initiative
                .caption A transparent fund that goes toward community resources. You can contribute financially by making a monthly or one-time donation:
              a(href='https://opencollective.com/wikijs/donate')
                img(:src='require(`../assets/img/donate_opencollective.png`)', alt='Donate on OpenCollective', style='width: 100%; max-width: 300px;')
              v-divider.my-3
              .about-sidebar-donate-info
                span Donate using Paypal
                .caption Accepts all major credit cards and PayPal accounts
              form.mt-3(action='https://www.paypal.com/cgi-bin/webscr', method='post', target='_top')
                input(type='hidden', name='cmd', value='_s-xclick')
                input(type='hidden', name='hosted_button_id', value='FLV5X255Z9CJU')
                input(type='image', :src='require(`../assets/img/donate_paypal.png`)', border='0', name='submit', title='PayPal - The safer, easier way to pay online!', alt='Donate with PayPal button')
                img(alt='', border='0', src='https://www.paypal.com/en_CA/i/scr/pixel.gif', width='1', height='1')
              v-divider.my-3
              .about-sidebar-donate-info
                span Donate using Ethereum
                .caption Use the Ethereum address below:
              .about-ethaddress
                span 0xE1d55C19aE86f6Bcbfb17e7f06aCe96BdBb22Cb5
                div
                  img(:src='require(`../assets/img/donate_eth_qr.png`)', style='max-width: 150px;')
            v-divider.my-4
            code-fund(tmpl='centered')
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
import CodeFund from '../components/CodeFund'
import Particles from '../components/Particles'

import gql from 'graphql-tag'
import _ from 'lodash'

export default {
  components: {
    CodeFund,
    Particles
  },
  data () {
    return {
      isLoaded: true,
      sponsors: [],
      translators: [],
      developers: [],
      specialthanks: [
        {
          logo: 'https://static.requarks.io/logo/algolia-alt.svg',
          title: 'Algolia',
          description: 'A powerful hosted search engine API, Algolia provides product teams with the resources &amp; tools they need to create fast, relevant search.',
          link: 'https://www.algolia.com'
        },
        {
          logo: 'https://static.requarks.io/logo/browserstack.svg',
          title: 'BrowserStack',
          description: 'BrowserStack is a cloud-based cross-browser testing tool that enables developers to test their websites across various browsers on different operating systems and mobile devices, without requiring users to install virtual machines, devices or emulators.',
          link: 'https://www.browserstack.com'
        },
        {
          logo: 'https://static.requarks.io/logo/bugsnag.svg',
          title: 'Bugsnag',
          description: 'Bugsnag monitors apps for errors that impact customers & reports all diagnostic data.',
          link: 'https://www.netlify.com'
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
          link: 'https://www.digitalocean.com'
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

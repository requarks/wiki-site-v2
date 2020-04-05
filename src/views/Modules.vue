<template lang='pug'>
  .modules
    .splash
      h1.animated.fadeInUp Modules
      h3.animated.fadeInUp.wait-p2s List of modules supported and included in Wiki.js
    v-container.my-4(grid-list-xl)
      v-layout(row, wrap)
        v-flex(xs12, md4, xl3)
          .modules-sidebar
            h2 Categories
            ul
              li
                a(href='#analytics') Analytics
              li
                a(href='#auth') Authentication
              li
                a(href='#db') Databases
              li
                a(href='#editors') Editors
              li
                a(href='#logging') Logging
              li
                a(href='#search') Search Engines
              li
                a(href='#storage') Storage
            v-divider.my-4
            .text-xs-center
              div: img(:src='require("../assets/icons/ios-crane.svg")', style='width: 34px;')
              .caption Modules with a crane icon are under development and will be available in an upcoming release.
            v-divider.my-4
            code-fund(tmpl='centered')
        v-flex(xs12, md8, xl9)
          .modules-list
            h2(id='analytics') Analytics
            .body-1.mb-3 Use analytics modules to quickly enable session tracking and browser performance monitoring on your wiki.
            v-container.pa-0.mb-4(grid-list-xl)
              v-layout(row, wrap)
                v-flex(xs12, md6, xl4, v-for='analytic of analytics', :key='analytic.id')
                  .modules-list-item
                    img.modules-list-item-logo(v-if='analytic.icon', :src='`https://static.requarks.io/logo/` + analytic.icon')
                    v-avatar(v-else, color='blue', size='48', tile)
                      img(:src='require("../assets/icons/ios-web-analytics.svg")')
                    v-divider.mx-3(vertical)
                    .modules-list-item-text
                      strong(v-html='analytic.name')
                      .blue--text.caption(v-html='analytic.company')
                    template(v-if='analytic.dev')
                      v-spacer
                      img.modules-list-item-dev(:src='require("../assets/icons/ios-crane.svg")', alt='Coming soon')

            h2(id='auth') Authentication
            .body-1.mb-3 Let your users use their existing logins on your wiki, whether it's a social login or enterprise authentication.
            v-container.pa-0.mb-4(grid-list-xl)
              v-layout(row, wrap)
                v-flex(xs12, md6, xl4, v-for='auth of auths', :key='auth.name')
                  .modules-list-item
                    img.modules-list-item-logo(v-if='auth.icon', :src='`https://static.requarks.io/logo/` + auth.icon')
                    v-avatar(v-else, color='indigo', size='48', tile)
                      img(:src='require("../assets/icons/ios-key.svg")')
                    v-divider.mx-3(vertical)
                    .modules-list-item-text
                      strong(v-html='auth.name')
                      .indigo--text.caption(v-html='auth.company')
                    template(v-if='auth.dev')
                      v-spacer
                      img.modules-list-item-dev(:src='require("../assets/icons/ios-crane.svg")', alt='Coming soon')

            h2(id='db') Databases
            .body-1.mb-3 Wiki.js is compatible with any of the following database systems.
            v-container.pa-0.mb-4(grid-list-xl)
              v-layout(row, wrap)
                v-flex(xs12, md6, xl4, v-for='db of dbs', :key='db.name')
                  .modules-list-item
                    img.modules-list-item-logo(v-if='db.icon', :src='`https://static.requarks.io/logo/` + db.icon')
                    v-avatar(v-else, color='blue-grey', size='48', tile)
                      img(:src='require("../assets/icons/ios-database.svg")')
                    v-divider.mx-3(vertical)
                    .modules-list-item-text
                      strong(v-html='db.name')
                      .blue-grey--text.caption(v-html='db.minVersion')
                    template(v-if='db.dev')
                      v-spacer
                      img.modules-list-item-dev(:src='require("../assets/icons/ios-crane.svg")', alt='Coming soon')

            h2(id='editors') Editors
            .body-1.mb-3 Users can use the editor they are most comfortable and proficient with.
            v-container.pa-0.mb-4(grid-list-xl)
              v-layout(row, wrap)
                v-flex(xs12, md6, xl4, v-for='editor of editors', :key='editor.name')
                  .modules-list-item
                    img.modules-list-item-logo(v-if='editor.icon', :src='`https://static.requarks.io/logo/` + editor.icon')
                    v-avatar(v-else, color='pink', size='48', tile)
                      img(:src='require("../assets/icons/ios-inscription.svg")')
                    v-divider.mx-3(vertical)
                    .modules-list-item-text
                      strong(v-html='editor.name')
                      .pink--text.caption(v-html='editor.desc')
                    template(v-if='editor.dev')
                      v-spacer
                      img.modules-list-item-dev(:src='require("../assets/icons/ios-crane.svg")', alt='Coming soon')

            h2(id='logging') Logging
            .body-1.mb-3 Ship all logs produced by Wiki.js to your logging services.
            v-container.pa-0.mb-4(grid-list-xl)
              v-layout(row, wrap)
                v-flex(xs12, md6, xl4, v-for='logger of loggers', :key='logger.name')
                  .modules-list-item
                    img.modules-list-item-logo(v-if='logger.icon', :src='`https://static.requarks.io/logo/` + logger.icon')
                    v-avatar(v-else, color='deep-orange', size='48', tile)
                      img(:src='require("../assets/icons/ios-check.svg")')
                    v-divider.mx-3(vertical)
                    .modules-list-item-text
                      strong(v-html='logger.name')
                      .deep-orange--text.caption(v-html='logger.company')
                    template(v-if='logger.dev')
                      v-spacer
                      img.modules-list-item-dev(:src='require("../assets/icons/ios-crane.svg")', alt='Coming soon')

            h2(id='search') Search Engines
            .body-1.mb-3 Wiki.js ships with 2 excellent database-based search engines. You can however leverage the amazing power of any of these powerful search engines.
            v-container.pa-0.mb-4(grid-list-xl)
              v-layout(row, wrap)
                v-flex(xs12, md6, xl4, v-for='searchEngine of searchEngines', :key='searchEngine.name')
                  .modules-list-item
                    img.modules-list-item-logo(v-if='searchEngine.icon', :src='`https://static.requarks.io/logo/` + searchEngine.icon')
                    v-avatar(v-else, color='teal', size='48', tile)
                      img(:src='require("../assets/icons/ios-google-web-search.svg")')
                    v-divider.mx-3(vertical)
                    .modules-list-item-text
                      strong(v-html='searchEngine.name')
                      .teal--text.caption(v-html='searchEngine.company')
                    template(v-if='searchEngine.dev')
                      v-spacer
                      img.modules-list-item-dev(:src='require("../assets/icons/ios-crane.svg")', alt='Coming soon')

            h2(id='storage') Storage
            .body-1.mb-3 Sync and backup your content to any of these storage services.
            v-container.pa-0.mb-4(grid-list-xl)
              v-layout(row, wrap)
                v-flex(xs12, md6, xl4, v-for='storageTarget of storageTargets', :key='storageTarget.name')
                  .modules-list-item
                    img.modules-list-item-logo(v-if='storageTarget.icon', :src='`https://static.requarks.io/logo/` + storageTarget.icon')
                    v-avatar(v-else, color='green', size='48', tile)
                      img(:src='require("../assets/icons/ios-cloud-storage.svg")')
                    v-divider.mx-3(vertical)
                    .modules-list-item-text
                      strong(v-html='storageTarget.name')
                      .green--text.caption(v-html='storageTarget.company')
                    template(v-if='storageTarget.dev')
                      v-spacer
                      img.modules-list-item-dev(:src='require("../assets/icons/ios-crane.svg")', alt='Coming soon')

</template>

<script>
import CodeFund from '../components/CodeFund'

export default {
  components: {
    CodeFund
  },
  data () {
    return {
      analytics: [
        { name: 'Application Insights', company: 'Microsoft Azure', icon: 'azure-alt.svg' },
        { name: 'Baidu Tongji', company: 'Baidu', icon: 'baidu.svg' },
        { name: 'Countly', company: 'Countly', icon: 'countly-alt.svg' },
        { name: 'Elasticsearch APM RUM', company: 'Elastic', icon: 'elasticsearch-apm.svg' },
        { name: 'Fathom Analytics', company: 'Fathom', icon: 'fathom.svg' },
        { name: 'FullStory', company: 'FullStory', icon: 'fullstory.svg' },
        { name: 'Google Analytics', company: 'Google', icon: 'google-lytics.svg' },
        { name: 'Google Tag Manager', company: 'Google', icon: 'google-tag-manager.svg' },
        { name: 'Hotjar', company: 'Hotjar', icon: 'hotjar.svg' },
        { name: 'Matomo', company: 'Matomo', icon: 'matomo-alt.svg' },
        { name: 'New Relic Browser', company: 'New Relic', icon: 'newrelic-alt.svg' },
        { name: 'StatCounter', company: 'StatCounter', icon: 'statcountr-alt.svg' },
        { name: 'Yandex Metrica', company: 'Yandex', icon: 'yandex-alt.svg' }
      ],
      auths: [
        { name: 'Auth0', company: 'Auth0', icon: 'auth0.svg' },
        { name: 'Azure Active Directory', company: 'Microsoft Azure', icon: 'azure-active-directory.svg' },
        { name: 'CAS', company: 'Apereo Foundation', dev: true },
        { name: 'Discord', company: 'Discord', icon: 'discord.svg' },
        { name: 'Dropbox', company: 'Dropbox', icon: 'dropbox-alt.svg' },
        { name: 'Facebook', company: 'Facebook', icon: 'facebook-alt.svg' },
        { name: 'Firebase', company: 'Google', icon: 'firebase.svg', dev: true },
        { name: 'Google', company: 'Google', icon: 'google-alt.svg' },
        { name: 'GitHub', company: 'GitHub', icon: 'github-octocat.svg' },
        { name: 'GitLab', company: 'GitLab', icon: 'gitlab-alt.svg' },
        { name: 'LDAP / Active Directory', company: 'Microsoft', icon: 'windows.svg' },
        { name: 'Local DB', company: 'Requarks.io' },
        { name: 'Microsoft', company: 'Microsoft', icon: 'microsoft-alt.svg', dev: true },
        { name: 'Generic OAuth2', company: 'Requarks.io', dev: true },
        { name: 'Generic OpenID Connect', company: 'Requarks.io', dev: true },
        { name: 'Okta', company: 'Okta', icon: 'okta.svg' },
        { name: 'SAML 2.0', company: 'OASIS', icon: 'saml.svg' },
        { name: 'Slack', company: 'Slack', icon: 'slack-alt.svg' },
        { name: 'Twitch', company: 'Twitch', icon: 'twitch.svg' }
      ],
      dbs: [
        { name: 'MariaDB', minVersion: '10.2.7 or later', icon: 'mariadb.svg' },
        { name: 'MySQL', minVersion: '8.0 or later (limited 5.7 support)', icon: 'mysql.svg' },
        { name: 'PostgreSQL', minVersion: '9.5 or later', icon: 'postgresql.svg' },
        { name: 'SQLite3', minVersion: '3.9 or later', icon: 'sqlite-alt.svg' },
        { name: 'SQL Server', minVersion: '2012 or later', icon: 'microsoft-sql-server-alt.svg' }
      ],
      editors: [
        { name: 'API Docs', desc: 'REST / GraphQL', dev: true },
        { name: 'Blog', desc: 'Timeline of Posts', dev: true },
        { name: 'Code', desc: 'Raw HTML' },
        { name: 'Markdown', desc: 'Plain Text Formatting' },
        { name: 'Tabular', desc: 'Excel-like', dev: true },
        { name: 'Visual Editor', desc: 'Rich-text Formatting' }
      ],
      loggers: [
        { name: 'Airbrake', company: 'Airbrake', icon: 'airbrake.svg', dev: true },
        { name: 'Bugsnag', company: 'Bugsnag', icon: 'bugsnag.svg', dev: true },
        { name: 'Log Files', company: 'Requarks.io', dev: true },
        { name: 'Loggly', company: 'Loggly', icon: 'loggly.svg', dev: true },
        { name: 'Logstash', company: 'Elastic', icon: 'logstash.svg', dev: true },
        { name: 'New Relic APM', company: 'New Relic', icon: 'newrelic-alt.svg', dev: true },
        { name: 'Papertrail', company: 'Papertrail', icon: 'papertrail-alt.svg', dev: true },
        { name: 'Raygun', company: 'Raygun', icon: 'raygun-alt.svg', dev: true },
        { name: 'Rollbar', company: 'Rollbar', icon: 'rollbar.svg', dev: true },
        { name: 'Sentry', company: 'Sentry', icon: 'sentry.svg', dev: true },
        { name: 'Syslog', company: 'Requarks.io', dev: true },
        { name: 'Windows Event Log', company: 'Microsoft', dev: true }
      ],
      searchEngines: [
        { name: 'CloudSearch', company: 'Amazon Web Services', icon: 'aws-cloudsearch.svg' },
        { name: 'Algolia', company: 'Algolia', icon: 'algolia-alt.svg' },
        { name: 'Azure Search', company: 'Microsoft Azure', icon: 'azure-alt.svg' },
        { name: 'DB - Basic', company: 'Requarks.io' },
        { name: 'DB - PostgreSQL', company: 'Requarks.io' },
        { name: 'Elasticsearch', company: 'Elastic', icon: 'elasticsearch-alt.svg' },
        { name: 'Manticore Search', company: 'Manticore Software', icon: 'manticore-alt.svg', dev: true },
        { name: 'Solr', company: 'Apache', icon: 'solr.svg', dev: true },
        { name: 'Sphinx', company: 'Sphinx Technologies', icon: 'sphinx-alt.svg', dev: true }
      ],
      storageTargets: [
        { name: 'AWS S3', company: 'Amazon Web Services', icon: 'aws-s3.svg' },
        { name: 'Azure Blob Storage', company: 'Microsoft Azure', icon: 'azure-alt.svg' },
        { name: 'Box', company: 'Box', icon: 'box.svg', dev: true },
        { name: 'DigitalOcean Spaces', company: 'DigitalOCean', icon: 'digitalocean-alt.svg' },
        { name: 'Dropbox', company: 'Dropbox', icon: 'dropbox-alt.svg', dev: true },
        { name: 'Git', company: 'Software Freedom Conservancy', icon: 'git-alt.svg' },
        { name: 'Google Drive', company: 'Google', icon: 'google-alt.svg', dev: true },
        { name: 'Local File System', company: 'Requarks.io' },
        { name: 'OneDrive', company: 'Microsoft', icon: 'microsoft-alt.svg', dev: true },
        { name: 'SFTP', company: 'Requarks.io' }
      ]
    }
  }
}
</script>

<style lang='scss'>
.modules {
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
  }

  &-list {
    h2 {
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 20px;
      padding-top: 50px;

      &:first-child {
        padding-top: 0;
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

      .v-avatar > img {
        height: 32px;
        width: 32px;
      }

      &-logo {
        width: 48px;
        height: 48px;
      }

      &-dev {
        width: 32px;
        opacity: .25;
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
    }

  }
}
</style>

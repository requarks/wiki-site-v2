<template lang='pug'>
  .home-features
    h2(id='features') Bundled with everything you need
    h3 Not all teams need the same set of features. That's why Wiki.js offers a wide range of modules that can be turned on/off on demand.
    v-tabs.mt-4(
      v-model='currentTab'
      :fixed-tabs='$vuetify.breakpoint.xlOnly'
      centered
      slider-color='primary'
      show-arrows
      next-icon=''
      prev-icon=''
      )
      v-tab(
        v-for='ft of features'
        :key='ft.key'
        :href='`#tab-` + ft.key'
        ) {{ft.title}}
    v-tabs-items(v-model='currentTab')
      v-tab-item(v-for='ft of features', :key='ft.key', :value='`tab-` + ft.key', :transition='false', :reverse-transition='false')
        v-container.mt-5(grid-list-xl)
          v-layout(row, wrap, justify-center)
            v-flex(xs12, sm6, v-for='(tl, idx) of ft.tiles', :key='ft.key+idx')
              .home-features-tile.animated.fadeInUp(:class='`wait-p` + idx + `s`')
                img(:src='tl.icon')
                h5(v-html='tl.title')
                span(v-html='tl.description')
</template>

<script>

export default {
  name: 'HomeFeatures',
  data () {
    return {
      currentTab: 'tab-authentication',
      features: [
        {
          key: 'authentication',
          title: 'Authentication',
          tiles: [
            {
              icon: require(`../assets/icons/nolan-data-protection.svg`),
              title: 'Local Authentication',
              description: 'Built-in authentication with self-registration and password recovery capabilities.'
            },
            {
              icon: require(`../assets/icons/nolan-cloud-checked.svg`),
              title: 'Social Authentication',
              description: 'Use 3rd-party authentication services like Google, Facebook, Microsoft, GitHub, Discord, Slack and more.'
            },
            {
              icon: require(`../assets/icons/nolan-organization.svg`),
              title: 'Enterprise Authentication',
              description: 'Integrate with your company existing authentication using LDAP, SAML, CAS, Auth0, Okta, Azure AD and more. Generic OAuth2 and OpenID Connect modules are also included.'
            },
            {
              icon: require(`../assets/icons/nolan-validation.svg`),
              title: '2FA',
              description: 'Add an extra layer of security using two-factor authentication for supported authentication modules.'
            }
          ]
        },
        {
          key: 'Editors',
          title: 'Editors',
          tiles: [
            {
              icon: require(`../assets/icons/nolan-markdown.svg`),
              title: 'Markdown',
              description: 'The most popular format for documentation among developers. Includes live preview and toolbar / keyboard shortcuts quick access.'
            },
            {
              icon: require(`../assets/icons/nolan-overview.svg`),
              title: 'Visual Builder',
              description: 'Simple and easy to use WYSIWYG editor for non-technical people. No coding or special syntax knowledge required.'
            },
            {
              icon: require(`../assets/icons/nolan-html.svg`),
              title: 'Plain HTML',
              description: 'Write content directly in HTML. Perfect for importing preformatted HTML pages from other sources.'
            },
            {
              icon: require(`../assets/icons/nolan-select-all.svg`),
              title: 'WikiText',
              description: 'Easily migrate content from MediaWiki platforms using this WikiText editor.'
            },
            {
              icon: require(`../assets/icons/nolan-rest-api.svg`),
              title: 'API Docs',
              description: 'Document your APIs with this powerful REST / GraphQL optimized editor. Add your endpoints, parameters, response and code examples.'
            },
            {
              icon: require(`../assets/icons/nolan-table.svg`),
              title: 'Tabular',
              description: 'Quickly create excel-like pages with this powerful table editor.'
            }
          ]
        },
        {
          key: 'History',
          title: 'History',
          tiles: [
            {
              icon: require(`../assets/icons/nolan-versions.svg`),
              title: 'Version Tracking',
              description: 'All content modifications are tracked. You can revert to a previous state or recover a deleted page at any time. Easily keep track of who changed what.'
            },
            {
              icon: require(`../assets/icons/nolan-diff-files.svg`),
              title: 'Compare Versions',
              description: 'Visually compare two versions of the same page to see exactly what changed.'
            },
            {
              icon: require(`../assets/icons/nolan-split-files.svg`),
              title: 'Export / Branch off',
              description: 'Quickly export a specific version of a page or create a new page from an older version.'
            }
          ]
        },
        {
          key: 'Localization',
          title: 'Localization',
          tiles: [
            {
              icon: require(`../assets/icons/nolan-globe-earth.svg`),
              title: 'Available in your language',
              description: 'Wiki.js is translated in over 25 languages! If your language is not available yet, help us translating it with our easy to use tools. No coding required!'
            },
            {
              icon: require(`../assets/icons/nolan-align-right.svg`),
              title: 'Native RTL Support',
              description: 'Right-to-left languages are fully supported.'
            },
            {
              icon: require(`../assets/icons/nolan-comments.svg`),
              title: 'Multilingual Content',
              description: 'Make your wiki available in multiple languages. Quickly switch between languages for the same page.'
            }
          ]
        },
        {
          key: 'Media Assets',
          title: 'Media Assets',
          tiles: [
            {
              icon: require(`../assets/icons/nolan-pictures-folder.svg`),
              title: 'Assets Manager',
              description: 'Upload and manage your media assets from the Assets Manager. Easily categorize your assets in folders and see where they are used.'
            },
            {
              icon: require(`../assets/icons/nolan-edit-image.svg`),
              title: 'Image Editor',
              description: 'Perform various transformations on your images using the built-in image editor. Cropping, resizing and applying filters has never been easier!'
            }
          ]
        },
        {
          key: 'Rendering',
          title: 'Rendering',
          tiles: [
            {
              icon: require(`../assets/icons/nolan-outline.svg`),
              title: 'Code Highlighting',
              description: 'Insert code snippets with full color syntax Highlighting and line numbering.'
            },
            {
              icon: require(`../assets/icons/nolan-workflow.svg`),
              title: 'Diagrams',
              description: 'Easily generate diagrams such as UML, Flowcharts, Sequence and more.'
            },
            {
              icon: require(`../assets/icons/nolan-sigma.svg`),
              title: 'Math Expressions',
              description: 'Render complex math expressions using TeX or MathML syntax.'
            },
            {
              icon: require(`../assets/icons/nolan-play-button.svg`),
              title: 'Media Players',
              description: 'Include media content such as Youtube videos, audio, asciinema and more.'
            }
          ]
        },
        {
          key: 'Search',
          title: 'Search',
          tiles: [
            {
              icon: require(`../assets/icons/nolan-google-web-search.svg`),
              title: 'Database',
              description: 'Wiki.js comes with a search engine built-in. It requires zero setup and is the best option for most users.'
            },
            {
              icon: require(`../assets/icons/nolan-partly-cloudy-day.svg`),
              title: 'Cloud Search',
              description: 'Use cloud search services like Algolia, Azure Search and more to power your wiki search capabilities.'
            },
            {
              icon: require(`../assets/logos/nolan-elasticsearch2.svg`),
              title: 'Elasticsearch',
              description: 'Use your existing elasticsearch installation to power your wiki search capabilities.'
            },
            {
              icon: require(`../assets/icons/nolan-more.svg`),
              title: 'and more...',
              description: 'Use external search engines like Manticore, Solr or Sphinx to power your wiki search capabilities.'
            }
          ]
        },
        {
          key: 'Storage',
          title: 'Storage',
          tiles: [
            {
              icon: require(`../assets/logos/nolan-github.svg`),
              title: 'Git',
              description: 'Synchronize or backup your content to popular Git services such as GitHub, GitLab, BitBucket, Azure DevOps and more.'
            },
            {
              icon: require(`../assets/icons/nolan-cloud-storage.svg`),
              title: 'Enterprise Cloud Storage',
              description: 'Backup your content to cloud storage services like AWS S3, Azure Blob Storage, Google Cloud Storage, DigitalOcean Spaces and more.'
            },
            {
              icon: require(`../assets/icons/nolan-onedrive.svg`),
              title: 'Personal Cloud Storage',
              description: 'Backup your content to your personal cloud storage service such as Dropbox, Google Drive, MS OneDrive, Box and more.'
            },
            {
              icon: require(`../assets/icons/nolan-hdd.svg`),
              title: 'Local / Network',
              description: 'Backup your content locally on disk / network share or to a remote server on the network using Secure Copy over SSH.'
            }
          ]
        },
        {
          key: 'User Management',
          title: 'User Management',
          tiles: [
            {
              icon: require(`../assets/icons/nolan-registration.svg`),
              title: 'Management Tool',
              description: 'Manage your users from the administration area. Quickly create new users or edit all aspects of existing users.'
            },
            {
              icon: require(`../assets/icons/nolan-conference.svg`),
              title: 'Groups',
              description: 'Assign users into groups to control what they can do or access. No need to waste time assigning permissions on a per user basis!'
            },
            {
              icon: require(`../assets/icons/nolan-id-verified.svg`),
              title: 'Permissions',
              description: 'Set group permissions to effectively control what your users can do or access. Granular permissions for page editing, assets management and access to various parts of the administration area.'
            },
            {
              icon: require(`../assets/icons/nolan-report-card.svg`),
              title: 'Page Rules',
              description: 'Set advanced and precise page rules to groups using exact path, start/end with and regex filters.'
            }
          ]
        },
        {
          key: 'Themes',
          title: 'Themes',
          tiles: [
            {
              icon: require(`../assets/icons/nolan-drafting-compass.svg`),
              title: 'Custom Themes',
              description: 'Create your own themes to fully change the look and feel of your wiki.'
            },
            {
              icon: require(`../assets/icons/nolan-record.svg`),
              title: 'Dark Mode',
              description: 'Choose between light and dark mode for the UI.'
            },
            {
              icon: require(`../assets/icons/nolan-color-wheel.svg`),
              title: 'Default Theme Personalization',
              description: 'The default theme has many color and display options. Make it your own!'
            },
            {
              icon: require(`../assets/icons/nolan-lightning-bolt.svg`),
              title: 'Inject Custom CSS / JS',
              description: 'You can override CSS or inject extra Javascript directly from the administration area.'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang='scss'>
.home-features {
  background-color: var(--v-greyish-lighten4);
  text-align: center;
  padding: 100px 0 50px 0;
  color: var(--v-greyish-darken2);

  @media screen and (max-width: 599px) {
    padding: 50px 0 0 0;
  }

  .container {
    max-width: 1200px;
  }

  h2 {
    font-size: 30px;
    font-weight: 600;
    padding: 0 15px;
    line-height: 30px;

    @media screen and (max-width: 599px) {
      font-size: 25px;
    }
  }
  h3 {
    font-size: 16px;
    font-weight: 300;
    padding: 15px;
    color: var(--v-greyish-darken1);
  }

  .v-tabs__bar {
    background: var(--v-greyish-lighten4); // linear-gradient(to bottom, var(--v-greyish-lighten4) 0%, #FFF 100%);
    box-shadow: inset 0px -2px rgba(#6754e2, .1);

    .v-tabs__item {
      color: var(--v-greyish-darken2);
      &.v-tabs__item--active {
        color: var(--v-primary-base);
      }
    }

    .v-tabs__icon--next {
      background: transparent url(../assets/icons/metro-forward.svg) no-repeat center right;
    }
    .v-tabs__icon--prev {
      background: transparent url(../assets/icons/metro-back.svg) no-repeat center left;
    }
  }

  &-tile {
    text-align: center;
    padding-bottom: 50px;

    h5 {
      font-weight: 600;
      font-size: 17px;
      margin: 5px 0 10px 0;
    }

    span {
      font-size: 15px;
      font-weight: 300;
      color: var(--v-greyish-darken1);
    }
  }
}
</style>

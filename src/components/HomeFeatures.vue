<template lang='pug'>
  .home-features
    h2(id='features') Bundled with everything you need
    h3 Not all teams need the same set of features. That's why Wiki.js offers a wide range of modules that can be turned on/off on demand.
    v-tabs.mt-4(
      v-model='currentTab'
      :fixed-tabs='false'
      align-tabs='center'
      color='primary'
      show-arrows
      )
      v-tab(
        v-for='ft of features'
        :key='ft.key'
        :value='ft.key'
        ) {{ft.title}}
    v-window(v-model='currentTab')
      v-window-item(v-for='ft of features', :key='ft.key', :value='ft.key')
        v-container.mt-5
          v-row(justify='center')
            v-col(cols='12', sm='6', v-for='(tl, idx) of ft.tiles', :key='ft.key+idx')
              .home-features-tile.animated.fadeInUp(:class='`wait-p` + idx + `s`')
                img(:src='tl.icon', :alt='tl.title')
                h5
                  strong(v-html='tl.title')
                  v-chip.ml-2.supersmall(v-if='tl.comingsoon', small) Coming Soon
                span(v-html='tl.description')
</template>

<script>

export default {
  name: 'HomeFeatures',
  data () {
    return {
      currentTab: 'authentication',
      features: [
        {
          key: 'authentication',
          title: 'Authentication',
          tiles: [
            {
              icon: new URL('../assets/icons/nolan-data-protection.svg', import.meta.url).href,
              title: 'Local Authentication',
              description: 'Built-in authentication with self-registration and password recovery capabilities.'
            },
            {
              icon: new URL('../assets/icons/nolan-cloud-checked.svg', import.meta.url).href,
              title: 'Social Authentication',
              description: 'Use 3rd-party authentication services like Google, Facebook, Microsoft, GitHub, Discord, Slack and more.'
            },
            {
              icon: new URL('../assets/icons/nolan-organization.svg', import.meta.url).href,
              title: 'Enterprise Authentication',
              description: 'Integrate with your company existing authentication using LDAP, SAML, CAS, Auth0, Okta, Azure AD and more. Generic OAuth2 and OpenID Connect modules are also included.'
            },
            {
              icon: new URL('../assets/icons/nolan-validation.svg', import.meta.url).href,
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
              icon: new URL('../assets/icons/nolan-markdown.svg', import.meta.url).href,
              title: 'Markdown',
              description: 'The most popular format for documentation among developers. Includes live preview and toolbar / keyboard shortcuts quick access.'
            },
            {
              icon: new URL('../assets/icons/nolan-overview.svg', import.meta.url).href,
              title: 'Visual Builder',
              description: 'Simple and easy to use WYSIWYG editor for non-technical people. No coding or special syntax knowledge required.'
            },
            {
              icon: new URL('../assets/icons/nolan-html.svg', import.meta.url).href,
              title: 'Plain HTML',
              description: 'Write content directly in HTML. Perfect for importing preformatted HTML pages from other sources.'
            },
            {
              icon: new URL('../assets/icons/nolan-select-all.svg', import.meta.url).href,
              title: 'WikiText',
              description: 'Easily migrate content from MediaWiki platforms using this WikiText editor.',
              comingsoon: true
            },
            {
              icon: new URL('../assets/icons/nolan-rest-api.svg', import.meta.url).href,
              title: 'API Docs',
              description: 'Document your APIs with this powerful REST / GraphQL optimized editor. Add your endpoints, parameters, response and code examples.',
              comingsoon: true
            },
            {
              icon: new URL('../assets/icons/nolan-table.svg', import.meta.url).href,
              title: 'Tabular',
              description: 'Quickly create excel-like pages with this powerful table editor.',
              comingsoon: true
            }
          ]
        },
        {
          key: 'History',
          title: 'History',
          tiles: [
            {
              icon: new URL('../assets/icons/nolan-versions.svg', import.meta.url).href,
              title: 'Version Tracking',
              description: 'All content modifications are tracked. You can revert to a previous state or recover a deleted page at any time. Easily keep track of who changed what.'
            },
            {
              icon: new URL('../assets/icons/nolan-diff-files.svg', import.meta.url).href,
              title: 'Compare Versions',
              description: 'Visually compare two versions of the same page to see exactly what changed.'
            },
            {
              icon: new URL('../assets/icons/nolan-split-files.svg', import.meta.url).href,
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
              icon: new URL('../assets/icons/nolan-globe-earth.svg', import.meta.url).href,
              title: 'Available in your language',
              description: 'Wiki.js is translated in over 40 languages! If your language is not available yet, help us translating it with our easy to use tools. No coding required!'
            },
            {
              icon: new URL('../assets/icons/nolan-align-right.svg', import.meta.url).href,
              title: 'Native RTL Support',
              description: 'Right-to-left languages are fully supported.'
            },
            {
              icon: new URL('../assets/icons/nolan-comments.svg', import.meta.url).href,
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
              icon: new URL('../assets/icons/nolan-pictures-folder.svg', import.meta.url).href,
              title: 'Assets Manager',
              description: 'Upload and manage your media assets from the Assets Manager. Easily categorize your assets in folders and see where they are used.'
            },
            {
              icon: new URL('../assets/icons/nolan-edit-image.svg', import.meta.url).href,
              title: 'Image Editor',
              description: 'Perform various transformations on your images using the built-in image editor. Cropping, resizing and applying filters has never been easier!',
              comingsoon: true
            }
          ]
        },
        {
          key: 'Rendering',
          title: 'Rendering',
          tiles: [
            {
              icon: new URL('../assets/icons/nolan-outline.svg', import.meta.url).href,
              title: 'Code Highlighting',
              description: 'Insert code snippets with full color syntax Highlighting and line numbering.'
            },
            {
              icon: new URL('../assets/icons/nolan-workflow.svg', import.meta.url).href,
              title: 'Diagrams',
              description: 'Easily generate diagrams such as UML, Flowcharts, Sequence and more.'
            },
            {
              icon: new URL('../assets/icons/nolan-sigma.svg', import.meta.url).href,
              title: 'Math Expressions',
              description: 'Render complex math expressions using TeX or MathML syntax.'
            },
            {
              icon: new URL('../assets/icons/nolan-play-button.svg', import.meta.url).href,
              title: 'Media Players',
              description: 'Include media content such as Youtube videos, audio, asciinema and more.',
              comingsoon: true
            }
          ]
        },
        {
          key: 'Search',
          title: 'Search',
          tiles: [
            {
              icon: new URL('../assets/icons/nolan-google-web-search.svg', import.meta.url).href,
              title: 'Database',
              description: 'Wiki.js comes with a search engine built-in. It requires zero setup and is the best option for most users.'
            },
            {
              icon: new URL('../assets/icons/nolan-partly-cloudy-day.svg', import.meta.url).href,
              title: 'Cloud Search',
              description: 'Use cloud search services like Algolia, Azure Search and more to power your wiki search capabilities.'
            },
            {
              icon: new URL('../assets/logos/nolan-elasticsearch2.svg', import.meta.url).href,
              title: 'Elasticsearch',
              description: 'Use your existing elasticsearch installation to power your wiki search capabilities.'
            },
            {
              icon: new URL('../assets/icons/nolan-more.svg', import.meta.url).href,
              title: 'and more...',
              description: 'Use external search engines like Manticore, Solr or Sphinx to power your wiki search capabilities.',
              comingsoon: true
            }
          ]
        },
        {
          key: 'Storage',
          title: 'Storage',
          tiles: [
            {
              icon: new URL('../assets/logos/nolan-github.svg', import.meta.url).href,
              title: 'Git',
              description: 'Synchronize or backup your content to popular Git services such as GitHub, GitLab, BitBucket, Azure DevOps and more.'
            },
            {
              icon: new URL('../assets/icons/nolan-cloud-storage.svg', import.meta.url).href,
              title: 'Enterprise Cloud Storage',
              description: 'Backup your content to cloud storage services like AWS S3, Azure Blob Storage, Google Cloud Storage, DigitalOcean Spaces and more.'
            },
            {
              icon: new URL('../assets/icons/nolan-onedrive.svg', import.meta.url).href,
              title: 'Personal Cloud Storage',
              description: 'Backup your content to your personal cloud storage service such as Dropbox, Google Drive, MS OneDrive, Box and more.',
              comingsoon: true
            },
            {
              icon: new URL('../assets/icons/nolan-hdd.svg', import.meta.url).href,
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
              icon: new URL('../assets/icons/nolan-registration.svg', import.meta.url).href,
              title: 'Management Tool',
              description: 'Manage your users from the administration area. Quickly create new users or edit all aspects of existing users.'
            },
            {
              icon: new URL('../assets/icons/nolan-conference.svg', import.meta.url).href,
              title: 'Groups',
              description: 'Assign users into groups to control what they can do or access. No need to waste time assigning permissions on a per user basis!'
            },
            {
              icon: new URL('../assets/icons/nolan-id-verified.svg', import.meta.url).href,
              title: 'Permissions',
              description: 'Set group permissions to effectively control what your users can do or access. Granular permissions for page editing, assets management and access to various parts of the administration area.'
            },
            {
              icon: new URL('../assets/icons/nolan-report-card.svg', import.meta.url).href,
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
              icon: new URL('../assets/icons/nolan-drafting-compass.svg', import.meta.url).href,
              title: 'Custom Themes',
              description: 'Create your own themes to fully change the look and feel of your wiki.',
              comingsoon: true
            },
            {
              icon: new URL('../assets/icons/nolan-record.svg', import.meta.url).href,
              title: 'Dark Mode',
              description: 'Choose between light and dark mode for the UI.'
            },
            {
              icon: new URL('../assets/icons/nolan-color-wheel.svg', import.meta.url).href,
              title: 'Default Theme Personalization',
              description: 'The default theme has many color and display options. Make it your own!',
              comingsoon: true
            },
            {
              icon: new URL('../assets/icons/nolan-lightning-bolt.svg', import.meta.url).href,
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
  background-color: rgb(var(--v-theme-greyish-lighten4));
  text-align: center;
  padding: 100px 0 50px 0;
  color: rgb(var(--v-theme-greyish-darken2));

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
    color: rgb(var(--v-theme-greyish-darken1));
  }

  .v-tabs {
    background: rgb(var(--v-theme-greyish-lighten4)); // linear-gradient(to bottom, var(--v-theme-greyish-lighten4) 0%, #FFF 100%);
    box-shadow: inset 0px -2px rgba(103, 84, 226, .1);

    .v-tab {
      color: rgb(var(--v-theme-greyish-darken2));
      &.v-tab--selected {
        color: rgb(var(--v-theme-primary));
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
      color: rgb(var(--v-theme-greyish-darken1));
    }
  }
}
</style>

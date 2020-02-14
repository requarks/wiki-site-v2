<template lang='pug'>
  .getstarted
    particles
      h1.animated.fadeInUp Get Started
      h3.animated.fadeInUp.wait-p2s Deploy Wiki.js on your environment
    v-container(grid-list-xl)
      v-layout(row, wrap)
        v-flex(xs12, sm6)
          .getstarted-ver.animated.fadeInUp
            img.getstarted-ver-icon(:src='require(`../assets/icons/pastel-test-tube.svg`)', alt='Stable')
            v-chip.my-3(color='teal', dark, outline)
              .body-2 STABLE
            h2(v-html='stable')
            .body-2 Recommended for new installations
            .getstarted-ver-req
              strong Requirements
              ul
                li Node.js #[em 10.12 or later]
                li MySQL, MariaDB, PostgreSQL, MSSQL or SQLite3
            v-btn(color='teal', large, dark, href='https://docs.requarks.io/install')
              span Setup Instructions
        v-flex(xs12, sm6)
          .getstarted-ver.animated.fadeInUp.wait-p1s
            img.getstarted-ver-icon(:src='require(`../assets/icons/pastel-greek-pillar-base.svg`)', alt='Legacy')
            v-chip.my-3(color='purple', dark, outline)
              .body-2 LEGACY
            h2(v-html='legacy')
            .body-2 Previous version of Wiki.js
            .getstarted-ver-req
              strong Requirements
              ul
                li Node.js #[em 6.11.1 or later]
                li MongoDB #[em 3.2 or later]
                li Git #[em 2.7.4 or later]
            v-btn(color='purple', large, dark, href='https://docs-legacy.requarks.io/wiki/install')
              span Setup Instructions
        v-flex(xs12)
          .getstarted-note.animated.fadeInUp.wait-p2s Upgrading from 1.x to 2.0 is quick and simple.
        //- v-flex(xs12)
          //- .getstarted-note.animated.fadeInUp.wait-p3s
            //- h3 What's missing in 2.x compared to 1.0?
            //- ul
              //- li Mathjax Support
              //- li Microsoft Account Login

</template>

<script>
import Particles from '../components/Particles'
import { get } from 'vuex-pathify'

export default {
  components: {
    Particles
  },
  data () {
    return { }
  },
  computed: {
    stable: get('stable'),
    legacy: get('legacy')
  }
}
</script>

<style lang='scss'>
.getstarted {
  > .container {
    max-width: 1200px;
  }

  &-ver {
    background: var(--v-greyish-base) linear-gradient(45deg, transparent, var(--v-greyish-lighten4));
    border: 1px solid transparent;
    border-radius: 8px;
    padding: 12px;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    transition: all .6s ease;
    position: relative;

    &-icon {
      height: 64px;
    }

    &-req {
      padding: 12px;
      background-color: var(--v-greyish-lighten2);
      border-radius: 8px;
      width: 100%;
      margin: 24px 0;
      height: 120px;

      ul {
        margin-top: 12px;
        padding: 0;
        list-style-position: inside;

        li {
          em {
            font-style: normal;
            font-weight: 500;
            color: var(--v-greyish-darken1);
          }
        }
      }
    }

    .v-btn {
      img {
        height: 24px;
        margin-right: 12px;
      }
    }
  }

  &-note {
    background: var(--v-greyish-lighten2) linear-gradient(45deg, transparent, rgba(255,255,255,.5));;
    border-radius: 8px;
    padding: 12px;
    text-align: center;
    color: var(--v-greyish-darken1);

    h3 {
      font-weight: 500;
      color: var(--v-greyish-darken2);
    }

    ul {
      padding: 0;
      margin: 12px 0 0 0;
      list-style-position: inside;
    }
  }
}
</style>

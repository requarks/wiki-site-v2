<template lang='pug'>
  .getstarted
    .splash
      h1.animated.fadeInUp Get Started
      h3.animated.fadeInUp.wait-p2s Deploy Wiki.js on your environment
    v-container(grid-list-xl)
      v-layout(row, wrap)
        v-flex(xs12, sm6)
          .getstarted-ver.animated.fadeInUp
            img.getstarted-ver-icon(:src='require(`../assets/icons/pastel-greek-pillar-base.svg`)', alt='Stable')
            v-chip.my-3(color='teal', dark, outline)
              .body-2 STABLE
            h2(v-html='stable')
            .body-2 The older, mature, battle-tested version.
            .getstarted-ver-req
              strong Requirements
              ul
                li Node.js #[em 18.x or later]
                li PostgreSQL, MySQL, MariaDB, MSSQL or SQLite3
            v-btn(color='teal', large, dark, href='https://docs.requarks.io/install')
              span Setup Instructions
        v-flex(xs12, sm6)
          .getstarted-ver.animated.fadeInUp.wait-p1s
            img.getstarted-ver-icon(:src='require(`../assets/icons/pastel-test-tube.svg`)', alt='Beta')
            v-chip.my-3(color='purple', dark, outline)
              .body-2 BETA
            h2(v-html='beta')
            .body-2 The newer, actively developed beta version.
            .getstarted-ver-req
              strong Requirements
              ul
                li Node.js #[em 26.x or later]
                li PostgreSQL #[em 17.x or later]
            v-btn(color='purple', large, dark, href='https://beta.js.wiki')
              span Go to Beta Website
        v-flex(xs12)
          .getstarted-note.animated.fadeInUp.wait-p2s Wiki.js 2.5 is recommended for critical production installations. Migrate to 3.x when you're ready.
          carbon.mt-4.animated.fadeInUp.wait-p3s(long)

</template>

<script>
import { get } from 'vuex-pathify'

import Carbon from '../components/Carbon'

export default {
  components: {
    Carbon
  },
  data () {
    return { }
  },
  computed: {
    stable: get('stable'),
    beta: get('beta')
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

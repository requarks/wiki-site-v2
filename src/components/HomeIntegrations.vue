<template lang='pug'>
  .home-integrations
    h2 Over 50+ integrations
    h3 Connect your wiki with an ever-expanding list of external integrations #[br] for authentication, logging, rendering, search and storage.
    .home-integrations-radar
      .circle(v-for='idx of [1,2,3,4,5]')
      .bubble.bubble-one
        img(:src='require(`../assets/logos/logo-inverted.svg`)', alt='Wiki.js')
      .bubble.bubble-two
        img(:src='require(`../assets/logos/color-git.svg`)', alt='Git')
        span Git
      .bubble.bubble-three
        img(:src='require(`../assets/logos/color-aws.svg`)', alt='AWS')
        span AWS
      .bubble.bubble-four
        img(:src='require(`../assets/logos/color-azure.svg`)', alt='Azure')
        span Azure
      .bubble.bubble-five
        img(:src='require(`../assets/logos/color-googlecloud.svg`)', alt='Google Cloud')
        span Google Cloud
      .bubble.bubble-six
        img(:src='require(`../assets/logos/color-facebook.svg`)', alt='Facebook')
        span Facebook
      .bubble.bubble-seven
        img(:src='require(`../assets/logos/algolia.svg`)', alt='Algolia')
        span Algolia
      .bubble.bubble-eight
        img(:src='require(`../assets/logos/color-openid.svg`)', alt='OpenID')
        span OpenID
      .bubble.bubble-nine
        img(:src='require(`../assets/logos/elasticsearch.svg`)', alt='Elasticsearch')
      .bubble.bubble-ten
        img(:src='require(`../assets/logos/color-dropbox.svg`)', alt='Dropbox')
</template>

<script>

export default {
  name: 'HomeIntegrations',
  data () {
    return {}
  }
}
</script>

<style lang='scss'>
.home-integrations {
  background: var(--v-greyish-lighten4);
  text-align: center;
  padding: 100px 0;

  @media screen and (max-width: 599px) {
    padding: 50px 0;
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

  &-radar {
    width: 1200px;
    height: 1200px;
    margin: 50px auto 0;
    position: relative;

    .circle {
      border-radius: 50%;
      border: 1px solid var(--v-greyish-lighten2);
      width: 400px;
      height: 400px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    @for $i from 1 through 5 {
      .circle:nth-child(#{$i}) {
        width: 200px + $i * 200px;
        height: 200px + $i * 200px;
      }
    }

    .bubble {
      border-radius: 50%;
      width: 150px;
      height: 150px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background-color: #FFF;
      border: 1px solid var(--v-greyish-lighten2);
      box-shadow: 0 30px 60px 0 rgba(0,11,40,.1);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      user-select: none;

      img {
        width: 50px;
      }

      span {
        color: var(--v-greyish-darken1);
        margin-top: 7px;
      }

      &-one {
        background-image: linear-gradient(40deg,#6754e2,#19cce6);
        width: 200px;
        height: 200px;

        img {
          margin-top: 7px;
          width: calc(100% - 30px);
        }
      }

      &-two {
        top: 9%;
        left: 57%;
      }

      &-three {
        top: 25%;
        left: 7%;
      }

      &-four {
        top: 40%;
        left: 72%;
      }

      &-five {
        top: 64%;
        left: 98%;
      }

      &-six {
        top: 75%;
        left: 17%;
      }

      &-seven {
        top: 91%;
        left: 60%;
      }

      &-eight {
        top: 36%;
        left: 30%;
        width: 115px;
        height: 115px;
      }

      &-nine {
        top: 73%;
        left: 40%;
        width: 80px;
        height: 80px;

        img {
          width: 100%;
        }
      }

      &-ten {
        top: 73%;
        left: 74%;
        width: 90px;
        height: 90px;
      }
    }

    @media screen and (max-width: 1350px) {
      width: 900px;
      height: 900px;

      @for $i from 1 through 5 {
        .circle:nth-child(#{$i}) {
          width: 150px + $i * 150px;
          height: 150px + $i * 150px;
        }
      }
    }

    @media screen and (max-width: 1025px) {
      width: 600px;
      height: 600px;

      @for $i from 1 through 5 {
        .circle:nth-child(#{$i}) {
          width: 100px + $i * 100px;
          height: 100px + $i * 100px;
        }
      }

      .bubble {
        width: 100px;
        height: 100px;

        img {
          width: 40px;
        }

        span {
          font-size: 12px;
          margin-top: 2px;
        }

        &-one {
          width: 120px;
          height: 120px;

          img {
            margin-top: 7px;
            width: calc(100% - 30px);
          }
        }

        &-eight {
          width: 80px;
          height: 80px;
        }

        &-nine {
          width: 60px;
          height: 60px;

          img {
            width: 100%;
          }
        }

        &-ten {
          width: 50px;
          height: 50px;
        }
      }
    }

    @media screen and (max-width: 699px) {
      width: 375px;
      height: 375px;
      margin: 15px auto 0;

      @for $i from 1 through 5 {
        .circle:nth-child(#{$i}) {
          width: 60px + $i * 60px;
          height: 60px + $i * 60px;
        }
      }

      .bubble {
        width: 50px;
        height: 50px;

        img {
          width: 30px;
        }

        span {
          display: none;
        }

        &-one {
          width: 120px;
          height: 120px;

          img {
            margin-top: 7px;
            width: calc(100% - 30px);
          }
        }

        &-three {
          left: 10%;
        }

        &-four {
          left: 75%;
          top: 30%;
        }

        &-five {
          left: 92%;
          top: 52%;
        }

        &-seven {
          top: 98%;
        }

        &-nine {
          img {
            width: 100%;
          }
        }
      }
    }
  }
}
</style>

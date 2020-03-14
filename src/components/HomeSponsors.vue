<template lang='pug'>
  .home-sponsors
    .home-sponsors-shape
    .home-sponsors-shape
    .home-sponsors-content
      img(src='../assets/icons/pastel-heart.svg')
      h3 Sponsors &amp; Backers
      h4 This open source project is made possible thanks to our generous sponsors and backers.
      v-btn.mt-5(outline, dark, large, to='/about', color='indigo lighten-4') View List
      v-btn.mt-5(outline, dark, large, to='/donate', color='pink lighten-2') Donate
      .home-sponsors-logos
        a(href='https://www.algolia.com', target='_blank', title='Algolia'): img(src='https://static.requarks.io/logo/algolia.svg', alt='Algolia')
        a(href='https://www.browserstack.com', target='_blank', title='Browserstack'): img(src='https://static.requarks.io/logo/browserstack.svg', alt='Browserstack')
        a(href='https://www.bugsnag.com', target='_blank', title='Bugsnag'): img(src='https://static.requarks.io/logo/bugsnag.svg', alt='Bugsnag')
        a(href='https://www.cloudflare.com', target='_blank', title='Cloudflare'): img(src='https://static.requarks.io/logo/cloudflare.svg', alt='Cloudflare', style='max-width: 150px;')
        a(href='https://m.do.co/c/5f7445bfa4d0', target='_blank', title='DigitalOcean'): img(src='https://static.requarks.io/logo/digitalocean.svg', alt='DigitalOcean', style='max-width: 200px;')
        a(href='https://github.com/sponsors/NGPixel/', target='_blank', title='GitHub'): img(src='https://static.requarks.io/logo/github.svg', alt='GitHub')
        a(href='https://icons8.com/', target='_blank', title='Icons8'): img(src='https://static.requarks.io/logo/icons8.svg', alt='Icons8')
        a(href='https://lokalise.com/', target='_blank', title='Lokalise'): img(src='https://static.requarks.io/logo/lokalise.png', alt='Lokalise')
        a(href='https://www.netlify.com/', target='_blank', title='Netlify'): img(src='../assets/logos/netlify.svg', alt='Netlify', style='max-width: initial; width: 160px; height: auto;')
        a(href='https://www.atlassian.com/software/statuspage', target='_blank', title='StatusPage'): img(src='https://static.requarks.io/logo/statuspage.svg', alt='StatusPage')
</template>

<script>

export default {
  name: 'HomeNewsletter',
  data () {
    return {}
  }
}
</script>

<style lang='scss'>
.home-sponsors {
  background-image: url(../assets/img/autumn.svg);
  background-size: 500px;
  background-repeat: repeat;
  background-position: center center;
  background-color: #0f1029;
  padding: 100px 0 0 0;
  color: #FFF;
  border-bottom: 1px solid #FFF;
  position: relative;
  overflow: hidden;
  animation: bgSponsorsAnim 4s linear infinite;

  &-shape {
    width: 500px;
    height: 500px;
    background-image: linear-gradient(-90deg,#290a59,#3d57f4);
    border-radius: 45px;
    transform: rotate(45deg);
    position: absolute;
    opacity: .059;
    left: 50%;
    margin-left: -350px;
    top: -25px;
    z-index: 0;

    + .home-sponsors-shape {
      margin-left: -150px;
    }
  }

  &-content {
    z-index: 1;
    text-align: center;
    position: relative;

    > img {
      width: 164px;
      margin-bottom: 32px;
    }
  }

  h3 {
    font-size: 30px;
    font-weight: 600;
    padding: 0 15px;
    line-height: 30px;

    @media screen and (max-width: 599px) {
      margin-top: 0;
    }
  }
  h4 {
    font-size: 16px;
    font-weight: 400;
    padding: 15px 15px 0;
  }

  &-logos {
    display: flex;
    flex-wrap: wrap;
    padding: 10px 50px 50px;
    justify-content: center;
    align-items: center;
    background-color: rgba(255,255,255,.9);
    backdrop-filter: blur(10px);
    margin: 0 auto;
    margin-top: 50px;

    img {
      max-width: 120px;
      height: 50px;
      margin: 40px 30px 0;
    }
  }
}

@keyframes bgSponsorsAnim {
  0% {
    background-position: 50% 0;
  }
  100% {
    background-position: 50% -137px;
  }
}
</style>

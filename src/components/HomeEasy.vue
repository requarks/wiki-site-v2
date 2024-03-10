<template lang='pug'>
  .home-easy
    .home-easy-curve
    v-container.mt-5(grid-list-xl)
      v-layout(row, wrap)
        v-flex(xs12, md8)
          v-container.pa-0(grid-list-xl)
            v-layout(row, wrap)
              v-flex(xs12, sm6)
                .home-easy-tile
                  .home-easy-tile-icon
                    img(:src='require(`../assets/icons/ios-processor.svg`)', alt='Install anywhere')
                  .home-easy-tile-text
                    h3 Install anywhere
                    span Works on virtually any platform and is compatible with either PostgreSQL, MySQL, MariaDB, MS SQL Server or SQLite!
              v-flex(xs12, sm6)
                .home-easy-tile
                  .home-easy-tile-icon
                    img(:src='require(`../assets/icons/ios-gear.svg`)', alt='Administration')
                  .home-easy-tile-text
                    h3 Administration
                    span Manage all aspects of your wiki using the extensive and intuitive admin area.
              v-flex(xs12, sm6)
                .home-easy-tile
                  .home-easy-tile-icon
                    img(:src='require(`../assets/icons/ios-speedometer.svg`)', alt='Performance')
                  .home-easy-tile-text
                    h3 Performance
                    span Running on the blazing fast Node.js engine, Wiki.js is built with performance in mind.
              v-flex(xs12, sm6)
                .home-easy-tile
                  .home-easy-tile-icon
                    img(:src='require(`../assets/icons/ios-illustrator.svg`)', alt='Customizable')
                  .home-easy-tile-text
                    h3 Customizable
                    span Fully customize the appearance of your wiki, including a light and dark mode.
              v-flex(xs12, sm6)
                .home-easy-tile
                  .home-easy-tile-icon
                    img(:src='require(`../assets/icons/ios-lock.svg`)', alt='Protected')
                  .home-easy-tile-text
                    h3 Protected
                    span Make your wiki public, completely private or a mix of both.
              v-flex(xs12, sm6)
                .home-easy-tile
                  .home-easy-tile-icon
                    img(:src='require(`../assets/icons/ios-width.svg`)', alt='Scalable')
                  .home-easy-tile-text
                    h3 Scalable
                    span Whether it's on a tiny Raspberry Pi or on a high performance VM in the cloud, Wiki.js intelligently makes use of the available resources.
        v-flex(xs12, md4)
          .home-easy-install
            .home-easy-install-icon
              img(:src='require(`../assets/icons/nolan-downloading-updates.svg`)', alt='Easy Installation')
            h3 Easy Installation
            span You'll be ready to go within minutes! Step-by-step install guides available for all platforms.
            v-btn.mx-0.mt-4.primary--text(color='white', large, to='/get-started') Get Started
</template>

<script>

export default {
  name: 'HomeFeatures',
  data () {
    return {}
  }
}
</script>

<style lang='scss'>
.home-easy {
  background: #6754e2 linear-gradient(45deg,#6754e2,#19cce6);
  text-align: center;
  padding: 0 0 50px 0;
  color: #FFF;

  &-curve {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAAA9CAYAAABMUXTjAAADamlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICB4bWxuczpzdFJlZj0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlUmVmIyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmU3MjQ3YmIzLTg3NWMtZjM0ZS1iOTZhLTMwOTQyZTg3YTFiNiIKICAgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpDQUQwRkE3MTk0QTcxMUU4QjhDQUQ5MjgzN0NBQjc4OCIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpDQUQwRkE3MDk0QTcxMUU4QjhDQUQ5MjgzN0NBQjc4OCIKICAgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpIj4KICAgPHhtcE1NOkRlcml2ZWRGcm9tCiAgICBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFiZTcyYzVmLTgzMTMtZWM0Mi04ZWU1LThmNDZkY2Q4YmZjYSIKICAgIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6ZTcyNDdiYjMtODc1Yy1mMzRlLWI5NmEtMzA5NDJlODdhMWI2Ii8+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hw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) no-repeat scroll top;
    background-size: contain;
    width: 100%;
    height: 100px;
    margin-top: -1px;

    @media screen and (max-width: 959px) {
      height: 31px;
    }
  }

  > .container {
    max-width: 1400px;
  }

  &-install {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;

    @media screen and (max-width: 1264px) {
      align-items: center;
      text-align: center;
    }

    &-icon {
      background: transparent url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHIAAABnCAYAAADcxhZVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDphMzU5ZGUzNC1kNjA1LTM0NDUtYjYyZC1lNzU3YjQ2NmVhN2QiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzgxOTA1QjBCQzBEMTFFODg0QTVDRjE1RUI5M0M0QjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzgxOTA1QUZCQzBEMTFFODg0QTVDRjE1RUI5M0M0QjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6M2U3NTEzZmYtNGY4Yy0yYzQ5LWIxYWQtZDdmZGViNjcyMTEyIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmEzNTlkZTM0LWQ2MDUtMzQ0NS1iNjJkLWU3NTdiNDY2ZWE3ZCIv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) no-repeat center 0;
      width: 110px;
      height: 103px;
      line-height: 95px;
      margin-bottom: 34px;
      text-align: center;

      img {
        height: 42px;
        vertical-align: middle;
      }
    }

    h3 {
      font-size: 26px;
      font-weight: 700;
      margin-bottom: 25px;
    }

    span {
      font-size: 18px;
      font-weight: 400;
    }
  }

  &-tile {
    display: flex;
    justify-content: flex-start;
    min-height: 150px;

    @media screen and (max-width: 599px) {
      min-height: 0;
    }

    &-icon {
      border-radius: 50%;
      background-color: rgba(255,255,255,.1);
      flex: 0 0 60px;
      width: 60px;
      height: 60px;
      text-align: center;
      line-height: 59px;
      margin-right: 30px;

      img {
        height: 36px;
        vertical-align: middle;
      }
    }

    &-text {
      text-align: left;

      h3 {
        font-size: 20px;
        font-weight: 600;
        margin-bottom: 15px;

        @media screen and (max-width: 599px) {
          margin-bottom: 2px;
        }
      }

      span {
        font-size: 15px;
      }
    }
  }
}
</style>

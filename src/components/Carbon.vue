<template lang='pug'>
  .carbon-container(
    ref='carbon'
    :class='long ? `format-long` : ``'
  )
</template>

<script>
export default {
  props: {
    long: {
      type: Boolean,
      default: false
    }
  },
  mounted () {
    this.$refs.carbon.innerHTML = ''
    this.$nextTick(() => {
      const script = document.createElement('script')
      script.async = true
      script.src = 'https://cdn.carbonads.com/carbon.js?serve=CE7I5K3W&placement=wikijsorg'
      script.id = '_carbonads_js'
      this.$refs.carbon.appendChild(script)
    })
  }
}
</script>

<style lang="scss">

#carbonads {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif;
  display: flex;
  max-width: 330px;
  background-color: hsl(0, 0%, 98%);
  box-shadow: 0 1px 4px 1px hsla(0, 0%, 0%, .1);

  @at-root .format-long & {
    max-width: initial;
    box-shadow: none;
    background-color: var(--v-greyish-lighten4);
    border-radius: 8px;
    border: 1px solid var(--v-greyish-lighten2);
    overflow: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:hover {
      color: inherit;
    }
  }

  span {
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
  }

  .carbon-wrap {
    display: flex;

    > .carbon-text {
      width: 100%;
    }
  }
}

.carbon-img {
  display: block;
  margin: 0;
  line-height: 1;

  img {
    display: block;

    @at-root .format-long & {
      height: 90px;
    }
  }
}

.carbon-text {
  font-size: 13px;
  padding: 10px;
  line-height: 1.5;
  text-align: left;

  @at-root .format-long & {
    font-size: 16px;
  }
}

.carbon-poweredby {
  display: block;
  padding: 8px 10px;
  background: repeating-linear-gradient(-45deg, transparent, transparent 5px, hsla(0, 0%, 0%, .025) 5px, hsla(0, 0%, 0%, .025) 10px) hsla(203, 11%, 95%, .4);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: .5px;
  font-weight: 600;
  font-size: 9px;
  line-height: 1;

  @at-root .format-long & {
    display: block;
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 6px 10px;
    background: repeating-linear-gradient(
                    -45deg,
                    transparent,
                    transparent 5px,
                    hsla(0, 0%, 0%, 0.025) 5px,
                    hsla(0, 0%, 0%, 0.025) 10px
    )
    hsla(203, 11%, 95%, 0.8);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 600;
    font-size: 8px;
    border-top-left-radius: 4px;
    line-height: 1;
  }
}
</style>

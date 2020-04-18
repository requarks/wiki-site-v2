<template lang='pug'>
  .telemetry
    .splash
      h1.animated.fadeInUp Telemetry
      h3.animated.fadeInUp.wait-p2s Anonymized telemetry reports #[em.caption (since Wiki.js 2.3)]
    v-container(grid-list-xl, fluid)
      v-layout(row, wrap, justify-center)
        v-flex(xs12)
          iframe(
            src='https://telemetry.requarks.io/public/dashboard/f8b3040f-5551-4a39-8477-a475210ac8c3'
            frameborder='0'
            width='100%'
            height='1500'
            allowtransparency
          )
</template>

<script>
export default {
  data () {
    return { }
  }
}
</script>

<style lang='scss'>

</style>

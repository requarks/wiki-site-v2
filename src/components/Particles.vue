<template lang='pug'>
    .particles(ref='canContainer')
      slot
</template>

<script>
import SimplexNoise from 'simplex-noise'

const particleCount = 700
const particlePropCount = 9
const particlePropsLength = particleCount * particlePropCount
const rangeY = 100
const baseTTL = 50
const rangeTTL = 150
const baseSpeed = 0.1
const rangeSpeed = 2
const baseRadius = 1
const rangeRadius = 4
const baseHue = 220
const rangeHue = 100
const noiseSteps = 8
const xOff = 0.00125
const yOff = 0.00125
const zOff = 0.0005
const backgroundColor = 'hsla(260,40%,5%,1)'

const { PI, cos, sin, abs, random } = Math
const TAU = 2 * PI
const rand = n => n * random()
const randRange = n => n - rand(2 * n)
const fadeInOut = (t, m) => {
  let hm = 0.5 * m
  return abs((t + hm) % m - hm) / (hm)
}
const lerp = (n1, n2, speed) => (1 - speed) * n1 + speed * n2

let canvas
let ctx
let center = []
let tick = 0
let simplex = new SimplexNoise()
let particleProps = new Float32Array(particlePropsLength)

export default {
  data () {
    return {
      animRef: null
    }
  },
  methods: {
    initParticle (i) {
      let x, y, vx, vy, life, ttl, speed, radius, hue

      x = rand(canvas.a.width)
      y = center[1] + randRange(rangeY)
      vx = 0
      vy = 0
      life = 0
      ttl = baseTTL + rand(rangeTTL)
      speed = baseSpeed + rand(rangeSpeed)
      radius = baseRadius + rand(rangeRadius)
      hue = baseHue + rand(rangeHue)

      particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i)
    },
    drawParticles () {
      for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        this.updateParticle(i)
      }
    },
    updateParticle (i) {
      let i2 = 1 + i
      let i3 = 2 + i
      let i4 = 3 + i
      let i5 = 4 + i
      let i6 = 5 + i
      let i7 = 6 + i
      let i8 = 7 + i
      let i9 = 8 + i
      let n, x, y, vx, vy, life, ttl, speed, x2, y2, radius, hue

      x = particleProps[i]
      y = particleProps[i2]
      n = simplex.noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU
      vx = lerp(particleProps[i3], cos(n), 0.5)
      vy = lerp(particleProps[i4], sin(n), 0.5)
      life = particleProps[i5]
      ttl = particleProps[i6]
      speed = particleProps[i7]
      x2 = x + vx * speed
      y2 = y + vy * speed
      radius = particleProps[i8]
      hue = particleProps[i9]

      this.drawParticle(x, y, x2, y2, life, ttl, radius, hue)

      life++

      particleProps[i] = x2
      particleProps[i2] = y2
      particleProps[i3] = vx
      particleProps[i4] = vy
      particleProps[i5] = life

      if (this.checkBounds(x, y) || life > ttl) {
        this.initParticle(i)
      }
    },
    drawParticle (x, y, x2, y2, life, ttl, radius, hue) {
      ctx.a.save()
      ctx.a.lineCap = 'round'
      ctx.a.lineWidth = radius
      ctx.a.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`
      ctx.a.beginPath()
      ctx.a.moveTo(x, y)
      ctx.a.lineTo(x2, y2)
      ctx.a.stroke()
      ctx.a.closePath()
      ctx.a.restore()
    },
    checkBounds (x, y) {
      return (
        x > canvas.a.width ||
        x < 0 ||
        y > canvas.a.height ||
        y < 0
      )
    },
    renderGlow () {
      ctx.b.save()
      ctx.b.filter = 'blur(8px) brightness(200%)'
      ctx.b.globalCompositeOperation = 'lighter'
      ctx.b.drawImage(canvas.a, 0, 0)
      ctx.b.restore()

      ctx.b.save()
      ctx.b.filter = 'blur(4px) brightness(200%)'
      ctx.b.globalCompositeOperation = 'lighter'
      ctx.b.drawImage(canvas.a, 0, 0)
      ctx.b.restore()
    },
    renderToScreen () {
      ctx.b.save()
      ctx.b.globalCompositeOperation = 'lighter'
      ctx.b.drawImage(canvas.a, 0, 0)
      ctx.b.restore()
    },
    draw () {
      tick++

      ctx.a.clearRect(0, 0, canvas.a.width, canvas.a.height)

      ctx.b.fillStyle = backgroundColor
      ctx.b.fillRect(0, 0, canvas.a.width, canvas.a.height)

      this.drawParticles()
      this.renderGlow()
      this.renderToScreen()

      this.animRef = window.requestAnimationFrame(this.draw)
    },
    resize () {
      const { offsetWidth, offsetHeight } = this.$refs.canContainer

      canvas.a.width = offsetWidth
      canvas.a.height = offsetHeight

      ctx.a.drawImage(canvas.b, 0, 0)

      canvas.b.width = offsetWidth
      canvas.b.height = offsetHeight

      ctx.b.drawImage(canvas.a, 0, 0)

      center[0] = 0.5 * canvas.a.width
      center[1] = 0.5 * canvas.a.height
    }
  },
  mounted () {
    canvas = {
      a: document.createElement('canvas'),
      b: document.createElement('canvas')
    }
    ctx = {
      a: canvas.a.getContext('2d'),
      b: canvas.b.getContext('2d')
    }
    this.$refs.canContainer.insertBefore(canvas.b, this.$refs.canContainer.firstChild)
    this.resize()

    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      this.initParticle(i)
    }

    this.draw()

    window.addEventListener('resize', this.resize)
  },
  beforeDestroy () {
    window.cancelAnimationFrame(this.animRef)
    window.removeEventListener('resize', this.resize)
  }
}
</script>

<style lang='scss'>
.particles {
  position: relative;
  color: #FFF;
  text-align: center;
  padding: 100px 20px;
  position: relative;
  background: #5e2ced linear-gradient(to bottom, #0f1029, #090a21);

  h1 {
    font-size: 50px;
    font-weight: 700;
    line-height: 60px;
    position: relative;
  }

  h3 {
    margin-top: 15px;
    font-size: 16px;
    font-weight: 300;
    position: relative;
  }

  > canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
}
</style>

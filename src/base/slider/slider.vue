<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup">
      <slot></slot>
    </div>
    <div class="dots">
      <span class="dot" v-for="(item, index) in dots" :key="item" :class="{ active: currentPageIndex === index }"></span>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import { addClass } from 'common/js/dom'

const DEFAULT_INTERVAL = 4000

export default {
  props: {
    loop: {
      type: Boolean,
      default: true,
    },
    autoPlay: {
      type: Boolean,
      default: true,
    },
    interval: {
      type: Number,
      default: DEFAULT_INTERVAL,
    }
  },
  data() {
    return {
      dots: 0,
      currentPageIndex: 0,
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$_setSliderWidth()
      this.$_initDots()
      this.$_initSlider()

      if (this.autoPlay) {
        this.$_play()
      }
    })

    window.addEventListener('resize', () => {
      if (!this.slider) {
        return
      }
      this.$_setSliderWidth(true)
      this.slider.refresh()
    })
  },
  destroyed() {
    clearTimeout(this.timer)
  },
  methods: {
    $_setSliderWidth(isResize) {
      this.children = this.$refs.sliderGroup.children

      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        addClass(child, 'slider-item')

        child.style.width = sliderWidth + 'px'
        width += sliderWidth
      }

      if (this.loop && !isResize) {
        width += 2 * sliderWidth
      }
      this.$refs.sliderGroup.style.width = width + 'px'
    },
    $_initDots() {
      this.dots = this.children.length
    },
    $_initSlider() {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: {
          loop: this.loop,
          threshold: 0.3,
        },
      })

      this.slider.on('scrollEnd', () => {
        let pageIndex = this.slider.getCurrentPage().pageX
        this.currentPageIndex = pageIndex

        if (this.autoPlay) {
          clearTimeout(this.timer)
          this.$_play()
        }
      })
    },
    $_play() {
      let pageIndex = this.currentPageIndex + 1
      if (this.loop) {
        pageIndex += 1
      }
      console.log(pageIndex)
      this.timer = setTimeout(() => {
        this.slider.goToPage(pageIndex, 0, 400)
      }, this.interval)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "~common/css/variable.scss";

.slider {
  position: relative;
  min-height: 1px;
  .slider-group {
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    .slider-item {
      float: left;
      box-sizing: border-box;
      overflow: hidden;
      text-align: center;
    }
  }
  .dots {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 12px;
    text-align: center;
    font-size: 0;
    .dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: $color-text-l;
      &.active {
        width: 20px;
        border-radius: 5px;
        background: $color-text-ll;
      }
    }
  }
}
</style>

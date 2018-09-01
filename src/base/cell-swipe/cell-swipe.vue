<template>
  <div class="cell-swipe" @touchstart.stop="touchstart" @touchmove.stop="touchmove" @touchend.stop="touchend">
    <div class="content" ref="content">
      <i class="icon p-icon i-me"></i>
      <div class="left">
        <div class="main">{{ leftMain }}</div>
        <div class="sub" v-if="leftSub">{{ leftSub }}</div>
      </div>
      <div class="right">
        <div class="main green" v-if="rightMain">{{ rightMain }}</div>
        <div class="sub" v-if="rightMain && rightSub">{{ rightSub }}</div>
      </div>
    </div>
    <div class="extend" ref="extend">
      删除
    </div>
  </div>
</template>

<script>
export default {
  props: {
    leftMain: {
      type: String,
      required: true
    },
    leftSub: {
      type: String
    },
    rightMain: {
      type: String
    },
    rightSub: {
      type: String
    }
  },
  data() {
    return {

    }
  },
  created() {
    // 触摸相关信息
    this.touch = {}
    // 定时器
    this.timeOut = 0
  },
  methods: {
    touchstart(e) {
      // 触摸标志
      this.touch.status = true

      // 触摸开始点
      this.touch.startX = e.touches[0].pageX
      // content 开始位置
      this.touch.initialX = this.$refs.content.getBoundingClientRect().x
    },
    touchmove(e) {
      if (!this.touch.status) {
        return
      }
      // endX 供 touchend 使用
      this.touch.endX = e.touches[0].pageX

      // content 滑动区间 (-∞, 0]
      const contentTranslateX = Math.min(this.touch.initialX + e.touches[0].pageX - this.touch.startX, 0)
      // extend 滑动区间 [-50, 0]
      const extendTranslateX = Math.min(Math.max(-50, this.touch.initialX + e.touches[0].pageX - this.touch.startX), 0)

      this.$refs.content.style.transform = `translate3d(${contentTranslateX}px, 0, 0)`
      this.$refs.extend.style.transform = `translate3d(${50 + extendTranslateX}px, 0, 0)`
    },
    touchend(e) {
      this.touch.status = false

      this.$refs.content.style.transition = 'transform 0.5s'
      this.$refs.extend.style.transition = 'transform 0.5s'

      if (this.touch.endX - this.touch.startX < 0) {
        // 左滑
        if (this.touch.endX - this.touch.startX > -50 / 3) {
          this.$refs.content.style.transform = `translate3d(0, 0, 0)`
          this.$refs.extend.style.transform = `translate3d(50px, 0, 0)`
        } else {
          this.$refs.content.style.transform = 'translate3d(-50px, 0, 0)'
          this.$refs.extend.style.transform = 'translate3d(0, 0, 0)'
        }
      }
      if (this.touch.endX - this.touch.startX > 0) {
        // 右滑
        if (this.touch.endX - this.touch.startX < 50 / 3) {
          this.$refs.content.style.transform = `translate3d(-50px, 0, 0)`
          this.$refs.extend.style.transform = `translate3d(0, 0, 0)`
        } else {
          this.$refs.content.style.transform = `translate3d(0, 0, 0)`
          this.$refs.extend.style.transform = `translate3d(50px, 0, 0)`
        }
      }

      clearTimeout(this.timeOut)
      this.timeOut = setTimeout(() => {
        this.$refs.content.style.transition = ''
        this.$refs.extend.style.transition = ''
      }, 500)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "common/css/variable.scss";

.cell-swipe {
  width: 100%;
  height: 48px;
  position: relative;
  overflow: hidden;
  .content {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    background: white;
    // transform: translate3d(0px, 0px, 0px);
    .icon {
      width: 35px;
      font-size: 28px;
      line-height: 48px;
      text-align: center;
    }
    .left {
      width: calc(60%);
      height: 35px;
      padding-left: 0.3em;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .sub {
        font-size: 12px;
        color: #888;
      }
    }
    .right {
      width: calc(40%);
      height: 35px;
      display: flex;
      flex-direction: column;
      text-align: right;
      justify-content: space-around;
      .main {
        font-weight: bold;
        &.red {
          color: red;
        }
        &.green {
          color: green;
        }
      }
      .sub {
        font-size: 12px;
        color: #888;
      }
    }
  }
  .extend {
    width: 50px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    color: white;
    background: $color-red-6;
    text-align: center;
    line-height: 48px;
    z-index: -1;
    transform: translate3d(50px, 0px, 0px);
  }
}
</style>

<template>
  <div class="cell-swipe" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">

    <div class="left-extends" ref="left" v-if="left">
      <div v-for="(item, index) in left" :key="index" class="extend" :style="item.style" @click.stop.prevent="extendClick(item)">
        <div>{{ item.content }}</div>
      </div>
    </div>

    <div class="content" ref="content" @click.stop.prevent="contentClick">
      <i class="icon p-icon" :class="iconClass" v-if="icon"></i>
      <div class="left">
        <div class="main">{{ leftMain }}</div>
        <div class="sub" v-if="leftSub">{{ leftSub }}</div>
      </div>
      <div class="right">
        <div class="main" :style="rightMainStyle" v-if="rightMain">{{ rightMain }}</div>
        <div class="sub" v-if="rightMain && rightSub">{{ rightSub }}</div>
      </div>
    </div>

    <div class="right-extends" ref="right" v-if="right">
      <div v-for="(item, index) in right" :key="index" class="extend" :style="item.style" @click.stop.prevent="extendClick(item)">
        <div>{{ item.content }}</div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String
    },
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
    rightMainStyle: {
      type: Object
    },
    rightSub: {
      type: String
    },
    left: {
      type: Array
    },
    right: {
      type: Array
    }
  },
  data() {
    return {
      show: 'content'
    }
  },
  computed: {
    iconClass() {
      return 'i-' + this.icon
    }
  },
  created() {
    // 触摸相关信息
    this.touch = {}
    // 定时器
    this.timeOut = 0
  },
  mounted() {
    if (this.left) {
      this.leftWidth = this.$refs.left.clientWidth
      this.$refs.left.style.transform = `translate3d(-${this.leftWidth}px, 0, 0)`
    }

    if (this.right) {
      this.rightWidth = this.$refs.right.clientWidth
      this.$refs.right.style.transform = `translate3d(${this.rightWidth}px, 0, 0)`
    }
  },
  methods: {
    showContent(callback) {
      this.$refs.content.style.transition = 'transform 0.5s'
      this.$refs.content.style.transform = `translate3d(0, 0, 0)`

      if (this.left) {
        this.$refs.left.style.transition = 'transform 0.5s'
        this.$refs.left.style.transform = `translate3d(-${this.leftWidth}px, 0, 0)`
      }

      if (this.right) {
        this.$refs.right.style.transition = 'transform 0.5s'
        this.$refs.right.style.transform = `translate3d(${this.rightWidth}px, 0, 0)`
      }

      this.show = 'content'

      clearTimeout(this.timeOut)
      this.timeOut = setTimeout(() => {
        this.$refs.content.style.transition = ''
        this.left && (this.$refs.left.style.transition = '')
        this.right && (this.$refs.right.style.transition = '')

        if (callback && !(callback instanceof Event)) {
          callback()
        }

        window.removeEventListener('touchstart', this.showContent)
      }, 500)
    },
    showLeft() {
      this.$refs.content.style.transition = 'transform 0.5s'
      this.$refs.content.style.transform = `translate3d(${this.leftWidth}px, 0, 0)`

      if (this.left) {
        this.$refs.left.style.transition = 'transform 0.5s'
        this.$refs.left.style.transform = `translate3d(0, 0, 0)`
      }

      if (this.right) {
        this.$refs.right.style.transition = 'transform 0.5s'
        this.$refs.right.style.transform = `translate3d(${this.leftWidth + this.rightWidth}px, 0, 0)`
      }

      this.show = 'left'

      clearTimeout(this.timeOut)
      this.timeOut = setTimeout(() => {
        this.$refs.content.style.transition = ''
        this.left && (this.$refs.left.style.transition = '')
        this.right && (this.$refs.right.style.transition = '')

        window.addEventListener('touchstart', this.showContent)
      }, 500)
    },
    showRight() {
      this.$refs.content.style.transition = 'transform 0.5s'
      this.$refs.content.style.transform = `translate3d(-${this.rightWidth}px, 0, 0)`

      if (this.left) {
        this.$refs.left.style.transition = 'transform 0.5s'
        this.$refs.left.style.transform = `translate3d(-${this.leftWidth + this.rightWidth}px, 0, 0)`
      }

      if (this.right) {
        this.$refs.right.style.transition = 'transform 0.5s'
        this.$refs.right.style.transform = `translate3d(0, 0, 0)`
      }

      this.show = 'right'

      clearTimeout(this.timeOut)
      this.timeOut = setTimeout(() => {
        this.$refs.content.style.transition = ''
        this.left && (this.$refs.left.style.transition = '')
        this.right && (this.$refs.right.style.transition = '')

        window.addEventListener('touchstart', this.showContent)
      }, 500)
    },
    touchstart(e) {
      // reset
      this.touch = {}
      // set status
      this.touch.status = true

      // 触摸开始点
      this.touch.startX = e.touches[0].pageX
      this.touch.startY = e.touches[0].pageY
      // content 开始位置
      this.touch.initialX = this.$refs.content.getBoundingClientRect().x
    },
    touchmove(e) {
      if (Math.abs(e.touches[0].pageX - this.touch.startX) < Math.abs(e.touches[0].pageY - this.touch.startY)) {
        // 竖向滑动
        this.touch.status = false
      } else {
        e.preventDefault()
      }
      if (!this.touch.status) {
        return
      }
      // endX 供 touchend 使用
      this.touch.endX = e.touches[0].pageX

      // content 滑动区间 (-∞, ∞]
      let contentTranslateX = this.touch.initialX + e.touches[0].pageX - this.touch.startX
      !this.left && (contentTranslateX = Math.min(contentTranslateX, 0))
      !this.right && (contentTranslateX = Math.max(0, contentTranslateX))
      // leftExtend 滑动区间 [-leftWidth, 0]
      const leftExtendTranslateX = Math.min(Math.max(-this.leftWidth, this.touch.initialX + e.touches[0].pageX - this.touch.startX - this.leftWidth), 0)
      // rightExtend 滑动区间 [0, rightWidth]
      const rightExtendTranslateX = Math.min(Math.max(0, this.touch.initialX + e.touches[0].pageX - this.touch.startX + this.rightWidth), this.rightWidth)

      this.$refs.content.style.transform = `translate3d(${contentTranslateX}px, 0, 0)`
      this.left && (this.$refs.left.style.transform = `translate3d(${leftExtendTranslateX}px, 0, 0)`)
      this.right && (this.$refs.right.style.transform = `translate3d(${rightExtendTranslateX}px, 0, 0)`)
    },
    touchend(e) {
      if (!this.touch.status) {
        return
      }
      this.touch.status = false

      const deltaX = this.touch.endX - this.touch.startX
      if (isNaN(deltaX) || deltaX === 0) {
        return
      }

      if (this.show === 'content') {
        if (deltaX < -this.rightWidth / 3) {
          this.showRight()
        } else if (deltaX > this.leftWidth / 3) {
          this.showLeft()
        } else {
          this.showContent()
        }
      } else if (this.show === 'left') {
        if (deltaX > -this.leftWidth / 3) {
          this.showLeft()
        } else {
          this.showContent()
        }
      } else if (this.show === 'right') {
        if (deltaX < this.rightWidth / 3) {
          this.showRight()
        } else {
          this.showContent()
        }
      }
    },
    contentClick(item) {
      if (this.show !== 'content') {
        this.showContent()
        return
      }
      this.$emit('contentClick', item)
    },
    extendClick(item) {
      this.showContent(() => {
        this.$emit('extendClick', item)
      })
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
      .sub {
        font-size: 12px;
        color: #888;
      }
    }
  }
  .left-extends,
  .right-extends {
    height: 100%;
    position: absolute;
    top: 0;
    text-align: center;
    display: flex;
    .extend {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .left-extends {
    left: 0;
  }
  .right-extends {
    right: 0;
  }
}
</style>

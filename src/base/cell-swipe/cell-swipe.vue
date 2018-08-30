<template>
  <div class="cell-swipe" @touchstart.stop.prevent="touchstart" @touchmove.stop.prevent="touchmove" @touchend.stop.prevent="touchend">
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
    this.touch = {}
  },
  methods: {
    touchstart(e) {
      this.touch.status = true
      this.touch.startX = e.touches[0].pageX
      this.touch.initialX = this.$refs.content.getBoundingClientRect().x
    },
    touchmove(e) {
      if (!this.touch.status) {
        return
      }
      // deltaX [-50, 0]
      const deltaX = Math.min(Math.max(this.touch.initialX + e.touches[0].pageX - this.touch.startX, -50), 0)
      this.$refs.content.style.transform = `translate3d(${deltaX}px, 0, 0)`
      this.$refs.extend.style.transform = `translate3d(${50 + deltaX}px, 0, 0)`
    },
    touchend(e) {
      this.touch.status = false
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

<template>
  <transition name="upglide">
    <div class="add-asset" ref="addAsset">

      <div class="header">
        <span class="close" @click.stop.prevent="close">X</span>
        <h1 class="title">添加资产</h1>
      </div>

      <div class="tab">
        <span class="tab-item active">资金</span>
        <span class="tab-item">投资</span>
        <span class="tab-item">应收</span>
        <span class="tab-item">应付</span>
      </div>

      <div class="container" ref="container" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
        <ul>
          <li ref="firstLi"></li>
          <li v-for="item in 100" :key="item">{{ item }}</li>
        </ul>
      </div>

    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created() {
    this.startY = 0
    this.translateY = 0
    this.timeOut = 0
    // this.$router.push('/asset')
  },
  methods: {
    close() {
      this.$router.push('/asset')
    },
    touchstart() {
      console.log('touchstart')
    },
    touchmove(e) {
      console.log(this.$refs.firstLi.getBoundingClientRect())
      const y = this.$refs.firstLi.getBoundingClientRect().y
      if (y === 80) {
        this.startY = e.touches[0].pageY
      }
      this.translateY = e.touches[0].pageY - this.startY + 1
      this.$refs.addAsset.style.transform = `translate3d(0, ${this.translateY}px, 0)`
    },
    touchend() {
      console.log('touchend')
      if (this.translateY > 250) {
        this.$refs.addAsset.style.transition = 'transform 0.5s'
        this.$refs.addAsset.style.transform = 'translate3d(0, 1000px, 0)'

        clearTimeout(this.timeOut)
        this.timeOut = setTimeout(() => {
          this.$refs.addAsset.style.transition = ''
          this.$router.push('/asset')
        }, 500)
      } else {
        this.$refs.addAsset.style.transition = 'transform 0.5s'
        this.$refs.addAsset.style.transform = ''

        clearTimeout(this.timeOut)
        this.timeOut = setTimeout(() => {
          this.$refs.addAsset.style.transition = ''
        }, 500)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "common/css/variable.scss";

.add-asset {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  z-index: 10;
  &.upglide-enter-active,
  &.upglide-leave-active {
    transition: all 0.3s;
  }
  &.upglide-enter,
  &.upglide-leave-to {
    transform: translate3d(0, 100%, 0);
  }
  .header {
    height: 45px;
    width: 100%;
    position: relative;
    line-height: 45px;
    .close {
      padding-left: 0.5em;
      position: absolute;
      top: 0;
      left: 0;
      font-size: 22px;
    }
    .title {
      text-align: center;
      font-size: 20px;
    }
  }
  .tab {
    width: 80%;
    height: 25px;
    margin: 5px auto;
    display: flex;
    border: 1px solid #3e465b;
    border-radius: 3px;
    text-align: center;
    font-size: 16px;
    line-height: 25px;
    * + * {
      border-left: 1px solid #3e465b;
    }
    .tab-item {
      width: 25%;
      &.active {
        background: #3e465b;
        color: white;
      }
    }
  }
  .container {
    height: 600px;
    overflow: auto;
  }
}
</style>

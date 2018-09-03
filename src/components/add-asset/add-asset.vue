<template>
  <transition name="upglide">
    <div class="add-asset" @touchmove.stop.prevent="touchmove">
      <div class="header">
        <span @click.stop.prevent="close">X</span>
        <span>添加资产</span>
      </div>
      <div class="tab">
        <span>资金</span>
        <span>投资</span>
        <span>应收</span>
        <span>应付</span>
      </div>
      <div class="container" @touchmove.stop="contouchmove">
        <ul>
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
    // this.$router.push('/asset')
  },
  methods: {
    close() {
      this.$router.push('/asset')
    },
    touchmove() {
      console.log('touchmove')
    },
    contouchmove() {
      console.log('contouchmove')
    }
  }
}
</script>

<style lang="scss" scoped>
.add-asset {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  z-index: 10;
  overflow: hidden;
  &.upglide-enter-active,
  &.upglide-leave-active {
    transition: all 0.3s;
  }
  &.upglide-enter,
  &.upglide-leave-to {
    transform: translate3d(0, 100%, 0);
  }
  .container {
    overflow: auto;
  }
}
</style>

<template>
  <transition name="modal">
    <div class="modal-wrapper" ref="modalWrapper" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
      <header>
        <span class="close" @click="close">X</span>
        <div class="header" v-show="header">{{ header }}</div>
      </header>
      <div class="content" ref="content">
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
const HEADER_HEIGHT = 32

export default {
  props: {
    header: {
      type: String,
    }
  },
  data() {
    return {}
  },
  created() {
    this.touch = {}
    this.timeOut = 0
  },
  methods: {
    close() {
      this.$router.go(-1)
    },
    touchstart(e) {
      this.touch.startY = e.touches[0].pageY
    },
    touchmove(e) {
      if (this.$refs.content.offsetTop <= HEADER_HEIGHT) {
        this.touch.deltaY = e.touches[0].pageY - this.touch.startY
        this.$refs.modalWrapper.style.transform = `translate3d(0, ${this.touch.deltaY}px, 0)`
      }
    },
    touchend() {
      if (this.touch.deltaY > 0.15 * document.documentElement.clientHeight) {
        this.$refs.modalWrapper.style.transition = 'transform 0.3s'
        this.$refs.modalWrapper.style.transform = 'translate3d(0, 100%, 0)'

        clearTimeout(this.timeOut)
        this.timeOut = setTimeout(() => {
          this.$refs.modalWrapper.style.transition = ''
          this.$router.go(-1)
        }, 300)
      } else {
        this.$refs.modalWrapper.style.transition = 'transform 0.3s'
        this.$refs.modalWrapper.style.transform = ''

        clearTimeout(this.timeOut)
        this.timeOut = setTimeout(() => {
          this.$refs.modalWrapper.style.transition = ''
        }, 300)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-wrapper {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: white;
  z-index: 1;
  &.modal-enter-active,
  &.modal-leave-active {
    transition: all 0.3s;
  }
  &.modal-enter,
  &.modal-leave-to {
    transform: translate3d(0, 100%, 0);
  }
}
</style>

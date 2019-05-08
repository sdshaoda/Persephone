<template>
  <transition name="modal">
    <div class="modal-wrapper" ref="modalWrapper" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
      <header>
        <span class="close" @click="close">X</span>
        <div v-show="header">{{ header }}</div>
      </header>
      <slot></slot>
    </div>
  </transition>
</template>

<script>
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
    this.startY = 0
    this.translateY = 0
    this.timeOut = 0
  },
  methods: {
    close() {
      this.$router.go(-1)
    },
    touchstart() {
    },
    touchmove(e) {
      const y = this.$refs.firstLi.getBoundingClientRect().y
      if (y === 80) {
        this.startY = e.touches[0].pageY
      }
      this.translateY = e.touches[0].pageY - this.startY + 1
      this.$refs.modalWrapper.style.transform = `translate3d(0, ${this.translateY}px, 0)`
    },
    touchend() {
      if (this.translateY > 250) {
        this.$refs.modalWrapper.style.transition = 'transform 0.5s'
        this.$refs.modalWrapper.style.transform = 'translate3d(0, 1000px, 0)'

        clearTimeout(this.timeOut)
        this.timeOut = setTimeout(() => {
          this.$refs.modalWrapper.style.transition = ''
          this.$router.go(-1)
        }, 500)
      } else {
        this.$refs.modalWrapper.style.transition = 'transform 0.5s'
        this.$refs.modalWrapper.style.transform = ''

        clearTimeout(this.timeOut)
        this.timeOut = setTimeout(() => {
          this.$refs.modalWrapper.style.transition = ''
        }, 500)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-wrapper {
  position: fixed;
}
&.modal-enter-active,
&.modal-leave-active {
  transition: all 0.3s;
}
&.modal-enter,
&.modal-leave-to {
  transform: translate3d(0, 100%, 0);
}
</style>

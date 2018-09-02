<template>
  <div class="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <p-footer></p-footer>
  </div>
</template>

<script>
import PFooter from 'components/p-footer/p-footer'

export default {
  components: {
    PFooter
  }
}
</script>

<style lang="scss" scoped>
.app {
  height: 100%;
}
</style>

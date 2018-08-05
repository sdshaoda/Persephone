<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <p-footer></p-footer>
  </div>
</template>

<script>
import PFooter from 'components/p-footer/p-footer'

export default {
  name: 'app',
  components: {
    PFooter
  }
}
</script>

<style scope>
</style>

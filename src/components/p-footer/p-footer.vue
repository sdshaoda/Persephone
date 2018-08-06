<template>
  <div class="p-footer">
    <router-link tag="div" to="/record">
      <span class="link p-icon i-caifub">流水</span>
    </router-link>
    <router-link tag="div" to="/asset">
      <span class="link">资产</span>
    </router-link>
    <router-link tag="div" to="/analyse">
      <span class="link">分析</span>
    </router-link>
    <router-link tag="div" to="/me">
      <span class="link">我的</span>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.p-footer {
  height: 44px;
  position: fixed;
  bottom: 0px;
}
</style>

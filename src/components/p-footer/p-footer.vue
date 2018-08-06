<template>
  <div class="p-footer">
    <router-link tag="div" to="/record">
      <i class="p-icon i-jizhang"></i>
      <span class="link">流水</span>
    </router-link>
    <router-link tag="div" to="/asset">
      <i class="p-icon i-caifua"></i>
      <span class="link">资产</span>
    </router-link>
    <router-link tag="div" to="/analyse">
      <i class="p-icon i-licai"></i>
      <span class="link">分析</span>
    </router-link>
    <router-link tag="div" to="/me">
      <i class="p-icon i-wode"></i>
      <span class="link">我的</span>
    </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "common/css/variable.scss";

.p-footer {
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    .p-icon {
      font-size: 20px;
    }
    &.router-link-active {
      .p-icon {
        color: $color-primary;
      }
    }
    span {
      font-size: 14px;
    }
  }
}
</style>

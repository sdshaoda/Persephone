<template>
  <div class="cell-swipe">
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
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.cell-swipe {
  width: 100%;
  height: 48px;
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
    .main {
    }
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
</style>

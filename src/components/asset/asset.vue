
<template>
  <div>
    <div class="overview">
      <mt-swipe :auto="0">
        <mt-swipe-item>
          <div class="main">
            <span class="label">本月支出</span>
            <span class="amount">217.28</span>
          </div>
          <div class="sub">
            <div class="left">
              <span class="label">本月收入</span>
              <span class="amount">9847.00</span>
            </div>
            <div class="right">
              <span class="label">本月收入</span>
              <span class="amount">9847.00</span>
            </div>
          </div>
        </mt-swipe-item>
        <mt-swipe-item>
          <div class="main">
            <span class="label">净资产</span>
            <span class="amount">646523.28</span>
          </div>
          <div class="sub">
            <div class="left">
              <span class="label">总资产</span>
              <span class="amount">9847.00</span>
            </div>
            <div class="right">
              <span class="label">总负债</span>
              <span class="amount">9847.00</span>
            </div>
          </div>
        </mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="asset-overview">

    </div>

    <div class="record">
      <mt-cell-swipe v-for="n in 100" :key="n" title="早午晚餐" value="带 icon" label="2018-8-9 00:42:05" :right="[
        {
          content: '编辑',
          style: {background: '#d3d3d3', color: '#fff'},
          handler: ()=>{}
        },
        {
        content: '删除',
        style: { background: 'red', color: '#fff' },
        handler: () => this.$messagebox('删除')
        }
      ]">
        招商银行信用卡
      </mt-cell-swipe>
    </div>

    <div class="add-wrapper">
      <!-- <mt-button class="add-record" type="primary" @click.native="addOne"> -->
      <button class="add-record" @click.stop.prevent="addRecord">
        <i class="p-icon i-add-record"></i>记一笔
      </button>
      |
      <button class="add-asset" @click.stop.prevent="addAsset">添加资产</button>
      <!-- <mt-button class="add-asset" type="primary">添加资产</mt-button> -->
      <!-- </mt-button> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    addRecord() {
      console.log('add record')
    },
    addAsset() {
      console.log('add asset')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "common/css/variable.scss";

.overview {
  width: 100%;
  height: 200px;
  background: #333;
  .mint-swipe-item {
    padding: 0 20px;
    .main {
      height: 140px;
      padding-top: 70px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      .amount {
        font-size: 30px;
      }
    }
    .sub {
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .right {
        padding-right: 20px;
      }
    }
    .label {
      color: #ccc;
    }
    .amount {
      color: #fff;
    }
  }
}
.add-wrapper {
  width: calc(100% - 20px);
  margin: 10px;
  position: fixed;
  bottom: 50px;
  display: flex;
  justify-content: space-around;
  background: $color-red-6;
  color: white;
  border-radius: 3px;
  line-height: 35px;
  button {
    border: none;
    background: none;
    color: white;
    padding: 10px 0;
  }
  button:active {
    background: $color-red-7;
  }
  .add-record {
    width: 70%;
    font-size: 16px;
    i {
      margin-right: 0.3em;
    }
  }
  .add-asset {
    width: 30%;
    font-size: 14px;
  }
}
</style>

<template>
  <div class="asset">
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
      <div class="title">资产账户</div>

      <cell-swipe v-for="item in 3" :key="item" class="asset-item" icon="yiban" left-main="支付宝" right-main="5954.80" @contentClick="contentClick(item)" @extendClick="extendClick" :right="[{
        content: '编辑',
        style: {background: '#8c8c8c', color: 'white', width: '50px'},
        handle: (item, index) => {num.splice(index, 1)}
      },{
        content: '删除',
        style: {background: '#f5222d', color: 'white', width: '50px'},
        handle: (item, index) => {num.splice(index, 1)}
      }]"></cell-swipe>

    </div>

    <div class="record-overview">
      <div class="title">近3日新增账单
        <span>0笔</span>
      </div>

      <cell-swipe v-for="item in 10" :key="item" icon="yiban" left-main="早午晚餐" left-sub="2018-8-30 00:06:49" right-main="12.00" :right-main-style="{color: 'green'}" right-sub="招商银行信用卡" @contentClick="contentClick(item)" @extendClick="extendClick" :right="[{
        content: '删除',
        style: {background: '#f5222d', color: 'white', width: '50px'},
        handle: (item, index) => {num.splice(index, 1)}
      }]"></cell-swipe>

    </div>

    <div class="add-wrapper">
      <button class="add-record" @click.stop.prevent="addRecord">
        <i class="p-icon i-add-record"></i>记一笔
      </button>
      |
      <button class="add-asset" @click.stop.prevent="addAsset">添加资产</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import CellSwipe from 'base/cell-swipe/cell-swipe'

export default {
  data() {
    return {
    }
  },
  methods: {
    addRecord() {
      console.log('add record')
    },
    addAsset() {
      this.$router.push({
        path: `/asset/add`
      })
    },
    contentClick(item) {
      console.log('contentClick', item)
    },
    extendClick(item) {
      console.log('extendClick', item)
      item.handle()
    }
  },
  components: {
    CellSwipe
  }
}
</script>

<style lang="scss" scoped>
@import "common/css/variable.scss";

.asset {
  height: 100%;
  padding-bottom: 100px;
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

  .asset-overview,
  .record-overview {
    margin: 30px 0;
  }

  .asset-item {
    height: 55px;
    margin: 5px;
    width: calc(100% - 10px);
    box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    line-height: 55px;
  }

  .title {
    padding-left: 1em;
    line-height: 30px;
    span {
      color: $color-grey-7;
      padding-left: 0.3em;
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
    line-height: 41px;
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
}
</style>

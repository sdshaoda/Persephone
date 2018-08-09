
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

    <div class="add-one-wrapper">
      <mt-button class="add-one" type="primary" @click.native="addOne">记一笔</mt-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    addOne() {
      console.log('add one')
    }
  }
}
</script>

<style lang="scss" scoped>
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
.add-one-wrapper {
  width: 100%;
  padding-bottom: 10px;
  position: fixed;
  bottom: 50px;
  display: flex;
  justify-content: space-around;
  background: #fff;
  .add-one {
    width: 90%;
  }
}
</style>

<template>
  <div>
    流水
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
.add-one-wrapper {
  width: 100%;
  position: absolute;
  bottom: 60px;
  display: flex;
  justify-content: space-around;
  .add-one {
    width: 90%;
  }
}
</style>

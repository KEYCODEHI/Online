<template>
  <div @click="handleClick" class="header iconfont">
    <img class="header-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt=""/>
    <a class="header-fontIcon" href="#">&#xe624;</a>
    <p class="header-tip">故宫(AAAAA景区)</p>
    <div class="header-tip2">10</div>
  </div>
</template>

<script>
  export default {
    name: 'index-header',
    methods: {
      handleClick () {
        this.$bus.$emit('change')
      }
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .header
    position: relative
    height: 0
    width: 100%
    padding-bottom: 55%
    position: relative
    .header-tip
      position: absolute
      left: .2rem
      top: 3.5rem
      font-size: .32rem
      color: #fff
    .header-img
      width: 100%
    .header-fontIcon
      border-radius: 50%
      background: rgba(0,0,0,.5)
      color: white
      display: block
      font-weight: bolder
      height: .72rem
      line-height: .72rem
      left: .2rem
      position: absolute
      top: .2rem
      text-indent: .2rem
      width: .72rem
    .header-tip2
      position: absolute
      top: 3.5rem
      right: .2rem
      text-align: center
      width: 1.2rem
      height: .4rem
      line-height: .4rem
      color: #fff
      background: rgba(0,0,0,.5)
      font-size: .24rem
      border-radius: .2rem
</style>

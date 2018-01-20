<template>
  <div class="bottom iconfont">
    <p class="bottom-top">
      <span>机票</span>
      <span>酒店</span>
      <span>公寓</span>
      |
      <span>更多</span>
    </p>
    <p class="bottom-center">
      <span>登录</span>
      <span>我的订单</span>
      <span>最近浏览</span>
      <span>关于我们</span>
    </p>
    <p class="bottom-bottom">
      <span>触屏版</span>
      <span>电脑版</span>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'index-more'
  }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .bottom
    height: 2.2rem
    padding-top: .6rem
    box-sizing: border-box
    p
      font-size: .26rem
      text-align: center
      margin-bottom: .2rem
    .bottom-center
      color: #00bcd4
    .bottom-bottom
      border-top: 1px solid #e0e0e0
      padding-top: .2rem
      box-sizing: border-box
</style>

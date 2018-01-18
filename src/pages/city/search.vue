<template>
  <div class="search" ref="search">
    <input class="search-searchx" type="text" placeholder="请输入城市名或拼音">
  </div>
</template>

<script>
export default {
  name: 'city-search'
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/common/varibles'
  .search
    text-align: center
    width: 100%
    height: .79rem
    line-height: .79rem
    background: $bgColor
    overflow: hidden
    .search-searchx
      display: block
      width: 100%
      height: 100%
      text-indent: .15rem
      border: 1px solid #fff
      border-bottom: 1px solid #999
      box-sizing: border-box
      border-radius: .04rem
      font-size: .25rem
      color: 666
</style>

<template>
  <div class="header">
    <div class="title">
      <span class="iconfont font-left" @click="handleClickBack">&#xe68c;</span>
      城市选择
    </div>
    <div class="switch">
      <p class="switch-area">境内</p>
      <p class="switch-area switch-area-active">国际/地区</p>
    </div>
    <div class="search-again iconfont">&#xe63d;</div>
  </div>
</template>

<script>
export default {
  name: 'city-header',
  methods: {
    handleClickBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/common/varibles'
  .search-again
    position: fixed
    bottom: 5%
    right: .2rem
    width: .6rem
    height: .6rem
    border: 1px solid #999
    border-radius: 50%
    text-align: center
  .header
    padding-top: .1rem
    box-sizing: border-box
    width: 100%
    height: 1.5rem
    color: #fff
    background: $bgColor
    .title
      position: relative
      text-align: center
      height: .68rem
      line-height: .68rem
      font-size: .33rem
      .font-left
        position: absolute
        left: .1rem
        top: .1rem
        font-size: .45rem
        font-weight: bolder
    .switch
      display: flex
      justify-content: center
      align-items: center
      width: 77%
      height: .4rem
      margin: .1rem auto 0
      line-height: .4rem
      border: 1px solid #fff
      border-radius: .03rem
      .switch-area
        text-align: center
        width: 50%
        background: #fff
        color: $bgColor
        font-size: .28rem
      .switch-area-active
        color: #fff
        background: $bgColor
</style>

<template>
  <div class="header">
    <div class="back iconfont">&#xe68c;</div>
    <div class="search">
      <div class="search-content">
        <span class="iconfont">&#xe622;</span>
        请输入城市/景点/游玩主题
      </div>
    </div>
    <div class="city">
      <router-link class="city-to" to="/city">
        {{city}}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'index-header',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles'
  .header
    display: flex
    justify-content: space-between
    align-items: center
    height: .88rem
    background: $bgColor
    .back
      width: .8rem
      font-size: .44rem
      font-weigth: bolder
      text-align: center
      color: #fff
    .search
      flex: 1
      .search-content
        width: 100%
        line-height: .6rem
        background: #fff
        color: #ccc
        border-radius: .1rem
        text-indent: .3rem
    .city
      psoition: relative
      padding: 0 .46rem 0 .22rem
      box-sizing: border-box
      font-size: .28rem
      color: white
      max-width: 2rem
      overflow: hidden
      text-overflow: ellipsis
      white-space: nowrap
      .city-to
        color: white
      &::before
        content: '\0020'
        position: absolute
        right: .1rem
        top: .4rem
        width: 0
        height: 0
        border: .12rem solid transparent
        border-top: .12rem solid white
</style>

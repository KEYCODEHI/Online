<template>
  <ul class="ticket-container clearfix">
    <h3 class="ticket-type">
      <span class="ticket-bg"></span>
      {{selfHelpGuideList.selfHelpGuideTitle}}
    </h3>
    <li class="ticket-info-container" v-for="item of selfHelpGuideList.selfHelpGuideInfo" :key="item">
      <div class="ticket-info">
        <h5 class="ticket-info-name">
          {{item.chinese}}
          <span class="rely-on-idCard-enter-park">
            {{item.noDeposit}}
          </span>
        </h5>
      </div>
      <div class="ticket-price-container">
        ¥
        <em class="ticket-price">{{item.price}}</em>
        <span class="ticket-num-word">起</span>
        <span class="iconfont icon-down-arrow">&#xe62f;</span>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'self-help-guide',
  props: {
    selfHelpGuideList: Object
  }
}
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles'
  .ticket-container
    background #fff
    min-height .5rem
    margin-bottom .2rem
    position relative
    .ticket-type
      height .88rem
      padding 0 .2rem
      font-size .32rem
      line-height .88rem
      text-indent .4rem
      color #333
      white-space nowrap
      overflow hidden
      position relative
      z-index 4
      .ticket-bg
        display inline-block
        position absolute
        width .36rem
        height .36rem
        top .26rem
        left .2rem
        background url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
        margin-right .1rem
        background-size .4rem 3rem
    .ticket-info-container
      overflow hidden
      position relative
      border-bottom .01rem solid #ccc
      .ticket-info
        margin-bottom -.02rem
        padding .24rem .2rem
        .ticket-info-name
          margin-right 1.8rem
          font-size .3rem
          line-height .48rem
          color #333
          white-space nowrap
          overflow hidden
          .rely-on-idCard-enter-park
            margin .1rem 1.84rem .14rem .1rem
            font-size .24rem
            line-height .32rem
            color #888
      .ticket-price-container
        width 21%
        height .4rem
        margin-top -.28rem
        position absolute
        top 50%
        right .2rem
        font-size .24rem
        line-height .4rem
        color #ff9800
        overflow hidden
        .ticket-price
          margin-left .04rem
          font-size .36rem
        .ticket-num-word
          display inline-block
          color #9e9e9e
          font-size .24rem
        .icon-down-arrow
          height .4rem
          line-height .4rem
          font-size .24rem
          color #bbb
          white-space nowrap
          overflow hidden
          position absolute
          right .2rem
          top 25%
</style>
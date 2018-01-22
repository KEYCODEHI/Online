<template>
  <div class="someone-else-recommend clearfix">
    <h3 class="someone-else-recommend-title">
      {{someoneElseRecommend.someoneElseRecommendTitle}}
    </h3>
    <ul class="recommend-content-list clearfix">
      <li
        class="recommend-content clearfix"
        v-for="item of someoneElseRecommend.someoneElseRecommendList"
        :key="item.id">

        <img class="recommend-content-img" :src="item.imgUrl">

        <div class="recommend-info">
          <h4 class="recommend-info-title-price">
            {{item.recommendInfoTitle}}
            <div class="recommend-info-price-container">
              ¥
              <span class="recommend-info-price">{{item.recommendInfoPrice}}</span>
              <span class="recommend-info-price-hint">{{item.recommendInfoPriceHint}}</span>
            </div>
          </h4>

          <div class="evaluate-container">
            <i class="iconfont icon-evaluate">&#xe60c;&#xe60c;&#xe60c;&#xe60c;&#xe60c;</i>
            <i class="iconfont icon-evaluate-count">{{item.iconEvaluateCount}}</i>
          </div>

          <div class="position">
            {{item.position}}
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'user-reviews',
  props: {
    someoneElseRecommend: Object
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles'
  .someone-else-recommend
    min-height 1rem
    background-color #fff
    .someone-else-recommend-title
      height .88rem
      padding 0 .2rem
      font-size .3rem
      line-height .88rem
      text-indent .4rem
      color #333
      white-space nowrap
      overflow hidden
      position relative
      z-index 4
      &:after
        content " "
        width .06rem
        height .25rem
        border-radius .04rem
        background #1ba9ba
        position absolute
        top .33rem
        left .2rem
    .recommend-content-list
      display flex
      flex-direction column
      justify-content flex-start
      align-items center
      width 100%
      min-height 1rem
      .recommend-content
        width 100%
        min-height 1rem
        display flex
        justify-content flex-start
        .recommend-content-img
          width 1.62rem
          height 1.62rem
          margin .2rem .2rem 0 .2rem
        .recommend-info
          flex 1
          height 1.6rem
          padding-top .2rem
          .recommend-info-title-price
            display flex
            justify-content space-between
            align-items center
            height .4rem
            line-height .4rem
            font-size .3rem
            color #212121
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
            .recommend-info-price-container
              margin-right .2rem
              font-size .24rem
              line-height .4rem
              vertical-align baseline
              color #ff9800
              .recommend-info-price
                font-size .36rem
              .recommend-info-price-hint
                font-size .24rem
                color #9e9e9e
          .evaluate-container
            margin-top .2rem
            .icon-evaluate
              font-size .28rem!important
              vertical-align middle
              color #ffb436
            .icon-evaluate-count
              margin-left .1rem
              font-size .24rem
              line-height .28rem
              color #9e9e9e
          .position
            margin-top: .24rem;
            padding: 0 .04rem 0 .1rem
            font-size: .24rem
            color: #9e9e9e
</style>
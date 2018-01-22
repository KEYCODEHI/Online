<template>
  <footer class="footer-container">
    <ul class="floor-one-container">
      <li
        class="floor-one-info"
        v-for="itemOne of footerDetailInfo.floorOneInfo"
        :key="itemOne.id">
        <a href="javascript:;" class="icon-container">
          <i class="iconfont icon-plane">
            &#xe602;
          </i>
          <i class="icon-title">{{itemOne.info}}</i>
        </a>
      </li>
    </ul>
    <ul class="floor-two-container">
      <li class="floor-two-info" v-for="itemTwo of footerDetailInfo.floorTwoInfo" :key="itemTwo">
        {{itemTwo.info}}
      </li>
    </ul>
    <ul class="floor-three-container">
      <li
        class="floor-three-info icon-color-phone"
        v-for="itemThree of footerDetailInfo.floorThreeInfo"
        :key="itemThree.id">
        {{itemThree.info}}
      </li>
    </ul>
    <ul class="floor-four-container">
      <li
        class="floor-four-info"
        v-for="itemFour of footerDetailInfo.floorFourInfo"
        :key="itemFour.id">
        <span class="ICP">{{itemFour.infoLeft}}</span>
        <a class="feedback" href="//touch.qunar.com/h5/feedback">{{itemFour.infoRight}}</a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'footer-detail',
  props: {
    footerDetailInfo: Object
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles'
  .footer-container
    position relative
    width 100%
    min-height 1rem
    margin 0 auto
    padding 10px 10px 0 10px
    overflow hidden
    .floor-one-container
      display flex
      justify-content space-around
      align-items center
      .floor-one-info
        width 1.3rem
        height .62rem
        line-height .62rem
        text-align center
        .icon-container
          display block
          width 100%
          overflow hidden
          .icon-plane
            float left
            width .44rem
            height .44rem
            color #9e9e9e
          .icon-title
            float left
            color #9e9e9e
            margin .05rem 0 0 .1rem
            font-size .24rem
    .floor-two-container
      display flex
      justify-content space-around
      align-items center
      width 100%
      height .8rem
      border-bottom 1px solid #cacaca
      .floor-two-info
        color: #25a4bb;
        font-size: .28rem;
        line-height: .8rem;
    .floor-three-container
      display flex
      justify-content center
      padding-top .2rem
      .floor-three-info
        margin 0 .3rem
        color #000
        font-size .28rem
      .icon-color-PC
        color #25a4bb
    .floor-four-container
      display flex
      justify-content center
      align-items center
      color #9e9e9e
      text-align center
      font-size 14px
      padding 10px
      .floor-four-info
        margin 0 .3rem
        .ICP
          color #9e9e9e
          text-align center
          font-size 14px
          padding 10px
        .feedback
          color #9e9e9e
          outline 0 none
</style>
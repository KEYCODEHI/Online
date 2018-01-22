<template>
  <ul class="ticket-container clearfix">
    <h3 class="ticket-type">
      <span class="ticket-bg"></span>
      {{ticketAdultList.ticketTypeTitle}}
    </h3>
    <li
      class="ticket-info-container"
      v-for="(item, index) of ticketAdultList.ticketAdultInfo"
      :key="item.id"
      >
      <div class="ticket-info">
        <h5 class="ticket-info-name">
          {{item.ticketInfoName}}
          <span class="rely-on-idCard-enter-park">
            {{item.relyOnIdCardEnterPark}}
          </span>
        </h5>
      </div>
      <div
        class="ticket-price-container"
        @click="handleIsShowReservation(index)"
        >
        ¥
        <em class="ticket-price">{{item.ticketPrice}}</em>
        <span class="ticket-num-word">起</span>
        <span class="iconfont icon-down-arrow">&#xe62f;</span>
      </div>
      <ol class="reservation-container clearfix"
        ref="reservationElem"
        >
        <li class="reservation" v-for="reservation of ticketAdultList.showReservation" :key="reservation">
          <div class="reservation-left">
            <h4 class="reservation-left-title">
              <span class="reservation-left-title-bg"></span>
              {{reservation.title}}
            </h4>
            <h5
              class="reservation-left-title-hint-title .hidden-single-line-text"
              >
              {{reservation.hintTitle}}
            </h5>
            <ul class="reservation-left-title-hint-info-container">
              <li class="reservation-left-title-hint-info">
                <span class="iconfont icon-reservation-left-title-hint-info">&#xe612;</span>
                {{reservation.hintInfoOne}}
              </li>
              <li class="reservation-left-title-hint-info">
                <span class="iconfont icon-reservation-left-title-hint-info">&#xe6ac;</span>
                {{reservation.hintInfoTwo}}
              </li>
            </ul>
          </div>
          <ol class="reservation-right">
            <li class="reservation-right-con">
              <em class="price-container">
                &#165;
                <i class="price">{{reservation.price}}</i>
              </em>
              <em class="reserve">{{reservation.reservationBtn}}</em>
            </li>
          </ol>
        </li>
      </ol>
    </li>
    <li class="see-more-product"
      v-show="isShow"
      @click="handleSeeMoreProduct">
      查看剩余产品
      <span class="iconfont icon-down-arrow">&#xe62f;</span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'ticket-adult',
    props: {
      ticketAdultList: Object
    },
    data () {
      return {
        isShow: true,
        isShowReservation: false
      }
    },
    methods: {
      handleSeeMoreProduct () {
        this.$data.isShow = !this.$data.isShow
      },
      handleIsShowReservation (index) {
        this.$data.isShowReservation = !this.$data.isShowReservation
        const reservationElem = this.$refs.reservationElem[index]
        reservationElem.style.display = this.$data.isShowReservation ? 'block' : 'none'
        console.log(this.$data.isShowReservation)
      }
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
        top .55rem
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
          right .06rem
          top 25%
      .reservation-container
        display none
        min-height 0
        background #f5f5f5
        .reservation
          display flex
          width 100%
          box-sizing border-box
          padding .25rem
          background #f5f5f5
          .reservation-left
            flex 2.92
            align-items center
            display flex
            flex-direction column
            justify-content flex-start
            align-items flex-start
            .reservation-left-title
              font-size .32rem
              padding .08rem 0
              line-height .36rem
              color #333
              .reservation-left-title-bg
                display inline-block
                width .3rem
                height .3rem
                margin-right .06rem
                border-radius .06rem
                overflow hidden
                background url(//s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
                vertical-align -.04rem
            .reservation-left-title-hint-title 
              color #888
              font-size .24rem
              line-height .36rem
              padding 0 0 .08rem 0
            .reservation-left-title-hint-info-container
              padding 0.04rem 0 0.08rem 0
              display flex
              .reservation-left-title-hint-info
                margin-right: .24rem;
                color: #616161;
                font-size: .24rem;
                line-height: .32rem;
                white-space nowrap
                overflow hidden
                .icon-reservation-left-title-hint-info
                  margin-right .24rem
                  white-space nowrap
                  overflow hidden
                  font-size .24rem
                  line-height .32rem
                  color #1ba9ba
          .reservation-right
            display flex
            flex 1
            align-items center
            padding .08rem 0
            .reservation-right-con
              display flex
              box-sizing border-box
              flex-direction column
              justify-content flex-start
              width 100%
              padding 0 .2rem
            .price-container
              display block
              height .32rem
              font-size .24rem
              line-height .28rem
              text-align center
              font-weight 400
              overflow hidden
              color #ff9800
              .price
                margin-left .04rem
                font-size .32rem
                line-height .3rem
                color #ff9800
            .reserve
              height .6rem
              border-radius .06rem
              font-size .28rem
              line-height .6rem
              text-align center
              font-weight 400
              color #fff
              background #ff9800
    .see-more-product
      width 100%
      position absolute
      left 0
      bottom 0
      margin-top -.02rem
      height .8rem
      background #fff
      color #616161
      line-height .8rem
      text-align center
      z-index 999
</style>
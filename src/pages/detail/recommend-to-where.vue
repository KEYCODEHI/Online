<template>
    <div class="ticket-container clearfix">

      <ul class="recommend-to-where clearfix">
        <h2 class="ticket-type">去哪儿推荐</h2>

        <li class="ticket-item" v-for="item of recommendToWhere" :key="item">
          <ol class="ticket-item-info ticket-item-info-left">
            <li class="ticket-title">{{item.ticketTitle}}</li>
            <li class="ticket-icon-container">
              <span class="iconfont icon-next-day-order">&#xe6ac;</span>
              {{item.nextDayOrder}}
              <span class="iconfont icon-sales-return">&#xe644;</span>
              {{item.salesReturn}}
            </li>
          </ol>
          <ol class="ticket-item-info ticket-item-info-right">
            <li class="ticket-link">
              <em class="price-container">
                &#165;
                <i class="price">{{item.priceNum}}</i>
              </em>
              <em class="reserve">{{item.reserve}}</em>
            </li>
          </ol>
        </li>

      </ul>

    </div>
</template>

<script>
export default {
  name: 'ticket-container',
  props: {
    recommendToWhere: Array
  }
}
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles'
  .ticket-container
    min-height .5rem
    margin-bottom .2rem
    .recommend-to-where
      min-height .5rem
      background-color #fff
      .ticket-type
        height .88rem
        margin-bottom -.02rem
        padding 0 .2rem
        background-image url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAAflBMVEUAAAD/bm7/b2//b2//eXn/b2//b2//bm7/b2//b2//bm7/b2//b2//b2//bm7/b2//b2//cXH/eHj/qqr/bm7/////cXH/iIj/oqL//f3/mJj/fHz/9/f/8PD/4eH/ycn/6+v/1dX/0ND/t7f/ra3/kpL/jo7/c3P/5ub/vr7o37bEAAAAFHRSTlMA9uZeCfny7NvLt6+PfGZONxsRA/pz1k8AAAFrSURBVEjHpZbZdoMwDERtMEvYE8YJZN/b/v8PNvicJsiYqJzcB548WGNZksUAVWZJHAVBFCdZqQTDwk8lesjUX4hxVB5iQJiPbVMXHpx4RS0czGcYZTYXAyoPb/AqYeFLvEX61nqwEEUlwSKrnl9X/JtmZfl4Oq9d53Pfan2yzurvdAs42OsHaxAKYVDOA207wcEKShlBDhfaIUBu7lsIl2UjuIASLkZTsDaCxpWMFC7ORrCBRfqw7MxZY9Z/w0YqUWLI8tLqJ+25n8BSZP3Am+aG2/Vw1IQ9XmQiwZNV9z+0mkKtJCKmAg094IgXsYg4Ab0gkQh4wRUvgv8I1kTAh7QHCYk3fQIxnbCCHXokImMFPyCJKznB9gvkaijJ7XCnl0+kU3ZISQFttp3DnWW5oQVES3S57D4Eq0RJE+DJSZvh8RRpZDwFaZU8s5o0YxZvPrXdTx0on40sfih+Nnb5wT7x6fDR42Ty8+cXnHyOvDgQEbUAAAAASUVORK5CYII=')
        background-repeat no-repeat
        background-position .2rem center
        background-size .5rem .5rem
        position relative
        z-index 4
        font-size .32rem
        line-height .88rem
        text-indent .7rem
        color #333
        white-space nowrap
        overflow hidden
      .ticket-item
        display flex
        width 100%
        padding .2rem .2rem .24rem .2rem
        border-top .03rem solid #ccc
        background-color #fff
        .ticket-item-info
          padding .08rem 0
        .ticket-item-info-left
          flex 2.92
          border-right .03rem solid #ccc
          .ticket-title
            margin-right .1rem
            padding 0
            line-height .52rem
            font-size .3rem
            color #333
            font-weight 400
          .ticket-icon-container
            padding .04rem 0 .08rem 0
            font-size .24rem
            color #616161
            line-height .24rem
            .icon-next-day-order
              margin-right .08rem
              font-size .2rem
              color #1ba9ba
            .icon-sales-return
              font-size .2rem
              color #ff4500
        .ticket-item-info-right
          flex 1
          .ticket-link
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
</style>
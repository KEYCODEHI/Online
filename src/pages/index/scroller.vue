<template>
  <div ref="scroller">
    <div class="content">
      <div class="item" v-for="item in sights" :key="item.id">
        <img class="scroll-img" v-lazy="item.imgUrl" alt="">
        <div>
          <p class="item-title">{{item.title}}</p>
          <p class="item-des">{{item.dis}}</p>
          <p class="item-price">
            <span class="price-tag">&yen;</span>
            {{item.price}}
            <span class="price-start">起</span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'index-scroller',
  props: {
    sights: Array
  },
  watch: {
    sights () {
      this.$nextTick(() => {
        this.scroller.refresh()
      })
    }
  },
  mounted () {
    this.scroller = new BScroll(this.$refs.scroller)
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/common/varibles'
  .item
    display: flex
    padding: .24rem
    box-sizing: border-box
    .scroll-img
      width: 1.4rem
      height: 1.4rem
      margin-right: .2rem
    .item-title
      font-size: .3rem
      font-weight: bolder
      margin: 0 0 .2rem
      color: $fontColor
    .item-des
      margin-bottom: .25rem
      font-size: .28rem
      color: $lightFontColor
    .item-price
      font-size: .36rem
      color: $enlightFontColor
      .price-tag
        font-size: .24rem
      .price-start
        font-size: .24rem
        color: $lightFontColor
</style>

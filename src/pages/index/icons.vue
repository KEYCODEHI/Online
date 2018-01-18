<template>
  <div>
    <swiper class="icons index-icons" :options="swiperOption" v-if="icons.length">
      <swiper-slide class="icons-page" v-for="(page, index) of pages" :key="index">
        <div class="icons-list">
          <div v-for="item in page" :key="item.id" class="icons-item">
            <img class="icons-img" :src="item.imgUrl">
            <span class="icons-txt" :txt="item.tip">{{item.tip}}</span>
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'index-icons',
  props: {
    icons: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.icons.forEach((value, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(value)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/common/varibles'
  .swiper-icons >>> .swiper-icons-bullet-active
    background: $bgColor
  .icons
    padding-bottom: .6rem
    background: white
    .icons-page
      width: 100%
      height: 0
      padding-bottom: 2.8rem
      over-flow: hidden
      .icons-list
        display: flex
        justify-content: space-around
        align-items: center
        flex-wrap: wrap
        .icons-item
          width: 25%
          padding-top: .3rem
          text-align: center
          font-size: .28rem
          color: #333
          .icons-img
            display: block
            margin: 0 auto .16rem
            width: .66rem
            height: .66rem
          .icons-txt
            display inline-block
            width: 2rem
            overflow: hidden
            text-overflow: ellipsis
            white-space: nowrap
</style>

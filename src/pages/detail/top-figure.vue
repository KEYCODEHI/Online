<template>
  <div class="top-figure">
    <div class="figure-container" @click="handleShowSwiper">
      <img class="figure" :src="banner.imgUrl">
    </div>
    <div class="figure-info clearfix">
      <div class="figure-title hidden-single-line-text">
        {{banner.bannerImgtitle}}
      </div>
      <div class="icon-figure-container">
        <span class="iconfont icon-figure">&#xe604;</span>
        <em class="figure-count hidden-single-line-text">
          {{banner.count}}
        </em>
      </div>
    </div>
    <span
      class="iconfont icon-back"
      ref="iconBack"
      @click="handleIconBackHide">
      &#xe623;
    </span>

    <div
      class="user-reviews-img-swiper-container"
      v-show="showTopSwiper"
      @click="handleHideSwiper">
      <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide
          v-for="(item,index) of banner.bannerSwiperList"
          :key="index">
          <div class="user-reviews-img-container">
            <img class="user-reviews-img" :src="item.imgUrl">
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'top-figure',
  props: {
    banner: Object
  },
  data () {
    return {
      showTopSwiper: false,
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
      }
    }
  },
  methods: {
    handleShowSwiper () {
      this.showTopSwiper = !this.showTopSwiper
    },
    handleHideSwiper () {
      this.showTopSwiper = !this.showTopSwiper
    },
    handleIconBackHide () {
      const iconBackElem = this.$refs.iconBack
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      iconBackElem.style.opacity = scrollTop > 0 ? 0 : 1
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleIconBackHide)
  },
  beforeDestroy () {
    // alert(123)
    window.removeEventListener('scroll', this.handleIconBackHide)
  }
}
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles'
  .swiper-pagination
    color: #fff
  .top-figure
    min-height 1rem
    position relative
    .figure-container
      width 100%
      height 0
      padding-bottom 55%
      overflow hidden
      .figure
        width 100%
    .figure-info
      display flex
      width 100%
      position absolute
      left .2rem
      bottom .26rem
      min-height .4rem
      .figure-title
        flex 1
        z-index 1
        line-height .4rem
        text-shadow 0 1px 2px rgba(0,0,0,0.70)
        font-size .32rem
        color #fff
      .icon-figure-container
        width 1.2rem
        height .4rem
        margin-right .3rem
        border-radius .2rem
        font-size .24rem
        color #fff
        line-height .4rem
        text-align center
        background rgba(0,0,0,.5)
    .icon-back
      display block
      width .72rem
      height .72rem
      line-height .72rem
      position absolute
      left .1rem
      top .1rem
      font-size .36rem
      border-radius 50%
      text-align center
      color #fff
      background rgba(0, 0, 0, .5)
    .user-reviews-img-swiper-container
      width 100%
      background-color #000
      position fixed
      top 0
      bottom 0
      z-index 9999
      overflow hidden
      padding-top 37%
      .user-reviews-img-container
        width 100%
        height 100%
        background-color #000
        .user-reviews-img
          display block
          width 100%
          margin 0 auto
</style>
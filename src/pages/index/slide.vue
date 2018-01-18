<template>
  <div>
    <swiper class="banner index-banner" :options="swiperOption">
      <swiper-slide v-for="item of slides" :key="item.id">
        <img class="banner-img" :src="item.imgUrl" alt="">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'index-slider',
  props: {
    slides: Array
  },
  data () {
    return {
      swiperOption: {
        autoplay: 5000,
        pagination: '.swiper-pagination'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/common/varibles'
  .swiper-pagination >>> .swiper-pagination-bullet-active
    background: #fff
  .banner
    over-flow: hidden
    height: 0
    width: 100%
    padding-bottom: 31.25%
    .banner-img
      width: 100%
</style>

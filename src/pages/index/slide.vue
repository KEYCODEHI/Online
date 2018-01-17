<template>
  <div>
    <swiper class="banner index-banner" :options="swiperOption" v-if="slides.length">
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
        autoplay: 1000,
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>

<style lang="stylus">
  @import '../../assets/styles/common/varibles'
  .index-banner >>> .index-pagination-bullet
    background: #fff
  .banner
    over-flow: hidden
    height: 0
    width: 100%
    padding-bottom: 31.25%
    .banner-img
      width: 100%
</style>

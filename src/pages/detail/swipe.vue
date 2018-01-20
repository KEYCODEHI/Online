<template>
  <div @click="handleHideClick" v-show="toggle" class="swiper">
    <swiper :options="swiperOption" v-if="list.length">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" alt="" :src="item.imgUrl"/>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'index-swiper',
    props: {
      list: Array
    },
    data () {
      return {
        toggle: false,
        swiperOption: {
          loop: true,
          pagination: '.swiper-pagination',
          paginationType: 'fraction'
        }
      }
    },
    created () {
      this.handleBindEvents()
    },
    methods: {
      handleHideClick () {
         this.toggle = false
      },
      handleBindEvents () {
        this.$bus.$on('change', this.handleShowChange.bind(this))
      },
      handleShowChange () {
        this.toggle = true
      }
    }
  }

</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .swiper
    background: black
    position: fixed
    display: flex
    jusitify-content: space-between
    align-items: center
    top: 0
    left: 0
    width: 100%
    height: 100%
    z-index: 999
    .swiper-img
      width:100%
    .swiper-pagination
      color: white
</style>

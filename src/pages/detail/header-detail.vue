<template>
    <header
      class="header"
      ref="header"
      @scroll="handleScroll"
      >
      <a href="javascript:void(0)"
        class="header-back iconfont"
        ref="iconBackBtn"
        @click="handleBack"
        >
        &#xe623;
      </a>
      <h1 class="header-title hidden-single-line-text">
        {{header.headerTitle}}
      </h1>
    </header>
</template>

<script>
export default {
  name: 'header-detail',
  props: {
    header: Object,
    top: Number
  },
  methods: {
    handleBack () {
      this.$router.go(-1)
    },
    handleScroll () {
      const header = this.$refs.header
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      let BodyscrollTop = scrollTop / this.top
      BodyscrollTop = BodyscrollTop > 1 ? 1 : BodyscrollTop
      header.style.opacity = BodyscrollTop
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles'
  .header
    display flex
    width 100%
    height .88rem
    background $bgColor
    position fixed
    top 0px
    left 0px
    z-index 9999999999
    opacity 0
    .header-back
      width .8rem
      height .88rem
      line-height .88rem
      text-align center
      color #fff
      position: absolute
    .header-title
      flex 1
      margin: 0 1rem;
      line-height: .88rem;
      font-size: .32rem;
      text-align: center;
      color: #fff;
</style>
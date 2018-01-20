<template>
  <div v-show="toggle" class="header-mount iconfont">
    <p class="mount-icon">&#xe624;</p>
    <p>故宫</p>
  </div>
</template>

<script>
  export default {
    name: 'index-mount',
    data () {
      return {
        toggle: false
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll)
    },
    methods : {
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        scrollTop == 0 ? this.toggle = false : this.toggle = true
      }
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .header-mount
    position: fixed
    top: 0
    left:0
    z-index: 9999
    width: 100%
    height: .88rem
    background: #00bcd4
    text-align: center
    line-height: .88rem
    color: white
    font-size: .32rem
  .mount-icon
    font-weight: bolder
    top: 0rem
    width: .8rem
    height: .88rem
    position: absolute
    left: 0rem
</style>

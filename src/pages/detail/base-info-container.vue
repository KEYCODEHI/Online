<template>
  <ul
    class="base-info-container clearfix" 
    v-if="isShowContent"
    >
    <li class="base-info clearfix" v-for="item in baseInfoList" ref="baseInfoElem" :key="item">
      <router-link :to="item.link" class="base-info-link-container">
        <span class="iconfont">&#xe606;</span>
        {{item.baseInfo}}
        <span class="iconfont icon-address-arrow">&#xe62d;</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'base-info',
  props: {
    baseInfoList: Array
  },
  computed: {
    isShowContent () {
      return !!this.baseInfoList.length
    }
  },
  updated () {
    const baseInfoElem = this.$refs.baseInfoElem[0]
    const baseInfoElemInfo = baseInfoElem.getBoundingClientRect()
    console.log(baseInfoElemInfo)
    const baseInfoElemOffsetTop = baseInfoElemInfo.top
    const baseInfoElemHeight = baseInfoElemInfo.height
    const headerDetailComponetnUsedTop = baseInfoElemOffsetTop - (baseInfoElemHeight / 2)
    this.$emit('changeOpacity', headerDetailComponetnUsedTop)
  }
}
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles'
  .base-info-container
    min-height .5rem
    padding .1rem .2rem 0 .2rem
    background #fff
    .base-info
      min-height .5rem
      .base-info-link-container
        display block
        line-height .88rem
        color #2222228a
        white-space nowrap
        overflow hidden
        padding-right .56rem
        position relative
        font-size .28rem
        .icon-address-arrow
          position absolute
          right 0
          top 0
          color #b9b9b9
  
</style>
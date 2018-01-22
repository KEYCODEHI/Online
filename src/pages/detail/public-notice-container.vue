<template>
  <ul class="public-notice-container clearfix">
    <li class="public-notice" v-for="item of publicNoticeList" :key="item">
      <span class="iconfont icon-horn">&#xe6ff;</span>
      {{item.publicNoticeInfo}}
      <span class="iconfont public-notice-rightarrow">&#xe62d;</span>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'public-notice',
    props: {
      publicNoticeList: Array
    }
  }
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles'
  .public-notice-container
    min-height .5rem
    .public-notice
      height .88rem
      padding-left .23rem
      line-height .88rem
      color #f1441a
      background #fdeede
      position relative
      .public-notice-rightarrow
        float right
        margin-right .2rem
</style>
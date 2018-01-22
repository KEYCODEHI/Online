<template>
  <div class="comments-info-container">
    <div class="comments-info-left">
      <div class="iconfont icon-smiling-face">&#xe600;</div>
      <div class="iconfont icon-starlevel">&#xe624;</div>
      <div class="iconfont icon-score">{{commentsInfo.commentsScore}}</div>
    </div>
    <a class="comments-info-right">
      <span class="comments-count">
        {{commentsInfo.commentsCount}}
        <span class="iconfont comments-rightarrow">&#xe62d;</span>
      </span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'comments-info',
  props: {
    commentsInfo: Object
  }
}
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles'
  .comments-info-container
    justify-content space-between
    margin .2rem 0
    background-color #fff
    height .8rem
    line-height .8rem
    .comments-info-left
      float left
      display flex
      .icon-smiling-face
        width .36rem
        height .36rem
        margin-left .2rem
        margin-right .1rem
        font-size .28rem
        color $bgColor
      .icon-starlevel
        width 1.4rem
        height .28rem
        position relative
        top .04rem
        font-size 1.3rem!important;
        color #ff8300
      .icon-score
        margin-left .1rem
        font-size .28rem
        color #ff8300
    .comments-info-right
      float right
      .comments-count
        margin-left .16rem
        margin-right .2rem
        line-height .28rem
        font-size .28rem
        color #9e9e9e
</style>
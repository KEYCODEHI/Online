<template>
  <ul class="user-reviews-container clearfix">
    <h3 class="user-reviews-title">
      {{userReviewsList.userReviewsTitle}}
    </h3>
    <li
      class="user-reviews-info"
      v-for="(item, index) of userReviewsList.userReviewsInfo"
      :key="item.id">
      <div class="rating-score">
        <div class="icon-score-container">
          <i class="iconfont icon-score">&#xe60c;&#xe60c;&#xe60c;&#xe60c;&#xe60c;</i>
        </div>
        <div class="username-reviews-date">
          {{item.usernameReviewsDate}}
        </div>
      </div>
      <div
        class="user-reviews-content"
        ref="seeMoreElem">
        {{item.reviewContent}}
      </div>
      <div
        class="iconfont icon-seemoreBtn"
        @click.stop="handleSeeMoreBtnClick(index)"
        ref="changeIcon">
        &#xe62f;
      </div>
    </li>
    <li class="user-reviews-smallImg-container clearfix">
      <div
        class="smallImg-container"
        @click="handleShowReviewsSwiper"
        v-for="bottomSwiper of userReviewsList.userReviewsSmallImgList"
        :key="bottomSwiper.id">
        <img class="smallImg" :src="bottomSwiper.imgUrl">
      </div>
      <div class="small-img-count">
        {{userReviewsList.smallImgCount}}
      </div>
      <div
        class="iconfont icon-seemoreReviews">
        查看全部评论&#xe62d;
      </div>
    </li>
    <li
      class="user-reviews-img-swiper-container"
      v-show="showBottomSwiper"
      @click="handleHideBottomSwiper">
      <swiper
        :options="swiperOption"
        ref="mySwiper"
        >
        <swiper-slide
          v-for="swiperCon of userReviewsList.userReviewsSwiperImgList"
          :key="swiperCon.id">
          <div class="user-reviews-img-container">
            <img class="user-reviews-img" :src="swiperCon.imgUrl">
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'user-reviews',
  props: {
    userReviewsList: Object
  },
  data () {
    return {
      isShowMore: false,
      showBottomSwiper: false,
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction'
      }
    }
  },
  methods: {
    handleSeeMoreBtnClick (index) {
      this.isShowMore = !this.isShowMore
      const liElem = this.$refs.seeMoreElem[index]
      const changeIcon = this.$refs.changeIcon[index]
      liElem.style.height = this.isShowMore ? 'auto' : '2.05rem'
      changeIcon.innerHTML = this.isShowMore ? '&#xe62e;' : '&#xe62f;'
    },
    handleShowReviewsSwiper () {
      this.showBottomSwiper = !this.showBottomSwiper
    },
    handleHideBottomSwiper () {
      this.showBottomSwiper = !this.showBottomSwiper
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles'
  .swiper-pagination
    color: #fff
  .user-reviews-container
    min-height 1rem
    background-color #fff
    .user-reviews-title
      height .88rem
      padding 0 .2rem
      font-size .32rem
      line-height .88rem
      text-indent .4rem
      color #333
      white-space nowrap
      overflow hidden
      position relative
      z-index 4
      &:after
        content " "
        width .06rem
        height .25rem
        border-radius .04rem
        background #1ba9ba
        position absolute
        top .33rem
        left .2rem
    .user-reviews-info
      min-height 1rem
      padding .1rem .2rem .3rem .2rem
      .rating-score
        display flex
        height .6rem
        line-height .6rem
        margin-top .1rem
        justify-content space-between
        align-items center
        .icon-score-container
          width 2rem
          height .28rem
          line-height .28rem
          .icon-score
            color #ffb436
        .username-reviews-date
          margin-left .2rem
          line-height .28rem
          font-size .24rem
          color #212121
      .user-reviews-content
        height 2.05rem
        line-height .42rem
        font-size .26rem
        color #616161
        word-break break-all
        word-wrap break-word
        overflow hidden
      .icon-seemoreBtn
        height .48rem
        line-height .48rem
        font-size .26rem
        text-align center
        color #9e9e9e
    .user-reviews-smallImg-container
      min-height 1rem
      margin .2rem
      position relative
      zoom 1
      overflow hidden
      .smallImg-container
        float left
        overflow hidden
        margin-left .13rem
        width 31%
        height 0
        padding-bottom: 26.3%
        .smallImg
          width 100%
      .small-img-count
        width .94rem
        height .4rem
        padding-right .05rem
        border-top-left-radius .2rem
        border-bottom-left-radius .2rem
        line-height .4rem
        font-size .24rem
        color #fff
        text-align right
        background rgba(0, 0, 0, .5)
        position absolute
        bottom 1.2rem
        right .2rem
      .icon-seemoreReviews
        line-height .8rem
        font-size .26rem
        text-align center
        color #9e9e9e
    .user-reviews-img-swiper-container
      width 100%
      background-color #000
      position fixed
      top 0
      bottom 0
      z-index 999
      overflow hidden
      padding-top 20%
      .user-reviews-img-container
        width 100%
        height 100%
        background-color #000
        .user-reviews-img
          display block
          width 100%
          margin 0 auto
</style>
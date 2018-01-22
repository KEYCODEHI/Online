<template>
  <div class="page-main clearfix">
    <header-detail :header="header" :top="top"></header-detail>

    <div class="content clearfix">
      <top-figure :banner="banner"></top-figure>

      <base-info-container :baseInfoList="baseInfoList" @changeOpacity="handlechangeOpacity"></base-info-container>

      <comments-info-container :commentsInfo="commentsInfo"></comments-info-container>

      <public-notice-container :publicNoticeList="publicNoticeList"></public-notice-container>

      <div class="list-container clearfix">
        <recommend-to-where :recommendToWhere="recommendToWhere"></recommend-to-where>
        <ticket-adult :ticketAdultList="ticketAdultList"></ticket-adult>
        <ticket-student :ticketStudent="ticketStudent"></ticket-student>
        <ticket-elderly :ticketElderly="ticketElderly"></ticket-elderly>
        <hot-selling-goods :hotSellingGoodsList="hotSellingGoodsList"></hot-selling-goods>
        <self-help-guide :selfHelpGuideList="selfHelpGuideList"></self-help-guide>
        <treasure-timekeeper :treasureAndTimekeeper="treasureAndTimekeeper"></treasure-timekeeper>
        <visiting-guide :visitingGuide="visitingGuide"></visiting-guide>
        <temple-gift :templeGift="templeGift"></temple-gift>
        <one-day-tour :oneDayTour="oneDayTour"></one-day-tour>
        <user-reviews :userReviewsList="userReviewsList"></user-reviews>
        <someone-else-recommend :someoneElseRecommend="someoneElseRecommend"></someone-else-recommend>
      </div>
    </div>

    <footer-detail :footerDetailInfo="footerDetailInfo"></footer-detail>

  </div>
</template>
<script>
import HeaderDetail from './header-detail.vue'
import TopFigure from './top-figure.vue'
import BaseInfoContainer from './base-info-container.vue'
import CommentsInfoContainer from './comments-info-container.vue'
import PublicNoticeContainer from './public-notice-container.vue'
import RecommendToWhere from './recommend-to-where.vue'

import TicketAdult from './ticket-adult.vue'
import ticketStudent from './ticket-student.vue'
import TicketElderly from './ticket-elderly.vue'

import HotSellingGoods from './hot-selling-goods.vue'
import SelfHelpGuide from './self-help-guide.vue'
import TreasureTimekeeper from './treasure-timekeeper.vue'
import VisitingGuide from './visiting-guide.vue'
import TempleGift from './temple-gift.vue'
import OneDayTour from './one-day-tour.vue'
import UserReviews from './user-reviews.vue'
import SomeoneElseRecommend from './someone-else-recommend.vue'

import FooterDetail from './footer-detail.vue'

import axios from 'axios'

export default {
  name: 'detail',
  components: {
    HeaderDetail,
    TopFigure,
    BaseInfoContainer,
    CommentsInfoContainer,
    PublicNoticeContainer,
    RecommendToWhere,
    TicketAdult,
    ticketStudent,
    TicketElderly,
    HotSellingGoods,
    SelfHelpGuide,
    TreasureTimekeeper,
    VisitingGuide,
    TempleGift,
    OneDayTour,
    UserReviews,
    SomeoneElseRecommend,
    FooterDetail
  },
  data () {
    return {
      header: {},
      banner: {},
      baseInfoList: [],
      commentsInfo: {},
      publicNoticeList: [],
      recommendToWhere: [],
      ticketAdultList: {},
      ticketStudent: {},
      ticketElderly: {},
      hotSellingGoodsList: {},
      selfHelpGuideList: {},
      treasureAndTimekeeper: {},
      visitingGuide: {},
      templeGift: {},
      oneDayTour: {},
      userReviewsList: {},
      someoneElseRecommend: {},
      footerDetailInfo: {},
      top: 0
    }
  },
  created () {
    this.getDetailPageData()
  },
  methods: {
    getDetailPageData () {
      axios.get('/api/detail.json')
      .then(this.handlegetDetailPageDataSucc.bind(this))
      .catch(this.handlegetDetailPageDataDefeat.bind(this))
    },
    handlegetDetailPageDataSucc (response) {
      const data = response.data.data.detail
      this.header = data.header
      this.banner = data.banner

      this.baseInfoList = data.baseInfoList
      this.commentsInfo = data.commentsInfo
      this.publicNoticeList = data.publicNoticeList
      this.recommendToWhere = data.recommendToWhere
      this.ticketAdultList = data.ticketAdultList
      this.ticketStudent = data.ticketStudent
      this.ticketElderly = data.ticketElderly
      this.hotSellingGoodsList = data.hotSellingGoodsList
      this.selfHelpGuideList = data.selfHelpGuideList
      this.treasureAndTimekeeper = data.treasureAndTimekeeper
      this.visitingGuide = data.visitingGuide
      this.templeGift = data.templeGift
      this.oneDayTour = data.oneDayTour
      this.userReviewsList = data.userReviewsList
      this.someoneElseRecommend = data.someoneElseRecommend
      this.footerDetailInfo = data.footerDetailInfo
    },
    handlegetDetailPageDataDefeat (error) {
      console.log(error)
    },
    handlechangeOpacity (top) {
      this.top = top
    }
  }
}
</script>

<style scoped lang="stylus">
  @import '../../assets/styles/common/varibles'
  .page-main
    min-height 1rem
    position relative
    background #f5f5f5
    .content
      min-height 1rem
      .list-container
        min-height .5rem
        margin .2rem 0
</style>
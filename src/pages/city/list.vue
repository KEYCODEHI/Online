<template>
  <div ref="wrapper">
    <div class="list">
      <div class="now-area">
        <div class="now-title">当前位置</div>
        <div class="now-content">
          <div class="button" @click="handleCityClick(nowCity)">{{nowCity}}</div>
        </div>
      </div>
      <div class="now-area">
        <div class="now-title">热门城市</div>
        <div class="now-content">
          <div class="button-hotcity" ref="cityChoice" @click="handleCityClick(item.name, index)" v-for="(item, index) of hotcity" :key="index">
            {{item.name}}
          </div>
        </div>
      </div>
      <div class="now-area">
        <div class="now-title">字母排序</div>
        <div class="now-content">
          <div class="button-hotcity" @click="handleClickSkip(item)" v-for="(item, index) of city" :key="index">{{item.classify}}</div>
        </div>
      </div>
      <div class="now-area" v-for="(item, index) of city" :key="index">
        <div class="now-title">{{item.classify}}</div>
        <div class="now-content">
          <div class="button-hotcity" @click="handleCityClick(item2.name)" v-for="(item2, index) of item.cityList" :key="index">
            {{item2.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'city-list',
  props: {
    city: Array,
    hotcity: Array
  },
  computed: {
    ...mapState({
      nowCity (state) {
        return state.city || '北京'
      }
    })
  },
  methods: {
    ...mapMutations(['changeCity']),
    handleClickSkip (item) {
      console.log(item.classify)
    },
    handleCityClick (city, index) {
      for (var i = 0; i < this.$refs.cityChoice.length; i++) {
        this.$refs.cityChoice[i].style.border = '2px solid #919191'
        this.$refs.cityChoice[i].style.color = '#616161'
      }
      if (index || index === 0) {
        this.$refs.cityChoice[index].style.border = '2px solid #00bcd4'
        this.$refs.cityChoice[index].style.color = '#00bcd4'
      }
      this.changeCity(city)
      this.$router.push('/')
    }
  },
  watch: {
    list () {
    }
  },
  mounted () {
    this.scroller = new BScroll(this.$refs.wrapper)
  },
  activated () {
    this.scroller && this.scroller.refresh()
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/common/varibles'
  .now-area
    .now-title
      line-height: .54rem
      padding-left: .3rem
      background: #eee
      color: #616161
      font-size: .26rem
    .now-content
      display: flex
      justify-content space-between
      align-items: center
      flex-wrap: wrap
      padding: 0 .2rem .2rem
      box-sizing: border-box
      .button
        width: 30%
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
        padding: .15rem 0
        margin-top: .2rem
        text-align: center
        box-sizing: border-box
        font-size: .26rem
        border: 2px solid $bgColor
        border-radius: .1rem
        color: $bgColor
      .button-hotcity
        width: 30%
        overflow: hidden
        text-overflow: ellipsis
        white-space: nowrap
        padding: .15rem 0
        text-align: center
        box-sizing: border-box
        font-size: .26rem
        border: 2px solid #919191
        border-radius: .1rem
        margin-top: .2rem
</style>

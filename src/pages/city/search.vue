<template>
  <div class="search" ref="search">
    <input class="search-searchx" type="text" @input="handleClickChange" placeholder="请输入城市名或拼音">
    <div class="search-list-all" v-show="toggleList" ref="wrapperLi">
      <ul class="search-list">
        <li class="show-li" v-for="(item, index) of filterResult" :key="index">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'city-search',
  props: {
    list: Array
  },
  data () {
    return {
      toggleList: false,
      filterResult: []
    }
  },
  computed: {
    resultCity () {
      const resultCity = []
      // console.log(1, this.list)
      this.list.forEach((value, index) => {
        for (let item of value.cityList) {
          // console.log(item)
          resultCity.push({
            name: item.name,
            spell: item.spell
          })
        }
      })
      console.log(resultCity)
      return resultCity
    }
  },
  methods: {
    handleClickChange (e) {
      if (e.target.value) {
        this.toggleList = true
        const value = e.target.value.toLowerCase()
        this.filterResult = this.resultCity.filter((item) => {
          if (item.spell.indexOf(value) > -1 || item.name.indexOf(value) > -1) {
            return true
          }
        })
      } else {
        this.toggleList = false
      }
    }
  },
  watch: {
    filterResult () {
      this.$nextTick(() => {
        this.scroll.refresh()
      })
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapperLi, {
      probeType: 3
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/common/varibles'
  .search
    text-align: center
    width: 100%
    height: .79rem
    line-height: .79rem
    background: $bgColor
    overflow: hidden
    .search-list-all
      position: absolute
      z-index: 1
      overflow: hidden
      top: 2.3rem
      right: 0
      bottom: 0
      left: 0
      background: #f5f5f5
      overflow: hidden
      .show-li
        text-align: left
        text-indent: .2rem
        margin: 0 auto
        background: #fff
        // border-bottom: 1px solid #333
        color: #333
        line-height: .8rem
    .search-searchx
      display: block
      width: 100%
      height: 100%
      text-indent: .15rem
      border: 1px solid #fff
      border-bottom: 1px solid #999
      box-sizing: border-box
      border-radius: .04rem
      font-size: .25rem
      color: 666
</style>

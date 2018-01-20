<template>
  <div class="main">
    <city-header></city-header>
    <city-search :list="city"></city-search>
    <city-list class="list" :city="city" :hotcity="hotcity"></city-list>
  </div>
</template>
<script>
import axios from 'axios'
import CityHeader from './header'
import CitySearch from './search'
import CityList from './list'
export default {
  name: 'city',
  data () {
    return {
      city: [],
      hotcity: []
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList
  },
  methods: {
    getListInfo () {
      axios.get('api/city.json')
        .then(this.handleListSucc.bind(this))
        .catch(this.handleListError.bind(this))
    },
    handleListSucc (res) {
      res = res ? res.data : null
      if (res && res.ret && res.data) {
        res.data.city && (this.city = res.data.city)
        res.data.hotcityList && (this.hotcity = res.data.hotcityList)
      } else {
        this.handleListError()
      }
    },
    handleListError () {
      console.log('error')
    }
  },
  created () {
    this.getListInfo()
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../assets/styles/common/varibles'
  .main
    display: flex
    flex-direction: column
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    .list
      flex: 1
      overflow: hidden
</style>

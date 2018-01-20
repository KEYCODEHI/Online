<template>
  <div class="main">
    <index-header></index-header>
    <index-slide :slides="slides"></index-slide>
    <index-icons :icons="icons"></index-icons>
    <index-scroller class="scroll" :sights="sights"></index-scroller>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState, mapMutations } from 'vuex'
import IndexHeader from './header'
import IndexSlide from './slide'
import IndexIcons from './icons'
import IndexScroller from './scroller'
export default {
  name: 'index',
  data () {
    return {
      slides: [],
      icons: [],
      sights: []
    }
  },
  computed: {
    ...mapState(['city'])
  },
  components: {
    IndexHeader,
    IndexSlide,
    IndexIcons,
    IndexScroller
  },
  watch: {
    city () {
      this.getIndeData()
    }
  },
  methods: {
    ...mapMutations(['changeCity']),
    getIndeData () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.handleDataSucc.bind(this))
        .catch(this.handleDataError.bind(this))
    },
    handleDataSucc (res) {
      res = res ? res.data : null
      if (res && res.ret && res.data) {
        // res.data.city && (this.changeCity(res.data.city))
        res.data.slider && (this.slides = res.data.slider)
        res.data.icons && (this.icons = res.data.icons)
        res.data.sights && (this.sights = res.data.sights)
      } else {
        this.handleDataError()
      }
    },
    handleDataError () {
      console.log('error')
    }
  },
  mounted () {
    this.getIndeData()
  }
}
</script>

<style scoped lang="stylus">
  .main
    display: flex
    flex-direction: column
    position: absolute
    top: 0
    right: 0
    bottom: 0
    left: 0
    .scroll
      flex: 1
      overflow: hidden
</style>

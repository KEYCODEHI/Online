<template>
  <div>
    <index-header></index-header>
    <index-slide :slides="slides"></index-slide>
  </div>
</template>

<script>
import IndexHeader from './header'
import IndexSlide from './slide'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'index',
  data () {
    return {
      slides: []
    }
  },
  components: {
    IndexHeader,
    IndexSlide
  },
  computed: {
    ...mapState(['city'])
  },
  methods: {
    getIndeData () {
      axios.get('/api/index.json?city=' + this.city)
        .then(this.handleDataSucc.bind(this))
        .catch(this.handleDataError.bind(this))
    },
    handleDataSucc (res) {
      res = res ? res.data : null
      if (res && res.ret && res.data) {
        if (res.data.slider) {
          this.slides = res.data.slider
        }
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

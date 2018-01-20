<template>
  <div>
    <index-mount></index-mount>
    <index-header></index-header>
    <index-query></index-query>
    <index-swiper :list="swiperInfo"></index-swiper>
    <index-container :list="containerInfo"></index-container>
    <index-comment :list="commentInfo"></index-comment>
    <index-more :list="moreInfo"></index-more>
    <index-bottom></index-bottom>
  </div>
</template>

<script>
  import IndexHeader from './header'
  import IndexMount from './mount'
  import IndexQuery from './query'
  import IndexSwiper from './swipe'
  import IndexContainer from './container'
  import IndexComment from './comment'
  import IndexMore from './more'
  import IndexBottom from './bottom'
  import axios from 'axios'
  export default {
    name: 'index',
    components: {
      // 自定义 标签名
      IndexHeader,
      IndexMount,
      IndexQuery,
      IndexSwiper,
      IndexContainer,
      IndexComment,
      IndexMore,
      IndexBottom
    },
    data () {
      return {
        swiperInfo: [],
        containerInfo: [],
        commentInfo: [],
        moreInfo: []
      }
    },
    methods: {
      getIndexData () {
        axios.get('/api/detail.json')
          .then(this.handleGetDataSucc.bind(this))
          .catch(this.handleGetDataErr.bind(this))
      },
      handleGetDataSucc (res) {
        const data = res.data.data
        this.swiperInfo = data.swiperList
        this.containerInfo = data.containerList
        this.commentInfo = data.commentList
        this.moreInfo = data.moreList
      },
      handleGetDataErr () {
        console.log('err')
      }
    },
    created () {
      this.getIndexData()
    }
  }
</script>

<style>

</style>

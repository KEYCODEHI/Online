<template>
     <div class="more iconfont">
       <p class="tip">&#xe62a;优质推荐</p>
       <ul>
         <li v-for="(item, index) of list">
           <img :src="item.img" alt=""/>
           <div class="more-txt">
            <p class="more-txt-top">
              <span :title="item.title">{{item.title}}</span>
              <span :doll="item.doll">{{item.doll}}</span>
            </p>
            <p :address="item.address">{{item.address}}</p>
           </div>
         </li>
       </ul>
     </div>
</template>

<script>
  export default {
    name: 'index-more',
    props: {
      list: Array
    }
  }
</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .tip
    height: .7rem
    line-height: .7rem
    border-bottom: .1px solid #e0e0e0
  .more
    over-flow: hidden
    margin-top: .15rem
    background: white
    img
      width: 30%
    ul li
      display: flex
      justify-content: space-between
      align-items: center
      padding-left: .2rem
      box-sizing: border-box
      height: 2rem
      .more-txt
        border-bottom: .1px solid #e0e0e0
        width: 65%
        height: 70%
        font-size: .26rem
        .more-txt-top
          display: flex
          justify-content: space-between
          align-items: center
          padding-right: .2rem
</style>

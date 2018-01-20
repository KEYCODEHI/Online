<template>
  <div class="comment iconfont">
    <p class="comment-h2">&#xe62a; 用户评论</p>
    <div v-for="(item, index) of list" class="comment-tip">
      <div class="comment-tip-top">
        <span class="start">&#xe607;&#xe607;&#xe607;&#xe607;</span>
        <p class="user-new">
          <span :name="item.name">KR</span>
          <span :data="item.data">2018-01-12</span>
        </p>
      </div>
      <div>
        <p class="user-rated"  :txt="item.txt">{{item.txt}}</p>
        <span @click="handleClickMore(index)" class="downIcon">&#xe611;</span>
        <div class="comment-img">
          <img v-for="item2 of item.img" :src="item2.imgSrc" alt=""/>
        </div>
      </div>
    </div>
    <p class="all-rated">查看所有评论 <span>&#xe730;</span></p>
  </div>
</template>

<script>
  export default {
    name: 'index-comment',
    props: {
      list: Array
    },
    methods: {
      handleClickMore (index) {
        const heightChange = document.getElementsByClassName("user-rated")[index]
        heightChange.style.height == "2.1rem" ? heightChange.style.height = "auto" : heightChange.style.height = "2.1rem"
        const downIcon = document.getElementsByClassName("downIcon")[index]
//        downIcon.innerHTML == "&#xe611;" ? downIcon.innerHTML = "&#xe6a5;" : downIcon.innerHTML = "&#xe611;"
        if(downIcon.innerHTML == "&#xe611;"){
//        alert(1)
          downIcon.innerHTML = "&#xe6a5;"
        }
        else{
//        alert(2)
          downIcon.innerHTML = "&#xe611;"
        }
      }
    }
  }

</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .comment
    background: white
    margin-top: .15rem
    .comment-h2
      height: .7rem
      line-height: .7rem
      padding: 0 .2rem
      box-sizing: border-box
  .comment-tip
    width: 100%
    height: auto
    border-top: .01rem solid #e0e0e0
    padding: 0 .2rem
    box-sizing: border-box
    .comment-tip-top
      height: .7rem
      display: flex
      justify-content: space-between
      align-items: center
      .start
        color: #ffb436
      .user-new
       font-size: .1rem
    .comment-img img
      width: 32%
      margin-right: .03rem
  .user-rated
    height: 2.1rem
    line-height: .42rem
    font-size: .26rem
    overflow: hidden
  .downIcon
    display: block
    text-align: center
    font-size: .4rem
    font-weight: bolder
  .all-rated
    height: 1rem
    line-height: 1rem
    text-align: center
</style>

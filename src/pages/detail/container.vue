<template>
   <div class="iconfont">
      <div v-for="(item, index) of list" :key="item.id" class="index-container iconfont">
        <ul class="container-tip1" :tip1="item.tip1">
          <span class="bill">&#xe609;</span>
          {{item.tip1}}
        </ul>

        <ul class="container-tip2">
          <li v-for="item2 of item.tip2">
            <p class="container-txt">
             <span :bill="item2.bill">{{item2.bill}}</span>
             <span class="add">凭身份证入园</span>
            </p>
            <p class="doll-all">
             <span class="doll doll-top">￥</span>
             <span class="doll-num" :doll="item2.doll">{{item2.doll}}</span>
             <span class="doll-txt doll-top">起</span>
             <span class="doll-icon doll-top">&#xe611;</span>
            </p>
          </li>
          <div class="container-show-li">
            <li v-for="item2 of item.tipOther">
              <p class="container-txt">
                <span :bill="item2.bill">{{item2.bill}}</span>
                <span class="add">凭身份证入园</span>
              </p>
              <p class="doll-all">
                <span class="doll doll-top">￥</span>
                <span class="doll-num" :doll="item2.doll">{{item2.doll}}</span>
                <span class="doll-txt doll-top">起</span>
                <span class="doll-icon doll-top">`</span>
              </p>
            </li>
          </div>
        </ul>

        <ul class="container-tip3" @click="handleClickShowLi(index)">查看剩余产品</ul>
    </div>
   </div>
</template>

<script>
  export default {
    name: 'index-container',
    props: {
      list: Array,
      tip1: String
    },
    methods: {
      handleClickShowLi (index) {
        const ctrlLi = document.getElementsByClassName("container-show-li")[index]
        const ctrlTip = document.getElementsByClassName("container-tip3")[index]

        ctrlLi.style.display == "block" ? ctrlLi.style.display = "none" : ctrlLi.style.display = "block"
      }
    }
  }

</script>

<style rel="stylesheet/stylus" lang="stylus" scoped>
  @import "../../assets/stylus/varibles.styl";
  .bill
    margin-right: .2rem
    color: #00bcd4
  .index-container
    background: white
    margin-top: .15rem
    .container-tip3
      display: flex
      justify-content: center
      align-items: center
      box-sizing: border-box
      height: .88rem
      font-size: .26rem
    .container-tip2 li, .container-tip1
      display: flex
      justify-content: flex-start
      align-items: center
      padding: 0 .2rem
      box-sizing: border-box
      height: .88rem
      border-bottom: .01rem dashed #bababa
      .add
        color: #888
        font-size: .24rem
        margin-left: .1rem
      .container-txt
        width: 85%
      .doll-all
        display: flex
        justify-content: center
        align-items: center
        box-sizing: border-box
        color: #ff9800
        .doll
          font-size: .24rem
        .doll-num
          font-size: .36rem
        .doll-txt
          font-size: .24rem
          color: #9e9e9e
        .doll-top
          margin-top: .15rem
  .container-show-li
    display: none
</style>

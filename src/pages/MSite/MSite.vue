<template>
  <div class="msite">
    <!--首页头部-->
    <HeaderTop title="青年餐厅">
      <span class="header_search" slot="left">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span class="header_login" slot="right">
        <span class="header_login_text">登录|注册</span>
      </span>
    </HeaderTop>
    <!--图片轮播-->
    <nav class="msite_nav">
      <swiper :options="swiperOption" ref="mySwiper">
        <!-- slides -->
        <swiper-slide><img style ="width:100%;height:100%;" src="./images/nav/1.jpg" alt=""></swiper-slide>
        <swiper-slide><img style ="width:100%;height:100%;" src="./images/nav/2.jpg" alt=""></swiper-slide>
        <swiper-slide><img style ="width:100%;height:100%;" src="./images/nav/3.jpg" alt=""></swiper-slide>
        <swiper-slide><img style ="width:100%;height:100%;" src="./images/nav/4.jpg" alt=""></swiper-slide>
        <swiper-slide><img style ="width:100%;height:100%;" src="./images/nav/5.jpg" alt=""></swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </nav>
    <!--首页附近商家-->
    <div class="msite_shop_list">
      <div class="shop_header">
        <i class="iconfont icon-xuanxiang"></i>
        <span class="shop_header_title">商家</span>
      </div>
      <ShopList/>
    </div>
  </div>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  require('swiper/dist/css/swiper.css')

  import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
  import ShopList from '../../components/ShopList/ShopList.vue'

  export default {
    name: 'carrousel',
    components: {
      HeaderTop,
      ShopList,
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          notNextTick: true,
          //循环
          loop:true,
          //设定初始化时slide的索引
          initialSlide:0,
          //自动播放
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: true,
          },
          //滑动速度
          speed:800,
          //滑动方向
          direction : 'horizontal',
          //小手掌抓取滑动
          grabCursor : true,
          //滑动之后回调函数
          on: {
            slideChangeTransitionEnd: function(){
              console.log(this.activeIndex);//切换结束时，告诉我现在是第几个slide
            },
          },
          //左右点击
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          //分页器设置         
          pagination: {
             el: '.swiper-pagination',
             clickable :true,
             type: 'custom',
             //自定义分页器样式
             renderCustom: function (swiper, current, total) {
                const activeColor = '#168fed'
                const normalColor = '#aeaeae'
                let color = ''
                let paginationStyle = ''
                let html = ''
                for (let i = 1; i <= total; i++) {
                    if (i === current) {
                        color = activeColor
                    } else {
                        color = normalColor
                    }
                    paginationStyle = `background:${color};opacity:1;margin-right:20px;width:20px;height:20px;transform:skew(15deg);border-radius:0;`
                    html += `<span class="swiper-pagination-bullet" style=${paginationStyle}></span>`
                  }
                  return html
              }
            }
          }
        }
      },
   
   // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
      computed: {
          swiper() {
           return this.$refs.mySwiper.swiper
          }
      },
      mounted() {
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper)
      // this.swiper.slideTo(3, 1000, false)
      }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .msite  //首页
    width 100%
    .msite_nav
      .swiper-container{
        height:200px;
        overflow: hidden;
        margin-top:60px;/*px*/
      }
      .swiper-wrapper{
        height:200px;
      }
      .swiper-slide{
        height:200px;
        float: left;
        background:red;
      } 
    .msite_shop_list
      top-border-1px(#e4e4e4)
      margin-top 10px
      background #fff
      .shop_header
        padding 10px 10px 0
        .shop_icon
          margin-left 5px
          color #999
        .shop_header_title
          color #999
          font-size 14px
          line-height 20px
</style>

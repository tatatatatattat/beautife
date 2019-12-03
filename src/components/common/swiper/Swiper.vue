<template>
  <div id="hy-swiper">
    <div class="swiper"
    @touchstart="touchStart"
    @touchmove="touchMove"
    @touchend="touchEnd">
        <slot></slot>
    </div>
    <slot name="par">
      <div class="par" v-show="show">
        <div @click="previous">上一页</div>
        <div @click="next">下一页</div>
      </div>
    </slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount>1">
        <div v-for="(item,index) in slideCount" :key="index"
        :class="{active:index===currentIndex-1}"
        class="indi-item"></div>
      </slot>
    </div>
  </div>
</template>

<script>

export default {
  name: "Swiper",
  props:{//对外暴露的接口
    interval:{//多久轮播一次
      type:Number,
      default:3000
    },
    animDuration:{//初次进入页面延迟多久开始轮播
      type:Number,
      default:300
    },
    moveRadio:{
      type:Number,
      default:0.25
    },
    showIndicator:{//显示器是否显示
      type:Boolean,
      default:true
    },
    show:{
      type:Boolean,
      default:false
    }
  },
  data(){
    return {
      slideCount:0,//元素的个数
      totalWidth:0,//swiper的宽度
      currentIndex:1,//当前的index
      swiperStyle:{},//swiper滚动所要滚动的样式
      scrolling: false,
    }
  },
  mounted:function(){
    setTimeout(() => {
      // 操作都没 前后添加chone元素
      this.handleDom();
      
      // 开启定时器
      this.startTimer();
    },100)
  },
  methods:{

    // 设置定时器
    startTimer:function(){
      this.playTimer = window.setInterval(() => {
        // console.log('123')
        this.currentIndex++;
        this.scrollContent(-this.currentIndex * this.totalWidth)
      },this.interval)
    },

    // 清除定时器操作
    stopTimer:function(){
      window.clearInterval(this.playTimer)
    },

    // 滚动到的位置
    scrollContent:function(currentPosition){
      // 开启正在滚动模式
      this.scrolling=true;

      // 开始滚动动画
      this.swiperStyle.transition =  `transform ${this.animDuration}ms`
      this.setTransform(currentPosition);

      // 判断滚动到的位置
      this.chechPosition()

      // 滚动完成
      this.scrolling = false
    },
    // 滚动到的位置
    setTransform:function(position){
      this.swiperStyle.transform = `translate3d(${position}px, 0, 0)`;
      this.swiperStyle['-webkit-transform'] = `translate3d(${position}px), 0, 0`;
      this.swiperStyle['-ms-transform'] = `translate3d(${position}px), 0, 0`;
    },

    // 校验正确的轮播滚动位置
    chechPosition:function(){
      window.setTimeout(() => {
        this.swiperStyle.transition = '0ms';
        if(this.currentIndex >= this.slideCount +1 ){
          this.currentIndex = 1;
          this.setTransform(-this.currentIndex * this.totalWidth)
        }else if(this.currentIndex <= 0){
          this.currentIndex = this.slideCount;
          this.setTransform(-this.currentIndex * this.totalWidth)
        }
      },this.animDuration)
    },
    //操作DOM克隆元素
    handleDom:function(){
      // 获取要操作的元素
      let swiperEl = document.querySelector('.swiper');
      let slidesEls = document.getElementsByClassName('slide');

      // 保存轮播元素的个数
      this.slideCount = slidesEls.length;

      // if 元素的个数大于1的话前后分别添加一个元素

      if(this.slideCount > 1){
        let cloneFirst = slidesEls[0].cloneNode(true);
        let cloneLast = slidesEls[this.slideCount-1].cloneNode(true);
        swiperEl.insertBefore(cloneLast,slidesEls[0]);
        swiperEl.appendChild(cloneFirst);
        this.totalWidth = swiperEl.offsetWidth;
        this.swiperStyle = swiperEl.style;
      }

      // 4.让swiper元素, 显示第一个(目前是显示前面添加的最后一个元素)
      this.setTransform(-this.totalWidth);

    },
    touchStart:function(e){
      // 如果正在滚动，则不可拖动
      if(this.scrolling) return

      // 停止定时器
      this.stopTimer();

      // 保存开始滚动的位置
      this.startX = e.touches[0].pageX;
    },
    touchMove:function(e){
      // 计算用户拖动的距离
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      let currentPosition = -this.currentIndex * this.totalWidth;
      let moveDistance = this.distance + currentPosition;

      // 设置当前的位置
      this.setTransform(moveDistance)

    },
    touchEnd:function(e){
      let currentMove = Math.abs(this.distance);
      // 判断最终的距离
      if(this.distance === 0){
        return
      }else if(this.distance > 0 && currentMove > this.totalWidth * this.moveRadio){
        // 往右边移动超过0.25--
        this.currentIndex--
      }else if(this.distance < 0 && currentMove < this.totalWidth * this.moveRatio){
        this.currentIndex++
      }
        // 3.移动到正确的位置
        this.scrollContent(-this.currentIndex * this.totalWidth);
        // 4.移动完成后重新开启定时器
        this.startTimer();
    },
    // 控制上一个，下一个
    previous:function(){
      this.changeItem(-1)
    },
    next:function(){
      this.changeItem(1)
    },
    changeItem:function(){
      // 移除定时器
      this.stopTimer;

      // 修改index的位置
      this.currentIndex +=num;
      this.scrollContent(-this.currentIndex * this.totalWidth);

      // 3.添加定时器
      this.startTimer();
    }
  }

};
</script>

<style scoped>
  #hy-swiper{
    overflow: hidden;
    position:relative;
  }
  .swiper{
    display:flex;
  }
  .indicator{
    display:flex;
    justify-content:center;
    width:100%;
    position:absolute;
    bottom:8px;
  }
  .indi-item{
    width:8px;
    height:8px;
    border-radius:50%;
    background-color:#fff;
    margin:0 5px;
  }
  .indi-item.active{
    background-color:#f40;
  }
</style>
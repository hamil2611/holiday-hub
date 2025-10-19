<template>
  <div id="container" class="page-container">
    <pocket-item/>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { TweenLite, TweenMax, Linear, Sine } from 'gsap';
import Carousel3dItem from "@/views/vietnamese-women-day/components/Carousel3dItem.vue";
import PocketItem from "@/views/vietnamese-women-day/components/PocketItem.vue";

onMounted(() => {
  var falling = true;

  var total = 5;
  var container = document.getElementById("container"),	w = window.innerWidth , h = window.innerHeight;
  for (let i=0; i<total; i++){
    var Div = document.createElement('div');
    var Div2 = document.createElement('div');
    var Div3 = document.createElement('div');
    TweenLite.set(Div,{
      attr:{
        class:'dot'
      },
      x: R(10, w-10), // để cách biên 10px
      y: R(-100, 0),
      xPercent:"-50%",
      yPercent:"-50%"
    });
    TweenLite.set(Div2, {
      attr: {
        class: 'dot2'
      },
      x: R(10, w-10), // để cách biên 10px
      y: R(-100, 0),
      xPercent: "-50%",
      yPercent: "-50%"
    });
    TweenLite.set(Div3, {
      attr: {
        class: 'dot3'
      },
      x: R(10, w-10), // để cách biên 10px
      y: R(-100, 0),
      xPercent: "-50%",
      yPercent: "-50%"
    });
    container.appendChild(Div);
    container.appendChild(Div2);
    container.appendChild(Div3);
    animm(Div);
    animm2(Div2);
    animm3(Div3);
  }

  function animm(elm){
    TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-15});
    TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
    TweenMax.to(elm,R(2,8),{repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
  };
  function animm2(elm){
    TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-25});
    TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
    TweenMax.to(elm,R(2,8),{repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
  };
  function animm3(elm){
    TweenMax.to(elm,R(6,15),{y:h+100,ease:Linear.easeNone,repeat:-1,delay:-5});
    TweenMax.to(elm,R(4,8),{x:'+=100',rotationZ:R(0,180),repeat:-1,yoyo:true,ease:Sine.easeInOut});
    TweenMax.to(elm,R(2,8),{repeat:-1,yoyo:true,ease:Sine.easeInOut,delay:-5});
  };

  function R(min,max) {return min+Math.random()*(max-min)};
  }
);


</script>

<style>
.page-container {
  perspective: 1920px;
  transform-style: preserve-3d;
  width: 100%;
  display: flex;
  height: 100vh;
  background: linear-gradient(135deg, #fde9ef 0%, #f6c9d4 100%);
  overflow: hidden !important;
}

.dot{
  width:32px;
  height:15px;
  position:absolute;
  background: url(https://cdn.thisjs.com/blog_images/20220121162842.png);
  background-size: 100% 100%;
}
.dot2{
  width:48px;
  height:22.5px;
  position:absolute;
  background: url(https://cdn.thisjs.com/blog_images/20220121162842.png);
  background-size: 100% 100%;
}
.dot3{
  width:64px;
  height:30px;
  position:absolute;
  background: url(https://cdn.thisjs.com/blog_images/20220121162842.png);
  background-size: 100% 100%;
}
</style>

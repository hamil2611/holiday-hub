<template>
  <div class="container">
    <div class="envlope-wrapper">
      <div id="envelope" class="close" >
        <div  class="front flap">
          <div class="circle">
            <img :src="heart" alt="" width="50" height="50" style="position: absolute; top: -30px; left: -25px;">
          </div>
        </div>

        <div class="front pocket"></div>
        <div ref="letterRef" :class="{'letter': true, 'letter-detail': isDetail}">
          <span v-if="!isDetail" style="font-size: 22px; color: #8B3A3A;">
            Gửi em bé iu của anhhh !!!
            <br/>
            <span style="font-size: 13px; color: #8B3A3A;">
              Nhấn vào để xem nha em iu 😎 !!!
            </span>
          </span>
          <el-scrollbar v-else max-height="250px" style="width: 100%;">
            <div  style="font-size: 13px; text-align: left; display: flex; align-items: flex-start; justify-content: flex-start; flex-direction: column; width: 100%">
              <span>Gửi em yêu của anh 💌!!!</span>
              <span>Chúc mừng ngày phụ nữ Việt Nam 20-10!!! Ngày đặt biệt này anh muốn gửi tất cả những lời chúc tốt đẹp đến em iu của anh.
                Em là người con gái mà anh yêu nhất 💕 và cũng là nơi mà anh cảm thấy được bình yên nhất 🌸. Anh yêu em 💐💞!!</span>
              <span>Chúc em luôn mạnh mẽ, tự tin và rạng rỡ – như chính người con gái tuyệt vời mà anh may mắn có được. 🌷</span>
            </div>
          </el-scrollbar>
          <!--        <div class="words line1"></div>-->
          <!--        <div class="words line2"></div>-->
          <!--        <div class="words line3"></div>-->
          <!--        <div class="words line4"></div>-->
        </div>
        <div v-if="!isDetail"  class="flower-wrapper">
          <img class="flower-1" :src="flower" alt="">
          <img class="flower-2" :src="flower" alt="">
        </div>
        <div class="hearts">
          <div class="heart a1"></div>
          <div class="heart a2"></div>
          <div class="heart a3"></div>
        </div>
        <div v-if="isDetail" class="two-flowers">
          <div style="position: absolute">
            <img :src="twoFlower" alt="" style="height: 150px;">
          </div>
        </div>
        <div v-if="isDetail" class="picture">
          <img :src="suan" alt="">
        </div>
      </div>

    </div>

  </div>
<!--  <div class="reset">-->
<!--    <button id="open">Open</button>-->
<!--    <button id="reset">Reset</button>-->
<!--  </div>-->
</template>

<script setup lang="ts">
import flower from "@/assets/images/flower.png"
import suan from "@/assets/images/suan.jpg"
import twoFlower from "@/assets/images/two-flowers.png"
import heart from "@/assets/images/heart.png"

import {onMounted, ref} from "vue";
const letterRef = ref();

const isDetail = ref(false);

onMounted(() => {
  const envelope = document.getElementById("envelope");
  const btn_open = document.getElementById("open");
  const btn_reset = document.getElementById("reset");

  envelope?.addEventListener('click', (e) => {
    if (envelope?.classList.contains('open')) {
      close()
    } else {
      open();
    }
  })

  // btn_open?.addEventListener('click', (e) => {
  //   open();
  // })
  //
  // btn_reset?.addEventListener('click', (e) => {
  //   close();
  // })

  function open() {
    envelope?.classList.add("open")
    envelope?.classList.remove("close");
  }

  function close() {
    isDetail.value = false;
    envelope?.classList.add("close");
    envelope?.classList.remove("open")
  }
 letterRef.value?.addEventListener("click", (e) => {
   e.preventDefault();
   e.stopPropagation();
   isDetail.value = true;
 })
})
</script>

<style scoped lang="scss">
$color-env          : #FFB7B2;
$color-env2         : #FFB7B2;
$color-flap         : darken($color-env, 15%);
$color-bg           : #FFECEE;
$color-heart        : #FF9AA2;

$env-border-radius  : 10px;
$env-width          : 300px;
$env-height         : 180px;
$heart-width        : 50px;

@use "sass:math";

.container {
  position: absolute;
  top: 30%;
  left: calc(50% - 150px);
}

.circle {
  z-index: 7;
  box-sizing: border-box;
}

#envelope {
  position: relative;
  width: $env-width;
  height: $env-height;
  border-bottom-left-radius: $env-border-radius;
  border-bottom-right-radius: $env-border-radius;
  margin-left: auto;
  margin-right: auto;
  background-color: $color-flap;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
}

.front {
  position: absolute;
  width: 0;
  height: 0;
  z-index: 3;
}

.flap {
  border-left: math.div($env-width, 2) solid transparent;
  border-right: math.div($env-width, 2)solid transparent;
  border-bottom: math.div($env-height, 2) - 8 solid transparent; /* a little smaller */
  border-top: math.div($env-height, 2) + 8 solid $color-flap; /* a little larger */
  transform-origin: top;
  pointer-events: none;
}

.flap::after {
  content: '';
  width: 30px;
  height: 30px;
  background: red;
}
.pocket {
  border-left: math.div($env-width, 2) solid $color-env;
  border-right: math.div($env-width, 2) solid $color-env;
  border-bottom: math.div($env-height, 2) solid $color-env2;
  border-top: math.div($env-height, 2) solid transparent;
  border-bottom-left-radius: $env-border-radius;
  border-bottom-right-radius: $env-border-radius;
}
.letter {
  position: relative;
  background: #fff;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: 90%;
  top: 5%;
  border-radius: $env-border-radius;
  box-shadow: 0 2px 26px rgba(0,0,0,.12);
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  text-align: center;
  cursor: pointer;
  transition: .3s ease-in-out all;
  max-height: 350px;
  &:hover {
    background: #FFC5C8 !important;
  }
}

.letter-detail {
  transition: all 1s ease-in-out;
  transform: translateY(-130px) !important;

  &::after {
    display: none;
  }

  &:hover {
    background: #fff !important;
  }
}


.letter:after {
  content: '';
  position: absolute;
  top: 40%;
  bottom: 0;
  left: 0;
  right: 0;
  background-image:
      linear-gradient(180deg,
          rgba(255,255,255,0.00) 25%,
          rgba(215,227,239,0.70) 55%,
          rgba(215,227,239,1.00) 100%);
}
.words {
  position: absolute;
  left: 10%;
  width: 80%;
  height: 14%;
  background-color: #EEEFF0;
}
.words.line1 {
  top: 15%;
  width: 20%;
  height: 7%;
}
.words.line2 {
  top: 30%;
}
.words.line3 {
  top: 50%;
}
.words.line4 {
  top: 70%;
}
.open .flap {
  transform: rotateX(180deg);
  transition: transform .4s 1s ease, z-index .6s ease 1s;
  z-index: 1;
}
.close .flap {
  transform: rotateX(0deg);
  transition: transform .4s .6s ease, z-index 1s;
  z-index: 5;
}
.close .letter {
  transform: translateY(0px);
  transition: transform .4s ease, z-index 1s;
  z-index: 1;
}

.open .letter {
  transition: all .4s ease;
  z-index: 2;
  animation: 0.4s letter-scale forwards;
  animation-delay: 1.6s ;
}

@keyframes letter-scale {
  from {

  }

  to {
    transform: translateY(- math.div($env-height, 3));
  }
}

.open .circle {
  animation: circle-open 1s ease forwards;
  z-index: -1;
}

.close .circle {
  opacity: 0;
  animation: circle-close  1s ease 1s forwards;
  z-index: 7;
}

@keyframes moveDown {
  from { top: 50px; }
  to { top: 50%; }
}

@keyframes circle-open {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}

@keyframes circle-close {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

.hearts {
  position: absolute;
  top: ($env-height / 2);
  left: 0;
  right: 0;
  z-index: 2;
}
.heart {
  position: absolute;
  bottom: 0;
  right: 10%;
  pointer-events: none;
}

.heart:before,
.heart:after {
  position: absolute;
  content: "";
  left: $heart-width;
  top: 0;
  width: $heart-width;
  height: ($heart-width * 1.6);
  background: $color-heart;
  border-radius: $heart-width $heart-width 0 0;
  transform: rotate(-45deg);
  transform-origin: 0 100%;
  pointer-events: none;
}
.heart:after {
  left: 0;
  transform: rotate(45deg);
  transform-origin: 100% 100%;
}
.close .heart {
  opacity: 0;
  animation: none;
}
.a1 {
  left: 20%;
  -webkit-transform: scale(0.6);
  -moz-transform: scale(0.6);
  transform: scale(0.6);
  opacity: 1;
  -webkit-animation:
      slideUp 4s linear 1,
      sideSway 2s ease-in-out 4 alternate;
  -moz-animation:
      slideUp 4s linear 1,
      sideSway 2s ease-in-out 4 alternate;
  animation-fill-mode: forwards;
  animation-delay: .7s;
}
.a2 {
  left: 55%;
  -webkit-transform: scale(1);
  -moz-transform: scale(1);
  transform: scale(1);
  opacity: 1;
  -webkit-animation:
      slideUp 5s linear 1,
      sideSway 4s ease-in-out 2 alternate;
  -moz-animation:
      slideUp 5s linear 1,
      sideSway 4s ease-in-out 2 alternate;
  animation-fill-mode: forwards;
  animation-delay: .7s;
}
.a3 {
  left: 10%;
  -webkit-transform: scale(0.8);
  -moz-transform: scale(0.8);
  transform: scale(0.8);
  opacity: 1;
  -webkit-animation:
      slideUp 7s linear 1,
      sideSway 2s ease-in-out 6 alternate;
  -moz-animation:
      slideUp 7s linear 1,
      sideSway 2s ease-in-out 6 alternate;
  animation-fill-mode: forwards;
  animation-delay: .7s;
}

@-webkit-keyframes slideUp {
  0% {
    top: 0;
  }
  100% {
    top: -350px;
  }
}
@keyframes slideUp {
  0% {
    top: 0;
  }
  100% {
    top: -350px;
  }
}
@-webkit-keyframes sideSway {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}
@keyframes sideSway {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}

body {
  background-color: $color-bg;
}

.envlope-wrapper {
  height: ($env-height + 100px);
  display: flex;
  padding-top: 65px;
}

.reset {
  text-align: center;
}

.reset button {
  font-weight: 800;
  font-style: normal;
  transition: all .1s linear;
  -webkit-appearance: none;
  background-color: transparent;
  border: solid 2px $color-env;
  border-radius: 4px;
  color: $color-env;
  display: inline-block;
  font-size: 14px;
  text-transform: uppercase;
  margin: 5px;
  padding: 10px;
  line-height: 1em;
  text-decoration: none;
  min-width: 120px;
  cursor: pointer;
}
.reset button:hover {
  background-color: $color-env;
  color: #fff;
}

.flower-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
}

.flower-wrapper > :nth-child(1) {
  height: 200px;
  position: absolute;
  top: -90px;
  right: -50px;
  opacity: 0;

}

.flower-wrapper > :nth-child(2) {
  height: 200px;
  position: absolute;
  top: -110px;
  left: -70px;
  opacity: 0;


}


.open .flower-1 {
  animation: grow 2.4s cubic-bezier(.22,.9,.3,1) forwards;
  animation-delay: 2.5s;
}

.open .flower-2 {
  animation: grow1 2.4s cubic-bezier(.22,.9,.3,1) forwards;
  animation-delay: 2.5s;
}

.close .flower-1 {
  animation: shrink .5s cubic-bezier(.22,.9,.3,1) forwards;
}

.close .flower-2 {
  animation: shrink1 .5s cubic-bezier(.22,.9,.3,1) forwards;
}

@keyframes grow {
  0% {
    transform: translateY(100px) scale(0.2) rotate(2deg);
    opacity: 0;
  }
  40% {
    transform: translateY(0) scale(1.05) rotate(-2deg);
    opacity: 1;
  }
  60% {
    transform: translateY(-4px) scale(1);
  }
  100% {
    opacity: 1;
  }
}

@keyframes grow1 {
  0% {
    transform: translateY(100px) scale(0.2) rotate(2deg) scaleX(-1);
    opacity: 0;
  }
  40% {
    transform: translateY(0) scale(1.05) rotate(-2deg) scaleX(-1);
    opacity: 1;
  }
  60% {
    transform: translateY(-4px) scale(1) scaleX(-1);
  }
  100% {
    opacity: 1 ;
    transform: scaleX(-1);
  }
}

@keyframes shrink {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  40% {
    transform: translateY(-4px) scale(1);
  }
  60% {
    transform: translateY(0) scale(1.05) rotate(-2deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100px) scale(0.2) rotate(2deg);
    opacity: 0;
  }
}

@keyframes shrink1 {
  0% {
    transform: translateY(0) scale(1 ) scaleX(-1);
    opacity: 1;
  }
  40% {
    transform: translateY(-4px) scale(1) scaleX(-1);
  }
  60% {
    transform: translateY(0) scale(1.05) rotate(-2deg) scaleX(-1);
    opacity: 1;
  }
  100% {
    transform: translateY(100px) scale(0.2) rotate(2deg) scaleX(-1);
    opacity: 0;
  }
}

.two-flowers {
  position: absolute;
  top: 0;
  left: -25px;
  right: 0;
  bottom: 0;
  z-index: 5;
  transform: rotate(-25deg);
}

.picture {
  width: 100px;
  height: 100px;
  position: absolute;
  top: 25%;
  right: 0;
  bottom: 20px;
  z-index: 5;
  transform: rotate(15deg);
  padding: 10px 8px 20px 8px;
  background: #fff;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>
<template>
  <div class="envlope-wrapper">
    <div id="envelope" class="close">
      <div class="front flap">
        <div class="circle">
          <img :src="heart" alt="" width="50" height="50" style="position: absolute; top: -30px; left: -25px;">
        </div>
      </div>

      <div class="front pocket"></div>
      <div class="letter">
        <div class="words line1"></div>
        <div class="words line2"></div>
        <div class="words line3"></div>
        <div class="words line4"></div>
      </div>
      <div class="hearts">
        <div class="heart a1"></div>
        <div class="heart a2"></div>
        <div class="heart a3"></div>
      </div>
    </div>
  </div>
  <div class="reset">
    <button id="open">Open</button>
    <button id="reset">Reset</button>
  </div>
</template>

<script setup lang="ts">
import heart from "@/assets/images/heart.png"

import {onMounted} from "vue";

onMounted(() => {
  const envelope = document.getElementById("envelope");
  const btn_open = document.getElementById("open");
  const btn_reset = document.getElementById("reset");

  envelope?.addEventListener('click', (e) => {
    open();
  })

  btn_open?.addEventListener('click', (e) => {
    open();
  })

  btn_reset?.addEventListener('click', (e) => {
    close();
  })

  function open() {
    envelope?.classList.add("open")
    envelope?.classList.remove("close");
  }

  function close() {
    envelope?.classList.add("close");
    envelope?.classList.remove("open")

  }

})
</script>

<style scoped lang="scss">
$color-env          : #FFD1DC;
$color-env2         :#FFD1DC;
$color-flap         : darken($color-env, 20%);
$color-bg           : #FFD1DC;
$color-heart        : #D00000;

$env-border-radius  : 10px;
$env-width          : 360px;
$env-height         : 240px;
$heart-width        : 50px;

@use "sass:math";

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
  top: 150px;
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
  background-color: #fff;
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  height: 90%;
  top: 5%;
  border-radius: $env-border-radius;
  box-shadow: 0 2px 26px rgba(0,0,0,.12);
}
.letter:after {
  content: '';
  position: absolute;
  top: 0;
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
  transform: translateY(- math.div($env-height, 3));
  transition: transform .4s 1.6s ease, z-index .6s ease 1s;
  z-index: 2;
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
    top: -600px;
  }
}
@keyframes slideUp {
  0% {
    top: 0;
  }
  100% {
    top: -600px;
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
  height: ($env-height + 200px);
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
</style>
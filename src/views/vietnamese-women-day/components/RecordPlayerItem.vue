<template>
<div class="record-wrapper">
  <div class="record-player-container">
    <div class="border">
      <div class="groove"></div>
      <div class="groove"></div>
      <div class="groove"></div>
      <div class="groove"></div>
      <div class="groove"></div>
      <div class="interior">

        <div class="dot-border"></div>
        <div class="dot"></div>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
import {ref} from "vue";

const borderWidth = 250;
</script>

<style scoped>
.record-wrapper {
  transform: none !important; /* không kế thừa cha */
  transform-style: flat;
}
.record-player-container {
  margin: auto;
  width: 300px;
  height: 300px;
  position: relative;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  transform-style: flat;
  transform-origin: center;
}
.border {
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      rgb(241, 60, 181),
      rgb(252, 202, 159)
  );
  animation: body 5s linear infinite;
}

.interior {
  border-radius: 50%;
  height: 200px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
}

h1 {
  display: flex;
  flex-direction: column;
  line-height: 1.80;
  text-align: center;
}

.isa {
  word-spacing: 150px;
  font-family: Clicker Script, cursive;
  font-size: 55px;
}

.cancer, .bitch {
  font-family: Mystery Quest, cursive;
  font-size: 90px;
}

.dot {
  border: 5px solid black;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  background-color: black;
}

.dot-border {
  border: 1px solid black;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
}

.groove {
  border: 0.5px solid rgb(82, 82, 82);
}

.groove:first-of-type {
  width: 275px;
  height: 275px;
  border-radius: 50%;
  position: absolute;
}

.groove:nth-of-type(2) {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  position: absolute;
}

.groove:nth-of-type(3) {
  width: 225px;
  height: 225px;
  border-radius: 50%;
  position: absolute;
}

.groove:nth-of-type(4) {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
}

.groove:nth-of-type(5) {
  width: 175px;
  height: 175px;
  border-radius: 50%;
  position: absolute;
}

@keyframes body {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<template>
  <div id="drag-container">
    <div id="spin-container">
      <!-- Add your images (or video) here -->
      <div class="img-item">
        <img
             src="https://images.pexels.com/photos/206395/pexels-photo-206395.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
             alt="">
      </div>
      <div class="img-item">
        <img
             src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
             alt="">
        <video  loop preload="auto" width="100%" height="100%" autoplay muted>
          <source
              :src="sparkles"
              type="video/mp4">
        </video>
      </div>
      <div class="img-item">
        <img
             src="https://images.pexels.com/photos/1382731/pexels-photo-1382731.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
             alt="">
      </div>
      <div class="img-item">
        <img
             src="https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
             alt="">
      </div>
      <div class="img-item">
        <img
             src="https://images.pexels.com/photos/1382734/pexels-photo-1382734.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
             alt="">
      </div>
      <div class="img-item">
        <img
             src="https://images.pexels.com/photos/1462636/pexels-photo-1462636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
             alt="">
      </div>
      <div class="img-item">
        <img
             src="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
             alt="">
      </div>
      <!-- Example image with link -->
      <a target="_blank" href="https://images.pexels.com/photos/139829/pexels-photo-139829.jpeg">

      </a>

      <!-- Example add video  -->
      <video class="video-item" controls autoplay loop>
        <source
            :src="sparkles"
            type="video/mp4">
      </video>

      <!-- Text at center of ground -->
<!--      <p>3D Tiktok Carousel</p>-->
      <div class="center-item">
        <PocketItem/>
      </div>

      <div class="center-vertical" style="font-size: 28px">
        <span>Love you</span>
        <record-player-item/>
      </div>
    </div>
    <div id="ground"></div>
  </div>



  <div id="music-container"></div>
</template>
<script setup lang="ts">
import {onMounted} from "vue";
import PocketItem from "@/views/vietnamese-women-day/components/PocketItem.vue";
import sparkles from "@/assets/videos/sparkles.mp4"
import RecordPlayerItem from "@/views/vietnamese-women-day/components/RecordPlayerItem.vue";

const width = window.innerWidth;
let radius = window.innerWidth < 360 ? window.innerWidth - 20 : 360; // how big of the radius
let autoRotate = true; // auto rotate or not
let rotateSpeed = -60; // unit: seconds/360 degrees
let imgWidth = window.innerWidth <360 ? 100 :200; // width of images (unit: px)
let imgHeight = 230; // height of images (unit: px)

// Link of background music - set 'null' if you dont want to play background music
let bgMusicURL = 'https://api.soundcloud.com/tracks/143041228/stream?client_id=587aa2d384f7333a886010d5f52f302a';
let bgMusicControls = true; // Show UI music control

/*
     NOTE:
       + imgWidth, imgHeight will work for video
       + if imgWidth, imgHeight too small, play/pause button in <video> will be hidden
       + Music link are taken from: https://hoangtran0410.github.io/Visualyze-design-your-own-/?theme=HauMaster&playlist=1&song=1&background=28
       + Custom from code in tiktok video  https://www.facebook.com/J2TEAM.ManhTuan/videos/1353367338135935/
*/


// ===================== start =======================
// animation start after 1000 miliseconds
onMounted(() => {
  setTimeout(init, 1000);

  let odrag = document.getElementById('drag-container');
  let ospin = document.getElementById('spin-container');
  let aImg = ospin?.querySelectorAll('.img-item') ?? [];
  let aVid = ospin?.querySelectorAll('.video-item') ?? [];
  let aEle = [...aImg, ...aVid]; // combine 2 arrays

// Size of images
  ospin.style.width = imgWidth + "px";
  ospin.style.height = imgHeight + "px";

// Size of ground - depend on radius
  let ground = document.getElementById('ground');
  ground.style.width = radius * 3 + "px";
  ground.style.height = radius * 3 + "px";

  function init(delayTime) {
    for (let i = 0; i < aEle.length; i++) {
      aEle[i].style.transform = "rotateY(" + (i * (360 / aEle.length)) + "deg) translateZ(" + radius + "px)";
      aEle[i].style.transition = "transform 1s";
      aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
    }
  }

  function applyTranform(obj) {
    // Constrain the angle of camera (between 0 and 180)
    if (tY > 180) tY = 180;
    if (tY < 0) tY = 0;

    // Apply the angle
    obj.style.transform = "rotateX(" + (-tY) + "deg) rotateY(" + (tX) + "deg)";
  }

  function playSpin(yes) {
    ospin.style.animationPlayState = (yes ? 'running' : 'paused');
  }

  let sX, sY, nX, nY, desX = 0,
      desY = 0,
      tX = 0,
      tY = 10;

// auto spin
  if (autoRotate) {
    let animationName = (rotateSpeed > 0 ? 'spin' : 'spinRevert');
    ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
  }

// add background music
  if (bgMusicURL) {
    document.getElementById('music-container').innerHTML += `
<audio src="${bgMusicURL}" ${bgMusicControls ? 'controls' : ''} autoplay loop>
<p>If you are reading this, it is because your browser does not support the audio element.</p>
</audio>
`;
  }

// setup events
  document.onpointerdown = function (e) {
    clearInterval(odrag.timer);
    e = e || window.event;
    var sX = e.clientX,
        sY = e.clientY;

    this.onpointermove = function (e) {
      e = e || window.event;
      var nX = e.clientX,
          nY = e.clientY;
      desX = nX - sX;
      desY = nY - sY;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      sX = nX;
      sY = nY;
    };

    this.onpointerup = function (e) {
      odrag.timer = setInterval(function () {
        desX *= 0.95;
        desY *= 0.95;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTranform(odrag);
        playSpin(false);
        if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
          clearInterval(odrag.timer);
          playSpin(true);
        }
      }, 17);
      this.onpointermove = this.onpointerup = null;
    };

    return false;
  };

  document.onmousewheel = function (e) {
    e = e || window.event;
    var d = e.wheelDelta / 20 || -e.detail;
    radius += d;
    init(1);
  };

})
</script>
<style scoped>

#drag-container, #spin-container {
  position: relative;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin: auto;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  -webkit-transform: rotateX(-10deg);
  transform: rotateX(-10deg);
}

#drag-container .img-item, #drag-container .video-item {
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  line-height: 200px;
  font-size: 50px;
  text-align: center;
  -webkit-box-shadow: 0 0 8px #fff;
  box-shadow: 0 0 8px #fff;
  -webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0005);
}

.img-item img {
  width: 100%;
  height: 100%;
}

.img-item video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
  opacity: 0.5; /* làm trong suốt */
  //pointer-events: none; /* để video không che click */
  mix-blend-mode: color-dodge; /* hoặc overlay, lighten, multiply */
}

#drag-container .img-item:hover, #drag-container .video-item:hover {
  -webkit-box-shadow: 0 0 15px #fffd;
  box-shadow: 0 0 15px #fffd;
  -webkit-box-reflect: below 10px linear-gradient(transparent, transparent, #0007);
}

#drag-container p {
  position: absolute;
  top: -100px;
  left: 50%;
  -webkit-transform: translate(-50%, -50%) rotateX(90deg);
  transform: translate(-50%, -50%) rotateX(90deg);
  z-index: 0;
  color: #ffffff;
}

.center-vertical {
  position: absolute;
  top: 100%;
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: translate(-50%, -50%) rotateX(90deg);

  span {
    position: absolute;
    top: -50px;
    left: auto;
  }
}

.center-item {
  font-family: Serif;
  position: absolute;
  top: -30px;
  left: 50%;
  -webkit-transform: translate(-50%, -50%) ;
  transform: translate(-50%, -50%) ;
  color: #fff;
  animation:  fadeIn 1.5s ease-in forwards;
  animation-delay: 3s;
  opacity: 0;
  z-index: 21;
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1.2s ease-in forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

#ground {
  width: 900px;
  height: 900px;
  position: absolute;
  top: 100%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%) rotateX(90deg);
  transform: translate(-50%, -50%) rotateX(90deg);
  background: -webkit-radial-gradient(center center, farthest-side, #9993, transparent);
}

#music-container {
  position: absolute;
  top: 0;
  left: 0;
}

@-webkit-keyframes spin {
  from {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
  }
}

@keyframes spin {
  from {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
  to {
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
  }
}

@-webkit-keyframes spinRevert {
  from {
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
  }
  to {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
}

@keyframes spinRevert {
  from {
    -webkit-transform: rotateY(360deg);
    transform: rotateY(360deg);
  }
  to {
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
  }
}
</style>
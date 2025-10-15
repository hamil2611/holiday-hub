<template>
  <div class="page-container">
    <Carousel3dItem/>
  </div>
</template>

<script setup lang="ts">

import Carousel3dItem from "@/views/vietnamese-women-day/components/Carousel3dItem.vue";
</script>
<style scoped>
.page-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #fde9ef 0%, #f6c9d4 100%);
  overflow: hidden;
}
</style>
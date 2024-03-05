<script setup>
  import { ref } from 'vue';
  const videoUrl = ref('https://www.youtube.com/embed/heNHCS9mbNg');

</script>

<template>
 <div class="youtube-video-container">
    <iframe
      width="560"
      height="315"
      :src="videoUrl"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen>
    </iframe>
  </div>

  <div class="ocr-extracted-window">

  </div>
</template>

<style scoped>
  .youtube-video-container {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
</style>

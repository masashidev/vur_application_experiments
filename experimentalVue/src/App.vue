<script setup>

  import YoutubeWindow from './components/YoutubeWindow.vue'
  import Header from './components/Header.vue'
  import PictureWindow from './components/PictureWindow.vue'
  import Ocr from './components/Ocr.vue'
  import WordsInterface from './components/WordsInterface.vue'

  import { RouterView } from 'vue-router'
</script>

<template>
  <Header />
  <main>
    <RouterView />
    <WordsInterface />
    <YoutubeWindow />
    <PictureWindow />
    <Ocr />
  </main>

  

</template>

<style scoped>
  main {
    background-color: #f4f4f4;
    padding: 20px;
  }


</style>

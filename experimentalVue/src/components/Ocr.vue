<script setup>
  import { ref } from 'vue';

  const extractedText = ref('');

  function handleFileChange(event) {
    const file = event.target.files[0];
    if (file) {
      // Use Tesseract.js to recognize text from the selected image
      window.Tesseract.recognize(
        file,
        'eng',
        {
          logger: m => console.log(m)
        }
      ).then(({ data: { text } }) => {
        extractedText.value = text;
      });
    }
  }
</script>
<template>
  <div class="ocr-extracted-window">
    <input type="file" @change="handleFileChange" />
    <p>Extracted Text: {{ extractedText }}</p>
  </div>
</template>


<style scoped>
  .ocr-extracted-window {
    position: fixed;
    bottom: 0;
    right: 0;
    width: 200px;
    height: 200px;
    background-color: #f4f4f4;
    border: 1px solid #000000;
    padding: 20px;
    overflow-y: auto;
  }
</style>

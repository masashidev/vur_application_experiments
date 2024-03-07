

<script setup>
  import { ref, onMounted, onUnmounted } from 'vue';

  const textContent = ref(null);
  const selectedText = ref('');

  const captureSelectedText = () => {
    const selection = window.getSelection();
    if (selection){
      const text = selection.toString();
      if (text) {
        selectedText.value = text;
      }
    }
  };

  onMounted(() => {
    textContent.value.addEventListener('mouseup', captureSelectedText);
  });

  const text = ref('')
  const mouseUpEvent = () => {
    text.value = "Mouse up event"
  }
  const mousedownEvent = () => {
    text.value = "Mouse down event"
  }

  // onUnmounted(() => {
  //   textContent.value.removeEventListener('mouseup', captureSelectedText);
  // });
</script>

<template>
  <div>
    <p @pointerup="mouseUpEvent" @pointerdown="mousedownEvent"
    >mouse up on here to see the event</p>
    {{ text }}
    <p ref="textContent">Select any part of this text to see the magic happen.</p>
    <div>Selected text: {{ selectedText }}</div>
  </div>
</template>

<style>
/* Add your styles here */
</style>

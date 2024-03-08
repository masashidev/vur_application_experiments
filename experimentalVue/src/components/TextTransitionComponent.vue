<script setup>

  import { ref } from 'vue'

  const text = ref('Hello Vue!')
  const showText = ref(false)
  const mouseUpEvent = () => {
    showText.value = false
  }
  const mousedownEvent = () => {
    showText.value = true
  }

</script>

<template>
  <div>
    <div class="component-container">
      <p class="covered-area"
      @pointerup="mouseUpEvent" @pointerdown="mousedownEvent"
      >mouse up on here to see the event</p>
      <div class="fade-in-out-container"
      :class="{ 'default-fade-in-out': true, 'fade-in': showText }"
      >{{ text }}</div>
    </div>
  </div>
</template>

<style scoped>
  .default-fade-in-out {
    transition:
      opacity 0.15s ease,
      font-size 0.15s ease,
      filter 1.5s ease,
      transform 1.5s ease;
    opacity: 0;
    font-size: 1em;
    /* set blur  */
    filter: blur(5px);
    /* add rotation */
    transform: rotate(0deg);
    /* stay rotation at one place */
    transform-origin: center;

  }
  .fade-in {
    opacity: 1;
    font-size: 5em;
    filter: blur(0);
    transform: rotate(360deg);
  }
  .covered-area {
    /* border only for the size of text */
    position: relative;
    display: inline-block;
    padding: 10px;
    border: 1px solid #000000;

  }
  .covered-area::before, .covered-area::after {
  content: "oino";
  position: absolute;
  width: 200px; /* Wider than the container to cover diagonally */
  border-bottom: 1px solid #000000;
}

.covered-area::before {
  right: -1000px;
  opacity: 0;
}

.covered-area:hover::before {
  right: 0;
  opacity: 1;
  transition: right 1s ease;
}

.covered-area::after {
  top: 0;
  left: 400px;
  transform: rotate(90deg);
  opacity: 0;
  transition: transform 0.3s ease, opacity 0.15s ease;
}

.covered-area:hover::after {
  transform: rotate(0deg);
  opacity: 1;
}

</style>

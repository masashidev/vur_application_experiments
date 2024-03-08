<script setup>
// import { } from '';

  import { ref } from 'vue';

  const textUnderMouse = ref('')

  const showTextUnderMouse = (event) => {
    const target = event.target;
    const text = target.textContent;
    textUnderMouse.value = text;
  }

// Reactive state

// Computed properties

// Watchers

// Lifecycle hooks

// Methods

</script>

<template>
  <div class="component-container">
    <div
      @mousemove="showTextUnderMouse"
      @mouseout="textUnderMouse = ''"
      class="content-area">
      Hover over this text to see the magic happen.
    </div>
    <div class="result-area">
      Text under mouse: {{ textUnderMouse }}
    </div>
  </div>
</template>

<style scoped>
  .component-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 5px;
  }
  .content-area {
  /* Styles for better visibility */
  padding: 20px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
  cursor: pointer;
}

.result-area {
  padding: 10px;
  background-color: #f9f9f9;
  border: 1px solid #eee;
}
</style>

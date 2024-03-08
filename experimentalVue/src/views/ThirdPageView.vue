<script setup>
// import { } from '';
  import TextSelectionComponent from '../components/TextSelectionComponent.vue'
  import TextUnderMouseComponent from '@/components/TextUnderMouseComponent.vue';
  import TextTransitionComponent from '@/components/TextTransitionComponent.vue';
// Reactive state

// Computed properties

// Watchers

// Lifecycle hooks

// Methods

</script>

<template>
  <div class="component-container">
    <h1>third page</h1>
    <TextUnderMouseComponent />
    <TextTransitionComponent />
    <TextSelectionComponent />
  </div>
</template>

<style scoped>
  .component-container > * {
    margin-bottom: 40px;
  }
</style>

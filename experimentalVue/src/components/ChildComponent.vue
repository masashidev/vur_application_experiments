<script setup>
// import { } from '';
  import { defineProps }  from 'vue';
  import { defineEmits } from 'vue';

  const props = defineProps({
    sliderValueFromParent: Number
  });
  const emit = defineEmits(['update:sliderValueFromParent']);

  const incrementSliderValueFromParent = () => {
    emit('update:sliderValueFromParent', props.sliderValueFromParent + 1);
  };
</script>

<template>
  <div>
    <p>Slider value from parent: {{ sliderValueFromParent }}</p>
    <button @click="incrementSliderValueFromParent">Increment sliderValueFromParent</button>
  </div>
</template>

<style scoped>

</style>

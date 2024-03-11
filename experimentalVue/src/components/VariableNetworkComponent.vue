<script setup>
// import { } from '';
  import { ref } from 'vue';
  import { computed } from 'vue';
  import { watch } from 'vue';

  import { defineProps, defineEmits
   } from 'vue';

  const props = defineProps({
    sliderValueFromParent: Number
  });
  const emit = defineEmits(['update:sliderValueFromParent']);


  const sliderValues = ref([
    {
      id: 1,
      currentValue: 10,
      max: 100
    },
    {
      id: 2,
      currentValue: 10,
      max: 100
    }
  ]);

// Computed properties
 const dependentMaxValue = computed(() => {
   return sliderValues.value[0].max + sliderValues.value[1].max;

  });
 const dependentSliderValue = computed({
  get() {
    return parseInt(sliderValues.value[0].currentValue) + parseInt(sliderValues.value[1].currentValue);
  },
  set(newValue) {
    sliderValues.value[0].currentValue = newValue / 2;
    sliderValues.value[1].currentValue = newValue / 2;
  }
 });

// Watchers
watch(() => sliderValues.value[0].currentValue, (newValue, oldValue) => {
  console.log('Slider 1 value changed from', oldValue, 'to', newValue);
});


  const sliderWidth = ref(200);

  const updateSliderValueFromParent = (newValue) => {

    emit('update:sliderValueFromParent', Number(newValue));
  };
</script>

<template>
  <div>
    <p>Slider value from parent:
    {{sliderValueFromParent}}
    </p>
    <input type="range" min="0" max="100"
    :value="sliderValueFromParent"
    @input="updateSliderValueFromParent($event.target.value)"
    />


    <h1>Variable Network</h1>
    <input class="first-slider"
    type="range" min="0" max="100" v-model="sliderValues[0].currentValue" />
    <p>Slider value: {{ sliderValues[0].currentValue }} / {{ sliderValues[0].max }}</p>

    <input class="second-slider"
    type="range" min="0" max="100" v-model="sliderValues[1].currentValue" />
    <p>Slider value: {{ sliderValues[1].currentValue }} / {{ sliderValues[1].max }}</p>

    <input class="dependent-slider"
    type="range" min="0" :max="dependentMaxValue" :value="dependentSliderValue" @input="dependentSliderValue = $event.target.value" />
    <p>Slider value: {{ dependentSliderValue }} / {{ dependentMaxValue }}</p>


  </div>
</template>

<style scoped>

  .first-slider {
    width: v-bind(sliderWidth + 'px');
  }
  .dependent-slider {
    width: v-bind(sliderWidth * 2 + 'px');
  }
</style>

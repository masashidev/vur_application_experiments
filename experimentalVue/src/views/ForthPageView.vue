<script setup>
  import DiagramPrimitiveComponent from '../components/DiagramPrimitive.vue'
  import SliderComponent from '../components/SliderComponent.vue'
  import SenderComponent from '../components/SenderComponent.vue'
  import ReceiverComponent from '../components/ReceiverComponent.vue'
  import SliderVisualizerComponent from '../components/SliderVisualizerComponent.vue'
</script>

<template>
  <div class="component-container">
    <h1>forth page</h1>
    <SenderComponent />
    <ReceiverComponent />
    <SliderComponent />
    <DiagramPrimitiveComponent />
    <SliderVisualizerComponent />
  </div>
</template>


<style scoped>
.component-container > * {
  margin: 10px;
  border: 1px solid #000000;
  border-radius: 30px;
  padding: 10px;
}

</style>

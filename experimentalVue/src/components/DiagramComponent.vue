

<script setup>
import { reactive, ref } from 'vue';

const nodes = reactive([
  { x: 50, y: 50 },
  { x: 150, y: 150 },
]);
const edges = reactive([
  { start: nodes[0], end: nodes[1] },
]);

const selectedNode = ref(null);
const offset = ref({ x: 0, y: 0 });

function startDrag(e) {
  const rect = e.target.getBoundingClientRect();
  offset.value = { x: e.clientX - rect.x, y: e.clientY - rect.y };
}

function drag(e) {
  if (selectedNode.value !== null) {
    nodes[selectedNode.value].x = e.clientX - offset.value.x;
    nodes[selectedNode.value].y = e.clientY - offset.value.y;
  }
}

function endDrag() {
  selectedNode.value = null;
}

function selectNode(index, event) {
  selectedNode.value = index;
  startDrag(event);
}
</script>

<template>
  <svg
    class="diagram"
    @mousedown="startDrag"
    @mousemove="drag"
    @mouseup="endDrag"
    @mouseleave="endDrag"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      v-for="(node, index) in nodes"
      :key="index"
      :cx="node.x"
      :cy="node.y"
      r="20"
      fill="blue"
      @mousedown.stop="selectNode(index, $event)"
    />
    <line
      v-for="(edge, index) in edges"
      :key="`edge-${index}`"
      :x1="edge.start.x"
      :y1="edge.start.y"
      :x2="edge.end.x"
      :y2="edge.end.y"
      stroke="black"
    />
  </svg>
</template>

<style scoped>
.diagram {
  width: 100%;
  height: 400px;
  border: 1px solid #000;
  background-color: #f4f4f4;
}
</style>

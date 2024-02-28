<template>
  <div class="page-viewer">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
  </div>

</template>

<script>
export default {
  name: 'PageViewer',
  props: {
    title: String,
    content: String
  }
}

</script>

<style scoped>

</style>

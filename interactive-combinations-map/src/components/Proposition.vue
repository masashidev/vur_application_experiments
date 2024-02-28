<template>
  <div class="proposition">
    <p>Today's Proposition</p>
    <h2>{{ proposition }}</h2>
  </div>
</template>

<script>
export default {
  name: 'Proposition',
  props: {
    proposition: String
  }
}
</script>

<style scoped>
.proposition {
  background-color: #42b983;
  color: white;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  margin: 20px 100px;
}
h2 {
  margin: 20px 0 0;
}
p {
  color: white;
}

</style>

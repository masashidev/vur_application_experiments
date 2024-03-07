<script setup>
  const thisYear = new Date().getFullYear();
  const footerText = `© ${thisYear} - All rights reserved`;

</script>

<template>
  <footer>
    <p>{{ footerText }}</p>
  </footer>
</template>

<style scoped>
  footer {
    background-color: #f4f4f4;
    display: flex;
    justify-content: center;
    border: 1px solid #000000;
    border-radius: 30px;
  }
  p {
    padding: 10px;
    margin: 10px;
    text-decoration: none;
    color: #000000;
    border-radius: 10px;
  }
</style>

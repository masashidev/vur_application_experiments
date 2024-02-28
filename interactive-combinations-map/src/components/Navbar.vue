<template>
  <nav class="navbar">
    <div class="container">
      <a href="/">COMBINATION SEARCHER</a>
      <ul>
        <li><a href="/">HOME</a></li>
        <li><a href="/words">WORDS</a></li>
        <li><a href="/games">GAMES</a></li>
        <li><a href="/words">VARIABLES</a></li>
        <li><a href="/games">ACTIONS</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style scoped>
.navbar {
  background-color: #42b983;
  color: white;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  margin: 20px 100px;
}
a {
  color: white;
  margin: 0 10px;
  text-decoration: none;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline;
  margin: 0 10px;
  padding: 5px 10px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.15s;
}
li.active {
  text-decoration: underline;
}
li:hover{
  background-color: #a1e3c6;
}


</style>

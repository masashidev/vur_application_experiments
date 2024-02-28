<template>
  <div class="article-list">
    <h2>Articles</h2>
    <ul>
      <li v-for="article in articles" :key="article.id">
        {{ article.title }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ArticleList',
  props: {
    articles: Array
  }
}
</script>

<style scoped>
.article-list {
  margin: 20px 100px;
  border: 1px solid #42b983;
  padding: 20px;
  border-radius: 4px;
}
h2 {
  margin: 20px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px 0;
}


</style>

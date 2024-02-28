<template>
  <Navbar/>
  <PageViewer/>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <Proposition proposition="Vue is a great framework"/>
  <ArticleList :articles="articles"/>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import Proposition from './components/Proposition.vue'
import ArticleList from './components/ArticleList.vue'
import PageViewer from './components/PageViewer.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Navbar,
    PageViewer,
    Proposition,
    ArticleList,
  },
  data(){
    return {
      articles: [
        {id: 1, title: 'Everything is made up of atoms'},
        {id: 2, title: 'Perspectives of human for taking actions'},
        {id: 3, title: 'Combining the two to make pain go away'},
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

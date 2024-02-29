<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea v-model.trim
        ="newCard" placeholder="Enter your proposition here..."
        name="card" id="" cols="30" rows="10"></textarea>
        <div v-if="errorMessages.length > 0" class="errorMessage">
          <p v-for="error in errorMessages" :key="error">{{ error }}</p>
        </div>
        <select v-model="selectedTag">
          <option value="" disabled selected>Select a tag</option>
          <option v-for="tag in tags" :value="tag.value" :key="tag.id">
            {{ tag.value }}
          </option>
        </select>
        <button class="addButton" @click="addCard">Create</button>
        <button class="closeButton" @click="showModal = false"
        >Close</button>
      </div>
    </div>

    <div class="container">
      <header>
        <h1>Propositions</h1>
        <p>Here are some propositions for you to vote on</p>
        <button class="newButton" @click="showModal = true">+</button>
      </header>

      <div class="tags">
        <h2>Tags</h2>
        <ul v-for="tag in tags" :key="tag.id">
          <li>{{ tag.value }}</li>
        </ul>
      </div>


      <div class="cards-container">
        <div v-for="(card, index) in cards" :key="card.id" class="card">
          <p>#{{ index+1 }} <span class="card-tag" >{{ card.tag }}</span></p>
          <p class="card-text">{{ card.text }}</p>
          <p>{{ card.date }}</p>
          <button class="detailButton">Details</button>
        </div>
      </div>

      <div class="keywordsList">
        <h2>Keywords</h2>
        <ul>
          <li>Keyword</li>
          <li>Keyword</li>
          <li>Keyword</li>
          <li>Keyword</li>
          <li>Keyword</li>
        </ul>
      </div>

    </div>

  </main>
</template>

<script setup>
  import { ref } from 'vue'

  const showModal = ref(false)
  const newCard = ref('')
  const cards = ref([])
  const defaultCards = [
    { id: 1, text: 'This is a proposition', date: '2021-10-10', tag: 'ToE' },
    { id: 2, text: 'This is another proposition', date: '2021-10-10', tag: 'Variables' },
    { id: 3, text: 'This is a third proposition', date: '2021-10-10', tag: 'Objects' },
    { id: 4, text: 'This is a fourth proposition', date: '2021-10-10', tag: 'Actions' },
  ]
  const selectedTag = ref('')
  const tags = [
    { id: 1, value: 'ToE' },
    { id: 2, value: 'Variables' },
    { id: 3, value: 'Objects' },
    { id: 4, value: 'Actions' },
  ]
  const errorMessages = ref([])

  cards.value = defaultCards

  const addCard = () => {
    errorMessages.value = [];
    if (!newCard.value.trim()){
      errorMessages.value.push('No text entered')
    }
    if (!selectedTag.value){
      errorMessages.value.push('No tag selected')
    }
    if (errorMessages.value.length > 0){
      return;
    }
    cards.value.push({
      id: Math.floor(Math.random() * 1000),
      text: newCard.value,
      date: new Date().toLocaleDateString().replace(/\//g, '-'),
      tag: selectedTag.value,
    });
    showModal.value = false;
    newCard.value = '';
    errorMessage.value = '';
  }
</script>


<style>

  .container{
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
  }

  header{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #888888;
    padding: 20px;
    border-radius: 5px;
  }

  .newButton{
    background-color: #888888;
    color: white;
    border: none;
    width: 30px;
    height: 30px;
    padding: 10px;
    margin: 10px 0;
    border-radius: 100%;
    cursor: pointer;

    align-items: center;
    justify-content: center;

  }

  h1{
    font-weight: bold;
    font-size: 3rem;
  }
  .tags {
  }
  .tags ul{
  
  }

  .tags li{

  }

  .cards-container{
    display: grid;
    gap: 0.5rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  .card {
    border: 1px solid #888888;
    padding: 20px;
    margin: 10px 0;
    border-radius: 5px;
  }
  .errorMessage{
    color: red;
  }
  .card-tag{
    padding: 2px 5px;
    margin-left: 5px;
    border-radius: 5px;
    display: inline;
    border: 1px solid #888888;
  }
  .card-text{
    font-weight: bold;
  }

  .detailButton {
    background-color: #888888;
    color: white;
    border: none;
    padding: 5px;
    margin: 10px 0;
    border-radius: 5px;
  }

  .overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0,0.5);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .addButton {
    background-color: #888888;
    color: white;
    border: none;
    padding: 5px;
    margin: 10px 0;
    border-radius: 5px;
  }

  .closeButton {
    background-color: #888888;
    color: white;
    border: none;
    padding: 5px;
    margin: 10px 0;
    border-radius: 5px;
  }
</style>

<template>
  <main>
    <div v-if="showModal" class="overlay">
      <div class="modal">
        <textarea v-model="newCard" placeholder="Enter your proposition here..."
        name="card" id="" cols="30" rows="10"></textarea>
        <button class="addButton">Create</button>
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
        <button>Tag</button>
        <button>Tag</button>
        <button>Tag</button>
        <button>Tag</button>
      </div>

      <div class="cards-container">
        <div class="card">
          <p>Amount of data</p>
          <button class="detailButton">Detail</button>
          <p class="date">#</p>
        </div>
        <div class="card">
          <p>Amount of data</p>
          <button class="detailButton">Detail</button>
          <p class="date">#</p>
        </div>
        <div class="card">
          <p>Amount of data</p>
          <button class="detailButton">Detail</button>
          <p class="date">#</p>
        </div>
        <div class="card">
          <p>Amount of data</p>
          <button class="detailButton">Detail</button>
          <p class="date">#</p>
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

  const addCard = () => {
    cards.value.push({
      id: Math.floor(Math.random() * 1000),
      text: newCard.value,
      date: new Date().toLocaleDateString()
      tag: 
    })
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
  .tags{
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    margin: 20px 0;
  }
  @media (min-width: 768px) {
    .tags {
      grid-template-columns: 300px 1fr;
    }
  }

  .cards-container{
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
  .card {
    border: 1px solid #888888;
    padding: 20px;
    margin: 10px 0;
    border-radius: 5px;
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

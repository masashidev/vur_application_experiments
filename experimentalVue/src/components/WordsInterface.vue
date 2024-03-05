 <script setup>
  import { ref } from 'vue'
  import { watchEffect } from 'vue'
  import { computed } from 'vue'
  const inputWord = ref('')
  const allWords = ref([])

  // prepare default words
  allWords.value = ['apple', 'banana', 'cherry', 'date', 'elderberry', 'fig', 'grape', 'honeydew', 'kiwi', 'lemon', 'mango', 'nectarine', 'orange', 'papaya', 'quince', 'raspberry', 'strawberry', 'tangerine', 'watermelon']

  const addWord = () => {
    allWords.value.push(inputWord.value)
    inputWord.value = ''
  }
  const removeWord = (index) => {
    allWords.value.splice(index, 1)
  }

  const searchQuery = ref('')
  // show search result
  watchEffect(() => {
    if (inputWord.value) {
      searchQuery.value = inputWord.value
    } else {
      searchQuery.value = ''
    }
  })

  // show matched words
  const filteredWords = computed(() => {
    if (searchQuery.value) {
      return allWords.value.filter((word) => {
        return word.toLowerCase().includes(searchQuery.value.toLowerCase())
      })
    } else {
      // show nothing
      return []
    }})

  const allAlphabets = ref('abcdefghijklmnopqrstuvwxyz'.split(''))
  const wordLength = ref(0)

  let maximumWordLength = 10

  const automaticallyAddInputWord = () => {
    maximumWordLength = Math.floor(Math.random() * 10) + 3
    while (inputWord.value.length < maximumWordLength) {
      const randomAlphabet = allAlphabets.value[Math.floor(Math.random() * allAlphabets.value.length)]
      inputWord.value += randomAlphabet
    }
    addWord()
  }

  let intervalId = ref(null)

  const isAutomaticallyAdding = ref(false)

  const selectQuery = (query) => {
    inputWord.value = query
  }

  const toggleAutomaticallyAddInputWord = () => {
    isAutomaticallyAdding.value = !isAutomaticallyAdding.value
    if (isAutomaticallyAdding.value) {
      intervalId.value = setInterval(automaticallyAddInputWord, 500)
      console.log('intervalId', intervalId.value)
    } else {
      clearInterval(intervalId.value)
      console.log('intervalId', intervalId.value)
    }
  }

</script>

 <template>
  <div class="container">
  <h1>Automating Learning Language</h1>

    <input v-model="inputWord" @keyup.enter="addWord"
    placeholder="Add a word"
    type="text"
    class="input-word"
    />
    <!-- toggle on and off of automaticallygeneration -->
    <button @click="toggleAutomaticallyAddInputWord">
      {{ isAutomaticallyAdding ? 'Stop' : 'Start' }} Automatically Add Word
    </button>

    <div class="filtered-words-container">
      <!-- if there's a filteredWord, show result. else show "no match" -->
      <p v-if="filteredWords.length > 0">
        <strong>Matched Words:</strong>
      </p>
      <p v-else>
        <strong>No Match</strong>
      </p>
      <ul>
        <li v-for="(filteredWord, index) in filteredWords" :key="index">
          {{ filteredWord }}
        </li>
      </ul>

    </div>

    <ul class="words-list-container">
      <li v-for="(word, index) in allWords" :key="index"
      @click="selectQuery(word)"
      class="all-words">
        {{ word }}
        <button type="button" class="remove-button" @click="removeWord(index)">x</button>
      </li>
    </ul>
  </div>
 </template>

<style scoped>
.container {
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
  }
  h1 {
    margin: 0;
    color: #333;
    font-weight: bold;
  }

  .input-word {
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    border: 1px solid #000000;
    border-radius: 5px;
  }

  .filtered-words-container {
    padding: 20px;
    background-color: #f4f4f4;
    margin-top: 20px;
  }

  .words-list-container {
    padding: 20px;
    background-color: #f4f4f4;
    margin-top: 20px;
    border: 1px solid #000000;
    border-radius: 10px;

    display: flex;
    /* wrap */
    flex-wrap: wrap;
  }

  .all-words {
    display: flex;
    align-items: center;
    margin-top: 10px;
    cursor: pointer;
    border: 1px solid #000000;
    border-radius: 10px;
    padding: 0 3px;
  }

  .all-words:hover {
    background-color: #939393;
    color: #fff;
    transition: 0.15s
  }

  .remove-button {
    margin-left: 3px;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #ffc3c3;
    color: #333;
    border: none;
    cursor: pointer;


  }

</style>

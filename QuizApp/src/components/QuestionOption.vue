<script setup>
  import { defineProps } from 'vue'

  const props = defineProps({
    question: Object
  })

</script>

<template>
  <div class="question-container">
      <h1 class="question">
        {{ props.question.text }}
      </h1>
    </div>
    <div class="options-container">
      <div class="option">
        <p class="option-label">A</p>
        <div class="option-value">
          <p>first answer </p>
        </div>
      </div>
      <div class="option">
        <p class="option-label">A</p>
        <div class="option-value">
          <p>first answer </p>
        </div>
      </div>
      <div class="option">
        <p class="option-label">A</p>
        <div class="option-value">
          <p>first answer </p>
        </div>
      </div>
      <div class="option">
        <p class="option-label">A</p>
        <div class="option-value">
          <p>first answer </p>
        </div>
      </div>
    </div>

</template>

<style scoped>

  .options-container{
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 768px) {
    .options-container{
      width: calc(768px - 40px);
      margin: 0 auto;
    }
  }

  .option {
    display:flex;
    margin-bottom: 20px;
    cursor: pointer;
    align-items: center;
  }

  .option-label{
    font-weight: bold;
    margin-right: 10px;
  }

  .option-value{
    width: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    padding: 5px;
    border-radius: 5px;
  }

</style>

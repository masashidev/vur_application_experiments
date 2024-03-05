<script setup>

  import QuestionOption from '../components/QuestionOption.vue'
  import QuestionHeader from '../components/QuestionHeader.vue'

  import { useRoute } from 'vue-router';
  import { ref } from 'vue'
  import qestions from '../data/questions.json'

  const route = useRoute()

  const qusetionId = parseInt(route.params.id)

  const currentQuestionIndex = ref(0)
  const quesiton = qestions.find(q => q.id === qusetionId)
</script>


<template>
  {{ qusetionId }}
  <div class="question">

    <QuestionHeader/>

    <QuestionOption :question="question.questions[currentQuestionIndex]"/>
    

  </div>
</template>


<style scoped>


</style>

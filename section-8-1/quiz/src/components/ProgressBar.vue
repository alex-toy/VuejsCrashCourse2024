<template>
    <div class="progress">
        <div class="bar" :style="{ width: `${questionsAnsweredCount / totalQuestionsCount * 100}%` }"></div>
        <div class="status">{{ questionsAnsweredCount }} out of {{ totalQuestionsCount }} questions answered</div>
    </div>
</template>

<script>
export default {
    props : ['totalQuestionsCount', 'questionsAnsweredCount'],
    emits : [],
    methods : {
    }
}
</script>


<style scoped>
</style>
  
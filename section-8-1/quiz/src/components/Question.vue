<template>
    <div class="single-question">
        <div class="question">{{ question.q }}</div>
        <div class="answers">
            <div class="answer" 
                v-for="answer in question.answers" 
                :key="answer"
                @click.prevent="selectAnswer(answer.is_correct)">
                {{ answer.text }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props : ['question', 'selectAnswer'],
    emits : [],
    methods : {
    }
}
</script>


<style scoped>
</style>
  
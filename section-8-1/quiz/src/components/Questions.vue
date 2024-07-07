<template>
    <div class="questions-ctr">

        <ProgressBar :questionsAnsweredCount="questionsAnsweredCount" :totalQuestionsCount="questions.length"/>

        <transition-group name="fade">
            <Question
                v-for="(question, index) in questions" 
                :key="question.q"
                :question="question"
                :selectAnswer="selectAnswer"
                v-show="questionsAnsweredCount === index" 
            />
        </transition-group>
            
    </div>
</template>

<script>
import ProgressBar from "./ProgressBar.vue";
import Question from "./Question.vue";

export default {
    props : ['questions', 'questionsAnsweredCount'],
    components : {ProgressBar, Question},
    emits : ['question-answered'],
    methods : {
        selectAnswer(is_correct) {
            this.$emit('question-answered', is_correct)
        }
    }
}
</script>


<style scoped>
</style>
  
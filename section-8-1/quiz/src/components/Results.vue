<template>
    <div class="result">
        <div class="title">{{ results[resultIndex].title }}</div>
        <div class="desc">
            {{ results[resultIndex].desc }}
        </div>
    </div>
</template>

<script>
export default {
    props : ['results', 'totalCorrectCount'],
    emits : [],
    computed : {
        resultIndex(){
            let index = 0;

            this.results.forEach((result, i) => {
                if (result.min <= this.totalCorrectCount && result.min >= this.totalCorrectCount) {
                    index = i;
                }
            });

            return index;
        }
    },
    methods : {
    }
}
</script>


<style scoped>
</style>
  
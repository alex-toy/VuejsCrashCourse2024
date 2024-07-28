<template>
    <button @click="addOne">Add {{ incrementValue }}</button><br>
    <button @click="addOneLate">Add 1 Late</button><br>
    <button @click="addValueLate">Add Late {{ incrementValue }}</button><br>
    <button @click="increment({value : this.incrementValue})">Add Late Action {{ incrementValue }}</button><br>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    data() {
        return {
            incrementValue : 10
        }
    },
    methods : {
        addOne() {
            // this.$store.commit('increase', {value : this.incrementValue});
            this.$store.commit({type : 'increase', value : this.incrementValue});
        },
        addOneLate() {
            this.$store.dispatch('increment');
        },
        addValueLate() {
            this.$store.dispatch( 'increment', { value : this.incrementValue });
        },
        // ...mapActions(['increment'])
        ...mapActions({ increment : 'increment'})
    }
}
</script>
<template>
    <h3>Double counter : {{ counter }}</h3>
    <h3>Normalized counter : {{ normalizedCounter }}</h3>
</template>

<script>
export default {
    computed : {
        counter() {
            return this.$store.getters.doubleCounter;
        },
        normalizedCounter() {
            return this.$store.getters['counter/normalizedCounter'];
        },
    }
}
</script>
<template>
    <p>Double counter</p>
    <h3>{{ counter }}</h3>
    <p>Normalized counter</p>
    <h3>{{ normalizedCounter }}</h3>
</template>

<script>
export default {
    computed : {
        counter() {
            return this.$store.getters.doubleCounter;
        },
        normalizedCounter() {
            return this.$store.getters.normalizedCounter;
        },
    }
}
</script>
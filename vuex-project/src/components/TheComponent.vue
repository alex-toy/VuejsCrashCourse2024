<template>
    <div>
        <h3>Simple counter : {{ simpleCounter }}</h3>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  components: {
  },
  computed: {
    // counter() {
    //   return this.$store.state.counter;
    // },
    ...mapGetters('counter', ['simpleCounter'])
  },
  methods: {
  }
};
</script>
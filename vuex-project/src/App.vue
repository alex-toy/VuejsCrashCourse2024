<template>
  <base-container title="Vuex">
    <button @click="addOne">Add 1</button>

    <TheComponent></TheComponent>

    <ChangeCounter></ChangeCounter>

    <FavoriteValue></FavoriteValue>

    <UserAuth></UserAuth>
  </base-container>

  <base-container title="Auth">
    <UserAuth></UserAuth>
  </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheComponent from './components/TheComponent.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavoriteValue from './components/FavoriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheComponent,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },
  computed: {
    counter() {
      return this.$counterStore.state.counter
    }
  },
  methods: {
    addOne() {
      this.$store.commit('counter/increment');
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
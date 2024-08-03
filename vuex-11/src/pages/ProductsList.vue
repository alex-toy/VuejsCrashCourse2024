<template>
  <section>
    <ul>
      <product-item
        v-for="prod in products"
        :key="prod.id"
        :product="{prodId: prod.id, title: prod.title, image: prod.image, price: prod.price, description: prod.description}"
      ></product-item>
    </ul>
  </section>
</template>

<script>
import ProductItem from '../components/products/ProductItem.vue';
import { mapGetters } from 'vuex'

export default {
  components: {
    ProductItem,
  },
  computed: {
    ...mapGetters(['products'])
  },
};
</script>

<style scoped>
  ul {
    list-style: none;
    margin: 2rem auto;
    padding: 0;
    max-width: 40rem;
  }
</style>
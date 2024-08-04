<template>
  <Introduction></Introduction>

  <MainContent>
    <template #songHeader="{ title }">
      <!-- <div
        class="px-6 pt-6 pb-5 font-bold border-b border-gray-200"
        v-icon.right.yellow="'headphones-alt'"
      >
        <span class="card-title">{{ title }}</span>
      </div> -->
      <div
        class="px-6 pt-6 pb-5 font-bold border-b border-gray-200"
        v-icon-third="{ icon: 'headphones-alt', right: true, color: 'green' }"
      >
        <span class="card-title">{{ title }}</span>
      </div>
      <div
        class="px-6 pt-6 pb-5 font-bold border-b border-gray-200"
        v-icon-secondary="{ icon: 'headphones-alt', right: true }"
      >
        <span class="card-title">{{ title }}</span>
      </div>
    </template>
  </MainContent>
</template>

<script>
import Introduction from '@/components/Introduction.vue'
import MainContent from '@/components/MainContent.vue'
import IconSecondary from '@/directives/icon-secondary'

export default {
  name: 'Home',
  components: { Introduction, MainContent },
  directives: {
    IconSecondary
  }
}
</script>

<template>
  <Introduction></Introduction>

  <MainContent>
    <template #songHeader="{ title, iconClass }">
      <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
        <span class="card-title">{{ title }}</span>
        <i class="fa float-right text-green-400 text-xl" :class="iconClass"></i>
      </div>
    </template>
  </MainContent>
</template>

<script setup>
import Introduction from '@/components/Introduction.vue'
import MainContent from '@/components/MainContent.vue'
</script>

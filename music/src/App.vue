<template>
  <Header></Header>

  <Introduction></Introduction>

  <MainContent>
    <template #songHeader="{ title, iconClass }">
      <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
        <span class="card-title">{{ title }}</span>
        <i class="fa float-right text-green-400 text-xl" :class="iconClass"></i>
      </div>
    </template>
  </MainContent>

  <Player></Player>

  <Auth></Auth>
</template>

<script>
import Header from '@/components/Header.vue'
import Auth from '@/components/AuthForms/Auth.vue'
import Introduction from '@/components/Introduction.vue'
import MainContent from '@/components/MainContent.vue'
import Player from '@/components/Player.vue'
import { mapWritableState } from 'pinia'
import useUserStore from '@/stores/user'
import { auth } from '@/includes/firebase'

export default {
  name: 'App',
  components: {
    Header,
    Auth,
    Introduction,
    MainContent,
    Player
  },
  computed: {
    ...mapWritableState(useUserStore, ['isLoggedIn'])
  },
  created() {
    if (auth.currentUser) {
      this.isLoggedIn = true
    }
  }
}
</script>

<style scoped></style>

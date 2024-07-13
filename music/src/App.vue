<template>
  <AppHeader></AppHeader>

  <Introduction></Introduction>

  <MainContent></MainContent>

  <Player></Player>

  <Auth></Auth>
</template>

<script>
import AppHeader from '@/components/Header.vue'
import Auth from '@/components/Auth.vue'
import Introduction from '@/components/Introduction.vue'
import MainContent from '@/components/MainContent.vue'
import Player from '@/components/Player.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    Auth,
    Introduction,
    MainContent,
    Player
  }
}
</script>

<style scoped></style>

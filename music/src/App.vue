<template>
  <HeaderComp></HeaderComp>

  <router-view></router-view>

  <Player></Player>

  <Auth></Auth>
</template>

<script>
import HeaderComp from '@/components/HeaderComp.vue'
import Auth from '@/components/AuthForms/Auth.vue'
import Player from '@/components/Player.vue'
import { mapWritableState } from 'pinia'
import useUserStore from '@/stores/user'
import { auth } from '@/includes/firebase'

export default {
  name: 'App',
  components: {
    HeaderComp,
    Auth,
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

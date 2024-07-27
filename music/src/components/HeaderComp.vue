<template>
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <router-link
        class="text-white font-bold uppercase text-2xl mr-4"
        :to="{ name: 'home' }"
        exact-active-class="no-active"
        >Music
      </router-link>

      <div class="flex flex-grow items-center">
        <ul class="flex flex-row mt-1">
          <li>
            <router-link class="px-2 text-white" to="/about">About </router-link>
          </li>
          <li v-if="!isLoggedIn">
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal"
              >Login / Register</a
            >
          </li>
          <template v-else>
            <li>
              <router-link class="px-2 text-white" :to="{ name: 'manage' }">Manage</router-link>
            </li>
            <li>
              <router-link class="px-2 text-white" to="#" @click.prevent="logout"
                >Logout</router-link
              >
            </li>
          </template>
        </ul>

        <div class="px-2 text-white" v-show="userName != ''">Name : {{ userName }}</div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState, mapWritableState, mapActions, mapStores } from 'pinia'
import useModalStore from '../stores/modal'
import useUserStore from '@/stores/user'

export default {
  name: 'Header',
  computed: {
    ...mapState(useModalStore, ['hiddenClass']),
    ...mapWritableState(useModalStore, ['isOpen', 'isValidationFormOpen']),
    ...mapWritableState(useUserStore, ['userName', 'isLoggedIn']),
    ...mapActions(useUserStore, { logUserOut: 'logout' }),
    ...mapStores(useModalStore, useUserStore)
  },
  methods: {
    toggleAuthModal() {
      this.isOpen = !this.isOpen
    },
    toggleValidationFormModal() {
      this.isValidationFormOpen = !this.isValidationFormOpen
    },
    async logout() {
      await this.userStore.logout()

      // if (this.$route.name === 'manage') this.$router.push({ name: 'home' })
      if (this.$route.meta.requiresAuth === true) this.$router.push({ name: 'home' })
    }
  }
}
</script>

<template>
  <header id="header" class="bg-gray-700">
    <nav class="container mx-auto flex justify-start items-center py-5 px-4">
      <!-- App Name -->
      <a class="text-white font-bold uppercase text-2xl mr-4" href="#">Music</a>

      <div class="flex flex-grow items-center">
        <ul class="flex flex-row mt-1">
          <li v-if="!isLoggedIn">
            <a class="px-2 text-white" href="#" @click.prevent="toggleAuthModal"
              >Login / Register</a
            >
          </li>
          <template v-else>
            <li>
              <a class="px-2 text-white" href="#">Manage</a>
            </li>
            <li>
              <a class="px-2 text-white" href="#" @click.prevent="logout">Logout</a>
            </li>
          </template>
        </ul>

        <div class="px-2 text-white" v-show="userName != ''">Name : {{ userName }}</div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState, mapWritableState, mapActions } from 'pinia'
import useModalStore from '../stores/modal'
import useUserStore from '@/stores/user'

export default {
  name: 'Header',
  computed: {
    ...mapState(useModalStore, ['hiddenClass']),
    ...mapWritableState(useModalStore, ['isOpen', 'isValidationFormOpen']),
    ...mapWritableState(useUserStore, ['userName', 'isLoggedIn']),
    ...mapActions(useUserStore, { logUserOut: 'logout' })
  },
  methods: {
    toggleAuthModal() {
      this.isOpen = !this.isOpen
    },
    toggleValidationFormModal() {
      this.isValidationFormOpen = !this.isValidationFormOpen
    },
    logout() {
      this.logUserOut()
    }
  }
}
</script>

<template>
  <form>
    <!-- Name -->
    <div class="mb-3">
      <label class="inline-block mb-2">Name</label>
      <input
        type="text"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        v-model="nameInputValue"
      />
    </div>
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <input
        type="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        v-model="emailInputValue"
      />
    </div>
    <!-- Age -->
    <div class="mb-3">
      <label class="inline-block mb-2">Age</label>
      <input
        type="number"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        v-model="ageInputValue"
      />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <input
        type="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
      />
    </div>
    <!-- Confirm Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Confirm Password</label>
      <input
        type="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Confirm Password"
      />
    </div>
    <!-- Country -->
    <div class="mb-3">
      <label class="inline-block mb-2">Country</label>
      <select
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      >
        <option value="USA">USA</option>
        <option value="Mexico">Mexico</option>
        <option value="Germany">Germany</option>
      </select>
    </div>
    <!-- TOS -->
    <div class="mb-3 pl-6">
      <input type="checkbox" class="w-4 h-4 float-left -ml-6 mt-1 rounded" />
      <label class="inline-block">Accept terms of service</label>
    </div>

    <button
      type="submit"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
      @click.prevent="setUser(nameInputValue, emailInputValue, ageInputValue)"
    >
      Submit
    </button>
  </form>
</template>

<script>
import { mapState } from 'pinia'
import useModalStore from '../stores/modal'

export default {
  name: 'RegistrationForm',
  props: ['nameInput', 'emailInput', 'ageInput', 'tab'],
  data() {
    return {}
  },
  computed: {
    ...mapState(useModalStore, ['setUser']),
    nameInputValue: {
      get() {
        return this.nameInput
      },
      set(newValue) {
        this.$emit('updateNameInput', newValue)
      }
    },
    emailInputValue: {
      get() {
        return this.emailInput
      },
      set(newValue) {
        this.$emit('updateEmailInput', newValue)
      }
    },
    ageInputValue: {
      get() {
        return this.ageInput
      },
      set(newValue) {
        this.$emit('updateAgeInput', newValue)
      }
    }
  },
  methods: {}
}
</script>

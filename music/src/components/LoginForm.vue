<template>
  <form>
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <input
        type="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        v-model="emailInputValue"
      />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <input
        type="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
        v-model="passwordInputValue"
      />
    </div>
    <button
      type="submit"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
    >
      Submit
    </button>
  </form>
</template>

<script>
export default {
  name: 'LoginForm',
  props: ['emailInput', 'passwordInput', 'tab'],
  data() {
    return {}
  },
  computed: {
    emailInputValue: {
      get() {
        return this.emailInput
      },
      set(newValue) {
        this.$emit('updateEmailInput', newValue)
      }
    },
    passwordInputValue: {
      get() {
        return this.passwordInput
      },
      set(newValue) {
        this.$emit('updateAgeInput', newValue)
      }
    }
  },
  methods: {}
}
</script>

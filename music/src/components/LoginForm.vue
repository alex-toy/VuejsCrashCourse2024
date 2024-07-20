<template>
  <VeeForm :validation-schema="loginSchema" @submit="login">
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <VeeField
        type="email"
        name="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        v-model="emailInput"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>

    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <vee-field name="password" :bails="false" v-slot="{ field, errors }">
        <input
          type="password"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Password"
          v-bind="field"
          v-model="passwordInput"
        />
        <div class="red-text-600" v-for="error in errors" :key="error">{{ error }}</div>
      </vee-field>
    </div>
    <button
      type="submit"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
    >
      Submit
    </button>
  </VeeForm>
</template>

<script>
import { ErrorMessage } from 'vee-validate'

export default {
  name: 'LoginForm',
  components: { ErrorMessage },
  props: ['tab'],
  data() {
    return {
      emailInput: '',
      passwordInput: '',
      loginSchema: {
        email: 'required|email',
        password: 'required'
      }
    }
  },
  methods: {
    login(values) {
      console.log(values)
    }
  }
}
</script>

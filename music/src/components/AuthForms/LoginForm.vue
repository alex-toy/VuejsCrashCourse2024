<template>
  <VeeForm :validation-schema="loginSchema" @submit="login">
    <div
      v-if="login_show_alert"
      :class="login_alert_variant"
      class="text-red text-center font-bold p-4 rounded mb-4"
    >
      {{ login_alert_message }}
    </div>

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
      :disabled="login_in_submission"
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
        password: 'required|min:3|max:9'
      },
      login_in_submission: false,
      login_show_alert: false,
      login_alert_variant: 'bg-blue-500',
      login_alert_message: 'Please wait! We are logging you in.'
    }
  },
  methods: {
    login(values) {
      console.log(values)
      this.login_show_alert = true
      this.login_in_submission = true
      this.login_alert_variant = 'bg-blue-500'
      this.login_alert_message = 'Please wait! Your account is being created.'

      this.login_alert_variant = 'bg-green-500'
      this.login_alert_message = 'Success! You are now logged in.'
    }
  }
}
</script>

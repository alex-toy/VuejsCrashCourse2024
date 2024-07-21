<template>
  <VeeForm :validation-schema="schema" @submit="register" :initial-values="userData">
    <div
      v-if="reg_show_alert"
      :class="reg_alert_variant"
      class="text-red text-center font-bold p-4 rounded mb-4"
    >
      {{ reg_alert_message }}
    </div>

    <div class="mb-3">
      <label class="inline-block mb-2">Name</label>
      <VeeField
        type="text"
        name="name"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        v-model="nameInput"
      />
      <ErrorMessage class="text-red-600" name="name" />
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
      <label class="inline-block mb-2">Age</label>
      <VeeField
        type="number"
        name="age"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        v-model="ageInput"
      />
      <ErrorMessage class="text-red-600" name="age" />
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

    <div class="mb-3">
      <label class="inline-block mb-2">Confirm Password</label>
      <VeeField
        type="confirm_password"
        name="confirmPassword"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Confirm Password"
      />
      <ErrorMessage class="text-red-600" name="confirmPassword" />
    </div>

    <div class="mb-3">
      <label class="inline-block mb-2">Country</label>
      <VeeField
        as="select"
        name="country"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      >
        <option value="USA">USA</option>
        <option value="Mexico">Mexico</option>
        <option value="Germany">Germany</option>
        <option value="Iran">Iran</option>
      </VeeField>
      <ErrorMessage class="text-red-600" name="country" />
    </div>

    <div class="mb-3">
      <label class="inline-block mb-2">Profession</label>
      <VeeField
        as="select"
        name="profession"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      >
        <option value="1">Software architect</option>
        <option value="2">Devops</option>
        <option value="3">Frontend developper</option>
        <option value="4">Backend developper</option>
      </VeeField>
      <ErrorMessage class="text-red-600" name="profession" />
    </div>

    <div class="mb-3 pl-6">
      <VeeField
        name="tos"
        value="1"
        type="checkbox"
        class="w-4 h-4 float-left -ml-6 mt-1 rounded"
      />
      <label class="inline-block">Accept terms of service</label>
      <ErrorMessage class="text-red-600" name="tos" />
    </div>

    <button
      type="submit"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
      :disabled="reg_in_submission"
    >
      Submit
    </button>
  </VeeForm>
</template>

<script>
import { ErrorMessage } from 'vee-validate'
import { mapActions } from 'pinia'
import useUserStore from '@/stores/user'

export default {
  name: 'RegistrationForm',
  components: { ErrorMessage },
  props: [],
  data() {
    return {
      nameInput: '',
      emailInput: '',
      passwordInput: '',
      ageInput: 0,
      tab: 'login',
      schema: {
        name: 'required|min:3|max:100|alpha_spaces',
        email: 'required|email',
        age: 'required|min_value:1|max_value:100',
        password: 'required|min:9|max:100|not_one_of:password',
        confirmPassword: 'password_mismatch:@password',
        country: 'required|country_excluded:Iran',
        profession: 'required',
        tos: 'tos_required'
      },
      userData: {
        country: 'USA',
        profession: '3'
      },
      reg_show_alert: false,
      reg_in_submission: false,
      reg_alert_variant: 'bg-blue-500',
      reg_alert_message: 'Please wait! Your account is being created.'
    }
  },
  methods: {
    ...mapActions(useUserStore, { createUser: 'register' }),
    async register(values) {
      this.setAccountCreationPending()

      try {
        await this.createUser(values)
      } catch (error) {
        this.mapActions
        this.setAccountCreationError()
        return
      }

      this.setAccountCreationSuccess()
    },
    setAccountCreationPending() {
      this.reg_show_alert = true
      this.reg_in_submission = true
      this.reg_alert_variant = 'bg-blue-500'
      this.reg_alert_message = 'Please wait! Your account is being created.'
    },
    setAccountCreationError() {
      this.reg_in_submission = false
      this.reg_alert_variant = 'bg-red-500'
      this.reg_alert_message = 'Error! Account creation failed.'
    },
    setAccountCreationSuccess() {
      this.reg_alert_variant = 'bg-green-500'
      this.reg_alert_message = 'Success! Your account has been created.'
      this.nameInput = ''
      this.emailInput = ''
      this.passwordInput = ''
      this.ageInput = 0
    }
  }
}
</script>

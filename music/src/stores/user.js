import { defineStore } from 'pinia'
import { auth, usersCollection } from '@/includes/firebase'

export default defineStore('user', {
  state: () => ({
    isLoggedIn: false
  }),
  actions: {
    async register(values) {
      await auth.createUserWithEmailAndPassword(this.emailInput, this.passwordInput)

      await usersCollection.add({
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country,
        profession: values.profession
      })

      this.isLoggedIn = true
    }
  }
})

import { defineStore } from 'pinia'
import { auth, usersCollection } from '@/includes/firebase'

export default defineStore('user', {
  state: () => ({
    isLoggedIn: false,
    userName: ''
  }),
  actions: {
    async register(values) {
      const userCredentials = await auth.createUserWithEmailAndPassword(
        values.email,
        values.password
      )

      await usersCollection.doc(userCredentials.user.uid).set({
        name: values.name,
        email: values.email,
        age: values.age,
        country: values.country,
        profession: values.profession
      })

      await userCredentials.user.updateProfile({
        displayName: values.name
      })

      this.isLoggedIn = true
      this.userName = values.name
    },
    async login(values) {
      console.log(values)
      // const response = await auth.signInWithEmailAndPassword(values.email, values.password)
      this.isLoggedIn = true
      // this.userName = response.user.displayName
      this.userName = "alex"
    },
    async logout() {
      await auth.signOut()

      this.isLoggedIn = false
      this.userName = ''
    }
  }
})

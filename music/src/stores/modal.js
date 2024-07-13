import { defineStore } from 'pinia'

export default defineStore('modal', {
  state: () => ({
    isOpen: false,
    user: {
      name: 'alex',
      email: 'alex@test.fr',
      age: 25
    }
  }),
  getters: {
    hiddenClass(state) {
      return state.isOpen ? '' : 'hidden'
    }
  },
  actions: {
    setUser(name, email, age) {
      this.user.name = name
      this.user.email = email
      this.user.age = age
    },
    resetUser() {
      this.user.name = 'name'
      this.user.email = 'email'
      this.user.age = 0
    }
  }
})

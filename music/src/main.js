import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './includes/validation'
import Icon from './directives/icon'
import IconThird from './directives/icon-third'
import { auth } from './includes/firebase'

import './assets/base.css'
import './assets/main.css'

let app

auth.onAuthStateChanged(() => {
  if (app) return

  app = createApp(App)

  app.use(createPinia())
  app.use(router)
  app.use(VeeValidatePlugin, {})

  app.directive('icon', Icon)
  app.directive('icon-third', IconThird)

  app.mount('#app')
})

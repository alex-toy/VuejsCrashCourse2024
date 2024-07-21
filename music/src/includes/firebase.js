import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAuu6ARrF_ZdoRNG3OoKfmksOoqGr3A5VI',
  authDomain: 'vueauthentication-a9494.firebaseapp.com',
  projectId: 'vueauthentication-a9494',
  storageBucket: 'vueauthentication-a9494.appspot.com',
  appId: '1:799967361970:web:74af1e311cb052b5d9c2ab',
  measurementId: 'G-EB7WCHKZPV'
}

firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const db = firebase.firestore()

const usersCollection = db.collection('users')

export { auth, usersCollection }

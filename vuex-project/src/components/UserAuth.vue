<template>
    <button @click="login">Login</button>
    <button @click="logout">Logout</button>
    <p>{{ isLoggedIn ? 'Logged in' : 'Logged out'  }}</p>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    data() {
        return {
        }
    },
    methods : {
        ...mapActions(['login', 'logout'])
    },
    computed: {
        ...mapGetters(['isLoggedIn'])
    }
}
</script>
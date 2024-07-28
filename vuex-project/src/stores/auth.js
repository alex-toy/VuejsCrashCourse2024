import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            isLoggedIn : false
        };
    },
    mutations: {
        setAuth(state, payload) {
            state.isLoggedIn = payload.isLoggedIn;
        }
    }, 
    actions : {
        login(context) {
            context.commit('setAuth', {isLoggedIn : true})
        },
        logout(context) {
            context.commit('setAuth', {isLoggedIn : false})
        },
    },
    getters: {
    }
})
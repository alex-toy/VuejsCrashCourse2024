export default {
    state() {
        return {
            isLoggedIn: false, 
        };
    },
    mutations: {
        login(state) {
          state.isLoggedIn = true;
        },
        logout(state) {
          state.isLoggedIn = false;
        },
    },
    actions : {
        login(context) {
            context.commit('login')
        },
        logout(context) {
            context.commit('logout')
        },
    },
    getters: {
        isLoggedIn(state) {
            return state.isLoggedIn;
        },
    }
}
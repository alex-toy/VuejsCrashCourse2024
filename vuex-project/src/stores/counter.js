export default {
    namespaced: true,
    state() {
        return {
            counter : 0
        };
    },
    mutations: {
        increment(state) {
            state.counter++;
        },
        increase(state, payload) {
            state.counter += payload.value;
        },
    },
    actions : {
        increment(context) {
            setTimeout(function() {
                context.commit('increment')
            }, 2000);
        },
        increase(context, payload) {
            setTimeout(function() {
                context.commit('increase', payload)
            }, 2000);
        },
    },
    getters: {
        simpleCounter(state) {
            return state.counter;
        },
        doubleCounter(state) {
            return state.counter * 2;
        },
        normalizedCounter(_, getters) {
            return getters.doubleCounter < 100 ? getters.doubleCounter : 100;
        },
    }
}
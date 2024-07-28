import { createStore } from 'vuex';

import counter from '@/stores/counter'
import auth from '@/stores/auth'

const store = createStore({
    modules : {
        counter,
        auth,
    }
})

export default store;
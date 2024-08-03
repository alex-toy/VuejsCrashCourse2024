import { createStore } from 'vuex';

import product from '@/stores/product'
import cart from '@/stores/cart'
import auth from '@/stores/auth'

const stores = createStore({
    modules : {
        product,
        cart,
        auth,
    }
})

export default stores;
export default {
    state() {
        return {
            items: [], 
            total: 0, 
            qty: 0,
        };
    },
    mutations: {
        incrementQuantity(state) {
            state.qty++;
        },
        addItem(state, newItem) {
            state.items.push(newItem);
        },
        updateTotal(state, price) {
            state.total += price;
        }
    },
    actions : {
        addProductToCart(context, productData) {
          const products = context.rootGetters.products;
          const product = products.find(p => p.id === productData.id)
          const productInCartIndex = this.state.cart.items.findIndex(ci => ci.productId === productData.id);
    
          if (productInCartIndex >= 0) {
            this.state.cart.items[productInCartIndex].qty++;
          } else {
            const newItem = {
              productId: product.id,
              title: product.title,
              image: product.image,
              price: product.price,
              qty: 1,
            };
            context.commit('addItem', newItem);
          }
          context.commit('incrementQuantity');
          context.commit('updateTotal', product.price);
        },
    
        removeProductFromCart(context, prodId) {
          const productInCartIndex = this.state.cart.items.findIndex(cartItem => cartItem.productId === prodId);
          const prodData = this.state.cart.items[productInCartIndex];
          this.state.cart.items.splice(productInCartIndex, 1);
          this.state.cart.qty -= prodData.qty;
          this.state.cart.total -= prodData.price * prodData.qty;
        },
    },
    getters: {
        cartQuantity(state) {
            return state.qty;
        },
        cart(state) {
            return state;
        },
    }
}
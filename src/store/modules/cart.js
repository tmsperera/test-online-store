export default {
  namespaced: true,

  state: () => ({
    products: [],
  }),

  getters: {
    totalProducts({ products }) {
      return products.length;
    },
  },

  mutations: {
    addProduct(state, product) {
      state.products = [...state.products, product];
    },

    removeProduct(state, removingProduct) {
      state.products = [
        ...state.products.filter(
          (product) => product.id !== removingProduct.id
        ),
      ];
    },
  },
};

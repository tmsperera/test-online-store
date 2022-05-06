<template>
  <div>
    <button type="button" @click="openCart" class="bg-red-300">
      Cart ({{ productsCount }})
    </button>

    <CartModal :is-showing="isShowingCart" @close="closeCart" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CartModal from "@/components/CartModal";

export default {
  name: "CartWidget",

  components: {
    CartModal,
  },

  data() {
    return {
      isShowingCart: false,
    };
  },

  computed: {
    ...mapGetters("cart", ["totalProducts"]),

    productsCount() {
      return this.totalProducts;
    },
  },

  methods: {
    openCart() {
      this.isShowingCart = true;
    },

    closeCart() {
      this.isShowingCart = false;
    },
  },
};
</script>

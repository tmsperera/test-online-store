<template>
  <BaseModal :is-showing="isShowing" @close="close">
    <ul
      v-if="hasItems"
      role="list"
      class="divide-y divide-gray-200 px-4 sm:px-6 lg:px-8"
    >
      <CartProduct
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </ul>

    <p v-if="!hasItems">Cart is empty</p>
  </BaseModal>
</template>

<script>
import BaseModal from "@/components/BaseModal";
import CartProduct from "@/components/CartProduct";
import { mapState } from "vuex";

export default {
  name: "CartModal",

  components: {
    BaseModal,
    CartProduct,
  },

  props: {
    isShowing: {
      type: Boolean,
      required: true,
    },
  },

  computed: {
    ...mapState("cart", ["products"]),

    hasItems() {
      return !!this.products.length;
    },
  },

  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

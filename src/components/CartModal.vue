<template>
  <BaseModal :is-showing="isShowing" @close="close" class="lg:max-w-3xl">
    <h1
      class="text-2xl font-extrabold align-middle text-center tracking-tight text-gray-900"
    >
      Shopping Cart
    </h1>

    <div v-if="hasItems">
      <ul
        v-if="hasItems"
        role="list"
        class="mt-6 border-b divide-y divide-gray-200"
      >
        <CartProduct
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </ul>

      <div class="mt-6">
        <dl class="space-y-4">
          <div class="flex items-center justify-between">
            <dt class="text-base font-medium text-gray-900">Order total</dt>
            <dd class="ml-4 text-base font-medium text-gray-900">
              {{ orderTotal }}
            </dd>
          </div>
        </dl>

        <p class="mt-1 text-sm text-gray-500">
          Shipping and taxes will be calculated at checkout.
        </p>
      </div>

      <div class="mt-6 flex justify-end">
        <button
          type="submit"
          class="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
        >
          Continue to Payment
        </button>
      </div>
    </div>

    <p v-if="!hasItems" class="py-6 text-gray-500 text-center">Cart is empty</p>
  </BaseModal>
</template>

<script>
import BaseModal from "@/components/BaseModal";
import CartProduct from "@/components/CartProduct";
import { mapGetters, mapState } from "vuex";

export default {
  name: "CartModal",

  emits: ["close"],

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
    ...mapGetters("cart", ["totalAmount"]),

    hasItems() {
      return !!this.products.length;
    },

    orderTotal() {
      return `${this.currencySymbol}${this.totalAmount}`;
    },

    currencySymbol() {
      return this.products.length ? this.products[0].currencySymbol : "";
    },
  },

  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

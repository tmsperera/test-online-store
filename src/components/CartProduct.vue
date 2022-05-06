<template>
  <li class="flex py-6">
    <div class="flex-shrink-0">
      <img
        :src="product.imageSrc"
        :alt="product.imageAlt"
        class="w-24 h-24 rounded-md object-center object-cover sm:w-32 sm:h-32"
      />
    </div>

    <div class="ml-4 flex-1 flex flex-col sm:ml-6">
      <div>
        <div class="flex justify-between">
          <h4 class="text-sm">
            <a
              :href="product.href"
              class="font-medium text-gray-700 hover:text-gray-800"
            >
              {{ product.title }}
            </a>
          </h4>

          <p class="ml-4 text-sm font-medium text-gray-900">
            {{ priceTag }}
          </p>
        </div>
      </div>

      <div class="mt-4 flex-1 flex items-end justify-between">
        <span></span>

        <div class="ml-4">
          <button
            type="button"
            @click="removeFromCart"
            class="text-sm font-medium text-indigo-600 hover:text-indigo-500"
          >
            <span>Remove</span>
          </button>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  name: "CartProduct",

  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  computed: {
    priceTag() {
      return this.product.currencySymbol + this.product.price;
    },
  },

  methods: {
    ...mapMutations("cart", ["removeProduct"]),

    removeFromCart() {
      this.removeProduct(this.product);
    },
  },
};
</script>

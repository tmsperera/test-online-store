<template>
  <div
    class="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden"
  >
    <div class="aspect-w-3 aspect-h-4 bg-gray-200 sm:aspect-none sm:h-96">
      <img
        :src="product.imageSrc"
        :alt="product.imageAlt"
        class="w-full h-full object-center object-cover sm:w-full sm:h-full"
      />
    </div>

    <div class="flex-1 p-4 space-y-2 flex flex-col">
      <h3 class="text-sm font-medium text-gray-900">
        {{ product.title }}
      </h3>

      <p class="text-sm text-gray-500">{{ product.description }}</p>

      <div class="flex-1 flex flex-col justify-end">
        <p class="text-sm italic text-gray-500">{{ product.options }}</p>

        <p class="text-base font-medium text-gray-900">
          {{ priceTag }}
          <span class="text-sm font-medium text-gray-500 line-through">{{
            oldPriceTag
          }}</span>
        </p>

        <BaseButton
          :disabled="isInCart"
          class="mt-3 uppercase"
          @click="addToCart"
        >
          {{ buttonText }}
        </BaseButton>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import BaseButton from "@/components/BaseButton";

export default {
  name: "ShowcaseProduct",

  components: { BaseButton },

  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  computed: {
    ...mapState("cart", ["products"]),

    isInCart() {
      return !!this.products.find((product) => product.id === this.product.id);
    },

    buttonText() {
      return this.isInCart ? "In Cart" : "Add to Cart";
    },

    priceTag() {
      return this.product.currencySymbol + this.product.price;
    },

    oldPriceTag() {
      return this.product.currencySymbol + this.product.oldPrice;
    },
  },

  methods: {
    ...mapMutations("cart", ["addProduct"]),

    addToCart() {
      this.addProduct(this.product);
    },
  },
};
</script>

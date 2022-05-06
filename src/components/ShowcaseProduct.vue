<template>
  <div>
    <img
      :src="product.imageSrc"
      :alt="product.imageAlt"
      class="w-full h-full object-center object-cover lg:w-full lg:h-full"
    />

    <h3>{{ product.title }}</h3>

    <p>{{ product.price }}</p>

    <button
      :disabled="isInCart"
      type="button"
      class="uppercase"
      @click="addToCart"
    >
      {{ buttonText }}
    </button>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "ShowcaseProduct",

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
      return this.isInCart ? "Added to the Cart" : "Add to Cart";
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

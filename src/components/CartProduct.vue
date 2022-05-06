<template>
  <li class="py-8 flex text-sm sm:items-center">
    <div class="flex">
      <img
        :src="product.imageSrc"
        :alt="product.imageAlt"
        class="w-20 h-20 object-center object-cover"
      />

      <div class="flex flex-col justify-between">
        <h3>{{ product.title }}</h3>

        <p>{{ product.price }}</p>

        <button type="button" class="uppercase" @click="removeFromCart">
          Remove
        </button>
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

  methods: {
    ...mapMutations("cart", ["removeProduct"]),

    removeFromCart() {
      this.removeProduct(this.product);
    },
  },
};
</script>

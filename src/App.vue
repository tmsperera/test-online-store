<template>
  <div class="bg-white">
    <div
      class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
    >
      <div class="flex justify-between items-center">
        <h2
          class="text-2xl align-middle font-extrabold tracking-tight text-gray-900"
        >
          Best Sellers
        </h2>

        <CartWidget />
      </div>

      <div
        class="mt-6 grid grid-cols-1 gap-y-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-3 lg:gap-x-8"
      >
        <ShowcaseProduct
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ShowcaseProduct from "@/components/ShowcaseProduct";
import CartWidget from "@/components/CartWidget";
import products from "@/database/products";

export default {
  name: "App",

  components: {
    ShowcaseProduct,
    CartWidget,
  },

  data() {
    return {
      products: products,
    };
  },
};
</script>

<template>
  <CartWidget />

  <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">
    Best Sellers
  </h2>

  <div
    class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
  >
    <ShowcaseProduct
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ShowcaseProduct from "@/components/ShowcaseProduct";
import CartWidget from "@/components/CartWidget";

export default {
  name: "App",

  components: {
    ShowcaseProduct,
    CartWidget,
  },

  data() {
    return {
      products: [
        {
          id: 1,
          title: "Product 1",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        {
          id: 2,
          title: "Product 2",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
        {
          id: 3,
          title: "Product 3",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
          imageAlt: "Front of men's Basic Tee in black.",
          price: "$35",
          color: "Black",
        },
      ],
    };
  },
};
</script>

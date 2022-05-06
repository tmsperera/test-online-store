<template>
  <Teleport to="body">
    <div
      @click.self="close"
      v-show="isShowing"
      class="fixed inset-0 bg-gray-600 bg-opacity-75 overflow-auto shadow-xl"
    >
      <div
        :class="$attrs.class"
        class="relative mt-20 flex flex-col max-w-2xl mx-auto rounded-lg py-10 px-4 sm:py-10 sm:px-8 lg:max-w-7xl lg:px-8 bg-white shadow-2xl"
      >
        <button
          type="button"
          @click="close"
          class="absolute right-4 top-3 inline-block text-gray-500 hover:text-gray-800 p-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-inherit"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div>
          <slot></slot>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
export default {
  name: "BaseModal",

  emits: ["close"],

  props: {
    isShowing: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    close() {
      this.$emit("close");
    },
  },

  data() {
    return {
      escapeHandler: (event) => {
        if (event.key === "Escape" && this.isShowing) {
          this.close();
        }
      },
    };
  },

  created() {
    document.addEventListener("keydown", this.escapeHandler);
  },

  beforeUnmount() {
    document.removeEventListener("keydown", this.escapeHandler);
  },
};
</script>

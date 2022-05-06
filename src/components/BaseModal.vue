<template>
  <div
    @click.self="close"
    v-show="isShowing"
    class="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity"
  >
    <div
      class="mt-20 flex flex-col max-w-2xl mx-auto py-10 px-4 sm:py-6 sm:px-6 lg:max-w-7xl lg:px-8 bg-white shadow-2xl"
    >
      <button type="button" @click="close" class="bg-blue-300">Close</button>

      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseModal",

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

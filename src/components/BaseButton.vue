<template>
  <button
    type="button"
    class="inline-block items-center px-4 py-2 border text-sm font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2"
  >
    <slot></slot>
  </button>
</template>

<script>
const THEMES = {
  indigo: [
    "border-transparent",
    "bg-indigo-600",
    "hover:bg-indigo-700",
    "focus:ring-indigo-500",
    "text-white",
  ],
  white: [
    "border-gray-300",
    "text-gray-700",
    "bg-white",
    "hover:bg-gray-50",
    "focus:ring-indigo-500",
  ],
};

export default {
  name: "BaseButton",

  props: {
    theme: {
      type: String,
      default: "indigo",
    },
  },

  computed: {
    buttonClasses() {
      return THEMES[this.theme];
    },
  },
};
</script>

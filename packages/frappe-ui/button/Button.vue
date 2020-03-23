<template>
  <button
    class="px-4 py-2 border rounded-md inline-flex justify-center items-center focus:outline-none leading-5 font-medium text-sm "
    :class="{
      'opacity-50 cursor-not-allowed pointer-events-none': disabled,
      'bg-blue-500 border-transparent hover:bg-blue-400 text-white focus:shadow-outline-blue focus:border-blue-700':
        type === 'primary',
      'bg-white border-gray-400 hover:text-gray-800 text-gray-900 focus:shadow-outline-blue focus:border-blue-300':
        type === 'secondary',
      'bg-red-500 border-transparent hover:bg-red-400 text-white focus:shadow-outline-red focus:border-red-700':
        type === 'danger'
    }"
    v-bind="$attrs"
    v-on="$listeners"
    :disabled="disabled"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'Button',
  props: {
    type: {
      type: String,
      default: 'secondary'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

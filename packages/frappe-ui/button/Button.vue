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
    <FeatherIcon v-if="iconLeft" :name="iconLeft" class="mr-2 w-4 h-4" />
    <slot></slot>
    <FeatherIcon v-if="iconRight" :name="iconRight" class="ml-2 w-4 h-4" />
  </button>
</template>
<script>
import FeatherIcon from '../FeatherIcon';

export default {
  name: 'Button',
  components: {
    FeatherIcon
  },
  props: {
    type: {
      type: String,
      default: 'secondary'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    iconLeft: {
      type: String,
      default: null
    },
    iconRight: {
      type: String,
      default: null
    }
  }
};
</script>

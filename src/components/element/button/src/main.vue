<template>
  <button class="el-button" :class="[`el-button--${type}`]">
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: 'ElButton',

  props: {
    // 类型
    type: {
      type: String,
      default: 'default',
      validator: (val) => ['default', 'primary', 'success', 'warning', 'danger', 'info', 'text'].includes(val),
    },
  },
};
</script>

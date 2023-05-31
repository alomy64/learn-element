<template>
  <button
    class="el-button"
    :class="[`el-button--${type}`, { 'is-plain': plain, 'is-round': round, 'is-circle': circle }]"
  >
    <i :class="icon" v-if="icon"></i>
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
    // 是否朴素按钮
    plain: Boolean,
    // 是否圆角按钮
    round: Boolean,
    // 是否圆形按钮
    circle: Boolean,
    // 图标类名
    icon: String,
  },
};
</script>

<template>
  <button
    class="el-button"
    :autofocus="autofocus"
    :class="[
      `el-button--${type}`,
      { 'is-plain': plain, 'is-round': round, 'is-circle': circle, 'is-disabled': disabled },
    ]"
  >
    <!-- 加载中图标和其他图标只能显示一种，加载中图标优先 -->
    <i class="el-icon-loading" v-if="loading"></i>
    <i :class="icon" v-if="icon && !loading"></i>

    <span v-if="$slots.default">
      <slot></slot>
    </span>
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
    // 是否禁用状态
    disabled: Boolean,
    // 是否默认聚焦 ==> 对应 class 中 :focus
    autofocus: Boolean,
    // 是否加载中状态
    loading: Boolean,
  },
};
</script>

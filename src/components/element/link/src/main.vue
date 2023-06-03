<template>
  <a
    @click="handleClick"
    :href="!disabled && href"
    :class="[
      'el-link',
      `el-link--${type}`,
      { 'is-underline': underline && !disabled, 'is-disabled': disabled },
    ]"
  >
    <!-- 图标 -->
    <i :class="icon" v-if="icon"></i>

    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </a>
</template>

<script>
export default {
  name: 'ElLink',

  props: {
    // 类型
    type: {
      type: String,
      default: 'default',
      validator: (val) => ['default', 'primary', 'success', 'warning', 'danger', 'info'].includes(val),
    },
    // 是否下划线
    underline: {
      type: Boolean,
      default: true,
    },
    // 是否禁用状态
    disabled: Boolean,
    // 原生 href 属性
    href: String,
    // 图标类名
    icon: String,
  },

  methods: {
    // 点击事件
    handleClick(event) {
      if (!this.disabled && !this.href) {
        this.$emit('click', event);
      }
    },
  },
};
</script>

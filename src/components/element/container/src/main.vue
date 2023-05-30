<template>
  <div :class="['el-container', { 'is-vertical': isVertical }]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElContainer',

  props: {
    // 子元素的排列方向
    direction: {
      type: String,
      validator: (val) => ['horizontal', 'vertical'].includes(val),
    },
  },

  computed: {
    // 是否为竖向排列
    isVertical() {
      const { direction, $slots } = this;

      const directionTypes = ['vertical', 'horizontal'];
      if (directionTypes.includes(direction)) {
        return direction === 'vertical';
      }

      const tags = ['el-header', 'el-footer'];
      return $slots && $slots.default
        ? $slots.default.some((vnode) => {
          const tag = vnode.componentOptions && vnode.componentOptions.tag;

          return tags.includes(tag);
        })
        : false;
    },
  },
};
</script>

<style lang="scss"></style>

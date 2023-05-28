<template>
  <div class="el-row" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElRow',
  props: {
    // 栅格间隔
    gutter: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    /**
     * 样式
     * 使用 gutter 间隔时，去除 Row 左右两边的间隔
     */
    style() {
      const style = {};
      if (this.gutter) {
        style.marginLeft = `${-this.gutter / 2}px`;
        style.marginRight = style.marginLeft;
      }

      return style;
    },
  },
};
</script>

<style lang="scss" scoped>
.el-row {
  margin-bottom: 20px;
  &::before,
  &::after {
    display: block;
    content: "";
  }
  &::after {
    clear: both;
  }
}
</style>

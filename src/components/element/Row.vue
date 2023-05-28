<template>
  <div
    :class="[
      'el-row',
      { 'el-row--flex': type === 'flex' },
      justify !== 'start' && `is-justify-${justify}`,
      align !== 'top' && `is-align-${align}`,
    ]"
    :style="style"
  >
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
    // 布局模式，可选 flex，现代浏览器下有效
    type: String,
    // flex 布局下的水平排列方式
    justify: {
      type: String,
      default: 'start',
      validator: (val) => ['start', 'end', 'center', 'space-around', 'space-between'].includes(val),
    },
    // flex 布局下的垂直排列方式
    align: {
      type: String,
      default: 'top',
      validator: (val) => ['top', 'middle', 'bottom'].includes(val),
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

  &.el-row--flex {
    display: flex;

    &::before,
    &::after {
      display: none;
    }

    &.is-justify-end {
      justify-content: flex-end;
    }

    &.is-justify-center {
      justify-content: center;
    }

    &.is-justify-space-between {
      justify-content: space-between;
    }

    &.is-justify-space-around {
      justify-content: space-around;
    }

    &.is-align-middle {
      align-items: center;
    }

    &.is-align-bottom {
      align-items: flex-end;
    }
  }
}
</style>

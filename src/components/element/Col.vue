<template>
  <div :class="['el-col', classList]" :style="style">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElCol',
  props: {
    // 栅格占据的列数
    span: {
      type: Number,
      default: 24,
    },
    // 栅格左侧的间隔格数
    offset: {
      type: Number,
      default: 0,
    },
    // 栅格向右移动格数
    push: {
      type: Number,
      default: 0,
    },
    // 栅格向左移动格数
    pull: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    // 栅格间隔
    gutter() {
      let parent = this.$parent;
      while (this.$parent && this.$parent.$options.name !== 'ElRow') {
        parent = this.$parent;
      }

      return parent ? parent.gutter : 0;
    },
    // 样式
    style() {
      const style = {};
      if (this.gutter) {
        style.paddingLeft = `${this.gutter / 2}px`;
        style.paddingRight = style.paddingLeft;
      }

      return style;
    },
    // class 列表
    classList() {
      const classList = [];
      ['span', 'offset', 'push', 'pull'].forEach((prop) => {
        if (this[prop]) {
          classList.push(prop === 'span' ? `el-col-${this[prop]}` : `el-col-${prop}-${this[prop]}`);
        }
      });

      return classList;
    },
  },
};
</script>

<style lang="scss" scoped>
.el-col {
  float: left;
  box-sizing: border-box;
}

@for $i from 0 through 24 {
  .el-col-#{$i} {
    width: $i / 24 * 100%;
  }
  .el-col-offset-#{$i} {
    margin-left: $i / 24 * 100%;
  }
  .el-col-push-#{$i} {
    position: relative;
    left: $i / 24 * 100%;
  }
  .el-col-pull-#{$i} {
    position: relative;
    right: $i / 24 * 100%;
  }
}
</style>

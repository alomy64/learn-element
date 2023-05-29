export default {
  render(h) {
    return h(
      this.tag,
      {
        class: [
          'el-row',
          { 'el-row--flex': this.type === 'flex' },
          this.justify !== 'start' && `is-justify-${this.justify}`,
          this.align !== 'top' && `is-align-${this.align}`,
        ],
        style: this.style,
      },
      this.$slots.default,
    );
  },
  name: 'ElRow',
  props: {
    // 自定义元素标签
    tag: {
      type: String,
      default: 'div',
    },
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

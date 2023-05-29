export default {
  render(h) {
    return h(
      this.tag,
      {
        class: ['el-col', this.classList],
        style: this.style,
      },
      this.$slots.default,
    );
  },
  name: 'ElCol',
  props: {
    // 自定义元素标签
    tag: {
      type: String,
      default: 'div',
    },
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
    // < 768px 响应式栅格数或者栅格属性对象
    xs: [Number, Object],
    // >= 768px 响应式栅格数或者栅格属性对象
    sm: [Number, Object],
    // >=992px 响应式栅格数或者栅格属性对象
    md: [Number, Object],
    // >= 1200px 响应式栅格数或者栅格属性对象
    lg: [Number, Object],
    // >= 1920px 响应式栅格数或者栅格属性对象
    xl: [Number, Object],
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

      ['xs', 'sm', 'md', 'lg', 'xl'].forEach((size) => {
        if (typeof this[size] === 'number') {
          classList.push(`el-col-${size}-${this[size]}`);
        } else if (typeof this[size] === 'object') {
          const props = this[size];
          Object.keys(props).forEach((prop) => {
            classList.push(
              prop === 'span'
                ? `el-col-${size}-${props[prop]}`
                : `el-col-${size}-${prop}-${props[prop]}`,
            );
          });
        }
      });

      return classList;
    },
  },
};

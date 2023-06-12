<!-- radio-group 单选框 -->
<template>
  <!-- component 用于渲染动态组件或元素
    is: 要渲染的实际组件, 既可以是 HTML 标签名也可以是组件的注册名
   -->
  <component :is="_elTag" class="el-radio-group" role="radiogroup" @keydown="handleKeydown">
    <slot></slot>
  </component>
</template>
<script>
/**
 * keyCode 上下左右
 * 冻结该对象, 可以防止扩展，并使现有的属性不可写入和不可配置
 */
const keyCode = Object.freeze({
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
});

export default {
  name: 'ElRadioGroup',

  componentName: 'ElRadioGroup',

  props: {
    // 绑定值
    value: [String, Number, Boolean],
    // 是否禁用
    disabled: Boolean,
    // 单选框组尺寸, 仅对按钮形式的 Radio 或带有边框的 Radio 有效
    size: {
      type: String,
      validator: (val) => ['medium', 'small', 'mini'].includes(val),
    },
    // 按钮形式的 Radio 激活时的文本颜色
    textColor: {
      type: String,
      default: '#ffffff',
    },
    // 按钮形式的 Radio 激活时的填充色和边框色
    fill: {
      type: String,
      default: '#409EFF',
    },
  },

  created() {
    // 监听 handleChange 事件, 并接收到传递的绑定值 model
    this.$on('handleChange', (value) => {
      // 向父组件触发 change 事件, 并传递绑定值 model
      this.$emit('change', value);
    });
  },

  mounted() {
    // 找到此单选框组中所有的原生单选框
    const radios = this.$el.querySelectorAll('[type=radio]');
    // 找到此单选框组中 role 为 radio 的第一个 label (el-radio)
    const firstLabel = this.$el.querySelectorAll('[role=radio]')[0];
    // 查找是否有默认选中的单选框, 有 => true 无 => false
    const hasDefaultChecked = [].some.call(radios, (radio) => radio.checked);

    // 没有默认选中的单选框, 并且有第一个的话, 那便可以使用 Tab 导航选中第一个
    if (!hasDefaultChecked && firstLabel) firstLabel.tabIndex = 0;
  },

  computed: {
    // 要渲染的组件名
    _elTag() {
      // ??? tag 未曾有值, 不知其意何在
      let tag = this.$vnode.data?.tag;

      if (!tag || tag === 'component') tag = 'div';

      return tag;
    },
    // 尺寸
    radioGroupSize() {
      return this.size;
    },
  },

  methods: {
    // 左右上下按键, 可以在单选框组内切换不同选项
    handleKeydown(e) {
      const { target } = e;
      const className = target.nodeName === 'INPUT' ? '[type=radio]' : '[role=radio]';
      const radios = this.$el.querySelectorAll(className);
      const { length } = radios;
      const index = [].indexOf.call(radios, target);
      const roleRadius = this.$el.querySelectorAll('[role=radio]');

      // 根据 keyCode 区分按键是 左|上 还是 右|下, 并判断是否为第一项或最后一项
      switch (e.keyCode) {
        // 左|上
        case keyCode.LEFT:
        case keyCode.UP:
          if (index === 0) {
            /**
             * 防止选中此单选框组之前的其他单选框
             * ??? 源码此两行放在 if 之外, 不知意欲何为
             */
            e.stopPropagation();
            e.preventDefault();

            roleRadius[length - 1].click();
            roleRadius[length - 1].focus();
          } else {
            roleRadius[index - 1].click();
            roleRadius[index - 1].focus();
          }
          break;

        // 右|下
        case keyCode.RIGHT:
        case keyCode.DOWN:
          if (index === length - 1) {
            // 防止选中此单选框组之后的其他单选框
            e.stopPropagation();
            e.preventDefault();

            roleRadius[0].click();
            roleRadius[0].focus();
          } else {
            roleRadius[index + 1].click();
            roleRadius[index + 1].focus();
          }
          break;

        default:
          break;
      }
    },
  },
};
</script>

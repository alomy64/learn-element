<!-- radio-button 单选按钮
  Tip: 请与单选框组 el-radio-group 结合使用
 -->
<template>
  <!-- label
    class: [尺寸, {选中, 禁用, 聚焦}]
    aria-checked: 单选框组的 v-model 绑定的变量和 props 中的 label 内容一致时选中（无障碍）
    aria-disabled: props 中的 disable 为 true 时禁用 (无障碍) 或其他情况下禁用, 详见 isDisabled
    tabindex: 根据 tabIndex 判断元素是否可以聚焦 以及 参与顺序键盘导航
    @keydown:
      阻止空格键按下事件继续传播, 且阻止默认行为
      若单选按钮为禁用状态, value 值不变; 否则即为选中, value 与 label 相同
   -->
  <label
    class="el-radio-button"
    :class="[
      size ? `el-radio-button--${size}` : '',
      {
        'is-active': value === label,
        'is-disabled': isDisabled,
        'is-focus': focus,
      },
    ]"
    role="radio"
    :aria-checked="value === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="value = isDisabled ? value : label"
  >
    <!-- 默认单选框
      name: 多个相同 name 的单选框为一组
      v-model: value 和 input 的结合
      disabled: props 中的 disable 为 true 时禁用或其他情况下禁用, 详见 isDisabled
      tabindex: 元素可聚焦, 但不能通过键盘导航来访问到该元素
      @focus: 聚焦时，即选中时，focus 为 true
      @blur: 失去焦点时，focus 为 false
      @change: 响应变化，向父组件传递 value 的值
     -->
    <input
      type="radio"
      class="el-radio-button__orig-radio"
      :name="name"
      :value="label"
      v-model="value"
      :disabled="isDisabled"
      autocomplete="off"
      tabindex="-1"
      @focus="focus = true"
      @blur="focus = false"
      @change="handleChange"
    />

    <!-- 内容
      @keydown.stop: 阻止键盘按下事件继续传播
      Tip: 二者不可共存，若如此，则只显示插槽内容
     -->
    <span
      class="el-radio-button__inner"
      :style="value === label ? activeStyle : null"
      @keydown.stop
    >
      <!-- 若有默认插槽，则显示插槽内容 -->
      <slot></slot>
      <!-- if: 若无默认插槽，则显示 props 的 label  -->
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
import Emitter from '@/mixins/element/emitter';

export default {
  name: 'ElRadioButton',

  mixins: [Emitter],

  props: {
    // Radio 的 value
    label: [String, Number],
    // 原生 name 属性
    name: String,
    // 是否禁用
    disabled: Boolean,
  },

  data() {
    return {
      // 是否聚焦
      focus: false,
    };
  },

  computed: {
    // 若 父组件/祖先组件 为单选框组, 则返回此单选框组, 否则返回 false
    _radioGroup() {
      let parent = this.$parent;

      while (parent) {
        if (parent.$options.componentName !== 'ElRadioGroup') {
          parent = parent.$parent;
        } else {
          return parent;
        }
      }

      return false;
    },
    // v-model 绑定
    value: {
      /**
       * 获取绑定的值
       * @return {*} 绑定的值 单选框组的 value
       */
      get() {
        return this._radioGroup.value;
      },
      /**
       * 设置绑定的值
       * @param {*} val 要设置的新值
       */
      set(value) {
        this._radioGroup.$emit('input', value);
      },
    },
    /**
     * 是否禁用
     * @return {boolean} 禁用 => true 不禁用 => false
     */
    isDisabled() {
      return this.disabled || this._radioGroup.disabled;
    },
    /**
     * 尺寸
     * 由于自身不接收尺寸, 故使用单选框组的尺寸
     * @return {string} 单选按钮尺寸, 即单选框组尺寸
     */
    size() {
      return this._radioGroup.radioGroupSize;
    },
    /**
     * 表示元素是否可以聚焦, 以及它 是否/在何处 参与顺序键盘导航 (通常使用 Tab 键)
     * -1: 可聚焦, 但是不能通过键盘导航来访问到该元素
     *  0: 可聚焦, 并且可以通过键盘导航来聚焦到该元素
     */
    tabIndex() {
      /**
       * 1.若单选按钮禁用, 则不能键盘导航
       * 2.若是单选框组, 且非选中此单选按钮, 也不能键盘导航。即可使用 Tab 导航到被选中的单选按钮
       */
      return this.isDisabled || (this._radioGroup && this.value !== this.label) ? -1 : 0;
    },
    /**
     * 选中的按钮样式
     * @return 字体颜色 边框颜色 背景颜色 投影
     */
    activeStyle() {
      const { textColor, fill } = this._radioGroup;

      return {
        color: textColor || '',
        borderColor: fill || '',
        backgroundColor: fill || '',
        boxShadow: fill ? `-1px 0 0 0 ${fill}` : '',
      };
    },
  },

  methods: {
    // change 事件
    handleChange() {
      // 使用 $nextTick 确保传给父组件的值为最新值
      this.$nextTick(() => {
        /**
         * 向上找到 ElRadioGroup 组件
         * ElRadioGroup 组件会通过 $emit 触发事件 handleChange, 并将绑定值 value 一并传递
         * 可在 ElRadioGroup 组件中通过 $on 监听此事件, 并接收参数
         */
        this.dispatch('ElRadioGroup', 'handleChange', this.value);
      });
    },
  },
};
</script>

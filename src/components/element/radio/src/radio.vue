<!-- Radio 单选框 -->
<template>
  <!-- label
    class: [尺寸, {选中, 禁用, 聚焦, 边框}]
    aria-checked: v-model 绑定的变量和 props 中的 label 内容一致时选中（无障碍）
    aria-disabled: props 中的 disable 为 true 时禁用（无障碍）
    aria-disabled: props 中的 disable 为 true 时禁用 (无障碍) 或其他情况下禁用, 详见 isDisabled
    tabindex: 根据 tabIndex 判断元素是否可以聚焦 以及 参与顺序键盘导航
    @keydown:
      阻止空格键按下事件继续传播, 且阻止默认行为
      若单选框为禁用状态, model 值不变; 否则即为选中, model 与 label 相同
   -->
  <label
    class="el-radio"
    :class="[
      border && radioSize ? `el-radio--${radioSize}` : '',
      {
        'is-checked': model === label,
        'is-disabled': isDisabled,
        'is-focus': focus,
        'is-bordered': border,
      },
    ]"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
    :tabindex="tabIndex"
    @keydown.space.stop.prevent="model = isDisabled ? model : label"
  >
    <!-- input
      class: {选中, 禁用, 聚焦}
     -->
    <span
      class="el-radio__input"
      :class="{
        'is-checked': model === label,
        'is-disabled': isDisabled,
        'is-focus': focus,
      }"
    >
      <!-- 自定义单选框 -->
      <span class="el-radio__inner"></span>
      <!-- 默认单选框
        ref: 可通过 $refs.radio 获取 DOM 节点
        name: 多个相同 name 的单选框为一组
        disabled: props 中的 disable 为 true 时禁用或其他情况下禁用, 详见 isDisabled
        aria-hidden: 从无障碍树上移除（无障碍）
        tabindex: 元素可聚焦, 但不能通过键盘导航来访问到该元素
        @focus: 聚焦时，即选中时，focus 为 true
        @blur: 失去焦点时，focus 为 false
        @change: 响应变化，向父组件传递 model 的值
       -->
      <input
        ref="radio"
        type="radio"
        class="el-radio__original"
        :name="name"
        :value="label"
        v-model="model"
        :disabled="isDisabled"
        autocomplete="off"
        aria-hidden="true"
        tabindex="-1"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
      />
    </span>

    <!-- 内容
      @keydown.stop: 阻止键盘按下事件继续传播
      Tip: 二者不可共存，若如此，则只显示插槽内容
     -->
    <span class="el-radio__label" @keydown.stop>
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
  name: 'ElRadio',

  mixins: [Emitter],

  props: {
    // Radio 的 value
    label: [String, Number, Boolean],
    // 绑定值
    value: [String, Number, Boolean],
    // 原生 name 属性
    name: String,
    // 是否禁用
    disabled: Boolean,
    // 是否显示边框
    border: Boolean,
    // Radio 的尺寸，仅在 border 为真时有效
    size: {
      type: String,
      validator: (val) => ['medium', 'small', 'mini'].includes(val),
    },
  },

  data() {
    return {
      // 是否聚焦
      focus: false,
    };
  },

  computed: {
    // 父组件/祖先组件 是否为单选框组
    isGroup() {
      let parent = this.$parent;

      while (parent) {
        if (parent.$options.componentName !== 'ElRadioGroup') {
          parent = parent.$parent;
        } else {
          this._radioGroup = parent;

          return true;
        }
      }

      return false;
    },
    // v-model 绑定
    model: {
      /**
       * 获取绑定的值
       * @return {*} 绑定的值
       */
      get() {
        // 如果是单选框组, 则使用单选框组的 value; 否则使用此单选框的 value
        return this.isGroup ? this._radioGroup.value : this.value;
      },
      /**
       * 设置绑定的值
       * @param {*} val 要设置的新值
       */
      set(val) {
        // 判断是否为单选框组
        if (this.isGroup) {
          this.dispatch('ElRadioGroup', 'input', [val]);
        } else {
          this.$emit('input', val);
        }

        /**
         * 确保默认单选框的 checked 状态为最新状态
         * ??? 源码中没未使用 $nextTick, 值总为 false, 不止是否有意为之
         */
        this.$nextTick(() => {
          this.$refs.radio && (this.$refs.radio.checked = this.model === this.label);
        });
      },
    },
    /**
     * 是否禁用
     * @return {boolean} 禁用 => true 不禁用 => false
     */
    isDisabled() {
      const temRadioDisabled = this.disabled;

      return this.isGroup ? this._radioGroup.disabled || temRadioDisabled : temRadioDisabled;
    },
    // 尺寸
    radioSize() {
      const temRadioSize = this.size;

      return this.isGroup ? this._radioGroup.radioGroupSize || temRadioSize : temRadioSize;
    },
    /**
     * 表示元素是否可以聚焦, 以及它 是否/在何处 参与顺序键盘导航 (通常使用 Tab 键)
     * -1: 可聚焦, 但是不能通过键盘导航来访问到该元素
     *  0: 可聚焦, 并且可以通过键盘导航来聚焦到该元素
     */
    tabIndex() {
      /**
       * 1.若单选框禁用, 则不能键盘导航
       * 2.若是单选框组, 且非选中此单选框, 也不能键盘导航。即可使用 Tab 导航到被选中的单选框
       */
      return this.isDisabled || (this.isGroup && this.model !== this.label) ? -1 : 0;
    },
  },

  methods: {
    // change 事件
    handleChange() {
      // 使用 $nextTick 确保传给父组件的值为最新值
      this.$nextTick(() => {
        this.$emit('change', this.model);
        /**
         * 如果是单选框组, 则向上找到 ElRadioGroup 组件
         * ElRadioGroup 组件会通过 $emit 触发事件 handleChange, 并将绑定值 model 一并传递
         * 可在 ElRadioGroup 组件中通过 $on 监听此事件, 并接收参数
         */
        this.isGroup && this.dispatch('ElRadioGroup', 'handleChange', this.model);
      });
    },
  },
};
</script>

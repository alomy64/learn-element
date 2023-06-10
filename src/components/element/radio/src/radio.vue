<!-- Radio 单选框 -->
<template>
  <!-- label
    class：[{选中, 禁用, 聚焦}]
    aria-checked：v-model 绑定的变量和 props 中的 label 内容一致时选中（无障碍）
    aria-disabled：props 中的 disable 为 true 时禁用（无障碍）
   -->
  <label
    class="el-radio"
    :class="[
      {
        'is-checked': model === label,
        'is-disabled': disabled,
        'is-focus': focus,
      },
    ]"
    role="radio"
    :aria-checked="model === label"
    :aria-disabled="disabled"
  >
    <!-- input
      class：[{选中, 禁用, 聚焦}]
     -->
    <span
      class="el-radio__input"
      :class="{
        'is-checked': model === label,
        'is-disabled': disabled,
        'is-focus': focus,
      }"
    >
      <!-- 自定义单选框 -->
      <span class="el-radio__inner"></span>
      <!-- 默认单选框
        ref：可通过 $refs.radio 获取 DOM 节点
        name：多个相同 name 的单选框为一组
        v-model：value 和 input 的结合
        disabled：disable 为 true 时禁用
        aria-hidden：从无障碍树上移除（无障碍）
        @focus：聚焦时，即选中时，focus 为 true
        @blur：失去焦点时，focus 为 false
        @change：响应变化，向父组件传递 model 的值
       -->
      <input
        ref="radio"
        type="radio"
        class="el-radio__original"
        :name="name"
        :value="label"
        v-model="model"
        :disabled="disabled"
        autocomplete="off"
        aria-hidden="true"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
      />
    </span>

    <!-- 内容
      @keydown.stop：阻止键盘按下事件继续传播
      Tip：二者不可共存，若如此，则只显示插槽内容
     -->
    <span class="el-radio__label" @keydown.stop>
      <!-- 若有默认插槽，则显示插槽内容 -->
      <slot></slot>
      <!-- if：若无默认插槽，则显示 props 的 label  -->
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'ElRadio',

  props: {
    // Radio 的 value
    label: [String, Number, Boolean],
    // 绑定值
    value: [String, Number, Boolean],
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
    // v-model 绑定
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },

  methods: {
    // change 事件
    handleChange() {
      // 使用 nextTick 确保传给父组件的值为最新值
      this.$nextTick(() => {
        this.$emit('change', this.model);
      });
    },
  },
};
</script>

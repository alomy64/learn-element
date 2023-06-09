<!-- Radio 单选框 -->
<template>
  <label
    class="el-radio"
    :class="[{ 'is-checked': model === label }]"
    role="radio"
    :aria-checked="model === label"
  >
    <!-- input
      class：{是否选中}
     -->
    <span class="el-radio__input" :class="{ 'is-checked': model === label }">
      <!-- 自定义单选框 -->
      <span class="el-radio__inner"></span>
      <!-- 默认单选框 -->
      <input
        ref="radio"
        type="radio"
        class="el-radio__original"
        :name="name"
        :value="label"
        v-model="model"
        autocomplete="off"
        aria-hidden="true"
      />
    </span>

    <!-- 内容
      Tip：二者不可共存，若如此，则只显示插槽内容
     -->
    <span class="el-radio__label">
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
  },

  computed: {
    // model
    model: {
      get() {
        return this.value;
      },
      set(val) {
        this.$emit('input', val);
      },
    },
  },
};
</script>

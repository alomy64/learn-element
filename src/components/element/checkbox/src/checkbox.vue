<!-- Checkbox 多选框 -->
<template>
  <!-- label
    class: {选中}
   -->
  <label class="el-checkbox" :class="{ 'is-checked': isChecked }">
    <!-- input
      class: {选中, 聚焦}
     -->
    <span class="el-checkbox__input" :class="{ 'is-checked': isChecked, 'is-focus': focus }">
      <!-- 自定义多选框 -->
      <span class="el-checkbox__inner"></span>
      <!-- 默认多选框
        aria-hidden: 元素会暴露给无障碍
        @focus: 聚焦时，即选中时，focus 为 true
        @blur: 失去焦点时，focus 为 false
        @change: 响应变化，向父组件传递 model 的值
       -->
      <input
        type="checkbox"
        class="el-checkbox__original"
        :name="name"
        :value="label"
        v-model="model"
        aria-hidden="false"
        @focus="focus = true"
        @blur="focus = false"
        @change="handleChange"
      />
    </span>

    <!-- 内容
      if: 有默认插槽或者 props 的 label 有值时显示
      Tip: 二者不可共存，若如此，则只显示插槽内容
     -->
    <span class="el-checkbox__label" v-if="$slots.default || label">
      <!-- 若有默认插槽，则显示插槽内容 -->
      <slot></slot>
      <!-- if: 若无默认插槽，则显示 props 的 label  -->
      <template v-if="!$slots.default"> {{ label }}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: 'ElCheckbox',

  componentName: 'ElCheckbox',

  props: {
    // 绑定值
    value: {},
    // 选中状态的值 (只有在 checkbox-group 或者绑定对象类型为 array 时有效)
    label: {},
    // 原生 name 属性
    name: String,
  },

  data() {
    return {
      // 自己的 model, 父组件未进行 v-model 绑定时起作用
      selfModel: false,
      // 是否聚焦
      focus: false,
    };
  },

  computed: {
    // v-model 绑定
    model: {
      /**
       * 获取绑定的值 <br>
       * props 中的 value 不为 undefined 时, 说明父组件对其进行了 v-model 绑定, 则用父组件绑定的值; 否则用自己的 model
       * @return {*} 绑定的值
       */
      get() {
        return this.value !== undefined ? this.value : this.selfModel;
      },
      /**
       * 设置绑定的值
       * @param {*} val 要设置的新值
       */
      set(val) {
        this.$emit('input', val);
        // 更新自己的 model
        this.selfModel = val;
      },
    },
    /**
     * 是否选中 <br>
     * 1.如果 model 是布尔类型。说明是单一多选框, 则值为 model 的值
     */
    isChecked() {
      if ({}.toString.call(this.model) === '[object Boolean]') {
        return this.model;
      }
    },
  },

  methods: {
    /**
     * 当绑定值变化时触发的事件
     * @param {*} ev 事件对象
     */
    handleChange(ev) {
      // 使用 $nextTick 确保传给父组件的值为最新值
      this.$nextTick(() => {
        this.$emit('change', ev.target.checked, ev);
      });
    },
  },
};
</script>

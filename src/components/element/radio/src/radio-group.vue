<!-- radio-group 单选框 -->
<template>
  <!-- component 用于渲染动态组件或元素
    is: 要渲染的实际组件, 既可以是 HTML 标签名也可以是组件的注册名
   -->
  <component :is="_elTag" class="el-radio-group" role="radiogroup">
    <slot></slot>
  </component>
</template>
<script>
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
  },

  created() {
    // 监听 handleChange 事件, 并接收到传递的绑定值 model
    this.$on('handleChange', (value) => {
      // 向父组件触发 change 事件, 并传递绑定值 model
      this.$emit('change', value);
    });
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
};
</script>

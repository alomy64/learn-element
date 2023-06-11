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
  },

  computed: {
    // 要渲染的组件名
    _elTag() {
      // ??? tag 未曾有值, 不知其意何在
      let tag = this.$vnode.data?.tag;

      if (!tag || tag === 'component') tag = 'div';

      return tag;
    },
  },
};
</script>

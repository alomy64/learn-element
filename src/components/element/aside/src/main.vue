<template>
  <div class="el-aside" :style="{ width }">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ElAside',

  props: {
    // 侧边栏宽度
    width: {
      type: String,
      default: '300px',
    },
  },
};
</script>

<template lang="">
  <i :class="`el-icon-${name}`"></i>
</template>

<script>
export default {
  name: 'ElIcon',

  props: {
    // 图标名
    name: String,
  },
};
</script>

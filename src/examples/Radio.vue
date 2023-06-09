<template>
  <div>
    <h1>基础用法</h1>
    <div>
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>
    </div>

    <h1>禁用状态</h1>
    <div>
      <el-radio disabled v-model="disabledRadio" label="禁用">备选项</el-radio>
      <el-radio disabled v-model="disabledRadio" label="选中且禁用">备选项</el-radio>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 基础用法
      radio: '1',
      // 禁用状态
      disabledRadio: '选中且禁用',
    };
  },
};
</script>

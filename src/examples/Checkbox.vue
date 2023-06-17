<template>
  <div>
    <h1>基础用法</h1>
    <div>
      <!-- 使用 v-model 绑定 -->
      <el-checkbox v-model="checked" @change="handleChange" @input="handleInput"
        >备选项</el-checkbox
      >

      <!-- 未使用 v-model 绑定 -->
      <el-checkbox @change="handleChange" @input="handleInput">备选项</el-checkbox>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 单独使用时, checked 为 true 或 false
      checked: true,
    };
  },
  methods: {
    /**
     * 当绑定值变化时触发的事件
     * @param {*} val 更新后的值
     * @param {*} ev 事件对象
     */
    handleChange(val, ev) {
      console.log('change', val, ev);
    },
    /**
     * input 事件
     * @param {*} val 更新后的值
     */
    handleInput(val) {
      console.log('input', val);
    },
  },
};
</script>

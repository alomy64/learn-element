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

    <h1>禁用状态</h1>
    <div>
      <el-checkbox v-model="checked1" disabled>备选项1</el-checkbox>
      <el-checkbox v-model="checked2" disabled>备选项</el-checkbox>
    </div>

    <h1>自定义 选中/未选中 值</h1>
    <div>
      <el-checkbox
        v-model="customChecked"
        trueLabel="选中"
        falseLabel="未选中"
        @change="handleChange"
        @input="handleInput"
        >备选项</el-checkbox
      >
    </div>

    <h1>带有边框</h1>
    <div>
      <!-- 边框 -->
      <div>
        <el-checkbox v-model="borderChecked1" label="备选项1" border></el-checkbox>
        <el-checkbox v-model="borderChecked2" label="备选项2" border></el-checkbox>
      </div>

      <!-- 边框 + 尺寸 -->
      <div style="margin-top: 20px">
        <el-checkbox v-model="borderChecked3" label="备选项1" border size="medium"></el-checkbox>
        <el-checkbox v-model="borderChecked4" label="备选项2" border size="medium"></el-checkbox>
      </div>

      <!-- TODO 边框 + 多选框组 + 尺寸 -->
      <!-- <div style="margin-top: 20px">
        <el-checkbox-group v-model="borderCheckboxGroup1" size="small">
          <el-checkbox label="备选项1" border></el-checkbox>
          <el-checkbox label="备选项2" border disabled></el-checkbox>
        </el-checkbox-group>
      </div> -->

      <!-- TODO 边框 + 多选框组 + 尺寸 + 禁用 -->
      <!-- <div style="margin-top: 20px">
        <el-checkbox-group v-model="borderCheckboxGroup2" size="mini" disabled>
          <el-checkbox label="备选项1" border></el-checkbox>
          <el-checkbox label="备选项2" border></el-checkbox>
        </el-checkbox-group>
      </div> -->
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 单独使用时, checked 为 true 或 false
      checked: true,

      /* 禁用状态 */
      checked1: false,
      checked2: true,

      /* 自定义选中值 */
      customChecked: '选中',

      /* 带有边框 */
      borderChecked1: true,
      borderChecked2: false,
      borderChecked3: false,
      borderChecked4: true,
      borderCheckboxGroup1: [],
      borderCheckboxGroup2: [],
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

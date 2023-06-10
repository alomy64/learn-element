<template>
  <div>
    <h1>基础用法</h1>
    <div>
      <el-radio v-model="radio" label="1" @change="handleChange">备选项</el-radio>
      <el-radio v-model="radio" label="2" @change="handleChange">备选项</el-radio>
    </div>

    <h1>禁用状态</h1>
    <div>
      <el-radio disabled v-model="disabledRadio" label="禁用">备选项</el-radio>
      <el-radio disabled v-model="disabledRadio" label="选中且禁用">备选项</el-radio>
    </div>

    <h1>不同尺寸</h1>
    <div>
      <el-radio v-model="sizeRadio" label="1" border>默认</el-radio>
      <el-radio v-model="sizeRadio" label="2" border size="medium">中等</el-radio>
      <el-radio v-model="sizeRadio" label="3" border size="small">小型</el-radio>
      <el-radio v-model="sizeRadio" label="4" border size="mini">超小</el-radio>
    </div>

    <h1>带有边框</h1>
    <div>
      <!-- 边框 -->
      <div>
        <el-radio v-model="borderRadio1" label="1" border>备选项1</el-radio>
        <el-radio v-model="borderRadio1" label="2" border>备选项2</el-radio>
      </div>

      <!-- 边框 + 禁用 -->
      <div style="margin-top: 20px">
        <el-radio v-model="borderRadio2" label="1" border disabled>备选项1</el-radio>
        <el-radio v-model="borderRadio2" label="2" border disabled>备选项2</el-radio>
      </div>

      <!-- TODO 边框 + 单选框组 -->
      <!-- <div style="margin-top: 20px">
        <el-radio-group v-model="borderRadio3" size="small">
          <el-radio label="1" border>备选项1</el-radio>
          <el-radio label="2" border disabled>备选项2</el-radio>
        </el-radio-group>
      </div>
      <div style="margin-top: 20px">
        <el-radio-group v-model="borderRadio4" size="mini" disabled>
          <el-radio label="1" border>备选项1</el-radio>
          <el-radio label="2" border>备选项2</el-radio>
        </el-radio-group>
      </div> -->
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
      // 不同尺寸
      sizeRadio: '1',

      /* 带有边框 */
      borderRadio1: '1',
      borderRadio2: '1',
      borderRadio3: '1',
      borderRadio4: '1',
    };
  },

  methods: {
    // change 事件
    handleChange(val) {
      console.log(val);
    },
  },
};
</script>

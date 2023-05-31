<template>
  <div id="app">
    <h1>组件 el-icon</h1>
    <el-icon name="eleme"></el-icon>

    <h1>loading 动态</h1>
    <el-icon name="loading"></el-icon>

    <h1>i 元素</h1>
    <i class="el-icon-edit"></i>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>

<template>
  <div id="app">
    <h1>基础用法</h1>
    <div>
      <el-link href="https://bing.com" target="_blank">默认链接</el-link>
      <el-link type="primary">主要链接</el-link>
      <el-link type="success">成功链接</el-link>
      <el-link type="warning">警告链接</el-link>
      <el-link type="danger">危险链接</el-link>
      <el-link type="info">信息链接</el-link>
    </div>

    <h1>禁用状态</h1>
    <div>
      <el-link href="https://bing.com" target="_blank" disabled>默认链接</el-link>
      <el-link type="primary" disabled>主要链接</el-link>
      <el-link type="success" disabled>成功链接</el-link>
      <el-link type="warning" disabled>警告链接</el-link>
      <el-link type="danger" disabled>危险链接</el-link>
      <el-link type="info" disabled>信息链接</el-link>
    </div>

    <h1>下划线</h1>
    <div>
      <el-link :underline="false">无下划线</el-link>
      <el-link>有下划线</el-link>
    </div>

    <h1>图标</h1>
    <div>
      <el-link icon="el-icon-edit">编辑</el-link>
      <el-link>查看<i class="el-icon-view el-icon--right"></i></el-link>
    </div>

    <h1>点击事件</h1>
    <div>
      <el-link href="https://bing.com" target="_blank" @click="handleClick">有 href 链接</el-link>
      <el-link type="primary" @click="handleClick">主要链接</el-link>
      <el-link type="info" disabled @click="handleClick">禁用链接</el-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    // 点击事件
    handleClick(e) {
      console.log('Link', e);
    },
  },
};
</script>

<style lang="scss">
.el-link {
  margin-right: 10px;
}
</style>

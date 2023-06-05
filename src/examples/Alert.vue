<template>
  <div id="app">
    <h1>基础用法</h1>
    <div>
      <el-alert title="成功提示的文案" type="success"></el-alert>
      <el-alert title="消息提示的文案" type="info"></el-alert>
      <el-alert title="警告提示的文案" type="warning"></el-alert>
      <el-alert title="错误提示的文案" type="error"></el-alert>
    </div>

    <h1>主题</h1>
    <div>
      <el-alert title="成功提示的文案" type="success" effect="dark"></el-alert>
      <el-alert title="消息提示的文案" type="info" effect="dark"></el-alert>
      <el-alert title="警告提示的文案" type="warning" effect="dark"></el-alert>
      <el-alert title="错误提示的文案" type="error" effect="dark"></el-alert>
    </div>

    <h1>具名插槽 title</h1>
    <div>
      <el-alert type="success">
        <template v-slot:title>成功提示的文案</template>
      </el-alert>
    </div>

    <h1>带有 icon</h1>
    <div>
      <el-alert title="成功提示的文案" type="success" show-icon></el-alert>
      <el-alert title="消息提示的文案" type="info" show-icon></el-alert>
      <el-alert title="警告提示的文案" type="warning" show-icon></el-alert>
      <el-alert title="错误提示的文案" type="error" show-icon></el-alert>
    </div>

    <h1>文字居中</h1>
    <div>
      <el-alert title="成功提示的文案" type="success" center show-icon></el-alert>
      <el-alert title="消息提示的文案" type="info" center show-icon></el-alert>
      <el-alert title="警告提示的文案" type="warning" center show-icon></el-alert>
      <el-alert title="错误提示的文案" type="error" center show-icon></el-alert>
    </div>

    <h1>自定义关闭按钮</h1>
    <div>
      <el-alert title="不可关闭的 alert" type="success" :closable="false"></el-alert>
      <el-alert title="自定义 close-text" type="info" close-text="知道了"></el-alert>
      <el-alert title="设置了回调的 alert" type="warning" @close="hello"></el-alert>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 关闭的回调
    hello() {
      alert('Hello World!');
    },
  },
};
</script>

<style lang="scss">
.el-alert {
  margin-top: 20px !important;
}
</style>

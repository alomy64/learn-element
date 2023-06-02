<template>
  <div id="app">
    <h1>默认按钮</h1>
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>

    <h1>朴素按钮</h1>
    <el-row>
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要按钮</el-button>
      <el-button type="success" plain>成功按钮</el-button>
      <el-button type="info" plain>信息按钮</el-button>
      <el-button type="warning" plain>警告按钮</el-button>
      <el-button type="danger" plain>危险按钮</el-button>
    </el-row>

    <h1>圆角按钮</h1>
    <el-row>
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要按钮</el-button>
      <el-button type="success" round>成功按钮</el-button>
      <el-button type="info" round>信息按钮</el-button>
      <el-button type="warning" round>警告按钮</el-button>
      <el-button type="danger" round>危险按钮</el-button>
    </el-row>

    <h1>圆形按钮</h1>
    <el-row>
      <el-button icon="el-icon-search" circle></el-button>
      <el-button type="primary" icon="el-icon-edit" circle></el-button>
      <el-button type="success" icon="el-icon-check" circle></el-button>
      <el-button type="info" icon="el-icon-message" circle></el-button>
      <el-button type="warning" icon="el-icon-star-off" circle></el-button>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
    </el-row>

    <h1>禁用状态</h1>
    <!-- 默认按钮 -->
    <el-row>
      <el-button disabled>默认按钮</el-button>
      <el-button type="primary" disabled>主要按钮</el-button>
      <el-button type="success" disabled>成功按钮</el-button>
      <el-button type="info" disabled>信息按钮</el-button>
      <el-button type="warning" disabled>警告按钮</el-button>
      <el-button type="danger" disabled>危险按钮</el-button>
    </el-row>
    <br />
    <!-- 朴素按钮 -->
    <el-row>
      <el-button plain disabled>朴素按钮</el-button>
      <el-button type="primary" plain disabled>主要按钮</el-button>
      <el-button type="success" plain disabled>成功按钮</el-button>
      <el-button type="info" plain disabled>信息按钮</el-button>
      <el-button type="warning" plain disabled>警告按钮</el-button>
      <el-button type="danger" plain disabled>危险按钮</el-button>
    </el-row>

    <h1>默认聚焦</h1>
    <el-row>
      <el-button type="primary" autofocus>默认聚焦</el-button>
      <el-button type="primary" autofocus>默认不聚焦</el-button>
    </el-row>

    <h1>文字按钮</h1>
    <el-row style="background: black">
      <el-button type="text">文字按钮</el-button>
      <el-button type="text" disabled>文字按钮</el-button>
    </el-row>

    <h1>加载中</h1>
    <el-row>
      <el-button type="primary" :loading="true">加载中</el-button>
    </el-row>

    <h1>图标按钮</h1>
    <el-row>
      <el-button type="primary" icon="el-icon-edit"></el-button>
      <el-button type="primary" icon="el-icon-share"></el-button>
      <el-button type="primary" icon="el-icon-delete"></el-button>
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-button type="primary"><i class="el-icon-upload el-icon--left"></i>上传</el-button>
      <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    </el-row>

    <h1>不同尺寸</h1>
    <div>
      <!-- 默认按钮 -->
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button size="medium">中等按钮</el-button>
        <el-button size="small">小型按钮</el-button>
        <el-button size="mini">超小按钮</el-button>
      </el-row>
      <br />
      <!-- 圆角按钮 -->
      <el-row>
        <el-button round>默认按钮</el-button>
        <el-button size="medium" round>中等按钮</el-button>
        <el-button size="small" round>小型按钮</el-button>
        <el-button size="mini" round>超小按钮</el-button>
      </el-row>
      <br />
      <!-- 圆形按钮 -->
      <el-row>
        <el-button icon="el-icon-check" circle></el-button>
        <el-button size="medium" icon="el-icon-search" circle></el-button>
        <el-button size="small" icon="el-icon-edit" circle></el-button>
        <el-button size="mini" icon="el-icon-message" circle></el-button>
      </el-row>
    </div>

    <h1>按钮组</h1>
    <div>
      <!-- 两个按钮  图标 + 文字 -->
      <el-button-group>
        <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        <el-button type="primary">
          下一页<i class="el-icon-arrow-right el-icon--right"></i>
        </el-button>
      </el-button-group>
      <span style="margin-right: 10px"></span>

      <!-- 多个按钮 -->
      <el-button-group>
        <el-button type="primary" icon="el-icon-edit"></el-button>
        <el-button type="primary" icon="el-icon-share"></el-button>
        <el-button type="primary" icon="el-icon-message"></el-button>
        <el-button type="primary" icon="el-icon-delete"></el-button>
      </el-button-group>
      <span style="margin-right: 10px"></span>

      <!-- 单个普通按钮 -->
      <el-button-group>
        <el-button type="primary" icon="el-icon-delete"></el-button>
      </el-button-group>
      <span style="margin-right: 10px"></span>

      <!-- 单个圆角按钮 -->
      <el-button-group>
        <el-button round type="primary" icon="el-icon-delete"></el-button>
      </el-button-group>
      <span style="margin-right: 10px"></span>

      <!-- 单个圆形按钮 -->
      <el-button-group>
        <el-button circle type="primary" icon="el-icon-delete"></el-button>
      </el-button-group>
      <span style="margin-right: 10px"></span>

      <!-- 多个文字按钮 -->
      <el-button-group>
        <el-button type="text">文字按钮</el-button>
        <el-button type="text" disabled>文字按钮</el-button>
      </el-button-group>
    </div>

    <h1>原生 type 属性</h1>
    <el-row>
      <el-button @click="handleClick">默认</el-button>
      <el-button @click="handleClick" native-type="button">按钮</el-button>
      <el-button @click="handleClick" native-type="submit">提交</el-button>
      <el-button @click="handleClick" native-type="reset">重置</el-button>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    // 按钮点击
    handleClick(e) {
      console.log(e);
    },
  },
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

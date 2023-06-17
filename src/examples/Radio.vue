<template>
  <div>
    <h1>基础用法</h1>
    <div>
      <el-radio v-model="radio" label="1" @change="handleChange" @input="handleInput"
        >备选项</el-radio
      >
      <el-radio v-model="radio" label="2" @change="handleChange" @input="handleInput"
        >备选项</el-radio
      >
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

    <h1>单选框组</h1>
    <div>
      <h3>基础用法，可通过键盘 上下左右 进行选择</h3>
      <el-radio-group v-model="groupRadio" @change="handleChange" @input="handleInput">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
      </el-radio-group>

      <h3>无默认选项时，可通过 Tab 聚焦首项, 空格选择</h3>
      <el-radio-group v-model="groupRadio2" @change="handleChange" @input="handleInput">
        <el-radio :label="3">备选项</el-radio>
        <el-radio :label="6">备选项</el-radio>
        <el-radio :label="9">备选项</el-radio>
      </el-radio-group>
    </div>

    <h1>按钮样式</h1>
    <div>
      <!-- 按钮 + 单选框组 -->
      <div>
        <el-radio-group v-model="buttonRadio1">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>

      <!-- 按钮 + 单选框组 + 文本颜色 + 填充色 + 边框色 -->
      <div style="margin-top: 20px">
        <el-radio-group v-model="buttonRadio2" text-color="red" fill="#6666">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>

      <!-- 按钮 + 单选框组 + 尺寸 -->
      <div style="margin-top: 20px">
        <el-radio-group v-model="buttonRadio3" size="medium">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>

      <!-- 按钮 + 单选框组 + 尺寸 + 局部禁用-->
      <div style="margin-top: 20px">
        <el-radio-group v-model="buttonRadio4" size="small">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京" disabled></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>

      <!-- 按钮 + 单选框组 + 全部禁用 + 尺寸 -->
      <div style="margin-top: 20px">
        <el-radio-group v-model="buttonRadio5" disabled size="mini">
          <el-radio-button label="上海"></el-radio-button>
          <el-radio-button label="北京"></el-radio-button>
          <el-radio-button label="广州"></el-radio-button>
          <el-radio-button label="深圳"></el-radio-button>
        </el-radio-group>
      </div>

      <!-- 按钮 + 单选框组 + 图标 -->
      <div style="margin-top: 20px">
        <el-radio-group v-model="buttonRadio6">
          <el-radio-button label="add">
            <i class="el-icon-edit el-icon--left"></i>编辑
          </el-radio-button>
          <el-radio-button label="delete" disabled>
            <i class="el-icon-delete el-icon--left"></i>删除
          </el-radio-button>
          <el-radio-button label="upload">
            上传<i class="el-icon-upload el-icon--right"></i>
          </el-radio-button>
          <el-radio-button label="share">
            分享<i class="el-icon-share el-icon--right"></i>
          </el-radio-button>
        </el-radio-group>
      </div>
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

      <!-- 边框 + 单选框组 + 尺寸 -->
      <div style="margin-top: 20px">
        <el-radio-group v-model="borderRadio3" size="small">
          <el-radio label="1" border>备选项1</el-radio>
          <el-radio label="2" border disabled>备选项2</el-radio>
        </el-radio-group>
      </div>

      <!-- 边框 + 单选框组 + 尺寸 + 禁用 -->
      <div style="margin-top: 20px">
        <el-radio-group v-model="borderRadio4" size="mini" disabled>
          <el-radio label="1" border>备选项1</el-radio>
          <el-radio label="2" border>备选项2</el-radio>
        </el-radio-group>
      </div>
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

      /* 单选框组 */
      groupRadio: 3,
      groupRadio2: 33,

      /* 单选按钮 */
      buttonRadio1: '上海',
      buttonRadio2: '上海',
      buttonRadio3: '上海',
      buttonRadio4: '上海',
      buttonRadio5: '上海',
      buttonRadio6: 'add',

      /* 带有边框 */
      borderRadio1: '1',
      borderRadio2: '1',
      borderRadio3: '1',
      borderRadio4: '1',
    };
  },

  methods: {
    /**
     * change 事件, 响应变化
     * @param {*} val 选中的 Radio label 值
     */
    handleChange(val) {
      console.log('change', val);
    },
    /**
     * 绑定值变化时触发的事件
     * @param {*} val 选中的 Radio label 值
     */
    handleInput(val) {
      console.log('input', val);
    },
  },
};
</script>

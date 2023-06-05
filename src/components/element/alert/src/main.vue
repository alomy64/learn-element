<template>
  <Transition name="el-alert-fade">
    <div
      class="el-alert"
      :class="[`el-alert--${type}`, `is-${effect}`, { 'is-center': center }]"
      v-show="visible"
      role="alert"
    >
      <!--
        showIcon：为 true 时，显示此前置图标
        class：图标类型、大小皆不同
       -->
      <i class="el-alert__icon" :class="[iconClass]" v-if="showIcon"></i>

      <div class="el-alert__content">
        <!-- 标题 if：有 props 中的 title，或具名插槽 title 时显示-->
        <span class="el-alert__title" v-if="title || $slots.title">
          <!-- 如有具名插槽 title，则显示其内容；否则显示 props 中的 title -->
          <slot name="title">{{ title }}</slot>
        </span>

        <!-- 关闭按钮 if：closable 为 true 时显示 -->
        <i class="el-alert__closebtn el-icon-close" v-show="closable" @click="close"></i>
      </div>
    </div>
  </Transition>
</template>

<script>
// 类型对应的前置图标 clsss 的映射
const TYPE_CLASS_MAP = {
  success: 'el-icon-success',
  warning: 'el-icon-warning',
  info: 'el-icon-info',
};

export default {
  name: 'ElAlert',

  props: {
    // 标题
    title: String,
    // 类型
    type: {
      type: String,
      default: 'info',
      validator: (val) => ['success', 'warning', 'info', 'error'].includes(val),
    },
    // 是否可关闭
    closable: {
      type: Boolean,
      default: true,
    },
    // 选择提供的主题
    effect: {
      type: String,
      default: 'light',
      validator: (val) => ['light', 'dark'].includes(val),
    },
    // 文字是否居中
    center: Boolean,
    // 是否显示图标
    showIcon: Boolean,
  },

  data() {
    return {
      // 是否显示
      visible: true,
    };
  },

  computed: {
    // 前置图标 class
    iconClass() {
      return TYPE_CLASS_MAP[this.type] || 'el-icon-info';
    },
  },

  methods: {
    // 关闭警告
    close() {
      this.visible = false;
    },
  },
};
</script>
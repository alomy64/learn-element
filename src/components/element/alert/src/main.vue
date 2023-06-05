<template>
  <Transition name="el-alert-fade">
    <div class="el-alert" :class="[`el-alert--${type}`, `is-${effect}`]" v-show="visible">
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
  },

  data() {
    return {
      // 是否显示
      visible: true,
    };
  },

  methods: {
    // 关闭警告
    close() {
      this.visible = false;
    },
  },
};
</script>

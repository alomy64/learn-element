<template>
  <!-- 过渡动画：通过 opacity 进行 显示/隐藏 切换 -->
  <Transition name="el-alert-fade">
    <!-- alert
      show：visible 为 true 时显示，可通过 close 方法关闭
      class：[类型, 主题, 居中]
     -->
    <div
      class="el-alert"
      :class="[`el-alert--${type}`, `is-${effect}`, { 'is-center': center }]"
      v-show="visible"
      role="alert"
    >
      <!-- 前置图标
        if：showIcon 为 true 时显示
        class：[类型, 大图标]
       -->
      <i class="el-alert__icon" :class="[iconClass, isBigIcon]" v-if="showIcon"></i>

      <div class="el-alert__content">
        <!-- 标题
          if：有 props 中的 title，或具名插槽 title 时显示
          class：[标题加粗]
          Tip：二者不可共存，若如此，则只显示插槽内容
         -->
        <span class="el-alert__title" :class="[isBoldTitle]" v-if="title || $slots.title">
          <!-- 如有具名插槽 title，则显示其内容；否则显示 props 中的 title -->
          <slot name="title">{{ title }}</slot>
        </span>

        <!-- 辅助性文字介绍
          Tip：二者不可共存，若如此，则都不显示
         -->
        <!-- if：有默认插槽，并且 props 中的 description 无值时，显示插槽内容 -->
        <p class="el-alert__description" v-if="!description && $slots.default">
          <slot></slot>
        </p>
        <!-- if：无默认插槽，并且 props 中的 description 有值时，显示 props 中的 description -->
        <p class="el-alert__description" v-if="description && !$slots.default">{{ description }}</p>

        <!-- 关闭按钮
          show：closable 为 true 时显示
          class：根据 closeText 判断显示关闭按钮或者自定义文本
          close：{图标 ×, 自定义}
          click：通过 close 改变 visible，来控制 Alert 的 显示/隐藏
         -->
        <i
          class="el-alert__closebtn"
          :class="{ 'el-icon-close': !closeText, 'is-customed': closeText }"
          v-show="closable"
          @click="close"
        >
          {{ closeText }}
        </i>
      </div>
    </div>
  </Transition>
</template>

<script>
// 类型对应的前置图标 clsss 的映射 {成功, 警告, 错误}
const TYPE_CLASS_MAP = {
  success: 'el-icon-success',
  warning: 'el-icon-warning',
  error: 'el-icon-error',
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
    // 关闭按钮自定义文本
    closeText: String,
    // 辅助性文字。也可通过默认 slot 传入
    description: String,
  },

  data() {
    return {
      // 是否显示
      visible: true,
    };
  },

  computed: {
    // class：不同类型的前置图标
    iconClass() {
      return TYPE_CLASS_MAP[this.type] || 'el-icon-info';
    },
    // class：是否为大前置图标
    isBigIcon() {
      return this.description || this.$slots.default ? 'is-big' : '';
    },
    // class：是否为加粗标题
    isBoldTitle() {
      return this.description || this.$slots.default ? 'is-bold' : '';
    },
  },

  methods: {
    // 关闭警告
    close() {
      this.visible = false;
      this.$emit('close');
    },
  },
};
</script>

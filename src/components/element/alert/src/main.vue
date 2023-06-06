<template>
  <Transition name="el-alert-fade">
    <div
      class="el-alert"
      :class="[`el-alert--${type}`, `is-${effect}`, { 'is-center': center }]"
      v-show="visible"
      role="alert"
    >
      <!-- 前置图标
        if：showIcon 为 true 时显示
        class：图标类型（iconClass）、大小（isBigIcon）皆不同
       -->
      <i class="el-alert__icon" :class="[iconClass, isBigIcon]" v-if="showIcon"></i>

      <div class="el-alert__content">
        <!-- 标题
          if：有 props 中的 title，或具名插槽 title 时显示
          class：若有辅助性文字，标题加粗
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
          if：closable 为 true 时显示
          class：根据 closeText 判断显示关闭按钮或者自定义文本
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
    // 不同类型的前置图标 class
    iconClass() {
      return TYPE_CLASS_MAP[this.type] || 'el-icon-info';
    },
    // 是否为大前置图标 class
    isBigIcon() {
      return this.description || this.$slots.default ? 'is-big' : '';
    },
    // 是否为加粗标题 class
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

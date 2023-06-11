export default {
  methods: {
    /**
     * 调用 $emit 向特定的 父组件/祖先组件 派发事件, 并传递相应参数
     * @param {string} componentName 组件的 componentName
     * @param {string} eventName 事件名
     * @param {*} params 参数 可以是单个; 也可以是多个, 多个的话是数组形式
     */
    dispatch(componentName, eventName, params) {
      let parent = this.$parent || this.$root;
      let name = parent.$options.componentName;

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent;

        if (parent) {
          name = parent.$options.componentName;
        }
      }

      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params));
      }
    },
  },
};

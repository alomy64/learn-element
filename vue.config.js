const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  // chainWebpack: (config) => {
  //   config.resolve.alias.set('@element', path.resolve(__dirname, 'src/components/element'));
  // },
  configureWebpack: {
    resolve: {
      alias: {
        '@element': '@/components/element',
      },
    },
  },
});

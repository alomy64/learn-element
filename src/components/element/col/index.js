import ElCol from './src/col';

ElCol.install = (Vue) => {
  Vue.component(ElCol.name, ElCol);
};

export default ElCol;

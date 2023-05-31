import Vue from 'vue';

import '@/assets/theme-chalk/display.scss';
import '@/assets/theme-chalk/index.scss';

// 全局引入
// import Element from "@element";
// Vue.use(Element);

// 按需引入
import {
  Row, Col, Container, Header, Aside, Main, Footer, Icon,
} from '@element';

Vue.use(Row);
Vue.use(Col);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Icon);

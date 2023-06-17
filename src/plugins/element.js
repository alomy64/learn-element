import Vue from 'vue';

import '@/assets/theme-chalk/display.scss';
import '@/assets/theme-chalk/index.scss';

// 全局引入
// import Element from "@element";
// Vue.use(Element);

// 按需引入
import {
  Row,
  Col,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Icon,
  Button,
  ButtonGroup,
  Link,
  Alert,
  Radio,
  RadioGroup,
  RadioButton,
  Checkbox,
} from '@element';

Vue.use(Row);
Vue.use(Col);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Icon);
Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Link);
Vue.use(Alert);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Checkbox);

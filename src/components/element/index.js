import Row from '@element/row';
import Col from '@element/col';
import Container from '@element/container';
import Header from '@element/header';
import Aside from '@element/aside';
import Main from '@element/main';
import Footer from '@element/footer';
import Icon from '@element/icon';
import Button from '@element/button';
import ButtonGroup from '@element/button-group';

const components = [Row, Col];

const install = (Vue) => {
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

export default {
  install,
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
};

export {
  install, Row, Col, Container, Header, Aside, Main, Footer, Icon, Button, ButtonGroup,
};

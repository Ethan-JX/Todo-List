import Vue from 'vue'
import App from './App'
import store from './store'

import {
  Badge,
  Button,
  Checkbox,
  Col,
  Container,
  Dialog,
  Form,
  FormItem,
  Header,
  Icon,
  Input,
  Main,
  Menu,
  MenuItem,
  Option,
  Popover,
  Row,
  Select
} from 'element-ui'

Vue.use(Container)
Vue.use(Header)
Vue.use(Main)
Vue.use(Row)
Vue.use(Col)
Vue.use(Icon)
Vue.use(Button)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Checkbox)
Vue.use(Popover)
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Select)
Vue.use(Option)
Vue.use(Input)
Vue.use(Badge)

import '../static/index.css'

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  store
})

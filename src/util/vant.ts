import { createApp } from 'vue'
import App from './App.vue'
import {
  Form,
  Field,
  Button,
  Dialog,
  NavBar,
  Notify,
  Calendar
} from 'vant';
//vant的样式文件
import 'vant/lib/index.css';

createApp(App).use(Button);
createApp(App).use(Form);
createApp(App).use(Field);
createApp(App).use(Dialog);
createApp(App).use(NavBar);
createApp(App).use(Notify);
createApp(App).use(Calendar);

import App from './App.vue';
import router from './router';

import { createApp } from 'vue';

import { setupStore } from '@/store';

import ElementPlus from 'element-plus';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';

import { MotionPlugin } from '@vueuse/motion';

import './style/index.scss';

import './style/tailwind.css';

import 'element-plus/dist/index.css';

const app = createApp(App);

// // 自定义指令
// import * as directives from '@/directives';
// Object.keys(directives).forEach((key) => {
//   app.directive(key, (directives as { [key: string]: Directive })[key]);
// });

app.use(router);

setupStore(app);

app.use(MotionPlugin);

app.use(ElementPlus, {
  locale: zhCn,
});
app.mount('#app');

import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn.js';
import { createApp } from 'vue';
import {createRouter,createWebHashHistory} from 'vue-router'
import routes from './routes'
import { ElNotification } from 'element-plus';

import 'element-plus/theme-chalk/el-overlay.css';
import 'element-plus/theme-chalk/dark/css-vars.css';
//注意，引用组件需要手动import 样式，比如el-image
import relativeTime from 'dayjs/plugin/relativeTime';

import './style.css';
import App from './App.vue';
import './assets/iconfont.js';

dayjs.extend(relativeTime);
dayjs.locale('zh-cn');

function handleError(error: any) {
  console.error('error: ', error);
  ElNotification({
    title: 'Error',
    message: String(error),
    type: 'error'
  });
}
const router = createRouter(
  {
    // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
  }
);

const app = createApp(App);
app.use(router)

app.config.errorHandler = handleError;
window.addEventListener('error', handleError);

app.mount('#app');

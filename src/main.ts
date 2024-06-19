import './plugins/axios';
import Toast, { PluginOptions } from 'vue-toastification';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './assets/tailwind.css';
import 'vue-toastification/dist/index.css';

const pinia = createPinia();
const app = createApp(App).use(pinia).use(router);

const options: PluginOptions = {};

app.use(Toast, options);
app.mount('#app');

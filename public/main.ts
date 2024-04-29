import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// pinia store
import { createPinia } from 'pinia';
const pinia = createPinia();
app.use(pinia);

import router from './router';
app.use(router);

// main app css
import './assets/css/app.css';

// set default settings
import appSetting from '@/app-setting';
appSetting.init();

// set default settings
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init({
    once: true,
});

app.mount('#app');

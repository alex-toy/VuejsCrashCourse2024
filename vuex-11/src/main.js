import { createApp } from 'vue';

import router from './router.js';
import App from './App.vue';
import BaseBadge from './components/ui/BaseBadge.vue';
import stores from '@/stores/stores'

const app = createApp(App)

app.use(router);
app.use(stores);

app.component('base-badge', BaseBadge);

app.mount('#app');

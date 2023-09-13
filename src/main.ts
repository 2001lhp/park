import { createApp } from 'vue'

import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/main.scss'

const app = createApp(App)
import pinia from './stores/index'

app.use(router).use(pinia).use(ElementPlus).mount('#app')

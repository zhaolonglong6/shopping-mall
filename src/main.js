import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { imgLazyLoading } from '@/directives/index'
import App from './App.vue'
import router from './router'

// 引入初始化样式文件
import '@/styles/common.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(imgLazyLoading)
app.mount('#app')

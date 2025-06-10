import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import AOS from 'aos'
import 'aos/dist/aos.css'

// 初始化 AOS，减少动画时间
AOS.init({
  duration: 600,
  easing: 'ease-out',
  once: true,
  offset: 50,
  delay: 50
})

createApp(App)
  .use(router)
  .mount('#app')

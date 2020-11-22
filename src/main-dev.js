// 引入vue
import Vue from 'vue'
// 引入App组件
import App from './App.vue'
// 引入路由
import router from './router'
// 引入全局css样式
import './assets/css/index.css'
// 引入字体图标
import './assets/font/iconfont.css'

// 引入axios
import axios from 'axios'
// 导入 nprogress 包对应的js和css
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.config.productionTip = false
// 将axios挂载到Vue原型上
Vue.prototype.$axios = axios
// 配置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8089/'
// 在request中展示进度条 NProgress.start()
axios.interceptors.request.use((config) => {
  NProgress.start()
  return config
})
// 在response中隐藏进度条 NProgress.done()
axios.interceptors.response.use((config) => {
  NProgress.done()
  return config
})
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')

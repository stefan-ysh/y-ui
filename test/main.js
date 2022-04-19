import Vue from 'vue'
import App from './App.vue'
// 导入组件库
import YUi from '../src/component'

Vue.config.productionTip = false

Vue.use(YUi)

new Vue({
  render: h => h(App)
}).$mount('#app')

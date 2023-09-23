import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')


// Vue2
// new Vue({}).$mount()
// Vue.use()
// Vue.mixin()
// Vue.component()

// Vue3
// createApp(根组件).use(...).mixin(...).component(...).mount("根组件id名")
// createApp(根组件).mount("组件id名")
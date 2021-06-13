import Vue from 'vue'
import App from './App.vue'
import { getBaseUrl } from './url'
import getRouter from './router'
import axios from 'axios'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

function spawnInstance(res){
  new Vue({
    router: getRouter(res.data),
    vuetify,
    render: h => h(App)
  }).$mount('#app')
}

axios.get(getBaseUrl() + '/tutorials.json')
.then(spawnInstance)



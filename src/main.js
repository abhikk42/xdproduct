import Vue from 'vue'
import App from './App.vue'
import router from './router'

import Fragment from 'vue-fragment';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret,faPlus,faMinus, faSliders,faAngleRight, faAngleLeft, faX } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(faUserSecret,faPlus,faMinus,faSliders,faAngleRight,faAngleLeft,faX)


Vue.use(Fragment.Plugin);

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

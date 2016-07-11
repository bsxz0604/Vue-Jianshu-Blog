import 'bootstrap/dist/css/bootstrap.css'
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import VueValidator from 'vue-validator'
import routerConfig from './router'
import bootstrap from 'bootstrap'
import 'font-awesome/css/font-awesome.css'

Vue.use(VueRouter)
Vue.use(VueValidator)

const router = new VueRouter({
    hashbang: false,
    history: true,
    saveScrollPosition: false,
    suppressTransitionError: true,
})

//router config
routerConfig(router)
router.start(App, 'app');

// // /* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })

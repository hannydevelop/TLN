// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue.css'

require('./assets/css/style.css')
require('./assets/vendor/icofont/icofont.min.css')
require('./assets/vendor/boxicons/css/boxicons.min.css')
require('./assets/vendor/animate.css/animate.min.css')
require('./assets/vendor/remixicon/remixicon.css')
require('./assets/vendor/venobox/venobox.css')

Vue.config.productionTip = false
Vue.use(BootstrapVue)

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  bootstrap
})

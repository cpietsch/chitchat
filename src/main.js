//        __   _ __      __        __
//   ____/ /  (_) /_____/ /  ___ _/ /_
//  / __/ _ \/ / __/ __/ _ \/ _ `/ __/
//  \__/_//_/_/\__/\__/_//_/\_,_/\__/
//

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'

Vue.config.productionTip = false

/* eslint-disable */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})

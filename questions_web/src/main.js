import Vue from 'vue';
import App from './App.vue';
import store from '@/store';
import router from '@/router';

import * as API from "@/api";

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    store,
    router,
    beforeCreate()
    {
        Vue.prototype.$bus = this;
        Vue.prototype.$API = API;
    }
}).$mount('#app')

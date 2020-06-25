import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full.esm';
import VueResource from "vue-resource";
Vue.use(VueResource);
Vue.http.options.root = process.env.VUE_APP_API_URL;

Vue.config.productionTip = false;
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.router = router;

new Vue({
    router,
    store,
    vuetify,
    http: {
        root: process.env.VUE_APP_API_URL
    },
    render: h => h(App)
}).$mount("#app");

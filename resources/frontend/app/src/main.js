import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@fortawesome/fontawesome-free/css/all.css";
import { ValidationProvider, ValidationObserver } from 'vee-validate/dist/vee-validate.full.esm';

Vue.config.productionTip = false;
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
Vue.router = router;

new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");

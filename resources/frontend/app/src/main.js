import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@fortawesome/fontawesome-free/css/all.css";
import {
    ValidationProvider,
    ValidationObserver,
    extend
} from "vee-validate/dist/vee-validate.full.esm";

Vue.config.productionTip = false;
extend("password", {
    params: ["target"],
    validate(value, { target }) {
        return value === target;
    },
    message: "Password confirmation does not match"
});
Vue.component("ValidationProvider", ValidationProvider);
Vue.component("ValidationObserver", ValidationObserver);
Vue.router = router;

new Vue({
    router,
    store,
    vuetify,
    // http: {
    //     root: process.env.VUE_APP_API_URL
    // },
    render: h => h(App)
}).$mount("#app");

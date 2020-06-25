import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import auth from "@websanova/vue-auth";
import config from "../plugins/vue-auth";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/login",
        name: "Login",
        component: Login
    }
    // {
    //     path: "/about",
    //     name: "About",
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import(/* webpackChunkName: "about" */ "../views/About.vue")
    // }
];

const router = new VueRouter({
    base: process.env.BASE_URL,
    routes
});

Vue.router = router;
Vue.use(VueAxios, axios);
axios.defaults.baseURL = `/`;
Vue.use(auth, config);

export default router;

import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueRouter from "vue-router";
import Home from "./../views/Home.vue";
import Dashboard from "./../views/Dashboard.vue";
import Login from "./../views/Login.vue";
import Register from "./../views/Register.vue";
import VueAuth from "@websanova/vue-auth";
import config from "./../plugins/vue-auth";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/login",
        name: "Login",
        component: Login,
        meta: {
            auth: false
        }
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
        meta: {
            auth: false
        }
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {
            auth: true
        }
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
    base: '/',
    routes
});

Vue.router = router;
Vue.use(VueAxios, axios);
axios.defaults.baseURL = `/`;
Vue.use(VueAuth, config);

export default router;

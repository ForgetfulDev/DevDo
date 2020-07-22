import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import VueRouter from "vue-router";
import Home from "./../views/Home.vue";
import Layout from "./../Layout.vue";
import Dashboard from "./../views/Dashboard.vue";
import ProjectCreate from "./../views/ProjectCreate.vue";
import Project from "./../views/Project.vue";
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
    },
    {
        path: "/register",
        name: "Register",
        component: Register,
    },
    {
        path: "/dashboard",
        component: Layout,
        meta: {
            auth: true
        },
        children: [
            {
                path: "",
                name: "Dashboard",
                component: Dashboard
            },
            {
                path: "/project",
                name: "Create Project",
                component: ProjectCreate
            },
            {
                path: "/project/:project_id",
                props: true,
                name: "Project",
                component: Project
            },
        ]
    }
];

const router = new VueRouter({
    base: "/",
    routes
});

Vue.router = router;
Vue.use(VueAxios, axios);
axios.defaults.baseURL = `/`;
Vue.use(VueAuth, config);

export default router;

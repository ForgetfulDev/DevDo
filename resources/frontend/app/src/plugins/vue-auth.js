import authBasic from "@websanova/vue-auth/dist/drivers/auth/basic.esm.js";
import httpVueResource from "@websanova/vue-auth/dist/drivers/http/vue-resource.1.x.esm.js";
import routerVueRouter from "@websanova/vue-auth/dist/drivers/router/vue-router.2.x.esm.js";

const config = {
    auth: authBasic,
    http: httpVueResource,
    router: routerVueRouter,
    tokenStore: ["localStorage"],
    tokenDefaultName: "DevDo",
    registerData: {
        url: "/api/auth/register",
        method: "POST",
        redirect: "/login"
    },
    loginData: {
        url: "/api/auth/login",
        method: "POST",
        redirect: "/dashboard",
        fetchUser: false
    },
    fetchData: {
        url: "/api/auth/user",
        method: "POST",
        enabled: true
    },
    logoutData: {
        url: "/api/auth/logout",
        method: "POST",
        redirect: "/"
    },
    refreshData: {
        url: "/api/auth/refresh",
        method: "POST",
        enabled: false,
        interval: 30
    },
    authRedirect: {
        path: "/login"
    }
};

export default config;

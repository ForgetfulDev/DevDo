import bearer from "@websanova/vue-auth/drivers/auth/bearer";
import axios from "@websanova/vue-auth/drivers/http/axios.1.x";
import router from "@websanova/vue-auth/dist/drivers/router/vue-router.2.x.esm.js";

const config = {
    auth: bearer,
    http: axios,
    router: router,
    registerData: {
        url: "/api/auth/register",
        method: "POST",
        redirect: "/login"
    },
    loginData: {
        url: "/api/auth/login",
        method: "POST",
        redirect: "/dashboard",
        fetchUser: true
    },
    fetchData: {
        url: "/api/auth/user",
        method: "GET",
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

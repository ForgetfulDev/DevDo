import Vue             from 'vue';
import auth            from '@websanova/vue-auth';
import authBasic       from '@websanova/vue-auth/dist/drivers/auth/basic.esm.js';
import httpVueResource from '@websanova/vue-auth/dist/drivers/http/vue-resource.1.x.esm.js';
import routerVueRouter from '@websanova/vue-auth/dist/drivers/router/vue-router.2.x.esm.js';

Vue.use(auth, {
    auth: authBasic,
    http: httpVueResource,
    router: routerVueRouter,
});
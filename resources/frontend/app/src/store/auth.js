import Vue from "vue";

export default {
    namespaced: true,
    actions: {
        fetch(data) {
            return Vue.auth.fetch(data);
        },
        refresh(data) {
            return Vue.auth.refresh(data);
        },
        login(context, data) {
            data = data || {};
            return new Promise((resolve, reject) => {
                Vue.auth
                    .login({
                        url: "api/auth/login",
                        data: data
                    })
                    .then(res => {
                        if (data.remember_me) {
                            Vue.auth.remember(
                                JSON.stringify({
                                    name: context.getters.user.first_name
                                })
                            );
                        }

                        Vue.router.push({
                            name: "Dashboard"
                        });
                        resolve(res);
                    }, reject);
            });
        },
        register(context, data) {
            data = data || {};
            return new Promise((resolve, reject) => {
                Vue.auth
                    .register({
                        url: "api/auth/register",
                        data: data
                    })
                    .then(() => {
                        context.dispatch("login", data).then(resolve, reject);
                    }, reject);
            });
        },
        impersonate(context, data) {
            Vue.auth.impersonate({
                url: "auth/" + data.user.id + "/impersonate",
                redirect: "user-account"
            });
        },
        unimpersonate(context) {
            Vue.auth.unimpersonate({
                redirect: "admin-users"
            });
        },
        logout(context) {
            return Vue.auth.logout();
        }
    },
    getters: {
        user() {
            return Vue.auth.user();
        },
        impersonating() {
            return Vue.auth.impersonating();
        }
    }
};

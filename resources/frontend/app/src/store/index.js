import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth.js";
import project from "./modules/project.js";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        auth,
        project
    }
});

import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth.js";
import project from "./project.js";
import column from "./column.js";
import actions from "./actions.js";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {},
    mutations: {},
    actions,
    modules: {
        auth,
        project,
        column
    }
});

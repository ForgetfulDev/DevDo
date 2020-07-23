import axios from "axios";

export default {
    namespaced: true,
    actions: {
        get({ commit }) {
            return axios.get("/api/project").then(res => {
                commit("set", res.data);
            });
        },
        create({ dispatch }, payload) {
            return axios.post("/api/project", payload).then(res => {
                dispatch("get");
            });
        },
    },
    getters: {
        all(state) {
            return state.projects;
        },
        byId: state => id => {
            return state.projects.find(project => project.id == id);
        },
    },
    state: () => ({
        projects: []
    }),
    mutations: {
        set(state, payload) {
            state.projects = payload;
        }
    }
};

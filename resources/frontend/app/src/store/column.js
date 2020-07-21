import axios from "axios";

export default {
    namespaced: true,
    actions: {
        get({ commit }, project_id) {
            return axios.get(`/api/project/${project_id}/columns`).then(res => {
                commit("set", res.data);
            });
        },
        create({ dispatch }, payload) {
            return axios.post("/api/column", payload).then(res => {
                dispatch("get");
            });
        },
    },
    getters: {
        all(state) {
            return state.columns;
        },
        byId: state => id => {
            return state.columns.find(column => column.id == id);
        },
    },
    state: () => ({
        columns: []
    }),
    mutations: {
        set(state, payload) {
            state.columns = payload;
        }
    }
};

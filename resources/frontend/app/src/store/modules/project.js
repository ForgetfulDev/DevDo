import axios from 'axios';

export default {
    namespaced: true,
    actions: {
        create(context, data) {
            axios.post("/api/project", data).then(response => {
                console.log(response);
            });
        }
    },
    getters: {}
};

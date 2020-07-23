import axios from "axios";
export default {
    actions: {
        createProject(context, data) {
            console.log(data);
            axios.post("/project", data).then(response => {
            });
        }
    }
};

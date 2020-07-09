import axios from "axios";
export default {
    
        createProject(context, data) {
            console.log(data);
            axios.post("/project", data).then(response => {
            });
        }
    
};

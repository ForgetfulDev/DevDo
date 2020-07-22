<template>
    <v-row>
        <v-col> Project {{ byId(project_id).name }} </v-col>
        <v-col>
            <v-btn color="primary"><v-icon>fas fa-plus</v-icon></v-btn>
        </v-col>
    </v-row>
    <columns :project_id="project_id"></columns>
</template>

<script>
import Columns from "../components/Columns.vue"
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("project");
export default {
    components: {
        Columns
    },
    props: ["project_id"],
    computed: {
        ...mapGetters(["byId"])
    }
};
</script>

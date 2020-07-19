<template>
    <v-row>
        <v-col> Project {{ byId(project_id).name }} </v-col>
        <v-col>
            <v-btn color="primary"><v-icon>fas fa-plus</v-icon></v-btn>
        </v-col>
    </v-row>
    <v-row>
        <v-col> </v-col>
    </v-row>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("project");
export default {
    props: ["project_id"],
    computed: {
        ...mapGetters(["byId"])
        //TODO: get columns
    }
};
</script>

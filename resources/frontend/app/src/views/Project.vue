<template>
    <v-row>
        <v-col> Project {{ byId(project_id).name }} </v-col>
        <v-col>
            <column-create-dialog></column-create-dialog>
        </v-col>
    </v-row>
    <columns :project_id="project_id"></columns>
</template>

<script>
import Columns from "../components/Columns.vue"
import ColumnCreateDialog from "../components/ColumnCreateDialog.vue"
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("project");
export default {
    components: {
        Columns,
        ColumnCreateDialog
    },
    props: ["project_id"],
    computed: {
        ...mapGetters(["byId"])
    }
};
</script>

<template>
    <v-row>
        <v-col>
            <project-column v-for="column in this.all" :key="column.id" :column="column"></project-column>
        </v-col>
    </v-row>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("column");
export default {
    props: ["project_id"],
    mounted() {
        this.get(this.project_id);
    },
    computed: {
        ...mapGetters(['all']),
    },
    methods: {
        ...mapActions(['get']),
    },
}
</script>
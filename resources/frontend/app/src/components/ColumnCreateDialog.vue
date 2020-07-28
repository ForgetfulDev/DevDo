<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
                testing!
                <v-btn icon v-bind="attrs" v-on="on" @click="dialog = true">
                    <v-icon>fas fa-plus</v-icon>
                </v-btn>
            </template>

            <v-card>
                <v-card-title class="headline grey lighten-2">
                    Create a column
                </v-card-title>

                <v-card-text>
                    <ValidationObserver ref="observer">
                        <v-form ref="form" v-model="valid" lazy-validation>
                            <v-row>
                                <v-col>
                                    <v-input-text
                                        name="name"
                                        rules="required"
                                        type="string"
                                        label="Name"
                                        @input="setName"
                                    ></v-input-text>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col>
                                    <v-input-text
                                        name="description"
                                        rules="required"
                                        type="string"
                                        label="Description"
                                        @input="setDescription"
                                    ></v-input-text>
                                </v-col>
                            </v-row>
                        </v-form>
                    </ValidationObserver>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="submit()">
                        Submit
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
import VInputText from "./VInputText.vue";
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("column");
export default {
    components: {
        VInputText
    },
    props: ["project_id"],
    data: () => ({
        dialog: false,
        name: null,
        description: null,
        valid: false,
    }),
    methods: {
        ...mapActions(["create"]),
        submit() {
            this.$refs.observer.validate().then(result => {
                if (!result) return;
                this.create({
                    name: this.name,
                    description: this.description,
                    project_id: this.project_id
                });
                this.dialog = false;
            });
        },
        setDescription(value) {
            this.description = value;
        },
        setName(value) {
            this.name = value;
        }
    }
};
</script>

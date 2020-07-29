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
                        <v-row>
                            <v-col>
                                <ValidationProvider
                                    name="name"
                                    rules="required"
                                    v-slot="{ errors }"
                                >
                                    <v-text-field
                                        type="string"
                                        autofocus
                                        v-model="name"
                                        label="Name"
                                        :error-messages="errors"
                                    ></v-text-field>
                                </ValidationProvider>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col>
                                <ValidationProvider
                                    name="description"
                                    rules="required"
                                    v-slot="{ errors }"
                                >
                                    <v-text-field
                                        type="string"
                                        autofocus
                                        v-model="description"
                                        label="Description"
                                        :error-messages="errors"
                                    ></v-text-field>
                                </ValidationProvider>
                            </v-col>
                        </v-row>
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
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("column");
export default {
    props: ["project_id"],
    data: () => ({
        dialog: false,
        name: null,
        description: null
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
        }
    }
};
</script>

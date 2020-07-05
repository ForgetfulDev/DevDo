<template>
    <v-container>
        <v-main>
            <v-row>
                <v-col>
                    <v-card>
                        <v-card-title>Register</v-card-title>
                        <v-card-text>
                            <ValidationObserver ref="observer">
                                <v-form
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation
                                >
                                    <ValidationProvider
                                        name="name"
                                        rules="required"
                                        v-slot="{ errors }"
                                    >
                                        <v-text-field
                                            prepend-icon="far fa-user"
                                            autofocus
                                            v-model="name"
                                            label="Name"
                                            :error-messages="errors"
                                        ></v-text-field>
                                    </ValidationProvider>
                                    <ValidationProvider
                                        name="email"
                                        rules="required|email"
                                        v-slot="{ errors }"
                                    >
                                        <v-text-field
                                            prepend-icon="fas fa-envelope"
                                            type="email"
                                            autofocus
                                            v-model="email"
                                            label="E-mail"
                                            :error-messages="errors"
                                        ></v-text-field>
                                    </ValidationProvider>
                                    <ValidationProvider
                                        name="password"
                                        rules="required|min:6|max:120|password:@confirm"
                                        v-slot="{ errors }"
                                    >
                                        <v-text-field
                                            prepend-icon="fas fa-key"
                                            type="password"
                                            :error-messages="errors"
                                            v-model="password"
                                            label="Password"
                                        ></v-text-field>
                                    </ValidationProvider>
                                    <ValidationProvider
                                        name="confirm"
                                        rules="required|min:6|max:120"
                                        v-slot="{ errors }"
                                    >
                                        <v-text-field
                                            prepend-icon="fas fa-key"
                                            type="password"
                                            :error-messages="errors"
                                            v-model="confirmation"
                                            label="Password Confirmation"
                                        ></v-text-field>
                                    </ValidationProvider>
                                </v-form>
                            </ValidationObserver>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn
                                @click="submit"
                                :disabled="!is_valid"
                                color="primary"
                                >Register</v-btn
                            >
                        </v-card-actions>
                    </v-card>
                </v-col>
            </v-row>
        </v-main>
    </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
    data: () => ({
        name: "",
        valid: false,
        email: "",
        password: "",
        confirmation: ""
    }),
    computed: {
        is_valid() {
            return (
                this.valid &&
                this.password.length > 5 &&
                this.confirmation == this.password
            );
        }
    },
    methods: {
        ...mapActions({
            register: "auth/register"
        }),
        submit() {
            this.$refs.observer.validate().then(result => {
                if (!result) return;
                this.register({
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.confirmation,
                    name: this.name
                });
            });
        }
    }
};
</script>

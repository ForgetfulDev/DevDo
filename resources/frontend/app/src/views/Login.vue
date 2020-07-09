<template>
    <v-container>
        <v-main>
            <v-row>
                <v-col>
                    <v-card>
                        <v-card-title>Login</v-card-title>
                        <v-card-text>
                            <ValidationObserver ref="observer">
                                <v-form
                                    ref="form"
                                    v-model="valid"
                                    lazy-validation
                                >
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
                                        rules="min:6|max:120"
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
                                    <v-checkbox
                                        v-model="remember_me"
                                        label="Remember Me"
                                    ></v-checkbox>
                                </v-form>
                            </ValidationObserver>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn
                                @click="submit"
                                :disabled="!email || !password"
                                color="primary"
                                >Login</v-btn
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
        valid: null,
        email: null,
        password: null,
        remember_me: false
    }),
    methods: {
        ...mapActions({
            login: "auth/login"
        }),
        submit() {
            this.$refs.observer.validate().then(result => {
                if (!result) return;
                this.login({
                    email: this.email,
                    password: this.password,
                    remember_me: this.remember_me
                });
            });
        }
    }
};
</script>

<template>
  <v-container>
    <v-main>
      <v-row>
        <v-col>
          <v-card>
            <v-card-title>Login</v-card-title>
            <v-card-text>
              <v-form ref="form" v-model="valid" lazy-validation>
                <ValidationProvider name="email" rules="required|email" v-slot="{ errors }">
                  {{errors}}
                  <v-text-field type="email" autofocus v-model="email" label="E-mail" :class="errors.length != 0 ? 'error--text' : 'success--text'"></v-text-field>
                  <span>{{ errors[0] }}</span>
                </ValidationProvider>

                <v-text-field
                  prepend-icon="mdi-shield-lock"
                  type="password"
                  v-model="password"
                  label="Password"
                ></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn :disabled="!email || !password" color="primary">Login</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-main>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: null,
    email: null,
    password: null
  })
};
</script>

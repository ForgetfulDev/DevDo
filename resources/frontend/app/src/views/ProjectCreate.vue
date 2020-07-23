<template>
  <v-card>
    <v-card-title>New Project</v-card-title>
    <v-card-text>
      <ValidationObserver ref="observer">
        <v-form ref="form" v-model="valid" lazy-validation>
          <ValidationProvider name="text" rules="required|max:120" v-slot="{ errors }">
            <v-text-field type="text" :error-messages="errors" v-model="name" label="Name"></v-text-field>
          </ValidationProvider>
          <ValidationProvider name="text" rules="required" v-slot="{ errors }">
            <v-text-field
              type="text"
              :error-messages="errors"
              v-model="description"
              label="Description"
            ></v-text-field>
          </ValidationProvider>
        </v-form>
      </ValidationObserver>
    </v-card-text>
    <v-card-actions>
      <v-row>
        <v-col>
          <v-btn @click="submit()" :disabled="!text && !description">Create</v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("project");
export default {
  data: () => ({
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
          description: this.description
        });
      });
    }
  }
};
</script>
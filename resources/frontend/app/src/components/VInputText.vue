<template>
    <ValidationProvider :name="name" :rules="rules" v-slot="{ errors }">
        <v-text-field
            :prepend-icon="icon"
            :type="type"
            autofocus
            v-model="input"
            :label="label"
            :error-messages="errors"
        ></v-text-field>
    </ValidationProvider>
</template>

<script>
export default {
    props: ["name", "rules", "icon", "type", "label"],
    data: () => ({
        input: null,
    }),
    watch: {
        input(updated) {
            this.$emit('input', updated);
        }
    },
}
</script>

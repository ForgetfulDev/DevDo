<template>
    <ValidationProvider name="" rules="" v-slot="{ errors }">
        <v-text-field
            prepend-icon=""
            type=""
            autofocus
            v-model="input"
            label=""
            :error-messages="errors"
        ></v-text-field>
    </ValidationProvider>
</template>

<script>
export default {
    props: {
        
    },
    data: () => ({
        input: null,
    })
}
</script>

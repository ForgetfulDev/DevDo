<template>
    <div>

    </div>
</template>

<script>
export default {
     components: {
        ProjectColumn
    },
    props: ["project_id"],
    computed: {
        ...mapGetters(["byId"])
    }
}
</script>
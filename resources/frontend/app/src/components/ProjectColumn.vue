<template>
    <div class="pro-col">
        {{column}}
        test
    </div>
</template>

<script>
export default {
    props: ["column"],
}
</script>

<style lang="sass" scoped>
.pro-col
    width: 10em
    height: 100%
    background-color: blue
</style>
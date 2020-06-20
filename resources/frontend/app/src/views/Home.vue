<template>
    <div>
        <b-navbar>
            <template slot="brand">DEVDO</template>
            <template slot="start">
                <b-navbar-item href="#">Home</b-navbar-item>
                <b-navbar-item href="#">Other</b-navbar-item>
            </template>
            <template slot="end">
                <b-navbar-item tag="div">
                    <div class="buttons">
                        <router-link to="/login" class="button is-light"
                            >Log In</router-link
                        >
                    </div>
                </b-navbar-item>
            </template>
        </b-navbar>
        <div class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">Marketing Page Hero</h1>
                    <h2 class="subtitle">Hero Subtitle</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
    name: "Home"
};
</script>

<template>
    <div id="app">
        <b-navbar>
            <template slot="brand">
                DEVDO
            </template>
            <template slot="start">
                <b-navbar-item href="#">
                    Home
                </b-navbar-item>
                <b-navbar-item href="#">
                    Other
                </b-navbar-item>
            </template>
            <template slot="end">
                <b-navbar-item tag="div">
                    <div class="buttons">
                        <a class="button is-light">
                            Log In
                        </a>
                    </div>
                </b-navbar-item>
            </template>
        </b-navbar>
        <router-view />
    </div>
</template>

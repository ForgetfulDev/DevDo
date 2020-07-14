<template>
    <v-app>
        <v-navigation-drawer v-model="drawer" app>
            <v-list>
                <v-list-item>
                    <!-- todo: Add application logo -->
                    APPLICATION LOGO
                </v-list-item>
                <!-- <v-list-item-group v-model="model" mandatory color="indigo"> -->
                <v-list-item to="/project">
                    <v-list-item-icon>
                        <v-icon v-text="'fas fa-plus'"></v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title>New Project</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-group
                    v-model="model"
                    prepend-icon="fas fa-project-diagram"
                >
                    <template v-slot:activator>
                        <v-list-item-content>
                            <v-list-item-title>
                                Projects
                            </v-list-item-title>
                        </v-list-item-content>
                    </template>
                    <v-list-item
                        v-for="(child, i) in item.children"
                        :key="i"
                        link
                    >
                        <v-list-item-action v-if="child.icon">
                            <v-icon>{{ child.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ child.text }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-group>
                <!-- <v-list-item>
          <v-list-item-icon>
            <v-icon v-text="'fas fa-project-diagram'"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item-content>
        </v-list-item> -->
                <!-- </v-list-item-group> -->
            </v-list>
        </v-navigation-drawer>

        <v-app-bar app>
            <v-btn @click="drawer = !drawer">Login</v-btn>
        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-main>
            <!-- Provides the application the proper gutter -->
            <v-container fluid>
                <!-- If using vue-router -->
                <router-view></router-view>
            </v-container>
        </v-main>

        <v-footer app>
            <!-- -->
        </v-footer>
    </v-app>
</template>

<script>
export default {
    data: () => ({
        drawer: false
    })
};
</script>

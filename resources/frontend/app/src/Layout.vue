<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item>
          <!-- todo: Add application logo -->
          APPLICATION LOGO
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon v-text="'fas fa-project-diagram'"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Projects</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
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

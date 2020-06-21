<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn class="float-right" @click="$router.push('login')">Login</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home"
};
</script>

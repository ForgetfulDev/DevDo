<template>
    <div class="text-center">
        <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
                testing!
                <v-btn icon v-bind="attrs" v-on="on" @click="dialog = true">
                    <v-icon>fas fa-plus</v-icon>
                </v-btn>
            </template>

            <v-card>
                <v-card-title class="headline grey lighten-2">
                    Create a column
                </v-card-title>

                <v-card-text>
                    <v-row>
                        <v-col>
                            
                        </v-col>
                    </v-row>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" text @click="dialog = false">
                        I accept
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
      }
    },
  }
</script>

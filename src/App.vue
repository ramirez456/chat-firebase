<template>
  <v-app>
    <v-card flat>
      <v-toolbar
        color="primary"
        dark
        extended
        flat
      >
      </v-toolbar>

      <v-card
        class="mx-auto"
        max-width="700"
        style="margin-top: -64px;"
      >
        <v-toolbar flat>
          <v-toolbar-title class="grey--text">My Chat</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-location-exit</v-icon>
          </v-btn>
        </v-toolbar>

        <v-divider></v-divider>

        <v-main>
          <v-container>
            <router-view></router-view>
          </v-container>
        </v-main>
      </v-card>
    </v-card>

  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

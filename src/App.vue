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
          <v-toolbar-title class="grey--text">
            <div v-if="user" class="current_user">
              <img style="width: 40px" :src="user.avatar" alt="">
              <p> {{ user.name }} </p>
            </div>
          </v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon @click="logout">
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
import { mapState, mapActions } from 'vuex';
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  name: 'App',
  data: () => ({
    //
  }),
  mounted () {
    const result = firebase.auth().currentUser
    const user = {
      email: result.email,
      uid: result.uid,
      name: result.displayName,
      avatar: result.photoURL
    }
    this.$store.commit('setUser', user);
    // console.log(firebase.auth().currentUser)
  },
  methods: {
    ...mapActions(['logout'])
  },
  computed: {
    ...mapState(['user'])
  }
};
</script>

<style lang="sass">
.current_user
  display: flex
  align-items: center
  p
    margin: 0 !important
    padding: 0
  img
    border-radius: 50%
    margin-right: 10px
</style>
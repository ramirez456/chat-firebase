<template>
  <div class="text-center">
    <v-btn color="primary" @click="loginUser">Login con Google</v-btn>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: 'Home',
  methods: {
    ...mapActions(['loginUser'])
  },
}
</script>

<template>
  <div class="text-center">
    <v-btn v-if="!user" color="primary" @click="loginUser">Login con Google</v-btn>
    <ul>
      <li v-for="(message, i) in messageList" :key="i">
        <img  style="width: 40px" :src="message.avatar" alt="">
        <strong>
          {{ message.user }}
        </strong>
        <p>
          {{ message.text }}
        </p>
      </li>
    </ul>
    <v-text-field
      v-model="messageText"
      label="mensaje aqui..."
      required
      @keyup.13="sendMessage()"
    ></v-text-field>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { database } from '../firebase'

export default {
  name: 'Home',
  data () {
    return {
      messageList: [],
      messageText: ''
    }
  },
  mounted () {
    this.getMessages()
  },
  methods: {
    ...mapActions(['loginUser']),
    getMessages () {
      database.ref('/messages')
        .on('value', (res) => {
          this.messageList = []
          res.forEach((doc) => {
            this.messageList.push(doc.val())
          })
        })
    },
    sendMessage () {
      const msg = {
        text: this.messageText,
        user: this.user.name,
        avatar: this.user.avatar
      }
      database.ref('/messages/'+this.ID())
        .set(msg)
      this.messageText = ''
    },
    ID () {
      return '_' + Math.random().toString(36).substr(2, 9);
    }
  },
  computed: {
    ...mapState(['user'])
  }
}
</script>

<style lang="sass">
ul
  li
    list-style: none
    display: flex
    flex-direction: column
    align-items: flex-start
    border-top: 1px solid gray
    padding-top: 10px
</style>
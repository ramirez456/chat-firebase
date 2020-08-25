<template>
  <div class="text-center">
    <v-btn v-if="!user" color="primary" @click="loginUser">Login con Google</v-btn>
    <ul>
      <li v-for="(message, i) in reverseMessageList" :key="i"
        :class="{'right': message.user == user.name}"
      >
         <v-chip
            pill
            :color="message.user == user.name ? 'primary' : ''"
          >
          <v-avatar left>
            <v-img :src="message.avatar"></v-img>
          </v-avatar>
          {{ message.text }}
        </v-chip>
        <!-- <img  style="width: 40px" :src="message.avatar" alt="">
        <strong>
          {{ message.user }}
        </strong>
        <p>
          {{ message.text }}
        </p> -->
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
            this.messageList.unshift(doc.val())
          })
        })
    },
    sendMessage () {
      const msg = {
        text: this.messageText,
        user: this.user.name,
        avatar: this.user.avatar
      }
      database.ref('/messages/'+this.messageList.length)
        .set(msg)
      this.messageText = ''
    },
    ID () {
      return '_' + Math.random().toString(36).substr(2, 9);
    }
  },
  computed: {
    ...mapState(['user']),
    reverseMessageList () {
      return this.messageList.reverse()
    }
  }
}
</script>

<style lang="sass">
ul
  padding: 0 !important
  margin: 0 !important
  li
    list-style: none
    display: flex
    flex-direction: column
    align-items: flex-start
    padding-top: 15px
    padding-bottom: 15px
    &.right
      display: flex !important
      span
        align-self: flex-end !important
</style>
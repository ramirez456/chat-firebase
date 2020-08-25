import Vue from 'vue'
import Vuex from 'vuex'

import firebase from 'firebase/app'
import { auth } from "../firebase";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload
    }
  },
  actions: {
    loginUser({commit}) {
      let provider = new firebase.auth.GoogleAuthProvider();

      auth.signInWithPopup(provider).then(response => {
        console.log(response);

        const user = {
          email: response.user.email,
          uid: response.user.uid,
          name: response.user.displayName,
          avatar: response.user.photoURL
        }

        commit('setUser', user);

      }).catch(error => {
        console.log('ha ocurrido un error al autenficar', error);
      });
    },
    logout({commit}) {
      auth.signOut().then(function() {
        commit('setUser', null);
      }).catch(function(error) {
        console.log(error);
      });
    }
  },
  modules: {
  }
})

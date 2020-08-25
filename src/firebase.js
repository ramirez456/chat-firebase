import firebase from 'firebase/app'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCcob0zhYUizC9ZdDnPjRXmaIOpFDIko_I",
    authDomain: "vue-firebase-chat-19fe7.firebaseapp.com",
    databaseURL: "https://vue-firebase-chat-19fe7.firebaseio.com",
    projectId: "vue-firebase-chat-19fe7",
    storageBucket: "vue-firebase-chat-19fe7.appspot.com",
    messagingSenderId: "386124787757",
    appId: "1:386124787757:web:515d351edf84bfcdab48a4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

export { auth }
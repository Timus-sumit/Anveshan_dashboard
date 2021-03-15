import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyBjwvWu9GBwv2BoLWT8HXgZBZC1Q_ekUaY",
    authDomain: "anveshan21-c51b2.firebaseapp.com",
    projectId: "anveshan21-c51b2",
    storageBucket: "anveshan21-c51b2.appspot.com",
    messagingSenderId: "229506353651",
    appId: "1:229506353651:web:261677ece1a84fe65cea86"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  export {firebase, googleAuthProvider}
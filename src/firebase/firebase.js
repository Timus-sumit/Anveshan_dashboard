import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyBjwvWu9GBwv2BoLWT8HXgZBZC1Q_ekUaY",
  authDomain: "anveshan21-c51b2.firebaseapp.com",
  databaseURL: "https://anveshan21-c51b2-default-rtdb.firebaseio.com",
  projectId: "anveshan21-c51b2",
  storageBucket: "anveshan21-c51b2.appspot.com",
  messagingSenderId: "229506353651",
  appId: "1:229506353651:web:261677ece1a84fe65cea86"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

  //database.ref('name').set('timus')
  // database.ref('name').once('value').then((snapshot)=>{
  //   console.log(snapshot.val());
  // })

  export {firebase, googleAuthProvider ,database as default};
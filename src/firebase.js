import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  
  apiKey: "AIzaSyAuWdSs1QKquxMmz2I8HfztXdDT4zzycwY",
  authDomain: "fb-messenger-clone-2d742.firebaseapp.com",
  databaseURL: "https://fb-messenger-clone-2d742.firebaseio.com",
  projectId: "fb-messenger-clone-2d742",
  storageBucket: "fb-messenger-clone-2d742.appspot.com",
  messagingSenderId: "209688317100",
  appId: "1:209688317100:web:2c70221e9baf31cbb42309",
  measurementId: "G-NXE59X9TY0"

});

const db = firebaseApp.firestore();

export default db;
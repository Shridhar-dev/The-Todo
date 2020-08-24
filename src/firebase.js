import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAagCsOpyiKd-FrPwPBbTpSdfu0tLSTFT4",
    authDomain: "todo-5b16d.firebaseapp.com",
    databaseURL: "https://todo-5b16d.firebaseio.com",
    projectId: "todo-5b16d",
    storageBucket: "todo-5b16d.appspot.com",
    messagingSenderId: "538032678907",
    appId: "1:538032678907:web:d4cb4585cd299948954d5e"
  };
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default db;
console.log(firebase)
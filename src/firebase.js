// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBufkzFVDE7KSSMamyUDvNwivsiGRh8MJA",
  authDomain: "challenge-dc2ce.firebaseapp.com",
  databaseURL: "https://challenge-dc2ce.firebaseio.com",
  projectId: "challenge-dc2ce",
  storageBucket: "challenge-dc2ce.appspot.com",
  messagingSenderId: "849005514846",
  appId: "1:849005514846:web:b5469109a27d2bbabe64cf",
  measurementId: "G-4L48V2VGJY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
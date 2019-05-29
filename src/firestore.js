import firebase from "firebase";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyABoWX-ZDI_5VKrRdx7sCfy7VqNjQgCTjU",
  authDomain: "auth-a7b3e.firebaseapp.com",
  databaseURL: "https://auth-a7b3e.firebaseio.com",
  projectId: "auth-a7b3e",
  storageBucket: "auth-a7b3e.appspot.com",
  messagingSenderId: "883814482301",
  appId: "1:883814482301:web:b0b09805bc13c003"
};

const firestore = firebase.initializeApp(config);
const db = firebase.firestore();

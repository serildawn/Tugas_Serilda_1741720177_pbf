import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXV2SHdnVvwaXt8cqiq2ra0niYckvR6tE",
  authDomain: "fir-login-bb787.firebaseapp.com",
  databaseURL: "https://fir-login-bb787.firebaseio.com",
  projectId: "fir-login-bb787",
  storageBucket: "fir-login-bb787.appspot.com",
  messagingSenderId: "848709139213",
  appId: "1:848709139213:web:982c0097d515a074838e44",
  measurementId: "G-YZKVH5ETKZ"
  };

  export const myFirebase = firebase.initializeApp(firebaseConfig);
  const baseDb = myFirebase.firestore();
  export const db = baseDb;
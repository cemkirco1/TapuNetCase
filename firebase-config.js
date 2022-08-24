// Import the functions you need from the SDKs you need
/*
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
*/
import * as firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBybD36P-s9nS_o91BNJo-CzAnoqhiRnU4",
  authDomain: "tapu-task.firebaseapp.com",
  projectId: "tapu-task",
  storageBucket: "tapu-task.appspot.com",
  messagingSenderId: "809721268941",
  appId: "1:809721268941:web:65b268ddbffa83735e3784",
  measurementId: "G-TGBB3MSWN1"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth()

export {auth };


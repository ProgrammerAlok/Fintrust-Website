
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/storage'
import 'firebase/compat/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_5MJYoGPCyxSagVcVEX3BDWrkehzSHKY",
    authDomain: "fintrust-b003e.firebaseapp.com",
    projectId: "fintrust-b003e",
    storageBucket: "fintrust-b003e.appspot.com",
    messagingSenderId: "641859289383",
    appId: "1:641859289383:web:a3d93c5b81dad0a2de6902"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const firestore = firebase.firestore();
export const database = {
  user: firestore.collection('user'),
}

export const storage = firebase.storage();
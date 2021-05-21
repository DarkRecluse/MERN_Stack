import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAg8VxeuOeI0yqGJw21LMmDOeopiESNqnY",
    authDomain: "react-auth-21b9f.firebaseapp.com",
    projectId: "react-auth-21b9f",
    storageBucket: "react-auth-21b9f.appspot.com",
    messagingSenderId: "779489707080",
    appId: "1:779489707080:web:1ce0ea951f145cade5c47d",
    measurementId: "G-H69NF8RFEE"
});

export default firebaseConfig;
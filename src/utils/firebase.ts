// src/utils/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAobXBhQSwBuwwYt9RWKJohh4qwpVd8WbA",
    authDomain: "vue-firebase-e40e8.firebaseapp.com",
    projectId: "vue-firebase-e40e8",
    storageBucket: "vue-firebase-e40e8.firebasestorage.app",
    messagingSenderId: "1007950964421",
    appId: "1:1007950964421:web:e2ce670c4ed486c552f2ac"
  };

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);
const googleProvider = new GoogleAuthProvider();
const db = getFirestore(firebase);

export { auth, googleProvider, db };
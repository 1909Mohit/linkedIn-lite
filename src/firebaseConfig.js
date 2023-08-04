// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmmbqXNHZ42l2TYW9HJ4spsBXUYbSeLT0",
  authDomain: "linkedin-lite-9b2fc.firebaseapp.com",
  projectId: "linkedin-lite-9b2fc",
  storageBucket: "linkedin-lite-9b2fc.appspot.com",
  messagingSenderId: "729117750415",
  appId: "1:729117750415:web:b0a2d741621f2766c96cfa"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
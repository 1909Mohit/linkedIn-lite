// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARiuVDzJpoqkFAFTpYOGJ9UJ_OAhDo1kQ",
  authDomain: "linkedin-clone-v1-b6fcd.firebaseapp.com",
  projectId: "linkedin-clone-v1-b6fcd",
  storageBucket: "linkedin-clone-v1-b6fcd.appspot.com",
  messagingSenderId: "1023548280515",
  appId: "1:1023548280515:web:afc5115fa0a6dbb859dc76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
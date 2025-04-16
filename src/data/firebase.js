// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDuXZwpSyFRkeM6Lah3a1CzJ7R1r8LrYk",
  authDomain: "evangelist-bc154.firebaseapp.com",
  projectId: "evangelist-bc154",
  storageBucket: "evangelist-bc154.firebasestorage.app",
  messagingSenderId: "274397829610",
  appId: "1:274397829610:web:b6753de31e306c32893a93",
  measurementId: "G-ZD6VJKR5RW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { app, database, auth, storage };
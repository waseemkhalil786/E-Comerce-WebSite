// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5L65eHV347SsfxdBYsf11V8w4YaJkxds",
  authDomain: "myecom-2270b.firebaseapp.com",
  projectId: "myecom-2270b",
  storageBucket: "myecom-2270b.appspot.com",
  messagingSenderId: "1098819883559",
  appId: "1:1098819883559:web:75c936634f8f31c900f402"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app)

export {fireDB , auth}
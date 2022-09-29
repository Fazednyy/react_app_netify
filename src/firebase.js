// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnkELqG3i2PdhnsLTUPpsIHZ9wah-nxbg",
  authDomain: "react-aut-c47da.firebaseapp.com",
  projectId: "react-aut-c47da",
  storageBucket: "react-aut-c47da.appspot.com",
  messagingSenderId: "337393923661",
  appId: "1:337393923661:web:616d8fc611050099d8ce04"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
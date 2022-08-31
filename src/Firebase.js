// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAp6vom1H-qTUdYMGoPVGhCdJNAom8f0Vw",
  authDomain: "todoapp-79801.firebaseapp.com",
  projectId: "todoapp-79801",
  storageBucket: "todoapp-79801.appspot.com",
  messagingSenderId: "120934559032",
  appId: "1:120934559032:web:c20e088a84aea56091e5cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
 

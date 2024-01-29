// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIX926UwVe3ttBoXpYiTwBz6_e3hBuGFg",
  authDomain: "groceries-20425.firebaseapp.com",
  projectId: "groceries-20425",
  storageBucket: "groceries-20425.appspot.com",
  messagingSenderId: "488634241373",
  appId: "1:488634241373:web:eadaf2e23c47a657a318b4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Export firestore database

export const db = getFirestore(app);

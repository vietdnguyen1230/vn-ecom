// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByqvIYo0gDI-j4chYvWp8qW94MZ69GHss",
  authDomain: "viet-ecom.firebaseapp.com",
  projectId: "viet-ecom",
  storageBucket: "viet-ecom.appspot.com",
  messagingSenderId: "318537805321",
  appId: "1:318537805321:web:5c01a3b1415e5035e312d8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export { auth, db };

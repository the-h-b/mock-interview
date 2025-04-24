// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB-ATDRc3ykV_S4_UIJFzjXa89PJqui0IY",
  authDomain: "taiyari24-92cc7.firebaseapp.com",
  projectId: "taiyari24-92cc7",
  storageBucket: "taiyari24-92cc7.firebasestorage.app",
  messagingSenderId: "433675754757",
  appId: "1:433675754757:web:7279d8e16332ea4b06eb6c",
  measurementId: "G-8J5QX8N226"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);

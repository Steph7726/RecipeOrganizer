import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXHfs546W38_wpb5hKIVatze-StM5NQQE",
  authDomain: "recipe-organizer-f9bc7.firebaseapp.com",
  projectId: "recipe-organizer-f9bc7",
  storageBucket: "recipe-organizer-f9bc7.firebasestorage.app",
  messagingSenderId: "907283353267",
  appId: "1:907283353267:web:dd265f90d55b7fe3756ac6",
  measurementId: "G-5MVPH1ZKFQ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

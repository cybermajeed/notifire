import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAvVvFLrZDQLIqN0m314ANryJu-zUOOY0Y",
  authDomain: "notifire-6339a.firebaseapp.com",
  projectId: "notifire-6339a",
  storageBucket: "notifire-6339a.appspot.com",
  messagingSenderId: "908506103583",
  appId: "1:908506103583:web:6df3490c0b4fd2a5297a2a",
  measurementId: "G-GRPXDXB61V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, signInWithEmailAndPassword, signOut, onAuthStateChanged };

import { initializeApp } from "firebase/app";
import { getStorage, ref as sRef, getDownloadURL } from "firebase/storage";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  initializeAuth,
  getReactNativePersistence,
} from "firebase/auth";
import { getDatabase, ref as dRef, child, get } from "firebase/database";
import AsyncStorage from "@react-native-async-storage/async-storage";
//
const firebaseConfig = {
  apiKey: /*[Your API key]*/,
  authDomain: "notifire-6339a.firebaseapp.com",
  projectId: "notifire-6339a",
  databaseURL: "https://notifire-6339a-default-rtdb.firebaseio.com/",
  storageBucket: "notifire-6339a.appspot.com",
  messagingSenderId: "908506103583",
  appId: "1:908506103583:web:6df3490c0b4fd2a5297a2a",
  measurementId: "G-GRPXDXB61V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const auth = getAuth(app);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
const storageRef = sRef(getStorage(), "timetables");
const database = getDatabase(app);
const dbRef = dRef(database);
//

export {
  auth,
  storageRef,
  sRef,
  get,
  child,
  dbRef,
  getDownloadURL,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
};

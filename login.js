// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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
//const analytics = getAnalytics(app);
const auth = getAuth(app);

let loginBtn = document.getElementById("submit");

loginBtn.addEventListener("click", (e) => {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;
  //
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(`error...${errorMessage}`);
    });
  //
});

//-------------
onAuthStateChanged(auth, (user) => {
  if (user) {
    location.replace("index.html");
  }
});
//-------------

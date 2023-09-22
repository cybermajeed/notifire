// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
//import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
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

//main.js

let topBox = document.querySelector(".topBox"),
  topBoxLogo = topBox.querySelector(".logo"),
  userNameBox = topBox.querySelector(".userNameBox"),
  logoutBox = document.querySelector(".logoutBox"),
  logoutBtn = document.querySelector(".logoutBox button"),
  timeTableBoxImg = document.querySelector(".timeTableBox img");
//-------------
onAuthStateChanged(auth, (user) => {
  if (!user) {
    location.replace("login.html");
  } else {
    let userName = user.email.split("@")[0];
    document.title = `Notifire/${userName}`;
    userNameBox.innerHTML = `Hello! ${userName}`;
    timeTableBoxImg.src = `./timetables/${userName}.png`;
  }
});
//-------------
userNameBox.onclick = () => {
  logoutBox.style.display = "flex";
  console.log("username clicked!");
};
logoutBox.onclick = (e) => {
  if (e.target != logoutBtn) {
    logoutBox.style.display = "none";
  }
};
logoutBtn.onclick = () => {
  signOut(auth)
    .then(() => {
      alert("logged out");
    })
    .catch((error) => {
      alert(error);
    });
};
timeTableBoxImg.onclick = () => {};
//------------

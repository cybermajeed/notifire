// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-auth.js";
import timetables from "./timetable.js";
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
const auth = getAuth(app);

//main.js

let topBox = document.querySelector(".topBox"),
  topBoxLogo = topBox.querySelector(".logo"),
  userNameBox = topBox.querySelector(".userNameBox"),
  logoutBox = document.querySelector(".logoutBox"),
  logoutBtn = document.querySelector(".logoutBox button"),
  timeTableBoxImg = document.querySelector(".timeTableBox img");
//-------------
let userName;
onAuthStateChanged(auth, (user) => {
  if (!user) {
    location.replace("login.html");
  } else {
    userName = user.email.split("@")[0];
    document.title = `Notifire/${userName}`;
    userNameBox.innerHTML = `Hello! ${userName}`;
    timeTableBoxImg.src = `./timetables/${userName}.png`;
  }
});
//-------------
userNameBox.onclick = () => {
  logoutBox.style.display = "flex";
};
logoutBox.onclick = (e) => {
  if (e.target != logoutBtn) {
    logoutBox.style.display = "none";
  }
};
logoutBtn.onclick = () => {
  signOut(auth)
    .then(() => {
      alert("you're logged out");
    })
    .catch((error) => {
      alert(error);
    });
};
window.onresize = changeSize;
function changeSize() {
  timeTableBoxImg.style.height = `${
    window.innerHeight - 5 - topBox.getBoundingClientRect().height
  }px`;
}
changeSize();
//------------

//notify
function today() {
  const days = ["monday", "tuesday", "wednesday", "thursday", "friday"];
}
function showNotification(periodNum, today) {
  const newNotif = new Notification("Time for class!!!", {
    body: `${timetables[`${userName}`][`${today}`][periodNum]}`,
    icon: "./assets/cehs.png",
    vibrate: true,
  });
  newNotif.onclick = () => {
    window.open(location.href, "_blank");
  };
}
Notification.requestPermission().then((permission) => {
  if (permission == "granted") {
    setInterval(() => {
      let hour = new Date().getHours() - 12,
        mins = new Date().getMinutes() - 12;
      // mon,tue,wed,thur
      if (!(today() in [0 /*sun*/, 5 /*fri*/, 6 /*sat*/])) {
        //period 1
        if ([hour, mins].join() == [8, 15].join()) {
          //showNotification(periodNum, day);
          showNotification(1, today());
        }
      }
    }, 2000);
  } else if (permission == "denied") {
    alert("Notification Blocked");
  }
});

//notify ends

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
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
    sessionStorage.setItem("userName", userName);
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
const timetables = {
  manju: {
    subject: "physics",
    monday: ["", "12A", "", "", "12A", "12A", "", ""],
    tuesday: ["", "", "", "12A", "12A", "", "12A", ""],
    wednesday: ["", "11A", "11A", "", "12A", "", "", ""],
    thursday: ["", "11A", "11A", "", "", "12A", "11A", ""],
    friday: ["", "12A", "", ""],
  },
};
/*
timing
1 - 8:15
2 - 8:55
3 - 9:35
4 - 10:30
5 - 11:10
6 - 12:05
7 - 12:45
8 - 13:25

fri
1 - 8:20
2 - 9:05
3 - 10:05
4 - 10:50
*/
const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];
function showNotification(periodNum, today) {
  let periodName = timetables[sessionStorage.userName][today][periodNum - 1];
  let body = `${
    timetables[sessionStorage.userName]["subject"]
  } @ ${periodName}`;
  let title = "Time for Class!!!";
  if (periodName == "") {
    title = "Relax!!!";
    body = "It's a Free Period";
  }

  const newNotif = new Notification(title, {
    body: body,
    icon: "./assets/logo.png",
  });
  newNotif.onclick = () => {
    window.open(location.href, "_blank");
  };
}
Notification.requestPermission().then((permission) => {
  if (permission == "granted") {
    setInterval(() => {
      let hour = new Date().getHours(),
        mins = new Date().getMinutes(),
        today = new Date().getDay();
      // mon,tue,wed,thur
      if (today in [1, 2, 3, 4]) {
        //period 1
        if ([hour, mins].join() == [8, 15].join()) {
          //showNotification(periodNum, day);
          showNotification(1, days[today]);
        }
        //period 2
        else if ([hour, mins].join() == [18, 47].join()) {
          //showNotification(periodNum, day);
          showNotification(2, days[today]);
        }
        //period 3
        else if ([hour, mins].join() == [9, 35].join()) {
          //showNotification(periodNum, day);
          showNotification(3, days[today]);
        }
        //period 4
        else if ([hour, mins].join() == [10, 30].join()) {
          //showNotification(periodNum, day);
          showNotification(4, days[today]);
        }
        //period 5
        else if ([hour, mins].join() == [11, 10].join()) {
          //showNotification(periodNum, day);
          showNotification(5, days[today]);
        }
        //period 6
        else if ([hour, mins].join() == [12, 5].join()) {
          //showNotification(periodNum, day);
          showNotification(6, days[today]);
        }
        //period 7
        else if ([hour, mins].join() == [12, 45].join()) {
          //showNotification(periodNum, day);
          showNotification(7, days[today]);
        }
        //period 8
        else if ([hour, mins].join() == [13, 25].join()) {
          //showNotification(periodNum, day);
          showNotification(8, days[today]);
        }
      }
      //fri
      if (today == 5) {
        //period 1
        if ([hour, mins].join() == [8, 20].join()) {
          //showNotification(periodNum, day);
          showNotification(1, days[today]);
        }
        //period 2
        if ([hour, mins].join() == [9, 5].join()) {
          //showNotification(periodNum, day);
          showNotification(1, days[today]);
        }
        //period 3
        if ([hour, mins].join() == [10, 5].join()) {
          //showNotification(periodNum, day);
          showNotification(1, days[today]);
        }
        //period 4
        if ([hour, mins].join() == [10, 50].join()) {
          //showNotification(periodNum, day);
          showNotification(1, days[today]);
        }
      }
    }, 2000);
  } else if (permission == "denied") {
    alert("Notification Blocked");
  }
});

//notify ends

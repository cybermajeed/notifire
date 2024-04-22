import { StatusBar } from "expo-status-bar";
import {
  View,
  SafeAreaView,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
  Alert,
  ToastAndroid,
  Platform,
} from "react-native";
import { styles } from "../style";
import { useState, useEffect } from "react";
import { auth, child, dbRef, get, signInWithEmailAndPassword } from "../auth";
import { schedulePushNotification } from "./dashboard";
//
/*
let t = {
  subject: "Physics",
  friday: ["", "12A", "", ""],
  monday: ["", "12A", "", "", "12A", "12A", "", ""],
  thursday: ["", "11A", "11A", "", "", "12A", "11A", ""],
  tuesday: ["", "", "", "12A", "12A", "", "12A", ""],
  wednesday: ["", "11A", "11A", "", "12A", "", "", ""],
};


-------------FORMAT-------------
[
  {
    "subject": "Physics",
    "friday": [
      "Free Period",
      "12A",
      "Free Period",
      "Free Period"
    ],
    "monday": [
      "Free Period",
      "12A",
      "Free Period",
      "12B",
      "12A",
      "12A",
      "Free Period",
      "11A"
    ],
    "thursday": [
      "11B",
      "11A",
      "11A",
      "Free Period",
      "Free Period",
      "12A",
      "11A",
      "Free Period"
    ],
    "tuesday": [
      "11A",
      "12A",
      "Free Period",
      "12A",
      "12A",
      "Free Period",
      "12A",
      "Free Period"
    ],
    "wednesday": [
      "Free Period",
      "11A",
      "11A",
      "11B",
      "12A",
      "11A",
      "11A",
      "Free Period"
    ]
  }
]
-------------FORMAT ENDS-------------
*/
export default function App({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        /////////////////////////
        let timetable = [];
        let day = new Date().getDay();
        let dayNameList = [
          "sunday",
          "monday",
          "tuesday",
          "wednesday",
          "thursday",
          "friday",
          "saturday",
        ];
        let dayName = dayNameList[day];
        ////////////////////////////////
        const displayName = user.email.split("@")[0].toUpperCase();
        get(child(dbRef, `timetables/${displayName.toLowerCase()}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              timetable = snapshot.val()[0];
              //schedulePushNotification(hr, min, displayName, period);
              if (day != 0 && day != 6) {
                if (day == 5) {
                  //period 1
                  schedulePushNotification(
                    8,
                    20,
                    displayName,
                    timetable["friday"][0]
                  );
                  //period 2
                  schedulePushNotification(
                    9,
                    5,
                    displayName,
                    timetable["friday"][1]
                  );
                  //break
                  schedulePushNotification(9, 50, displayName, "Interval");
                  //period 3
                  schedulePushNotification(
                    10,
                    10,
                    displayName,
                    timetable["friday"][2]
                  );
                  //period 4
                  schedulePushNotification(
                    10,
                    55,
                    displayName,
                    timetable["friday"][3]
                  );
                } else {
                  //period 1
                  schedulePushNotification(
                    8,
                    15,
                    displayName,
                    timetable[dayName][0]
                  );
                  //period 2
                  schedulePushNotification(
                    8,
                    55,
                    displayName,
                    timetable[dayName][1]
                  );
                  //period 3
                  schedulePushNotification(
                    9,
                    35,
                    displayName,
                    timetable[dayName][2]
                  );
                  //break
                  schedulePushNotification(10, 15, displayName, "Interval");
                  //period 4
                  schedulePushNotification(
                    10,
                    35,
                    displayName,
                    timetable[dayName][3]
                  );
                  //period 5
                  schedulePushNotification(
                    11,
                    15,
                    displayName,
                    timetable[dayName][4]
                  );
                  //period 6
                  schedulePushNotification(
                    11,
                    55,
                    displayName,
                    timetable[dayName][5]
                  );
                  //break
                  // 12 35
                  schedulePushNotification(12, 35, displayName, "Interval");
                  //period 7
                  //12 45
                  schedulePushNotification(
                    12,
                    45,
                    displayName,
                    timetable[dayName][6]
                  );
                  //period 8
                  schedulePushNotification(
                    13,
                    25,
                    displayName,
                    timetable[dayName][7]
                  );
                }
              }
              ////////////////////////////////
            }
          })
          .catch((error) => {
            console.error("----", error);
          });
        //notify
        navigation.navigate("Dashboard");
      } else {
        navigation.navigate("Login");
      }
      setUsername("");
      setPassword("");
      this.usrnmInp.clear();
      this.pswdInp.clear();
    });
    return unsubscribe;
  }, []);
  //
  const LoginUser = () => {
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("logged in as: " + user.email);
        // ...
      })
      .catch((error) => {
        Platform.OS == "android"
          ? ToastAndroid.show(
              error.code.split("/")[1].toUpperCase(),
              ToastAndroid.SHORT
            )
          : Alert.alert("Alert", error.code.split("/")[1].toUpperCase());
      });
  };
  //
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.bg}></View>
      <View style={styles.loginScreen}>
        <View style={styles.loginScreen.cehsLogo}>
          <Image
            source={require("../assets/cehs.png")}
            style={{ height: "100%", resizeMode: "contain" }}
          />
        </View>
        <Text
          style={{
            backgroundColor: "#8300fd",
            color: "#fff",
            width: "100%",
            textAlign: "center",
            fontSize: 20,
            paddingVertical: 10,
          }}
        >
          Welcome To Notifire
        </Text>
        <View style={styles.loginScreen.loginInputs}>
          <TextInput
            autoComplete="email"
            placeholder="Username"
            autoCapitalize="none"
            onChangeText={(usrnm) => setUsername(usrnm)}
            placeholderTextColor={"#949494"}
            keyboardType="email-address"
            style={styles.loginScreen.loginInputs.username}
            ref={(inp) => {
              this.usrnmInp = inp;
            }}
          />
          <TextInput
            placeholder="Password"
            autoCapitalize="none"
            placeholderTextColor={"#949494"}
            onChangeText={(pswd) => setPassword(pswd)}
            secureTextEntry={true}
            style={styles.loginScreen.loginInputs.password}
            ref={(inp) => {
              this.pswdInp = inp;
            }}
          />

          <TouchableOpacity
            onPress={LoginUser}
            style={styles.loginScreen.loginInputs.loginBtn}
          >
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

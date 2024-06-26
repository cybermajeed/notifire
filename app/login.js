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
import {
  scheduleOnFriday,
  scheduleOnMonday,
  scheduleOnThursday,
  scheduleOnTuesday,
  scheduleOnWednesday,
} from "./schedulePerDay";
//
/*
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
        /////////////////////////
        let timetable = [];
        const displayName = user.email.split("@")[0].toUpperCase();
        get(child(dbRef, `timetables/${displayName.toLowerCase()}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              timetable = snapshot.val()[0];
              scheduleOnMonday(displayName, timetable["monday"]);
              scheduleOnTuesday(displayName, timetable["tuesday"]);
              scheduleOnWednesday(displayName, timetable["wednesday"]);
              scheduleOnThursday(displayName, timetable["thursday"]);
              scheduleOnFriday(displayName, timetable["friday"]);
            }
          })
          .catch((error) => {
            console.error("----", error);
          });
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

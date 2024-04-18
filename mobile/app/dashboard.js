import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../style";
import {
  auth,
  signOut,
  onAuthStateChanged,
  sRef,
  storageRef,
  getDownloadURL,
  get,
  child,
  dbRef,
} from "../auth";
import { useState } from "react";
export default function App() {
  const [name, setName] = useState("");
  const [ttUrl, setTtUrl] = useState("");
  const [timetableJSON, setTimetableJSON] = useState("");
  const loadingImg =
    "https://firebasestorage.googleapis.com/v0/b/notifire-6339a.appspot.com/o/timetables%2Floading.png?alt=media&token=cdce32e0-f5d1-4eba-a106-a535a0ebb818";
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const displayName = user.email.split("@")[0].toUpperCase();
      setName(displayName);
      if (name) {
        getDownloadURL(sRef(storageRef, `${name.toLowerCase()}.png`))
          .then((url) => {
            setTtUrl(url);
          })
          .catch((error) => {
            console.log(error);
            setTtUrl(loadingImg);
          });
        /////////////////////////
        get(child(dbRef, `timetables/${name.toLowerCase()}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              setTimetableJSON(snapshot.val());
            }
          })
          .catch((error) => {
            console.error("----", error);
          });
        /////////////////////////
      }
    }
  });
  const LogoutUser = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "No",
        style: "cancel",
        onPress: () => console.log(timetableJSON),
      },
      {
        text: "Yes",
        onPress: () => {
          signOut(auth)
            .then(() => {
              console.log("signed out");
            })
            .catch((error) => {
              console.log("signout error: " + error);
            });
        },
      },
    ]);
  };
  //notify
  //
  return (
    <SafeAreaView style={[styles.container, styles.dashBoard]}>
      <StatusBar style="auto" />
      <View style={styles.dashBoard.topNavBar}>
        <View style={styles.dashBoard.topNavBar.ImgView}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.dashBoard.topNavBar.Img}
          />
        </View>
        <View style={styles.dashBoard.topNavBar.welcomeBtnView}>
          <TouchableOpacity
            onPress={LogoutUser}
            style={styles.dashBoard.topNavBar.welcomeBtn}
          >
            <Text>Hi, {name}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.dashBoard.timeTableArea}>
        <Image
          style={styles.dashBoard.timeTableArea.Img}
          source={{
            uri: ttUrl ? ttUrl : loadingImg,
          }}
        />
      </View>
    </SafeAreaView>
  );
}

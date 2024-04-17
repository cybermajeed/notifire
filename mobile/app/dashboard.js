import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../style";
import { auth, signOut, onAuthStateChanged } from "../auth";
import { useState } from "react";
export default function App({ navigation }) {
  const [name, setName] = useState("");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const name = user.email.split("@")[0].toUpperCase();
      setName(name);
    }
  });
  const LogoutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out");
      })
      .catch((error) => {
        console.log("signout error: " + error);
      });
  };
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
          source={require("../assets/developer.png")}
        />
      </View>
    </SafeAreaView>
  );
}

import {
  View,
  SafeAreaView,
  Image,
  TextInput,
  Text,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { styles } from "../style";
import { useState, useEffect } from "react";
import { auth, signInWithEmailAndPassword } from "../auth";

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
    //
    signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("logged in as: " + user.email);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
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
            onPress={() => {
              if (username.trim() && password.trim()) {
                LoginUser;
              }
            }}
            style={styles.loginScreen.loginInputs.loginBtn}
          >
            <Text>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

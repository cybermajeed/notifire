import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TextInput,
  Platform,
  Pressable,
} from "react-native";
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bg}></View>
      <View style={styles.loginScreen}>
        <View style={styles.loginScreen.cehsLogo}>
          <Image
            source={require("./assets/cehs.png")}
            style={{ height: "100%", resizeMode: "contain" }}
          />
        </View>
        <View style={styles.loginScreen.loginInputs}>
          <TextInput
            placeholder="Username"
            placeholderTextColor={"#949494"}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={"#949494"}
            secureTextEntry={true}
          />
        </View>
      </View>
    </SafeAreaView>
    /*
    https://www.youtube.com/watch?v=2hR-uWjBAgw
    */
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bg: {
    flex: 0.5,
    backgroundColor: "dodgerblue",
    height: "100%",
    width: "200%",
    position: "absolute",
    top: "-50%",
    left: "-50%",
    transform: "rotate(-15deg)",
  },
  loginScreen: {
    height: "90%",
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cehsLogo: {
      width: "100%",
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    loginInputs: {
      flex: 2,
      width: "100%",
      height: 100,
      username: {},
      password: {},
      loginBtn: {},
    },
    ...Platform.select({
      default: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 15,
        shadowOpacity: 0.5,
      },
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 15,
        shadowOpacity: 0.5,
      },
      android: {
        elevation: 8,
      },
    }),
  },
});

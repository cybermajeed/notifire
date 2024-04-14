import {
  StyleSheet,
  View,
  SafeAreaView,
  Image,
  TextInput,
  Platform,
  Pressable,
  Text,
  Alert,
} from "react-native";
/*
https://www.youtube.com/watch?v=v2R0DFXqaF0
https://www.youtube.com/watch?v=2hR-uWjBAgw
*/
export default function App() {
  const loginUser = () => {
    Platform.OS === "web"
      ? alert("logged in", "Yes true")
      : Alert.alert("logged in", "Yes true");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bg}></View>
      <View style={styles.loginScreen}>
        <View style={styles.loginScreen.cehsLogo}>
          <Image
            source={require("./assets/cehs.png")}
            style={{ width: "100%", resizeMode: "contain" }}
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
            placeholder="Username"
            placeholderTextColor={"#949494"}
            keyboardType="email-address"
            style={styles.loginScreen.loginInputs.username}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor={"#949494"}
            secureTextEntry={true}
            style={styles.loginScreen.loginInputs.password}
          />
          <Pressable
            onPress={loginUser}
            style={styles.loginScreen.loginInputs.loginBtn}
          >
            <Text>Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
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
    height: "85%",
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cehsLogo: {
      width: "100%",
      flex: 1.8,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    loginInputs: {
      flex: 1.2,
      width: "100%",
      height: 100,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 20,
      username: {
        width: "80%",
        backgroundColor: "#ebebeb",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 6,
      },
      password: {
        width: "80%",
        backgroundColor: "#ebebeb",
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 6,
      },
      loginBtn: {
        paddingVertical: 10,
        paddingHorizontal: 25,
        marginTop: 10,
        borderRadius: 100,
        ...Platform.select({
          default: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 3 },
            shadowRadius: 5,
            shadowOpacity: 0.4,
          },
          ios: {
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 3 },
            shadowRadius: 5,
            shadowOpacity: 0.4,
          },
          android: {
            elevation: 5,
          },
        }),
      },
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

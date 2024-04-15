import { SafeAreaView, Button, Text } from "react-native";
import { styles } from "./styles";
import { auth, signOut, onAuthStateChanged } from "./auth";
import { useState } from "react";
export default function App({ navigation }) {
  const [name, setName] = useState("");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const name = user.email;
      setName(name);
    }
  });
  const LogoutUser = () => {
    signOut(auth)
      .then(() => {
        console.log("signed out");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello {name.split("@")[0]}</Text>
      <Button title="Logout" onPress={LogoutUser} />
    </SafeAreaView>
  );
}

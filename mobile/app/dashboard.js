import { SafeAreaView, Button, Text } from "react-native";
import { styles } from "../style";
import { auth, signOut, onAuthStateChanged } from "../auth";
import { useState } from "react";
export default function App({ navigation }) {
  const [name, setName] = useState("");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const name = user.email.split("@")[0];
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
      <Text>Hello {name}</Text>
      <Button title="Logout" onPress={LogoutUser} />
    </SafeAreaView>
  );
}

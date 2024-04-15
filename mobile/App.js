import loginPage from "./login";
import userPage from "./user";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

/*
https://docs.expo.dev/guides/using-firebase/
search youtube for firebase login localstorage
notify user when username is wrong
*/

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={loginPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="User"
          component={userPage}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

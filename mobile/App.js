import userLogin from "./app/login";
import userDashboard from "./app/dashboard";
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
          component={userLogin}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Dashboard"
          component={userDashboard}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

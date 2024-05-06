import userLogin from "./app/login";
import userDashboard from "./app/dashboard";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Updates from "expo-updates";
//
const Stack = createNativeStackNavigator();

export default function App() {
  //
  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();
      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      // You can also add an alert() to see the error message in case of an error when fetching updates.
      alert(`Error fetching latest update: ${error}`);
    }
  }
  //
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

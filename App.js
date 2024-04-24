import userLogin from "./app/login";
import userDashboard from "./app/dashboard";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//
const Stack = createNativeStackNavigator();

export default function App() {
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

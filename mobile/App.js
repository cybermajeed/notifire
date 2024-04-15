import loginPage from "./login";
import userPage from "./user";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

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

import { StatusBar } from "expo-status-bar";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "../style";
import {
  auth,
  signOut,
  onAuthStateChanged,
  sRef,
  storageRef,
  getDownloadURL,
} from "../auth";
import { useEffect, useRef, useState } from "react";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
///////
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  }),
});
///////////////
export default function App() {
  ////////////
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();
  ///////////notify
  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );

    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);
  //////
  const [name, setName] = useState("");
  const [ttUrl, setTtUrl] = useState("");
  const loadingImg =
    "https://firebasestorage.googleapis.com/v0/b/notifire-6339a.appspot.com/o/timetables%2Floading.png?alt=media&token=7b5e8177-c8e2-41a9-8351-abb06ca38b21";
  //

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const displayName = user.email.split("@")[0].toUpperCase();
      setName(displayName);
      if (name) {
        getDownloadURL(sRef(storageRef, `${name.toLowerCase()}.png`))
          .then((url) => {
            setTtUrl(url);
          })
          .catch((error) => {
            console.log(error);
            setTtUrl(loadingImg);
          });
        ///
      }
    }
  });
  const LogoutUser = () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "No",
        style: "cancel",
      },
      {
        text: "Yes",
        onPress: () => {
          signOut(auth)
            .then(() => {
              Notifications.cancelAllScheduledNotificationsAsync();
              console.log("signed out");
            })
            .catch((error) => {
              console.log("signout error: " + error);
            });
        },
      },
    ]);
  };
  /////////////////////////////////////////////////////////////////////
  return (
    <SafeAreaView style={[styles.container, styles.dashBoard]}>
      <StatusBar style="auto" />
      <View style={styles.dashBoard.topNavBar}>
        <View style={styles.dashBoard.topNavBar.ImgView}>
          <Image
            source={require("../assets/logo.png")}
            style={styles.dashBoard.topNavBar.Img}
          />
        </View>
        <View style={styles.dashBoard.topNavBar.welcomeBtnView}>
          <TouchableOpacity
            onPress={LogoutUser}
            style={styles.dashBoard.topNavBar.welcomeBtn}
          >
            <Text>Hi, {name}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.dashBoard.timeTableArea}>
        <Image
          style={styles.dashBoard.timeTableArea.Img}
          source={{
            uri: ttUrl ? ttUrl : loadingImg,
          }}
        />
      </View>
    </SafeAreaView>
  );
}
//////////
async function registerForPushNotificationsAsync() {
  let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }
    token = (
      await Notifications.getExpoPushTokenAsync({
        projectId: "6a9a0921-daaa-4b4d-a43e-484daa7660d0",
      })
    ).data;
  } else {
    alert("Must use physical device for Push Notifications");
  }
  return token;
}

export { Notifications };

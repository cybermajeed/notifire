import { StyleSheet, Platform } from "react-native";

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
      minHeight: 100,
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
            elevation: 2,
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

export { styles };

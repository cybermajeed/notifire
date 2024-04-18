//getTimetableJSON(username), setInterval() -> backgroundNotification(periodNum)
//https://dev.to/medaimane/background-processing-in-react-native-exploring-techniques-for-efficient-task-handling-2cbf
//https://www.linkedin.com/pulse/how-use-local-notifications-react-native-waqas-khan
/*
{
    subject: "Physics",
    monday: ["", "12A", "", "", "12A", "12A", "", ""],
    tuesday: ["", "", "", "12A", "12A", "", "12A", ""],
    wednesday: ["", "11A", "11A", "", "12A", "", "", ""],
    thursday: ["", "11A", "11A", "", "", "12A", "11A", ""],
    friday: ["", "12A", "", ""],
}
*/
import { child, dbRef, get, userDisplayName } from "../auth";

get(child(dbRef, `timetables/manju`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  })
  .catch((error) => {
    console.error("----", error);
  });

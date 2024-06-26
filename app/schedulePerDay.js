import { Notifications } from "./dashboard";

export async function scheduleOnMonday(displayName, periodsList) {
  //period 1
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[0] == "Free Period"
          ? periodsList[0]
          : `8:15 - Class @ ${periodsList[0]}`,
    },
    trigger: {
      hour: 8,
      minute: 15,
      weekday: 2,
      repeats: true,
    },
  });
  // period 2
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[1] == "Free Period"
          ? periodsList[1]
          : `8:55 - Class @ ${periodsList[1]}`,
    },
    trigger: {
      hour: 8,
      minute: 55,
      weekday: 2,
      repeats: true,
    },
  });
  // period 3
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[2] == "Free Period"
          ? periodsList[2]
          : `9:35 - Class @ ${periodsList[2]}`,
    },
    trigger: {
      hour: 9,
      minute: 35,
      weekday: 2,
      repeats: true,
    },
  });
  // Interval
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body: "10:15 - Interval",
    },
    trigger: {
      hour: 10,
      minute: 15,
      weekday: 2,
      repeats: true,
    },
  });
  // period 4
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[3] == "Free Period"
          ? periodsList[3]
          : `10:35 - Class @ ${periodsList[3]}`,
    },
    trigger: {
      hour: 10,
      minute: 35,
      weekday: 2,
      repeats: true,
    },
  });
  // period 5
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[4] == "Free Period"
          ? periodsList[4]
          : `11:15 - Class @ ${periodsList[4]}`,
    },
    trigger: {
      hour: 11,
      minute: 15,
      weekday: 2,
      repeats: true,
    },
  });
  // period 6
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[5] == "Free Period"
          ? periodsList[5]
          : `11:55 - Class @ ${periodsList[5]}`,
    },
    trigger: {
      hour: 11,
      minute: 55,
      weekday: 2,
      repeats: true,
    },
  });
  // Interval
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body: "12:35 - Interval",
    },
    trigger: {
      hour: 12,
      minute: 35,
      weekday: 2,
      repeats: true,
    },
  });
  // period 7
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[6] == "Free Period"
          ? periodsList[6]
          : `12:45 - Class @ ${periodsList[6]}`,
    },
    trigger: {
      hour: 12,
      minute: 45,
      weekday: 2,
      repeats: true,
    },
  });
  // period 8
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[7] == "Free Period"
          ? periodsList[7]
          : `13:25  - Class @ ${periodsList[7]}`,
    },
    trigger: {
      hour: 13,
      minute: 25,
      weekday: 2,
      repeats: true,
    },
  });
}
export async function scheduleOnTuesday(displayName, periodsList) {
  //period 1
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[0] == "Free Period"
          ? periodsList[0]
          : `8:15 - Class @ ${periodsList[0]}`,
    },
    trigger: {
      hour: 8,
      minute: 15,
      weekday: 3,
      repeats: true,
    },
  });
  // period 2
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[1] == "Free Period"
          ? periodsList[1]
          : `8:55 - Class @ ${periodsList[1]}`,
    },
    trigger: {
      hour: 8,
      minute: 55,
      weekday: 3,
      repeats: true,
    },
  });
  // period 3
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[2] == "Free Period"
          ? periodsList[2]
          : `9:35 - Class @ ${periodsList[2]}`,
    },
    trigger: {
      hour: 9,
      minute: 35,
      weekday: 3,
      repeats: true,
    },
  });
  // Interval
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body: "10:15 - Interval",
    },
    trigger: {
      hour: 10,
      minute: 15,
      weekday: 3,
      repeats: true,
    },
  });
  // period 4
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[3] == "Free Period"
          ? periodsList[3]
          : `10:35 - Class @ ${periodsList[3]}`,
    },
    trigger: {
      hour: 10,
      minute: 35,
      weekday: 3,
      repeats: true,
    },
  });
  // period 5
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[4] == "Free Period"
          ? periodsList[4]
          : `11:15 - Class @ ${periodsList[4]}`,
    },
    trigger: {
      hour: 11,
      minute: 15,
      weekday: 3,
      repeats: true,
    },
  });
  // period 6
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[5] == "Free Period"
          ? periodsList[5]
          : `11:55 - Class @ ${periodsList[5]}`,
    },
    trigger: {
      hour: 11,
      minute: 55,
      weekday: 3,
      repeats: true,
    },
  });
  // Interval
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body: "12:35  - Interval",
    },
    trigger: {
      hour: 12,
      minute: 35,
      weekday: 3,
      repeats: true,
    },
  });
  // period 7
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[6] == "Free Period"
          ? periodsList[6]
          : `12:45 - Class @ ${periodsList[6]}`,
    },
    trigger: {
      hour: 12,
      minute: 45,
      weekday: 3,
      repeats: true,
    },
  });
  // period 8
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[7] == "Free Period"
          ? periodsList[7]
          : `13:25 - Class @ ${periodsList[7]}`,
    },
    trigger: {
      hour: 13,
      minute: 25,
      weekday: 3,
      repeats: true,
    },
  });
}
export async function scheduleOnWednesday(displayName, periodsList) {
  //period 1
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[0] == "Free Period"
          ? periodsList[0]
          : `8:15 - Class @ ${periodsList[0]}`,
    },
    trigger: {
      hour: 8,
      minute: 15,
      weekday: 4,
      repeats: true,
    },
  });
  // period 2
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[1] == "Free Period"
          ? periodsList[1]
          : `8:55 - Class @ ${periodsList[1]}`,
    },
    trigger: {
      hour: 8,
      minute: 55,
      weekday: 4,
      repeats: true,
    },
  });
  // period 3
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[2] == "Free Period"
          ? periodsList[2]
          : `9:35  - Class @ ${periodsList[2]}`,
    },
    trigger: {
      hour: 9,
      minute: 35,
      weekday: 4,
      repeats: true,
    },
  });
  // Interval
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body: "10:15 - Interval",
    },
    trigger: {
      hour: 10,
      minute: 15,
      weekday: 4,
      repeats: true,
    },
  });
  // period 4
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[3] == "Free Period"
          ? periodsList[3]
          : `10:35 - Class @ ${periodsList[3]}`,
    },
    trigger: {
      hour: 10,
      minute: 35,
      weekday: 4,
      repeats: true,
    },
  });
  // period 5
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[4] == "Free Period"
          ? periodsList[4]
          : `11:15 - Class @ ${periodsList[4]}`,
    },
    trigger: {
      hour: 11,
      minute: 15,
      weekday: 4,
      repeats: true,
    },
  });
  // period 6
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[5] == "Free Period"
          ? periodsList[5]
          : `11:55 - Class @ ${periodsList[5]}`,
    },
    trigger: {
      hour: 11,
      minute: 55,
      weekday: 4,
      repeats: true,
    },
  });
  // Interval
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body: "12:35 - Interval",
    },
    trigger: {
      hour: 12,
      minute: 35,
      weekday: 4,
      repeats: true,
    },
  });
  // period 7
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[6] == "Free Period"
          ? periodsList[6]
          : `12:45 - Class @ ${periodsList[6]}`,
    },
    trigger: {
      hour: 12,
      minute: 45,
      weekday: 4,
      repeats: true,
    },
  });
  // period 8
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[7] == "Free Period"
          ? periodsList[7]
          : `13:25 - Class @ ${periodsList[7]}`,
    },
    trigger: {
      hour: 13,
      minute: 25,
      weekday: 4,
      repeats: true,
    },
  });
}
export async function scheduleOnThursday(displayName, periodsList) {
  //period 1
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[0] == "Free Period"
          ? periodsList[0]
          : `8:15 - Class @ ${periodsList[0]}`,
    },
    trigger: {
      hour: 8,
      minute: 15,
      weekday: 5,
      repeats: true,
    },
  });
  // period 2
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[1] == "Free Period"
          ? periodsList[1]
          : `8:55 - Class @ ${periodsList[1]}`,
    },
    trigger: {
      hour: 8,
      minute: 55,
      weekday: 5,
      repeats: true,
    },
  });
  // period 3
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[2] == "Free Period"
          ? periodsList[2]
          : `9:35 - Class @ ${periodsList[2]}`,
    },
    trigger: {
      hour: 9,
      minute: 35,
      weekday: 5,
      repeats: true,
    },
  });
  // Interval
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body: "10:15 - Interval",
    },
    trigger: {
      hour: 10,
      minute: 15,
      weekday: 5,
      repeats: true,
    },
  });
  // period 4
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[3] == "Free Period"
          ? periodsList[3]
          : `10:35 - Class @ ${periodsList[3]}`,
    },
    trigger: {
      hour: 10,
      minute: 35,
      weekday: 5,
      repeats: true,
    },
  });
  // period 5
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[4] == "Free Period"
          ? periodsList[4]
          : `11:15 - Class @ ${periodsList[4]}`,
    },
    trigger: {
      hour: 11,
      minute: 15,
      weekday: 5,
      repeats: true,
    },
  });
  // period 6
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[5] == "Free Period"
          ? periodsList[5]
          : `11:55 - Class @ ${periodsList[5]}`,
    },
    trigger: {
      hour: 11,
      minute: 55,
      weekday: 5,
      repeats: true,
    },
  });
  // Interval
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body: "12:35 - Interval",
    },
    trigger: {
      hour: 12,
      minute: 35,
      weekday: 5,
      repeats: true,
    },
  });
  // period 7
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[6] == "Free Period"
          ? periodsList[6]
          : `12:45 - Class @ ${periodsList[6]}`,
    },
    trigger: {
      hour: 12,
      minute: 45,
      weekday: 5,
      repeats: true,
    },
  });
  // period 8
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[7] == "Free Period"
          ? periodsList[7]
          : `13:25 - Class @ ${periodsList[7]}`,
    },
    trigger: {
      hour: 13,
      minute: 25,
      weekday: 5,
      repeats: true,
    },
  });
}
export async function scheduleOnFriday(displayName, periodsList) {
  //period 1
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[0] == "Free Period"
          ? periodsList[0]
          : `8:20 - Class @ ${periodsList[0]}`,
    },
    trigger: {
      hour: 8,
      minute: 20,
      weekday: 6,
      repeats: true,
    },
  });
  // period 2
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[1] == "Free Period"
          ? periodsList[1]
          : `09:05 - Class @ ${periodsList[1]}`,
    },
    trigger: {
      hour: 9,
      minute: 5,
      weekday: 6,
      repeats: true,
    },
  });
  // Interval
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body: "09: 50 - Interval",
    },
    trigger: {
      hour: 9,
      minute: 50,
      weekday: 6,
      repeats: true,
    },
  });
  // period 3
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[3] == "Free Period"
          ? periodsList[3]
          : `10:10 - Class @ ${periodsList[3]}`,
    },
    trigger: {
      hour: 10,
      minute: 10,
      weekday: 6,
      repeats: true,
    },
  });
  // period 4
  await Notifications.scheduleNotificationAsync({
    content: {
      title: `Hello, ${displayName}!`,
      body:
        periodsList[4] == "Free Period"
          ? periodsList[4]
          : `10:55 - Class @ ${periodsList[4]}`,
    },
    trigger: {
      hour: 10,
      minute: 55,
      weekday: 6,
      repeats: true,
    },
  });
}

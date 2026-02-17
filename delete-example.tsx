// This is just an example snippet, not a full component

import { Alert } from "react-native";

// the function needs to know WHICH task to delete, so it takes an id parameter
function handleDelete(id: string) {
  // React Native uses Alert.alert() instead of browser alert()
  // It takes: title, message, and an array of buttons
  Alert.alert(
    "Delete Task",                    // title
    "Are you sure you want to delete this task?",  // message
    [
      { text: "Cancel", style: "cancel" },  // does nothing, just closes
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          // filter KEEPS tasks where the condition is true
          // so "task.id !== id" keeps every task that does NOT match
          const remainingTasks = tasks.filter((task: Task) => task.id !== id);
          setTasks(remainingTasks);  // update array with remaining tasks
        },
      },
    ]
  );
}

// Then in your FlatList, you'd call it like:
// <Pressable onPress={() => handleDelete(item.id)}>
//   <Text>Delete</Text>
// </Pressable>

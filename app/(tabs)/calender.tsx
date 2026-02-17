import { useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";

interface Task {
  id: string;
  taskName: string;
  description: string;
}

const mockData: Task[] = [
  { id: "1", taskName: "laundry", description: "done by today" },
  { id: "2", taskName: "car maintenance", description: "done by this month" },
  { id: "3", taskName: "grocery shopping", description: "done by this week" },
];

export default function AboutScreen() {
  // TypeScript: useState<Type>(initialValue) tells TS what type the state holds
  const [tasks, setTasks] = useState<Task[]>(mockData);
  const [taskName, setTaskName] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  function handleAdd() {
    //dont add empty tasks
    if (!taskName.trim()) return;

    const addNewTask: Task = {
      id: Date.now().toString(),
      taskName: taskName,
      description: description,
    };

    setTasks([addNewTask, ...tasks]);
    setTaskName("");
    setDescription("");
  }

  function handleDelete(id: string) {
    Alert.alert("Delete Task", "Are you sure you want to delete this task?", [
      { text: "Cancel", style: "Cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          const remainingTasks = tasks.filter((task: Task) => task.id !== id);
          setTasks(remainingTasks);
        },
      },
    ]);
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.text}>About Screen</Text>
      </View>

      <View>{/* (add new todo) a lable + input + button */}</View>

      <View>{/* a table to display all todo list */}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#25292e",
  },
  text: { color: "white" },
});

import { Link, Stack } from 'expo-router';
import { Text, View, StyleSheet} from 'react-native';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops! Page not found" }}/>
      <View style={styles.container}>
        <Text style={styles.text}>hello</Text>
        <Link href={"/(tabs)"} style={styles.button}>Go to Home screen</Link>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#25292e",
  },

  text:{color: "white"},

  button:{
    fontSize: 20,
    textDecorationLine:"underline",
    color: "white",
  },
});
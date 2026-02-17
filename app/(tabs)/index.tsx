import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { StyleSheet, Text, View } from "react-native";

const imageHolder = require("../../assets/images/cute-png-16630.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSrc={imageHolder} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.text}>Welcome to TODO app</Text>
      </View>

      <View style={styles.footerContainer}>
        <Button label="" theme="primary" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3e3f42",
  },

  text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },

  textContainer: {
    flex: 0.3,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer: {
    flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },

  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});

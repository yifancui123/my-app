import { Image } from "expo-image";
import { StyleSheet } from "react-native";

type Props = {
  imgSrc: string;
};

export default function ImageViewer({ imgSrc }: Props) {
  return <Image source={imgSrc} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 400,
    height: 300,
    borderRadius: 5,
  },
});

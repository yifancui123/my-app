import { Text, View, StyleSheet} from 'react-native';
import ImageViewer from '@/components/ImageViewer';
import Button from '@/components/Button';

const imageHolder = require("../../assets/images/cute-png-16630.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style = {styles.textContainer}>
        <Text style={styles.text}>Hello, welcome to my practice app.</Text>
      </View >

      <View style={styles.imageContainer}>
        <ImageViewer imgSrc = {imageHolder}/>
      </View>

      <View style={styles.footerContainer}>
        <Button label="Choose a photo" theme="primary"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"#25292e",
  },

  text:{
    color: "white",
    fontWeight:"bold",
    fontSize: 18,
  },

  textContainer:{
    flex:0.3,
    justifyContent: "center",
    alignItems: "center",
  },

  imageContainer:{
    flex:0.8,
    justifyContent: "center",
    alignItems: "center",
  },

  footerContainer:{
    flex: 1/3,
    alignItems:"center",
  }
});
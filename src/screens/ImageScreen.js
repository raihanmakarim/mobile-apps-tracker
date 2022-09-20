import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";
import ImageDetail from "./ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Image
        source={require("../../assets/beach.jpg")}
        style={styles.imageStyle}
      />
      <Image
        source={require("../../assets/forest.jpg")}
        style={styles.imageStyle}
      />
      <Image
        source={require("../../assets/mountain.jpg")}
        style={styles.imageStyle}
      />
      <ImageDetail
        title="beach"
        imageSource={require("../../assets/beach.jpg")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },
});

export default ImageScreen;

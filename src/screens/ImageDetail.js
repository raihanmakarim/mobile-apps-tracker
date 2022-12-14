import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({ title, imageSource }) => {
  return (
    <View>
      <Image source={imageSource} />
      <Text style={styles.TextStyle}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 200,
    height: 200,
    marginVertical: 10,
  },

  TextStyle: {
    fontSize: 30,
  },
});
export default ImageDetail;

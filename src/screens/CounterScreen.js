import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const CounterScreen = () => {
  return (
    <View>
      <Text>Current Count:</Text>
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

export default CounterScreen;

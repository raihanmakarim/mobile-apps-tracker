import React from "react";
import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  FlatList,
} from "react-native";

const ListScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}>List Screen</Text>
      <Button
        onPress={() => console.log("button pressed")}
        title="Go to Components Demo"
      />
      <TouchableOpacity onPress={() => console.log("list pressed")}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default ListScreen;

import React from "react";
import { View, StyleSheet } from "react-native";
import { Map } from "../../components";

const MapScreen = () => (
  <View style={styles.container}>
    <Map />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MapScreen;

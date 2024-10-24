import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text>Open up LoginScreen.tsx to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
});

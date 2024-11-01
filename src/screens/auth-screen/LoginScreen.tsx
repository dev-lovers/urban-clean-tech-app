import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const LoginScreen = () => {
  const message = "Open up LoginScreen.tsx to start working on your app!";

  return (
    <View style={styles.container}>
      <Text style={styles.text} accessibilityLabel={message}>
        {message}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    padding: 16,
  },
});

export default LoginScreen;

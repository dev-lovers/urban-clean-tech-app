import React from "react";
import { registerRootComponent } from "expo";
import { SafeAreaView } from "react-native-safe-area-context";
import App from "./App";

const containerStyle = { flex: 1, backgroundColor: "#4CAF50" };

function Root() {
  return (
    <SafeAreaView style={containerStyle}>
      <App />
    </SafeAreaView>
  );
}

registerRootComponent(Root);

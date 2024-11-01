import React from "react";
import { registerRootComponent } from "expo";
import { SafeAreaView } from "react-native-safe-area-context";
import App from "./App";

function Root() {
  return (
    <SafeAreaView style={containerStyle}>
      <App />
    </SafeAreaView>
  );
}

const containerStyle = { flex: 1 };

registerRootComponent(Root);

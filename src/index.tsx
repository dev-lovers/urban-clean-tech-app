import React from "react";
import { registerRootComponent } from "expo";
import { SafeAreaView } from "react-native-safe-area-context";
import App from "./App";

const containerStyle = { flex: 1 };

const Root = () => (
  <SafeAreaView style={containerStyle}>
    <App />
  </SafeAreaView>
);

registerRootComponent(Root);

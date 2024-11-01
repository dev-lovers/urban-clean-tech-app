import React, { useMemo } from "react";
import { StatusBar } from "expo-status-bar";
import { useColorScheme } from "react-native";
import "react-native-gesture-handler";
import {
  MD3LightTheme,
  MD3DarkTheme,
  PaperProvider,
  adaptNavigationTheme,
} from "react-native-paper";
import {
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import merge from "deepmerge";

import Colors from "./theme/theme";
import { AuthProvider } from "./contexts/AuthContext";
import { SettingsProvider } from "./contexts/SettingsContext";
import Navigation from "./navigation/Navigation";

const customLightTheme = { ...MD3LightTheme, colors: Colors.light };
const customDarkTheme = { ...MD3DarkTheme, colors: Colors.dark };

const {
  LightTheme: NavigationLightTheme,
  DarkTheme: NavigationDarkThemeAdapted,
} = adaptNavigationTheme({
  reactNavigationLight: NavigationDefaultTheme,
  reactNavigationDark: NavigationDarkTheme,
});

const CombinedLightTheme = merge(NavigationLightTheme, customLightTheme);
const CombinedDarkTheme = merge(NavigationDarkThemeAdapted, customDarkTheme);

const AppContent = () => {
  const colorScheme = useColorScheme();

  const paperTheme = useMemo(
    () => (colorScheme === "dark" ? CombinedDarkTheme : CombinedLightTheme),
    [colorScheme]
  );

  return (
    <PaperProvider theme={paperTheme}>
      <Navigation theme={paperTheme} />
      <StatusBar
        backgroundColor={paperTheme.colors.background}
        style={colorScheme === "light" ? "dark" : "light"}
      />
    </PaperProvider>
  );
};

const App = () => (
  <AuthProvider>
    <SettingsProvider>
      <AppContent />
    </SettingsProvider>
  </AuthProvider>
);

export default App;

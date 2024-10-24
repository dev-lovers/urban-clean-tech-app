import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from "@react-navigation/native";
import AuthStack from "./auth-stack/AuthStack";
import MenuStack from "./menu-stack/MenuStack";
import stackOptions from "./style";

const Stack = createStackNavigator();

export default function Navigation({
  theme,
}: {
  theme: typeof NavigationDefaultTheme | typeof NavigationDarkTheme;
}) {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRouteName="menuStack">
        <Stack.Screen
          name="authStack"
          component={AuthStack}
          options={stackOptions}
        />
        <Stack.Screen
          name="menuStack"
          component={MenuStack}
          options={stackOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

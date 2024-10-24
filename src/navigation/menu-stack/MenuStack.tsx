import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import menu from "../menu-screens/menuScreens";
import screenOptions from "./style";

const Tab = createBottomTabNavigator();

export default function MenuStack() {
  return (
    <Tab.Navigator
      initialRouteName="homeStack"
      screenOptions={({ route }) => screenOptions(route, menu)}
    >
      {menu.map((screen) => (
        <Tab.Screen
          key={screen.id}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Tab.Navigator>
  );
}

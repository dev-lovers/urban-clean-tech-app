import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import menu from "../menu-screens/menuScreens";
import { tabNavigationOptions, tabScreenOptions } from "./style";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

export default function MenuStack() {
  const initialRouteName = menu[0].routeName;

  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={tabNavigationOptions}
    >
      {menu.map((screen) => (
        <Tab.Screen
          key={screen.id}
          name={screen.routeName}
          component={screen.component}
          options={{
            ...tabScreenOptions,
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons
                name={screen.icon}
                size={size}
                color={color}
              />
            ),
            tabBarLabel: screen.title,
          }}
        />
      ))}
    </Tab.Navigator>
  );
}

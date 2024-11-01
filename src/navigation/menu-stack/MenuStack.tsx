import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import menu from "../menu-screens/menuScreens";
import { tabNavigationOptions, tabScreenOptions } from "./style";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator();

const MenuStack = () => {
  const initialRouteName = menu[0].routeName;

  return (
    <Tab.Navigator
      initialRouteName={initialRouteName}
      screenOptions={tabNavigationOptions}
    >
      {menu.map(({ id, icon, routeName, title, component }) => (
        <Tab.Screen
          key={id}
          name={routeName}
          component={component}
          options={{
            ...tabScreenOptions,
            tabBarIcon: ({ size, color }) => (
              <MaterialCommunityIcons name={icon} size={size} color={color} />
            ),
            tabBarLabel: title,
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default MenuStack;

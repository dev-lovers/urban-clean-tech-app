import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../../screens";
import stackOptions from "../style";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="homeScreen">
      <Stack.Group>
        <Stack.Screen
          name="homeScreen"
          component={HomeScreen}
          options={stackOptions}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}

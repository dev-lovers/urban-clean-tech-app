import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MapScreen } from "../../screens";
import stackOptions from "../style";

const Stack = createStackNavigator();

const MapStack = () => {
  return (
    <Stack.Navigator initialRouteName="mapScreen">
      <Stack.Group>
        <Stack.Screen
          name="mapScreen"
          component={MapScreen}
          options={stackOptions}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MapStack;

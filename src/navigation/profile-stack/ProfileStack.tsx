import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ProfileScreen } from "../../screens";
import stackOptions from "../style";

const Stack = createStackNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="profileScreen">
      <Stack.Group>
        <Stack.Screen
          name="profileScreen"
          component={ProfileScreen}
          options={stackOptions}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default ProfileStack;

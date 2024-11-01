import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { LoginScreen, SignupScreen } from "../../screens";
import stackOptions from "../style";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="loginScreen">
      <Stack.Group>
        <Stack.Screen
          name="loginScreen"
          component={LoginScreen}
          options={stackOptions}
        />
        <Stack.Screen
          name="signupScreen"
          component={SignupScreen}
          options={stackOptions}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default AuthStack;

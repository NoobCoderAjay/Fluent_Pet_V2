import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import { Navigator } from "../constants";
import OnboardingNavigator from "./OnboardingNavigator";
import HardWareNavigator from "./HardwareNavigator";
import { AuthenticationNavigator } from "./AuthenticationNavigator";

const Stack = createStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen
          name={Navigator.ONBOARDING_NAV}
          component={OnboardingNavigator}
        /> */}
        <Stack.Screen
          name={Navigator.AUTHENTICATION}
          component={AuthenticationNavigator}
        />
        <Stack.Screen name={Navigator.HARDWARE} component={HardWareNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

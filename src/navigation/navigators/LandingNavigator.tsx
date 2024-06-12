import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import React from "react";

import { Screen } from "../constants";

import HomeScreen from "../../HomeScreens/HomeScreen";
import ModuleScreen from "../../HomeScreens/ModuleScreens/ModuleScreen";

export type LandingStackParamList = {
  [Screen.LANDING]: undefined;
  [Screen.MODULE_SCREEN]: undefined;
};

const Stack = createStackNavigator<LandingStackParamList>();

export const LandingNavigator = () => (
  <Stack.Navigator screenOptions={{}}>
    <Stack.Screen
      name={Screen.LANDING}
      options={{ headerShown: false }}
      component={HomeScreen}
    />

    <Stack.Screen
      name={Screen.MODULE_SCREEN}
      component={ModuleScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

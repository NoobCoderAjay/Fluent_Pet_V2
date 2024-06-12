import {
  StackScreenProps,
  createStackNavigator,
} from "@react-navigation/stack";
import React from "react";
import { Screen } from "../constants";
import ModuleScreen from "../../HomeScreens/ModuleScreens/ModuleScreen";

export type ModuleStackParamList = {
  [Screen.MODULE_SCREEN]: undefined;
};

const Stack = createStackNavigator();
const ModuleNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={Screen.MODULE_SCREEN}
        component={ModuleScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default ModuleNavigator;

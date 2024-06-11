import {
  createStackNavigator,
  StackScreenProps,
} from "@react-navigation/stack";
import React from "react";
import { Screen } from "../constants";
import { Welcome } from "../../Authentication/Welcome";

export type AuthenticationStackParamList = {
  [Screen.WELCOME]: undefined;
};

const Stack = createStackNavigator<AuthenticationStackParamList>();

export const AuthenticationNavigator: React.FC = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={Screen.WELCOME} component={Welcome} />
    </Stack.Navigator>
  );
};

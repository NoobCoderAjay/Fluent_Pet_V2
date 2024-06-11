import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  NavigationContainer,
  NavigatorScreenParams,
} from "@react-navigation/native";

import { Navigator } from "../constants";
import OnboardingNavigator, { BetaStackParamList } from "./OnboardingNavigator";
import HardWareNavigator from "./HardwareNavigator";
import {
  AuthenticationNavigator,
  AuthenticationStackParamList,
} from "./AuthenticationNavigator";

export type RootStackParamList = {
  [Navigator.AUTHENTICATION]: NavigatorScreenParams<AuthenticationStackParamList>;
  [Navigator.ONBOARDING_NAV]: NavigatorScreenParams<BetaStackParamList>;
};

const Stack = createStackNavigator();
interface Props {
  authToken: string | null;
}

const RootNavigator: React.FC<Props> = ({ authToken }) => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* {authToken === null ? (
          <Stack.Screen
            name={Navigator.AUTHENTICATION}
            component={AuthenticationNavigator}
          />
        ) : (
          <Stack.Screen
            name={Navigator.ONBOARDING_NAV}
            component={OnboardingNavigator}
          />
        )} */}
        {/* <Stack.Screen
          name={Navigator.AUTHENTICATION}
          component={AuthenticationNavigator}
        /> */}
        <Stack.Screen
          name={Navigator.ONBOARDING_NAV}
          component={OnboardingNavigator}
        />
        {/* <Stack.Screen name={Navigator.HARDWARE} component={HardWareNavigator} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

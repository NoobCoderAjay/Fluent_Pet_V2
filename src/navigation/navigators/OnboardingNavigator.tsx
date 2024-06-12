import React from "react";
import { Navigator, Screen } from "../constants";
import ProfileScreen from "../../QuizScreens/ProfileScreen";
import InformationScreen from "../../QuizScreens/InformationScreen";
import GoalScreen from "../../QuizScreens/GoalScreen";
import SetupFinish from "../../QuizScreens/SetupFinish";
import {
  createStackNavigator,
  StackHeaderProps,
  StackNavigationOptions,
  TransitionPresets,
} from "@react-navigation/stack";
import TestScreen from "../../QuizScreens/TestScreen";
import { Dimensions } from "react-native";
import Header from "../../QuizScreens/Header/QuizeHeader";
import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./TabNavigator";

export type BetaStackParamList = {
  [Screen.PROFILE_SCREEN]: { id: number };
  [Screen.INFORMATION_SCREEN]: undefined;
  [Screen.GOAL_SCREEN]: undefined;
  [Screen.TEST_SCREEN]: undefined;
  [Screen.SETUP_SCREEN]: undefined;
  [Navigator.TAB_NAV]: undefined;
};

const Stack = createStackNavigator<BetaStackParamList>();

const OnboardingNavigator = () => {
  const renderHeader = (title: string, progress: number) => {
    return () => <Header title={title} progress={progress} />;
  };
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen
        name={Screen.PROFILE_SCREEN}
        component={ProfileScreen}
        options={{
          header: renderHeader("Profile", 0),
        }}
      />
      <Stack.Screen
        name={Screen.INFORMATION_SCREEN}
        component={InformationScreen}
        options={{
          header: renderHeader("InformationScreen", 40),
        }}
      />
      <Stack.Screen
        name={Screen.GOAL_SCREEN}
        component={GoalScreen}
        options={{
          header: renderHeader("GoalScreen", 60),
        }}
      />
      <Stack.Screen
        name={Screen.TEST_SCREEN}
        component={TestScreen}
        options={{
          header: renderHeader("TestScreen", 80),
        }}
      />

      <Stack.Screen
        name={Screen.SETUP_SCREEN}
        component={SetupFinish}
        options={{
          header: renderHeader("SetupFinish", 90),
        }}
      />
      <Stack.Screen
        name={Navigator.TAB_NAV}
        component={TabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default OnboardingNavigator;

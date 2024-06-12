import { DrawerNavigationOptions } from "@react-navigation/drawer";
import { StackNavigationOptions } from "@react-navigation/stack";
import React from "react";
import { Colors } from "../theme/Colors";
import { Font, TextSize } from "../theme/Text";
import { BackButton } from "./components";
export const screenOptions: StackNavigationOptions = {
  headerMode: "screen",
  headerStyle: {
    backgroundColor: Colors.SECONDARY_LIGHT,
  },
  cardStyle: { backgroundColor: Colors.WHITE },
  headerTintColor: Colors.PRIMARY_DARK,
  headerTitleStyle: {
    fontSize: TextSize.body.fontSize,
    fontFamily: Font.BLACK,
    letterSpacing: 3,
  },
  headerBackTitleVisible: false,
  headerBackImage: () => <BackButton androidMarginFix />,

  // Android
  headerTitleAlign: "center",
};

export const screenOptionsDrawerNavigation: DrawerNavigationOptions = {
  headerStyle: {
    backgroundColor: Colors.SECONDARY_LIGHT,
  },
  headerTintColor: Colors.PRIMARY_DARK,
  headerTitleStyle: {
    fontSize: TextSize.body.fontSize,
    fontFamily: Font.BLACK,
    letterSpacing: 3,
  },
  headerShown: false,
  // Android
  headerTitleAlign: "center",
  drawerType: "front",
};

import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HardwareScreen from "../../Hardware/HardwareScreen";
import Household from "../../Home/HouseHold/Household";
import HomeScreen from "../../HomeScreens/HomeScreen";
import ModuleScreen from "../../HomeScreens/ModuleScreens/ModuleScreen";
import {
  Activity,
  Bases,
  HomeImage,
  HouseHold,
  Module,
} from "../../assets/icons";
import { Colors } from "../../theme/Colors";
import ModuleNavigator from "./ModuleNavigator";
import HardWareNavigator from "./HardwareNavigator";
import HouseholdNavigator from "./HouseholdNavigator";
import { LandingNavigator } from "./LandingNavigator";
import { Navigator } from "../constants";
import ActivityScreen from "../../Home/Dashboard/ActivityScreen";

const Tab = createBottomTabNavigator();
type Props = {};

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#FFFFFF",
        tabBarInactiveTintColor: "#006271",
        tabBarStyle: {
          backgroundColor: "#006271",
          height: 70,
          padding: 10,
          position: "absolute",
          borderTopRightRadius: 15,
          borderTopLeftRadius: 15,
        },
      }}
      initialRouteName={Navigator.ACTIVITY}
    >
      <Tab.Screen
        name={Navigator.ACTIVITY.replace("Nav", "")}
        //@ts-ignore
        component={ActivityScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <Activity color={Colors.WHITE} />,
        }}
      />
      <Tab.Screen
        name={Navigator.LANDING_NAV.replace("Nav", "")}
        component={LandingNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <HomeImage color={Colors.WHITE} />,
        }}
      />

      <Tab.Screen
        name={Navigator.MODULE_NAV.replace("Nav", "")}
        component={ModuleNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <Module color={Colors.WHITE} />,
        }}
      />
      <Tab.Screen
        name={Navigator.HARDWARE.replace("Nav", "")}
        component={HardWareNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <Bases color={Colors.WHITE} />,
        }}
      />
      <Tab.Screen
        name={Navigator.HOUSEHOLD.replace("Nav", "")}
        component={HouseholdNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <HouseHold color={Colors.WHITE} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

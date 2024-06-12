import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ActivityScreen from "../../BottomScreens/ActivityScreen";
import HardwareScreen from "../../Hardware/HardwareScreen";
import Household from "../../Home/HouseHold/Household";
import HomeScreen from "../../HomeScreens/HomeScreen";
import ModuleScreen from "../../HomeScreens/ModuleScreens/ModuleScreen";
import { Module } from "../../assets/icons";
import { Colors } from "../../theme/Colors";
import HomeImage from "../../assets/icons/HomeImage";
import Activity from "../../assets/icons/Activity";
import Bases from "../../assets/icons/Bases";
import HouseHold from "../../assets/icons/HouseHold";

const Tab = createBottomTabNavigator();
type Props = {};

const TabNavigator = (props: Props) => {
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
    >
      <Tab.Screen
        name="Activity"
        //@ts-ignore
        component={ActivityScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <Activity color={Colors.WHITE} />,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <HomeImage color={Colors.WHITE} />,
        }}
      />

      <Tab.Screen
        name="Modules"
        component={ModuleScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <Module color={Colors.WHITE} />,
        }}
      />
      <Tab.Screen
        name="Bases"
        component={HardwareScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <Bases color={Colors.WHITE} />,
        }}
      />
      <Tab.Screen
        name="HouseHold"
        component={Household}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => <HouseHold color={Colors.WHITE} />,
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

import {
  createStackNavigator,
  StackHeaderProps,
  StackNavigationOptions,
  TransitionPresets,
} from "@react-navigation/stack";

import ConnectStepTwo from "../../Hardware/ConnectStepTwo";
import { Screen } from "../constants";
import SetupConnection from "../../Hardware/SetupConnection";
import { ConnectToBase } from "../../Hardware/ConnectToBase";
import ConnectStepOne from "../../Hardware/ConnectStepOne";
import ConnectStepThree from "../../Hardware/ConnectStepThree";
import HardwareScreen from "../../Hardware/HardwareScreen";

const Stack = createStackNavigator();

const HardWareNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen
        name={Screen.HARDWARE}
        component={HardwareScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HardWareNavigator;

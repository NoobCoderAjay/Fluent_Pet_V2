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

const Stack = createStackNavigator();

const HardWareNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen
        name={Screen.CONNECTION_SETUP}
        component={SetupConnection}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Screen.CONNECTION_SETUP_STEP_ONE}
        component={ConnectStepOne}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Screen.CONNECTION_SETUP_STEP_TWO}
        component={ConnectStepTwo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Screen.CONNECTION_TO_BASE}
        //@ts-ignore
        component={ConnectToBase}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={Screen.CONNECTION_SETUP_STEP_THREE}
        //@ts-ignore
        component={ConnectStepThree}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HardWareNavigator;

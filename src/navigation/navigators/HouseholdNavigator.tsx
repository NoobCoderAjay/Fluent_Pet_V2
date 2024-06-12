import {
  createStackNavigator,
  StackHeaderProps,
  StackNavigationOptions,
  TransitionPresets,
} from "@react-navigation/stack";
import Household from "../../Home/HouseHold/Household";
import HouseholdAdd from "../../Home/HouseholdAdd";
import { Screen } from "../constants";

const Stack = createStackNavigator();

const HouseholdNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen
        name={Screen.HOUSEHOLD}
        component={Household}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default HouseholdNavigator;

import {
  createStackNavigator,
  StackHeaderProps,
  StackNavigationOptions,
  TransitionPresets,
} from "@react-navigation/stack";

const Stack = createStackNavigator();

const HouseholdNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...TransitionPresets.SlideFromRightIOS,
      }}
    >
      <Stack.Screen name={} component={} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default HouseholdNavigator;

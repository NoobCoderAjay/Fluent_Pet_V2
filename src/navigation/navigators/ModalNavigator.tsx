import {
  StackScreenProps,
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { CompositeScreenProps } from "../helpers";
import { CloseButton } from "../components";
import OnboardingNavigator from "./OnboardingNavigator";
import TabNavigator from "./TabNavigator";
import { Navigator, Screen } from "../constants";
import CourseScreen from "../../HomeScreens/ModuleScreens/CourseScreen";
// import LessonScreen from "../../HomeScreens/LessonScreens/LessonScreen";
import ModuleNavigator from "./ModuleNavigator";
import HouseholdAdd from "../../Home/HouseholdAdd";
import ConnectStepOne from "../../Hardware/ConnectStepOne";
import ConnectStepTwo from "../../Hardware/ConnectStepTwo";
import { ConnectToBase } from "../../Hardware/ConnectToBase";
import ConnectStepThree from "../../Hardware/ConnectStepThree";
import SetupConnection from "../../Hardware/SetupConnection";
export type ModalStackParamList = {
  [Screen.CONNECTION_TO_BASE]: undefined;
};

const Stack = createStackNavigator();

// export type ModalStackScreenProps<RouteName extends keyof ModalStackParamList> =
//   CompositeScreenProps<
//     StackScreenProps<ModalStackParamList, RouteName>,
//     HomeDrawerScreenProps<keyof HomeDrawerParamList>
//   >;

export const ModalNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      // ...screenOptions,
      headerBackImage: () => <CloseButton androidMarginFix />,
      ...TransitionPresets.SlideFromRightIOS,
    }}
  >
    <Stack.Screen
      name={Navigator.TAB_NAV}
      component={TabNavigator}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name={Navigator.ONBOARDING_NAV}
      component={OnboardingNavigator}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name={Screen.COURSE_SCREEN}
      component={CourseScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={Screen.HOUSEHOLD_ADD}
      component={HouseholdAdd}
      options={{ headerShown: false }}
    />
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
      options={{ headerShown: false }}
    >
      {(props) => (
        <ConnectToBase
          {...props}
          baseSerialNumber=""
          onChangeBaseSerialNumber={(ssid) => {}}
          onOpenQRScanner={() => {}}
        />
      )}
    </Stack.Screen>
    <Stack.Screen
      name={Screen.CONNECTION_SETUP_STEP_THREE}
      component={ConnectStepThree}
      options={{ headerShown: false }}
    />
    {/* <Stack.Screen
      //@ts-ignore
      name={Screen.LESSON_SCREEN}
      component={LessonScreen}
      options={{ headerShown: false }}
    /> */}
  </Stack.Navigator>
);

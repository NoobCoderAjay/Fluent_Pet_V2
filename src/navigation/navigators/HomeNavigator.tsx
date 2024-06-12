import { DrawerContent, createDrawerNavigator } from "@react-navigation/drawer";
import { Navigator, Screen, ScreenTitle } from "../constants";
import { StyleSheet } from "react-native";
import { Colors } from "../../theme/Colors";
import { screenOptionsDrawerNavigation } from "../options";
import { BackButton } from "../components";
import { DRAWER_WIDTH } from "../components/Drawer";
import ModuleScreen from "../../HomeScreens/ModuleScreens/ModuleScreen";
import { ModalNavigator } from "./ModalNavigator";

// export type HomeDrawerScreenProps<RouteName extends keyof HomeDrawerParamList> =
//   CompositeScreenProps<
//     DrawerScreenProps<HomeDrawerParamList, RouteName>,
//     RootStackScreenProps<keyof RootStackParamList>
//   >;

// export type HomeDrawerParamList = {
//   [Navigator.MODAL]: NavigatorScreenParams<ModalStackParamList>;
//   [Screen.SETTINGS]: undefined;
// };

const Drawer = createDrawerNavigator();

export const HomeNavigator: React.FC = () => {
  // // Trigger the onboarding flow (opens system selection modal)
  // useOnboarding();

  // const updateUserMutation = useUpdateUser();

  // // Patch user details on app launch / log in
  // useEffect(() => {
  //   updateUserMutation.mutate();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <Drawer.Navigator
      screenOptions={screenOptionsDrawerNavigation}
      //@ts-ignore
      // drawerContent={() => <DrawerContent />}
    >
      <Drawer.Screen
        options={{
          headerShown: false,
          overlayColor: Colors.PRIMARY_TRANSPARENT,
          drawerStyle: styles.drawer,
        }}
        name={Navigator.MODAL}
        component={ModalNavigator}
      />
      <Drawer.Screen
        name={Screen.SETTINGS}
        component={ModuleScreen}
        options={{
          headerShown: true,
          title: ScreenTitle.SETTINGS,
          headerLeft: () => <BackButton />,
        }}
      />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawer: {
    width: DRAWER_WIDTH,
  },
});
